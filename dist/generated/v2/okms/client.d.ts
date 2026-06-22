import type { OvhClient } from '../../../core/client';
import type { PaginatedListOptions, RequestOptions } from '../../../core/types';
import type { DbaasLogsLogKind, DbaasLogsLogSubscription, DbaasLogsLogSubscriptionCreation, DbaasLogsLogSubscriptionResponse, DbaasLogsLogUrlCreation, DbaasLogsTemporaryLogsLink, IamResourceTagFilter, OkmsCredentialCreation, OkmsCredentialCreationResponse, OkmsCredentialGetResponse, OkmsKeyFormatEnum, OkmsReferenceRegion, OkmsReferenceSecretConfigResponse, OkmsReferenceServiceKeyResponse, OkmsRegionEnum, OkmsResourceResponse, OkmsResourceResponseWithIAM, OkmsResourceUpdateRequest, OkmsSecretConfigResponse, OkmsSecretConfigUpdateRequest, OkmsSecretCreation, OkmsSecretGetResponseWithIAM, OkmsSecretPostResponse, OkmsSecretUpdateRequest, OkmsSecretVersion, OkmsSecretVersionCreation, OkmsSecretVersionUpdateRequest, OkmsSecretVersionUpdateResponse, OkmsServiceKeyCreation, OkmsServiceKeyResponse, OkmsServiceKeyResponseWithIAM, OkmsServiceKeyUpdate } from './types';
export interface ReferenceRegionsListParams extends PaginatedListOptions {
}
export interface ReferenceSecretConfigGetParams extends RequestOptions {
    region: OkmsRegionEnum;
}
export interface ReferenceServiceKeyListParams extends PaginatedListOptions {
    region: OkmsRegionEnum;
}
export interface ResourceListParams extends PaginatedListOptions {
    iamTags?: Record<string, IamResourceTagFilter[]>;
}
export interface ResourceGetParams extends RequestOptions {
    okmsId: string;
    publicCA?: boolean;
}
export interface ResourceUpdateParams extends RequestOptions {
    okmsId: string;
    body: OkmsResourceUpdateRequest;
}
export interface ResourceCredentialListParams extends PaginatedListOptions {
    okmsId: string;
}
export interface ResourceCredentialCreateParams extends RequestOptions {
    okmsId: string;
    body: OkmsCredentialCreation;
}
export interface ResourceCredentialDeleteParams extends RequestOptions {
    credentialId: string;
    okmsId: string;
}
export interface ResourceCredentialGetParams extends RequestOptions {
    credentialId: string;
    okmsId: string;
}
export interface ResourceLogKindListParams extends PaginatedListOptions {
    okmsId: string;
}
export interface ResourceLogKindGetParams extends RequestOptions {
    name: string;
    okmsId: string;
}
export interface ResourceLogSubscriptionListParams extends PaginatedListOptions {
    okmsId: string;
    kind?: string;
}
export interface ResourceLogSubscriptionCreateParams extends RequestOptions {
    okmsId: string;
    body: DbaasLogsLogSubscriptionCreation;
}
export interface ResourceLogSubscriptionDeleteParams extends RequestOptions {
    okmsId: string;
    subscriptionId: string;
}
export interface ResourceLogSubscriptionGetParams extends RequestOptions {
    okmsId: string;
    subscriptionId: string;
}
export interface ResourceLogUrlCreateParams extends RequestOptions {
    okmsId: string;
    body: DbaasLogsLogUrlCreation;
}
export interface ResourceSecretListParams extends PaginatedListOptions {
    okmsId: string;
    iamTags?: Record<string, IamResourceTagFilter[]>;
}
export interface ResourceSecretCreateParams extends RequestOptions {
    okmsId: string;
    body: OkmsSecretCreation;
}
export interface ResourceSecretDeleteParams extends RequestOptions {
    okmsId: string;
    path: string;
}
export interface ResourceSecretGetParams extends RequestOptions {
    okmsId: string;
    path: string;
    includeData?: boolean;
    version?: number;
}
export interface ResourceSecretUpdateParams extends RequestOptions {
    okmsId: string;
    path: string;
    cas?: number;
    body: OkmsSecretUpdateRequest;
}
export interface ResourceSecretVersionListParams extends PaginatedListOptions {
    okmsId: string;
    path: string;
}
export interface ResourceSecretVersionCreateParams extends RequestOptions {
    okmsId: string;
    path: string;
    cas?: number;
    body: OkmsSecretVersionCreation;
}
export interface ResourceSecretVersionGetParams extends RequestOptions {
    okmsId: string;
    path: string;
    version: number;
    includeData?: boolean;
}
export interface ResourceSecretVersionUpdateParams extends RequestOptions {
    okmsId: string;
    path: string;
    version: number;
    body: OkmsSecretVersionUpdateRequest;
}
export interface ResourceSecretConfigGetParams extends RequestOptions {
    okmsId: string;
}
export interface ResourceSecretConfigUpdateParams extends RequestOptions {
    okmsId: string;
    body: OkmsSecretConfigUpdateRequest;
}
export interface ResourceServiceKeyListParams extends PaginatedListOptions {
    okmsId: string;
    iamTags?: Record<string, IamResourceTagFilter[]>;
}
export interface ResourceServiceKeyCreateParams extends RequestOptions {
    okmsId: string;
    body: OkmsServiceKeyCreation;
}
export interface ResourceServiceKeyDeleteParams extends RequestOptions {
    keyId: string;
    okmsId: string;
}
export interface ResourceServiceKeyGetParams extends RequestOptions {
    keyId: string;
    okmsId: string;
    format?: OkmsKeyFormatEnum;
}
export interface ResourceServiceKeyUpdateParams extends RequestOptions {
    keyId: string;
    okmsId: string;
    body: OkmsServiceKeyUpdate;
}
export declare class OkmsClient {
    private readonly client;
    readonly reference: OkmsClientReference;
    readonly resource: OkmsClientResource;
    constructor(client: OvhClient);
}
export declare class OkmsClientReference {
    private readonly client;
    readonly regions: OkmsClientReferenceRegions;
    readonly secretConfig: OkmsClientReferenceSecretConfig;
    readonly serviceKey: OkmsClientReferenceServiceKey;
    constructor(client: OvhClient);
}
export declare class OkmsClientReferenceRegions {
    private readonly client;
    constructor(client: OvhClient);
    /** List available regions */
    list(params?: ReferenceRegionsListParams): Promise<OkmsReferenceRegion[]>;
    /** Iterate over List available regions. */
    iterate(params?: ReferenceRegionsListParams): AsyncGenerator<OkmsReferenceRegion, void, void>;
    /** Load all pages for List available regions. */
    listAll(params?: ReferenceRegionsListParams): Promise<OkmsReferenceRegion[]>;
}
export declare class OkmsClientReferenceSecretConfig {
    private readonly client;
    constructor(client: OvhClient);
    /** Get secret engine default configuration */
    get(params: ReferenceSecretConfigGetParams): Promise<OkmsReferenceSecretConfigResponse>;
}
export declare class OkmsClientReferenceServiceKey {
    private readonly client;
    constructor(client: OvhClient);
    /** Get service key type, size, curve and operations combination */
    list(params: ReferenceServiceKeyListParams): Promise<OkmsReferenceServiceKeyResponse[]>;
    /** Iterate over Get service key type, size, curve and operations combination. */
    iterate(params: ReferenceServiceKeyListParams): AsyncGenerator<OkmsReferenceServiceKeyResponse, void, void>;
    /** Load all pages for Get service key type, size, curve and operations combination. */
    listAll(params: ReferenceServiceKeyListParams): Promise<OkmsReferenceServiceKeyResponse[]>;
}
export declare class OkmsClientResource {
    private readonly client;
    readonly credential: OkmsClientResourceCredential;
    readonly log: OkmsClientResourceLog;
    readonly secret: OkmsClientResourceSecret;
    readonly secretConfig: OkmsClientResourceSecretConfig;
    readonly serviceKey: OkmsClientResourceServiceKey;
    constructor(client: OvhClient);
    /** List OVHcloud KMS services */
    list(params?: ResourceListParams): Promise<OkmsResourceResponseWithIAM[]>;
    /** Iterate over List OVHcloud KMS services. */
    iterate(params?: ResourceListParams): AsyncGenerator<OkmsResourceResponseWithIAM, void, void>;
    /** Load all pages for List OVHcloud KMS services. */
    listAll(params?: ResourceListParams): Promise<OkmsResourceResponseWithIAM[]>;
    /** Get an OVHcloud KMS service */
    get(params: ResourceGetParams): Promise<OkmsResourceResponseWithIAM>;
    /** Update an OVHcloud KMS service */
    update(params: ResourceUpdateParams): Promise<OkmsResourceResponse>;
}
export declare class OkmsClientResourceCredential {
    private readonly client;
    constructor(client: OvhClient);
    /** List all access credentials */
    list(params: ResourceCredentialListParams): Promise<OkmsCredentialGetResponse[]>;
    /** Iterate over List all access credentials. */
    iterate(params: ResourceCredentialListParams): AsyncGenerator<OkmsCredentialGetResponse, void, void>;
    /** Load all pages for List all access credentials. */
    listAll(params: ResourceCredentialListParams): Promise<OkmsCredentialGetResponse[]>;
    /** Request a new access credential */
    create(params: ResourceCredentialCreateParams): Promise<OkmsCredentialCreationResponse>;
    /** Revoke and delete an access credential */
    delete(params: ResourceCredentialDeleteParams): Promise<OkmsCredentialGetResponse>;
    /** Get an access credential */
    get(params: ResourceCredentialGetParams): Promise<OkmsCredentialGetResponse>;
}
export declare class OkmsClientResourceLog {
    private readonly client;
    readonly kind: OkmsClientResourceLogKind;
    readonly subscription: OkmsClientResourceLogSubscription;
    readonly url: OkmsClientResourceLogUrl;
    constructor(client: OvhClient);
}
export declare class OkmsClientResourceLogKind {
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
export declare class OkmsClientResourceLogSubscription {
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
export declare class OkmsClientResourceLogUrl {
    private readonly client;
    constructor(client: OvhClient);
    /** Generate a temporary URL to retrieve logs */
    create(params: ResourceLogUrlCreateParams): Promise<DbaasLogsTemporaryLogsLink>;
}
export declare class OkmsClientResourceSecret {
    private readonly client;
    readonly version: OkmsClientResourceSecretVersion;
    constructor(client: OvhClient);
    /** List all secrets */
    list(params: ResourceSecretListParams): Promise<OkmsSecretGetResponseWithIAM[]>;
    /** Iterate over List all secrets. */
    iterate(params: ResourceSecretListParams): AsyncGenerator<OkmsSecretGetResponseWithIAM, void, void>;
    /** Load all pages for List all secrets. */
    listAll(params: ResourceSecretListParams): Promise<OkmsSecretGetResponseWithIAM[]>;
    /** Create a secret */
    create(params: ResourceSecretCreateParams): Promise<OkmsSecretPostResponse>;
    /** Delete a secret and all its versions */
    delete(params: ResourceSecretDeleteParams): Promise<void>;
    /** Retrieve a secret */
    get(params: ResourceSecretGetParams): Promise<OkmsSecretGetResponseWithIAM>;
    /** Update a secret */
    update(params: ResourceSecretUpdateParams): Promise<OkmsSecretPostResponse>;
}
export declare class OkmsClientResourceSecretVersion {
    private readonly client;
    constructor(client: OvhClient);
    /** List the versions of a secret */
    list(params: ResourceSecretVersionListParams): Promise<OkmsSecretVersion[]>;
    /** Iterate over List the versions of a secret. */
    iterate(params: ResourceSecretVersionListParams): AsyncGenerator<OkmsSecretVersion, void, void>;
    /** Load all pages for List the versions of a secret. */
    listAll(params: ResourceSecretVersionListParams): Promise<OkmsSecretVersion[]>;
    /** Create a secret version */
    create(params: ResourceSecretVersionCreateParams): Promise<OkmsSecretVersion>;
    /** Retrieve a secret version */
    get(params: ResourceSecretVersionGetParams): Promise<OkmsSecretVersion>;
    /** Update the state of a secret version */
    update(params: ResourceSecretVersionUpdateParams): Promise<OkmsSecretVersionUpdateResponse>;
}
export declare class OkmsClientResourceSecretConfig {
    private readonly client;
    constructor(client: OvhClient);
    /** Retrieve secrets configuration */
    get(params: ResourceSecretConfigGetParams): Promise<OkmsSecretConfigResponse>;
    /** Update secrets configuration */
    update(params: ResourceSecretConfigUpdateParams): Promise<OkmsSecretConfigResponse>;
}
export declare class OkmsClientResourceServiceKey {
    private readonly client;
    constructor(client: OvhClient);
    /** List all keys */
    list(params: ResourceServiceKeyListParams): Promise<OkmsServiceKeyResponseWithIAM[]>;
    /** Iterate over List all keys. */
    iterate(params: ResourceServiceKeyListParams): AsyncGenerator<OkmsServiceKeyResponseWithIAM, void, void>;
    /** Load all pages for List all keys. */
    listAll(params: ResourceServiceKeyListParams): Promise<OkmsServiceKeyResponseWithIAM[]>;
    /** Create or import a service key */
    create(params: ResourceServiceKeyCreateParams): Promise<OkmsServiceKeyResponse>;
    /** Delete the given service key */
    delete(params: ResourceServiceKeyDeleteParams): Promise<void>;
    /** Retrieve a key */
    get(params: ResourceServiceKeyGetParams): Promise<OkmsServiceKeyResponseWithIAM>;
    /** Update a service key */
    update(params: ResourceServiceKeyUpdateParams): Promise<OkmsServiceKeyResponse>;
}
//# sourceMappingURL=client.d.ts.map