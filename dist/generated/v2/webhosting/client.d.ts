import type { OvhClient } from '../../../core/client';
import type { PaginatedListOptions, RequestOptions } from '../../../core/types';
import type { IamResourceTagFilter, WebhostingAttachedDomain, WebhostingDomain, WebhostingSSL, WebhostingWebWithIAM, WebhostingWebsite, WebhostingWebsitePostPayload, WebhostingWebsitePutPayload } from './types';
export interface AttachedDomainListParams extends PaginatedListOptions {
    domain?: string;
}
export interface ResourceListParams extends PaginatedListOptions {
    iamTags?: Record<string, IamResourceTagFilter[]>;
}
export interface ResourceGetParams extends RequestOptions {
    name: string;
}
export interface ResourceAttachedDomainListParams extends PaginatedListOptions {
    name: string;
}
export interface ResourceCertificateListParams extends PaginatedListOptions {
    name: string;
}
export interface ResourceWebsiteListParams extends PaginatedListOptions {
    name: string;
}
export interface ResourceWebsiteCreateParams extends RequestOptions {
    name: string;
    body: WebhostingWebsitePostPayload;
}
export interface ResourceWebsiteGetParams extends RequestOptions {
    name: string;
    websiteId: string;
}
export interface ResourceWebsiteUpdateParams extends RequestOptions {
    name: string;
    websiteId: string;
    body: WebhostingWebsitePutPayload;
}
export interface ResourceWebsiteDomainListParams extends PaginatedListOptions {
    name: string;
    websiteId: string;
}
export declare class WebhostingClient {
    private readonly client;
    readonly attachedDomain: WebhostingClientAttachedDomain;
    readonly resource: WebhostingClientResource;
    constructor(client: OvhClient);
}
export declare class WebhostingClientAttachedDomain {
    private readonly client;
    constructor(client: OvhClient);
    /** /webhosting/attachedDomain */
    list(params?: AttachedDomainListParams): Promise<WebhostingAttachedDomain[]>;
    /** Iterate over /webhosting/attachedDomain. */
    iterate(params?: AttachedDomainListParams): AsyncGenerator<WebhostingAttachedDomain, void, void>;
    /** Load all pages for /webhosting/attachedDomain. */
    listAll(params?: AttachedDomainListParams): Promise<WebhostingAttachedDomain[]>;
}
export declare class WebhostingClientResource {
    private readonly client;
    readonly attachedDomain: WebhostingClientResourceAttachedDomain;
    readonly certificate: WebhostingClientResourceCertificate;
    readonly website: WebhostingClientResourceWebsite;
    constructor(client: OvhClient);
    /** /webhosting/resource */
    list(params?: ResourceListParams): Promise<WebhostingWebWithIAM[]>;
    /** Iterate over /webhosting/resource. */
    iterate(params?: ResourceListParams): AsyncGenerator<WebhostingWebWithIAM, void, void>;
    /** Load all pages for /webhosting/resource. */
    listAll(params?: ResourceListParams): Promise<WebhostingWebWithIAM[]>;
    /** /webhosting/resource/{name} */
    get(params: ResourceGetParams): Promise<WebhostingWebWithIAM>;
}
export declare class WebhostingClientResourceAttachedDomain {
    private readonly client;
    constructor(client: OvhClient);
    /** /webhosting/resource/{name}/attachedDomain */
    list(params: ResourceAttachedDomainListParams): Promise<WebhostingAttachedDomain[]>;
    /** Iterate over /webhosting/resource/{name}/attachedDomain. */
    iterate(params: ResourceAttachedDomainListParams): AsyncGenerator<WebhostingAttachedDomain, void, void>;
    /** Load all pages for /webhosting/resource/{name}/attachedDomain. */
    listAll(params: ResourceAttachedDomainListParams): Promise<WebhostingAttachedDomain[]>;
}
export declare class WebhostingClientResourceCertificate {
    private readonly client;
    constructor(client: OvhClient);
    /** /webhosting/resource/{name}/certificate */
    list(params: ResourceCertificateListParams): Promise<WebhostingSSL[]>;
    /** Iterate over /webhosting/resource/{name}/certificate. */
    iterate(params: ResourceCertificateListParams): AsyncGenerator<WebhostingSSL, void, void>;
    /** Load all pages for /webhosting/resource/{name}/certificate. */
    listAll(params: ResourceCertificateListParams): Promise<WebhostingSSL[]>;
}
export declare class WebhostingClientResourceWebsite {
    private readonly client;
    readonly domain: WebhostingClientResourceWebsiteDomain;
    constructor(client: OvhClient);
    /** /webhosting/resource/{name}/website */
    list(params: ResourceWebsiteListParams): Promise<WebhostingWebsite[]>;
    /** Iterate over /webhosting/resource/{name}/website. */
    iterate(params: ResourceWebsiteListParams): AsyncGenerator<WebhostingWebsite, void, void>;
    /** Load all pages for /webhosting/resource/{name}/website. */
    listAll(params: ResourceWebsiteListParams): Promise<WebhostingWebsite[]>;
    /** Create a website */
    create(params: ResourceWebsiteCreateParams): Promise<WebhostingWebsite>;
    /** /webhosting/resource/{name}/website/{websiteId} */
    get(params: ResourceWebsiteGetParams): Promise<WebhostingWebsite>;
    /** Update an existing website */
    update(params: ResourceWebsiteUpdateParams): Promise<WebhostingWebsite>;
}
export declare class WebhostingClientResourceWebsiteDomain {
    private readonly client;
    constructor(client: OvhClient);
    /** /webhosting/resource/{name}/website/{websiteId}/domain */
    list(params: ResourceWebsiteDomainListParams): Promise<WebhostingDomain[]>;
    /** Iterate over /webhosting/resource/{name}/website/{websiteId}/domain. */
    iterate(params: ResourceWebsiteDomainListParams): AsyncGenerator<WebhostingDomain, void, void>;
    /** Load all pages for /webhosting/resource/{name}/website/{websiteId}/domain. */
    listAll(params: ResourceWebsiteDomainListParams): Promise<WebhostingDomain[]>;
}
//# sourceMappingURL=client.d.ts.map