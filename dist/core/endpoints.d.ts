export type OvhEndpoint = 'ovh-eu' | 'ovh-ca' | 'ovh-us';
export interface EndpointConfig {
    baseUrl: string;
    legacyBaseUrl: string;
    tokenUrl: string;
    authTimeUrl: string;
    schemaIndexUrl: string;
}
export declare const endpoints: Record<OvhEndpoint, EndpointConfig>;
//# sourceMappingURL=endpoints.d.ts.map