import type { OvhClient } from '../../../core/client';
import type { PaginatedListOptions, RequestOptions } from '../../../core/types';
import type { CommonCurrentTask, CommonTask, DbaasLogsLogKind, DbaasLogsLogSubscription, DbaasLogsLogSubscriptionCreation, DbaasLogsLogSubscriptionResponse, DbaasLogsLogUrlCreation, DbaasLogsTemporaryLogsLink, IamResourceTagFilter, ManagedCMSCMSEnum, ManagedCMSLanguage, ManagedCMSPHPVersionEnum, ManagedCMSService, ManagedCMSServiceEditionBody, ManagedCMSServiceWithIAM, ManagedCMSWebsite, ManagedCMSWebsiteCreationBody, ManagedCMSWebsiteEditionBody } from './types';
export interface ReferenceAvailableCMSListParams extends PaginatedListOptions {
}
export interface ReferenceAvailableLanguagesListParams extends PaginatedListOptions {
    cms: ManagedCMSCMSEnum;
}
export interface ReferenceSupportedPHPVersionsListParams extends PaginatedListOptions {
    cms: ManagedCMSCMSEnum;
}
export interface ResourceListParams extends PaginatedListOptions {
    iamTags?: Record<string, IamResourceTagFilter[]>;
}
export interface ResourceGetParams extends RequestOptions {
    serviceId: string;
}
export interface ResourceUpdateParams extends RequestOptions {
    serviceId: string;
    body: ManagedCMSServiceEditionBody;
}
export interface ResourceFlushCDNCreateParams extends RequestOptions {
    serviceId: string;
}
export interface ResourceLogKindListParams extends PaginatedListOptions {
    serviceId: string;
}
export interface ResourceLogKindGetParams extends RequestOptions {
    name: string;
    serviceId: string;
}
export interface ResourceLogSubscriptionListParams extends PaginatedListOptions {
    serviceId: string;
    kind?: string;
}
export interface ResourceLogSubscriptionCreateParams extends RequestOptions {
    serviceId: string;
    body: DbaasLogsLogSubscriptionCreation;
}
export interface ResourceLogSubscriptionDeleteParams extends RequestOptions {
    serviceId: string;
    subscriptionId: string;
}
export interface ResourceLogSubscriptionGetParams extends RequestOptions {
    serviceId: string;
    subscriptionId: string;
}
export interface ResourceLogUrlCreateParams extends RequestOptions {
    serviceId: string;
    body: DbaasLogsLogUrlCreation;
}
export interface ResourceTaskListParams extends PaginatedListOptions {
    serviceId: string;
}
export interface ResourceTaskGetParams extends RequestOptions {
    serviceId: string;
    taskId: string;
}
export interface ResourceTaskUpdateParams extends RequestOptions {
    serviceId: string;
    taskId: string;
    body: unknown;
}
export interface ResourceWebsiteListParams extends PaginatedListOptions {
    serviceId: string;
}
export interface ResourceWebsiteCreateParams extends RequestOptions {
    serviceId: string;
    body: ManagedCMSWebsiteCreationBody;
}
export interface ResourceWebsiteDeleteParams extends RequestOptions {
    serviceId: string;
    websiteId: string;
}
export interface ResourceWebsiteGetParams extends RequestOptions {
    serviceId: string;
    websiteId: string;
}
export interface ResourceWebsiteUpdateParams extends RequestOptions {
    serviceId: string;
    websiteId: string;
    body: ManagedCMSWebsiteEditionBody;
}
export interface ResourceWebsiteFlushCDNCreateParams extends RequestOptions {
    serviceId: string;
    websiteId: string;
}
export interface ResourceWebsiteResetDatabasePasswordCreateParams extends RequestOptions {
    serviceId: string;
    websiteId: string;
}
export declare class ManagedCMSClient {
    private readonly client;
    readonly reference: ManagedCMSClientReference;
    readonly resource: ManagedCMSClientResource;
    constructor(client: OvhClient);
}
export declare class ManagedCMSClientReference {
    private readonly client;
    readonly availableCMS: ManagedCMSClientReferenceAvailableCMS;
    readonly availableLanguages: ManagedCMSClientReferenceAvailableLanguages;
    readonly supportedPHPVersions: ManagedCMSClientReferenceSupportedPHPVersions;
    constructor(client: OvhClient);
}
export declare class ManagedCMSClientReferenceAvailableCMS {
    private readonly client;
    constructor(client: OvhClient);
    /** List the available content management systems */
    list(params?: ReferenceAvailableCMSListParams): Promise<ManagedCMSCMSEnum[]>;
    /** Iterate over List the available content management systems. */
    iterate(params?: ReferenceAvailableCMSListParams): AsyncGenerator<ManagedCMSCMSEnum, void, void>;
    /** Load all pages for List the available content management systems. */
    listAll(params?: ReferenceAvailableCMSListParams): Promise<ManagedCMSCMSEnum[]>;
}
export declare class ManagedCMSClientReferenceAvailableLanguages {
    private readonly client;
    constructor(client: OvhClient);
    /** List the available languages when creating a new website */
    list(params: ReferenceAvailableLanguagesListParams): Promise<ManagedCMSLanguage[]>;
    /** Iterate over List the available languages when creating a new website. */
    iterate(params: ReferenceAvailableLanguagesListParams): AsyncGenerator<ManagedCMSLanguage, void, void>;
    /** Load all pages for List the available languages when creating a new website. */
    listAll(params: ReferenceAvailableLanguagesListParams): Promise<ManagedCMSLanguage[]>;
}
export declare class ManagedCMSClientReferenceSupportedPHPVersions {
    private readonly client;
    constructor(client: OvhClient);
    /** List supported PHP versions */
    list(params: ReferenceSupportedPHPVersionsListParams): Promise<ManagedCMSPHPVersionEnum[]>;
    /** Iterate over List supported PHP versions. */
    iterate(params: ReferenceSupportedPHPVersionsListParams): AsyncGenerator<ManagedCMSPHPVersionEnum, void, void>;
    /** Load all pages for List supported PHP versions. */
    listAll(params: ReferenceSupportedPHPVersionsListParams): Promise<ManagedCMSPHPVersionEnum[]>;
}
export declare class ManagedCMSClientResource {
    private readonly client;
    readonly flushCDN: ManagedCMSClientResourceFlushCDN;
    readonly log: ManagedCMSClientResourceLog;
    readonly task: ManagedCMSClientResourceTask;
    readonly website: ManagedCMSClientResourceWebsite;
    constructor(client: OvhClient);
    /** Get all services of your account */
    list(params?: ResourceListParams): Promise<ManagedCMSServiceWithIAM[]>;
    /** Iterate over Get all services of your account. */
    iterate(params?: ResourceListParams): AsyncGenerator<ManagedCMSServiceWithIAM, void, void>;
    /** Load all pages for Get all services of your account. */
    listAll(params?: ResourceListParams): Promise<ManagedCMSServiceWithIAM[]>;
    /** Get a service */
    get(params: ResourceGetParams): Promise<ManagedCMSServiceWithIAM>;
    /** Edit a service */
    update(params: ResourceUpdateParams): Promise<ManagedCMSService>;
}
export declare class ManagedCMSClientResourceFlushCDN {
    private readonly client;
    constructor(client: OvhClient);
    /** Flush CDN for all websites of the service */
    create(params: ResourceFlushCDNCreateParams): Promise<CommonCurrentTask>;
}
export declare class ManagedCMSClientResourceLog {
    private readonly client;
    readonly kind: ManagedCMSClientResourceLogKind;
    readonly subscription: ManagedCMSClientResourceLogSubscription;
    readonly url: ManagedCMSClientResourceLogUrl;
    constructor(client: OvhClient);
}
export declare class ManagedCMSClientResourceLogKind {
    private readonly client;
    constructor(client: OvhClient);
    /** List available log kinds */
    list(params: ResourceLogKindListParams): Promise<DbaasLogsLogKind[]>;
    /** Iterate over List available log kinds. */
    iterate(params: ResourceLogKindListParams): AsyncGenerator<DbaasLogsLogKind, void, void>;
    /** Load all pages for List available log kinds. */
    listAll(params: ResourceLogKindListParams): Promise<DbaasLogsLogKind[]>;
    /** Get a log kind */
    get(params: ResourceLogKindGetParams): Promise<DbaasLogsLogKind>;
}
export declare class ManagedCMSClientResourceLogSubscription {
    private readonly client;
    constructor(client: OvhClient);
    /** List subscription IDs for a cluster */
    list(params: ResourceLogSubscriptionListParams): Promise<DbaasLogsLogSubscription[]>;
    /** Iterate over List subscription IDs for a cluster. */
    iterate(params: ResourceLogSubscriptionListParams): AsyncGenerator<DbaasLogsLogSubscription, void, void>;
    /** Load all pages for List subscription IDs for a cluster. */
    listAll(params: ResourceLogSubscriptionListParams): Promise<DbaasLogsLogSubscription[]>;
    /** Create a subscription from logs to a pre-existing LDP stream */
    create(params: ResourceLogSubscriptionCreateParams): Promise<DbaasLogsLogSubscriptionResponse>;
    /** Delete a subscription */
    delete(params: ResourceLogSubscriptionDeleteParams): Promise<DbaasLogsLogSubscriptionResponse>;
    /** Get subscription details */
    get(params: ResourceLogSubscriptionGetParams): Promise<DbaasLogsLogSubscription>;
}
export declare class ManagedCMSClientResourceLogUrl {
    private readonly client;
    constructor(client: OvhClient);
    /** Generate a temporary URL to retrieve logs */
    create(params: ResourceLogUrlCreateParams): Promise<DbaasLogsTemporaryLogsLink>;
}
export declare class ManagedCMSClientResourceTask {
    private readonly client;
    constructor(client: OvhClient);
    /** Get current and recent tasks on the service */
    list(params: ResourceTaskListParams): Promise<CommonTask[]>;
    /** Iterate over Get current and recent tasks on the service. */
    iterate(params: ResourceTaskListParams): AsyncGenerator<CommonTask, void, void>;
    /** Load all pages for Get current and recent tasks on the service. */
    listAll(params: ResourceTaskListParams): Promise<CommonTask[]>;
    /** /managedCMS/resource/{serviceId}/task/{taskId} */
    get(params: ResourceTaskGetParams): Promise<CommonTask>;
    /** Edit a task to provide user input */
    update(params: ResourceTaskUpdateParams): Promise<CommonTask>;
}
export declare class ManagedCMSClientResourceWebsite {
    private readonly client;
    readonly flushCDN: ManagedCMSClientResourceWebsiteFlushCDN;
    readonly resetDatabasePassword: ManagedCMSClientResourceWebsiteResetDatabasePassword;
    constructor(client: OvhClient);
    /** Get all websites of a service */
    list(params: ResourceWebsiteListParams): Promise<ManagedCMSWebsite[]>;
    /** Iterate over Get all websites of a service. */
    iterate(params: ResourceWebsiteListParams): AsyncGenerator<ManagedCMSWebsite, void, void>;
    /** Load all pages for Get all websites of a service. */
    listAll(params: ResourceWebsiteListParams): Promise<ManagedCMSWebsite[]>;
    /** Create or import a website */
    create(params: ResourceWebsiteCreateParams): Promise<ManagedCMSWebsite>;
    /** Delete a website */
    delete(params: ResourceWebsiteDeleteParams): Promise<ManagedCMSWebsite>;
    /** Get a website */
    get(params: ResourceWebsiteGetParams): Promise<ManagedCMSWebsite>;
    /** Edit a website */
    update(params: ResourceWebsiteUpdateParams): Promise<ManagedCMSWebsite>;
}
export declare class ManagedCMSClientResourceWebsiteFlushCDN {
    private readonly client;
    constructor(client: OvhClient);
    /** Flush CDN for the website */
    create(params: ResourceWebsiteFlushCDNCreateParams): Promise<CommonCurrentTask>;
}
export declare class ManagedCMSClientResourceWebsiteResetDatabasePassword {
    private readonly client;
    constructor(client: OvhClient);
    /** Reset password of the website's database */
    create(params: ResourceWebsiteResetDatabasePasswordCreateParams): Promise<CommonCurrentTask>;
}
//# sourceMappingURL=client.d.ts.map