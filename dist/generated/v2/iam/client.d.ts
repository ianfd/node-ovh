import type { OvhClient } from '../../../core/client';
import type { PaginatedListOptions, RequestOptions } from '../../../core/types';
import type { DbaasLogsLogKind, DbaasLogsLogSubscription, DbaasLogsLogSubscriptionCreation, DbaasLogsLogSubscriptionResponse, DbaasLogsLogUrlCreation, DbaasLogsTemporaryLogsLink, IamAuthorizeBatchRequest, IamAuthorizeBatchResponse, IamAuthorizeRequest, IamAuthorizeResponse, IamGroupCreation, IamGroupResponse, IamGroupUpdate, IamPermissionsGroup, IamPolicyCreation, IamPolicyResponse, IamPolicyUpdate, IamReferenceAction, IamResourceAddTag, IamResourceResource, IamResourceTagFilter } from './types';
export interface AuthorizationCheckCreateParams extends RequestOptions {
    body: IamAuthorizeBatchRequest;
}
export interface LogKindListParams extends PaginatedListOptions {
}
export interface LogKindGetParams extends RequestOptions {
    name: string;
}
export interface LogSubscriptionListParams extends PaginatedListOptions {
    kind?: string;
}
export interface LogSubscriptionCreateParams extends RequestOptions {
    body: DbaasLogsLogSubscriptionCreation;
}
export interface LogSubscriptionDeleteParams extends RequestOptions {
    subscriptionId: string;
}
export interface LogSubscriptionGetParams extends RequestOptions {
    subscriptionId: string;
}
export interface LogUrlCreateParams extends RequestOptions {
    body: DbaasLogsLogUrlCreation;
}
export interface PermissionsGroupListParams extends PaginatedListOptions {
}
export interface PermissionsGroupCreateParams extends RequestOptions {
    body: IamPermissionsGroup;
}
export interface PermissionsGroupDeleteParams extends RequestOptions {
    permissionsGroupURN: string;
}
export interface PermissionsGroupGetParams extends RequestOptions {
    permissionsGroupURN: string;
}
export interface PermissionsGroupUpdateParams extends RequestOptions {
    permissionsGroupURN: string;
    body: IamPermissionsGroup;
}
export interface PolicyListParams extends PaginatedListOptions {
    action?: string[];
    details?: boolean;
    identity?: string[];
    readOnly?: boolean;
    resourceURN?: string[];
}
export interface PolicyCreateParams extends RequestOptions {
    body: IamPolicyCreation;
}
export interface PolicyDeleteParams extends RequestOptions {
    policyId: string;
}
export interface PolicyGetParams extends RequestOptions {
    policyId: string;
    details?: boolean;
}
export interface PolicyUpdateParams extends RequestOptions {
    policyId: string;
    body: IamPolicyUpdate;
}
export interface ReferenceActionListParams extends PaginatedListOptions {
    resourceType?: string[];
}
export interface ReferenceResourceTypeListParams extends PaginatedListOptions {
}
export interface ResourceListParams extends PaginatedListOptions {
    resourceName?: string[];
    resourceType?: string[];
    resourceURN?: string[];
    tags?: Record<string, IamResourceTagFilter[]>;
}
export interface ResourceGetParams extends RequestOptions {
    resourceURN: string;
}
export interface ResourceUpdateParams extends RequestOptions {
    resourceURN: string;
    body: IamResourceResource;
}
export interface ResourceAuthorizationCheckCreateParams extends RequestOptions {
    resourceURN: string;
    body: IamAuthorizeRequest;
}
export interface ResourceTagDeleteParams extends RequestOptions {
    key: string;
    resourceURN: string;
}
export interface ResourceTagCreateParams extends RequestOptions {
    resourceURN: string;
    body: IamResourceAddTag;
}
export interface ResourceGroupListParams extends PaginatedListOptions {
    details?: boolean;
}
export interface ResourceGroupCreateParams extends RequestOptions {
    body: IamGroupCreation;
}
export interface ResourceGroupDeleteParams extends RequestOptions {
    groupId: string;
}
export interface ResourceGroupGetParams extends RequestOptions {
    groupId: string;
    details?: boolean;
}
export interface ResourceGroupUpdateParams extends RequestOptions {
    groupId: string;
    body: IamGroupUpdate;
}
export declare class IamClient {
    private readonly client;
    readonly authorization: IamClientAuthorization;
    readonly log: IamClientLog;
    readonly permissionsGroup: IamClientPermissionsGroup;
    readonly policy: IamClientPolicy;
    readonly reference: IamClientReference;
    readonly resource: IamClientResource;
    readonly resourceGroup: IamClientResourceGroup;
    constructor(client: OvhClient);
}
export declare class IamClientAuthorization {
    private readonly client;
    readonly check: IamClientAuthorizationCheck;
    constructor(client: OvhClient);
}
export declare class IamClientAuthorizationCheck {
    private readonly client;
    constructor(client: OvhClient);
    /** Validate your authorizations on given resources */
    create(params: AuthorizationCheckCreateParams): Promise<IamAuthorizeBatchResponse[]>;
}
export declare class IamClientLog {
    private readonly client;
    readonly kind: IamClientLogKind;
    readonly subscription: IamClientLogSubscription;
    readonly url: IamClientLogUrl;
    constructor(client: OvhClient);
}
export declare class IamClientLogKind {
    private readonly client;
    constructor(client: OvhClient);
    /** List available log kinds */
    list(params?: LogKindListParams): Promise<string[]>;
    /** Iterate over List available log kinds. */
    iterate(params?: LogKindListParams): AsyncGenerator<string, void, void>;
    /** Load all pages for List available log kinds. */
    listAll(params?: LogKindListParams): Promise<string[]>;
    /** Get a log kind */
    get(params: LogKindGetParams): Promise<DbaasLogsLogKind>;
}
export declare class IamClientLogSubscription {
    private readonly client;
    constructor(client: OvhClient);
    /** List subscription IDs for a cluster */
    list(params?: LogSubscriptionListParams): Promise<string[]>;
    /** Iterate over List subscription IDs for a cluster. */
    iterate(params?: LogSubscriptionListParams): AsyncGenerator<string, void, void>;
    /** Load all pages for List subscription IDs for a cluster. */
    listAll(params?: LogSubscriptionListParams): Promise<string[]>;
    /** Create a subscription from logs to a pre-existing LDP stream */
    create(params: LogSubscriptionCreateParams): Promise<DbaasLogsLogSubscriptionResponse>;
    /** Delete a subscription */
    delete(params: LogSubscriptionDeleteParams): Promise<DbaasLogsLogSubscriptionResponse>;
    /** Get subscription details */
    get(params: LogSubscriptionGetParams): Promise<DbaasLogsLogSubscription>;
}
export declare class IamClientLogUrl {
    private readonly client;
    constructor(client: OvhClient);
    /** Generate a temporary URL to retrieve logs */
    create(params: LogUrlCreateParams): Promise<DbaasLogsTemporaryLogsLink>;
}
export declare class IamClientPermissionsGroup {
    private readonly client;
    constructor(client: OvhClient);
    /** Retrieve all permissions groups */
    list(params?: PermissionsGroupListParams): Promise<IamPermissionsGroup[]>;
    /** Iterate over Retrieve all permissions groups. */
    iterate(params?: PermissionsGroupListParams): AsyncGenerator<IamPermissionsGroup, void, void>;
    /** Load all pages for Retrieve all permissions groups. */
    listAll(params?: PermissionsGroupListParams): Promise<IamPermissionsGroup[]>;
    /** Create a permissions group */
    create(params: PermissionsGroupCreateParams): Promise<IamPermissionsGroup>;
    /** Delete the given permissions group */
    delete(params: PermissionsGroupDeleteParams): Promise<void>;
    /** Retrieve the given permissions group */
    get(params: PermissionsGroupGetParams): Promise<IamPermissionsGroup>;
    /** Update a permissions group */
    update(params: PermissionsGroupUpdateParams): Promise<IamPermissionsGroup>;
}
export declare class IamClientPolicy {
    private readonly client;
    constructor(client: OvhClient);
    /** Retrieve all policies */
    list(params?: PolicyListParams): Promise<IamPolicyResponse[]>;
    /** Iterate over Retrieve all policies. */
    iterate(params?: PolicyListParams): AsyncGenerator<IamPolicyResponse, void, void>;
    /** Load all pages for Retrieve all policies. */
    listAll(params?: PolicyListParams): Promise<IamPolicyResponse[]>;
    /** Create a new policy */
    create(params: PolicyCreateParams): Promise<IamPolicyResponse>;
    /** Delete the given policy */
    delete(params: PolicyDeleteParams): Promise<void>;
    /** Retrieve the given policy */
    get(params: PolicyGetParams): Promise<IamPolicyResponse>;
    /** Update an existing policy */
    update(params: PolicyUpdateParams): Promise<IamPolicyResponse>;
}
export declare class IamClientReference {
    private readonly client;
    readonly action: IamClientReferenceAction;
    readonly resource: IamClientReferenceResource;
    constructor(client: OvhClient);
}
export declare class IamClientReferenceAction {
    private readonly client;
    constructor(client: OvhClient);
    /** Retrieve all actions */
    list(params?: ReferenceActionListParams): Promise<IamReferenceAction[]>;
    /** Iterate over Retrieve all actions. */
    iterate(params?: ReferenceActionListParams): AsyncGenerator<IamReferenceAction, void, void>;
    /** Load all pages for Retrieve all actions. */
    listAll(params?: ReferenceActionListParams): Promise<IamReferenceAction[]>;
}
export declare class IamClientReferenceResource {
    private readonly client;
    readonly type: IamClientReferenceResourceType;
    constructor(client: OvhClient);
}
export declare class IamClientReferenceResourceType {
    private readonly client;
    constructor(client: OvhClient);
    /** Retrieve all resource types */
    list(params?: ReferenceResourceTypeListParams): Promise<string[]>;
    /** Iterate over Retrieve all resource types. */
    iterate(params?: ReferenceResourceTypeListParams): AsyncGenerator<string, void, void>;
    /** Load all pages for Retrieve all resource types. */
    listAll(params?: ReferenceResourceTypeListParams): Promise<string[]>;
}
export declare class IamClientResource {
    private readonly client;
    readonly authorization: IamClientResourceAuthorization;
    readonly tag: IamClientResourceTag;
    constructor(client: OvhClient);
    /** List all resources */
    list(params?: ResourceListParams): Promise<IamResourceResource[]>;
    /** Iterate over List all resources. */
    iterate(params?: ResourceListParams): AsyncGenerator<IamResourceResource, void, void>;
    /** Load all pages for List all resources. */
    listAll(params?: ResourceListParams): Promise<IamResourceResource[]>;
    /** Retrieve a resource */
    get(params: ResourceGetParams): Promise<IamResourceResource>;
    /** Update an existing resource */
    update(params: ResourceUpdateParams): Promise<IamResourceResource>;
}
export declare class IamClientResourceAuthorization {
    private readonly client;
    readonly check: IamClientResourceAuthorizationCheck;
    constructor(client: OvhClient);
}
export declare class IamClientResourceAuthorizationCheck {
    private readonly client;
    constructor(client: OvhClient);
    /** Validate authorizations on a given resource */
    create(params: ResourceAuthorizationCheckCreateParams): Promise<IamAuthorizeResponse>;
}
export declare class IamClientResourceTag {
    private readonly client;
    constructor(client: OvhClient);
    /** Remove a tag from a resource */
    delete(params: ResourceTagDeleteParams): Promise<void>;
    /** Add a tag to a resource */
    create(params: ResourceTagCreateParams): Promise<void>;
}
export declare class IamClientResourceGroup {
    private readonly client;
    constructor(client: OvhClient);
    /** Retrieve all resource groups */
    list(params?: ResourceGroupListParams): Promise<IamGroupResponse[]>;
    /** Iterate over Retrieve all resource groups. */
    iterate(params?: ResourceGroupListParams): AsyncGenerator<IamGroupResponse, void, void>;
    /** Load all pages for Retrieve all resource groups. */
    listAll(params?: ResourceGroupListParams): Promise<IamGroupResponse[]>;
    /** Create a new resource group */
    create(params: ResourceGroupCreateParams): Promise<IamGroupResponse>;
    /** Delete the given resource group */
    delete(params: ResourceGroupDeleteParams): Promise<void>;
    /** Retrieve the given resource group */
    get(params: ResourceGroupGetParams): Promise<IamGroupResponse>;
    /** Update an existing resource group */
    update(params: ResourceGroupUpdateParams): Promise<IamGroupResponse>;
}
//# sourceMappingURL=client.d.ts.map