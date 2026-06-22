import type { OvhClient } from '../../../core/client';
import type { PaginatedListOptions, RequestOptions } from '../../../core/types';
import type { IamResourceTagFilter, VideocenterAuthTokenRequest, VideocenterAuthTokenResponse, VideocenterServiceWithIAM } from './types';
export interface ResourceListParams extends PaginatedListOptions {
    iamTags?: Record<string, IamResourceTagFilter[]>;
}
export interface ResourceGetParams extends RequestOptions {
    serviceId: string;
}
export interface ResourceAuthTokenCreateParams extends RequestOptions {
    serviceId: string;
    body: VideocenterAuthTokenRequest;
}
export declare class VideocenterClient {
    private readonly client;
    readonly resource: VideocenterClientResource;
    constructor(client: OvhClient);
}
export declare class VideocenterClientResource {
    private readonly client;
    readonly auth: VideocenterClientResourceAuth;
    constructor(client: OvhClient);
    /** Get all services */
    list(params?: ResourceListParams): Promise<VideocenterServiceWithIAM[]>;
    /** Iterate over Get all services. */
    iterate(params?: ResourceListParams): AsyncGenerator<VideocenterServiceWithIAM, void, void>;
    /** Load all pages for Get all services. */
    listAll(params?: ResourceListParams): Promise<VideocenterServiceWithIAM[]>;
    /** Get a service */
    get(params: ResourceGetParams): Promise<VideocenterServiceWithIAM>;
}
export declare class VideocenterClientResourceAuth {
    private readonly client;
    readonly token: VideocenterClientResourceAuthToken;
    constructor(client: OvhClient);
}
export declare class VideocenterClientResourceAuthToken {
    private readonly client;
    constructor(client: OvhClient);
    /** Generate an Auth Token */
    create(params: ResourceAuthTokenCreateParams): Promise<VideocenterAuthTokenResponse>;
}
//# sourceMappingURL=client.d.ts.map