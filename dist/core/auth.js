"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegacyApplicationKeyAuth = exports.OAuth2ClientCredentialsAuth = void 0;
exports.oauth2 = oauth2;
exports.legacyApplicationKey = legacyApplicationKey;
const node_crypto_1 = require("node:crypto");
class OAuth2ClientCredentialsAuth {
    clientId;
    clientSecret;
    scope;
    tokenUrl;
    tokenFetch;
    token;
    constructor(options) {
        this.clientId = options.clientId;
        this.clientSecret = options.clientSecret;
        this.scope = options.scope ?? 'all';
        this.tokenUrl = options.tokenUrl;
        this.tokenFetch = options.fetch;
    }
    async apply(headers, context) {
        const accessToken = await this.getAccessToken(context);
        headers.set('Authorization', `Bearer ${accessToken}`);
    }
    async getAccessToken(context) {
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
        const payload = (await response.json());
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
exports.OAuth2ClientCredentialsAuth = OAuth2ClientCredentialsAuth;
class LegacyApplicationKeyAuth {
    applicationKey;
    applicationSecret;
    consumerKey;
    authTimeUrl;
    apiTimeDiff;
    constructor(options) {
        this.applicationKey = options.applicationKey;
        this.applicationSecret = options.applicationSecret;
        this.consumerKey = options.consumerKey;
        this.authTimeUrl = options.authTimeUrl;
    }
    async apply(headers, context) {
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
        headers.set('X-Ovh-Signature', this.sign(context.method, context.url.toString(), context.bodyText ?? '', timestamp));
    }
    async fetchApiTimeDiff(context) {
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
    sign(method, url, bodyText, timestamp) {
        const payload = [
            this.applicationSecret,
            this.consumerKey,
            method,
            url,
            bodyText,
            timestamp,
        ].join('+');
        return `$1$${(0, node_crypto_1.createHash)('sha1').update(payload).digest('hex')}`;
    }
}
exports.LegacyApplicationKeyAuth = LegacyApplicationKeyAuth;
function oauth2(options) {
    return new OAuth2ClientCredentialsAuth(options);
}
function legacyApplicationKey(options) {
    return new LegacyApplicationKeyAuth(options);
}
