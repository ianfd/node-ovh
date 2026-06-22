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
export declare class OAuth2ClientCredentialsAuth implements AuthProvider {
    private readonly clientId;
    private readonly clientSecret;
    private readonly scope;
    private readonly tokenUrl?;
    private readonly tokenFetch?;
    private token?;
    constructor(options: OAuth2ClientCredentialsOptions);
    apply(headers: Headers, context: AuthContext): Promise<void>;
    private getAccessToken;
}
export interface LegacyApplicationKeyAuthOptions {
    applicationKey: string;
    applicationSecret: string;
    consumerKey?: string;
    authTimeUrl?: string;
}
export declare class LegacyApplicationKeyAuth implements AuthProvider {
    private readonly applicationKey;
    private readonly applicationSecret;
    private readonly consumerKey?;
    private readonly authTimeUrl?;
    private apiTimeDiff?;
    constructor(options: LegacyApplicationKeyAuthOptions);
    apply(headers: Headers, context: AuthContext): Promise<void>;
    private fetchApiTimeDiff;
    private sign;
}
export declare function oauth2(options: OAuth2ClientCredentialsOptions): OAuth2ClientCredentialsAuth;
export declare function legacyApplicationKey(options: LegacyApplicationKeyAuthOptions): LegacyApplicationKeyAuth;
//# sourceMappingURL=auth.d.ts.map