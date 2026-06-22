import { createHash } from 'node:crypto';
import type { EndpointConfig } from './endpoints';

export interface AuthContext {
  endpoint: EndpointConfig;
  fetch: typeof fetch;
  method: string;
  url: URL;
  bodyText?: string;
}

export interface AuthProvider {
  apply(headers: Headers, context: AuthContext): Promise<void>;
}

export interface OAuth2ClientCredentialsOptions {
  clientId: string;
  clientSecret: string;
  scope?: string;
  tokenUrl?: string;
  fetch?: typeof fetch;
}

interface OAuthToken {
  access_token: string;
  expires_in?: number;
  token_type?: string;
}

export class OAuth2ClientCredentialsAuth implements AuthProvider {
  private readonly clientId: string;
  private readonly clientSecret: string;
  private readonly scope: string;
  private readonly tokenUrl?: string;
  private readonly tokenFetch?: typeof fetch;
  private token?: { accessToken: string; expiresAt: number };

  constructor(options: OAuth2ClientCredentialsOptions) {
    this.clientId = options.clientId;
    this.clientSecret = options.clientSecret;
    this.scope = options.scope ?? 'all';
    this.tokenUrl = options.tokenUrl;
    this.tokenFetch = options.fetch;
  }

  async apply(headers: Headers, context: AuthContext): Promise<void> {
    const accessToken = await this.getAccessToken(context);
    headers.set('Authorization', `Bearer ${accessToken}`);
  }

  private async getAccessToken(context: AuthContext): Promise<string> {
    const now = Date.now();
    if (this.token && this.token.expiresAt - now > 10_000) {
      return this.token.accessToken;
    }

    const tokenUrl = this.tokenUrl ?? context.endpoint.tokenUrl;
    const tokenFetch = this.tokenFetch ?? context.fetch;
    const body = new URLSearchParams({
      grant_type: 'client_credentials',
      scope: this.scope,
    });

    const authorization = Buffer.from(`${this.clientId}:${this.clientSecret}`).toString('base64');
    const response = await tokenFetch(tokenUrl, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${authorization}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    });

    const payload = (await response.json()) as Partial<OAuthToken> & { error?: string; error_description?: string };
    if (!response.ok || !payload.access_token) {
      throw new Error(payload.error_description ?? payload.error ?? `Unable to fetch OAuth2 token (${response.status})`);
    }

    const expiresIn = typeof payload.expires_in === 'number' ? payload.expires_in : 3600;
    this.token = {
      accessToken: payload.access_token,
      expiresAt: now + expiresIn * 1000,
    };
    return this.token.accessToken;
  }
}

export interface LegacyApplicationKeyAuthOptions {
  applicationKey: string;
  applicationSecret: string;
  consumerKey?: string;
  authTimeUrl?: string;
}

export class LegacyApplicationKeyAuth implements AuthProvider {
  private readonly applicationKey: string;
  private readonly applicationSecret: string;
  private readonly consumerKey?: string;
  private readonly authTimeUrl?: string;
  private apiTimeDiff?: number;

  constructor(options: LegacyApplicationKeyAuthOptions) {
    this.applicationKey = options.applicationKey;
    this.applicationSecret = options.applicationSecret;
    this.consumerKey = options.consumerKey;
    this.authTimeUrl = options.authTimeUrl;
  }

  async apply(headers: Headers, context: AuthContext): Promise<void> {
    headers.set('X-Ovh-Application', this.applicationKey);
    headers.set('Content-Type', 'application/json');

    if (!this.consumerKey) {
      return;
    }

    if (this.apiTimeDiff === undefined) {
      this.apiTimeDiff = await this.fetchApiTimeDiff(context);
    }

    const timestamp = Math.round(Date.now() / 1000) + this.apiTimeDiff;
    headers.set('X-Ovh-Timestamp', String(timestamp));
    headers.set('X-Ovh-Consumer', this.consumerKey);
    headers.set(
      'X-Ovh-Signature',
      this.sign(context.method, context.url.toString(), context.bodyText ?? '', timestamp),
    );
  }

  private async fetchApiTimeDiff(context: AuthContext): Promise<number> {
    const response = await context.fetch(this.authTimeUrl ?? context.endpoint.authTimeUrl);
    if (!response.ok) {
      throw new Error(`Unable to fetch OVH API time (${response.status})`);
    }
    const apiTime = Number(await response.text());
    if (!Number.isFinite(apiTime)) {
      throw new Error('Unable to parse OVH API time');
    }
    return apiTime - Math.round(Date.now() / 1000);
  }

  private sign(method: string, url: string, bodyText: string, timestamp: number): string {
    const payload = [
      this.applicationSecret,
      this.consumerKey,
      method,
      url,
      bodyText,
      timestamp,
    ].join('+');
    return `$1$${createHash('sha1').update(payload).digest('hex')}`;
  }
}

export function oauth2(options: OAuth2ClientCredentialsOptions): OAuth2ClientCredentialsAuth {
  return new OAuth2ClientCredentialsAuth(options);
}

export function legacyApplicationKey(options: LegacyApplicationKeyAuthOptions): LegacyApplicationKeyAuth {
  return new LegacyApplicationKeyAuth(options);
}

