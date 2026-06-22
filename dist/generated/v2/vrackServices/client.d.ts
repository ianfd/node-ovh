import type { OvhClient } from '../../../core/client';
import type { PaginatedListOptions, RequestOptions } from '../../../core/types';
import type { CommonTask, IamResourceTagFilter, VrackServicesEligibleManagedService, VrackServicesRegion, VrackServicesVrackServices, VrackServicesVrackServicesInput, VrackServicesVrackServicesWithIAM } from './types';
export interface ReferenceCompatibleManagedServiceTypeListParams extends PaginatedListOptions {
}
export interface ReferenceRegionListParams extends PaginatedListOptions {
}
export interface ResourceListParams extends PaginatedListOptions {
    iamTags?: Record<string, IamResourceTagFilter[]>;
}
export interface ResourceGetParams extends RequestOptions {
    vrackServicesId: string;
}
export interface ResourceUpdateParams extends RequestOptions {
    vrackServicesId: string;
    body: VrackServicesVrackServicesInput;
}
export interface ResourceEligibleManagedServiceListParams extends PaginatedListOptions {
    vrackServicesId: string;
}
export interface ResourceTaskListParams extends PaginatedListOptions {
    vrackServicesId: string;
}
export interface ResourceTaskGetParams extends RequestOptions {
    taskId: string;
    vrackServicesId: string;
}
export declare class VrackServicesClient {
    private readonly client;
    readonly reference: VrackServicesClientReference;
    readonly resource: VrackServicesClientResource;
    constructor(client: OvhClient);
}
export declare class VrackServicesClientReference {
    private readonly client;
    readonly compatibleManagedServiceType: VrackServicesClientReferenceCompatibleManagedServiceType;
    readonly region: VrackServicesClientReferenceRegion;
    constructor(client: OvhClient);
}
export declare class VrackServicesClientReferenceCompatibleManagedServiceType {
    private readonly client;
    constructor(client: OvhClient);
    /** List all managed service types that are compatible with vRack Services (IAM resource types) */
    list(params?: ReferenceCompatibleManagedServiceTypeListParams): Promise<string[]>;
    /** Iterate over List all managed service types that are compatible with vRack Services (IAM resource types). */
    iterate(params?: ReferenceCompatibleManagedServiceTypeListParams): AsyncGenerator<string, void, void>;
    /** Load all pages for List all managed service types that are compatible with vRack Services (IAM resource types). */
    listAll(params?: ReferenceCompatibleManagedServiceTypeListParams): Promise<string[]>;
}
export declare class VrackServicesClientReferenceRegion {
    private readonly client;
    constructor(client: OvhClient);
    /** List all vRack Services regions */
    list(params?: ReferenceRegionListParams): Promise<VrackServicesRegion[]>;
    /** Iterate over List all vRack Services regions. */
    iterate(params?: ReferenceRegionListParams): AsyncGenerator<VrackServicesRegion, void, void>;
    /** Load all pages for List all vRack Services regions. */
    listAll(params?: ReferenceRegionListParams): Promise<VrackServicesRegion[]>;
}
export declare class VrackServicesClientResource {
    private readonly client;
    readonly eligibleManagedService: VrackServicesClientResourceEligibleManagedService;
    readonly task: VrackServicesClientResourceTask;
    constructor(client: OvhClient);
    /** List all vRack Services */
    list(params?: ResourceListParams): Promise<VrackServicesVrackServicesWithIAM[]>;
    /** Iterate over List all vRack Services. */
    iterate(params?: ResourceListParams): AsyncGenerator<VrackServicesVrackServicesWithIAM, void, void>;
    /** Load all pages for List all vRack Services. */
    listAll(params?: ResourceListParams): Promise<VrackServicesVrackServicesWithIAM[]>;
    /** Retrieve a vRack Services */
    get(params: ResourceGetParams): Promise<VrackServicesVrackServicesWithIAM>;
    /** Request updates on the vRack Services configuration */
    update(params: ResourceUpdateParams): Promise<VrackServicesVrackServices>;
}
export declare class VrackServicesClientResourceEligibleManagedService {
    private readonly client;
    constructor(client: OvhClient);
    /** List every managed service eligible to the requested vRack Services */
    list(params: ResourceEligibleManagedServiceListParams): Promise<VrackServicesEligibleManagedService[]>;
    /** Iterate over List every managed service eligible to the requested vRack Services. */
    iterate(params: ResourceEligibleManagedServiceListParams): AsyncGenerator<VrackServicesEligibleManagedService, void, void>;
    /** Load all pages for List every managed service eligible to the requested vRack Services. */
    listAll(params: ResourceEligibleManagedServiceListParams): Promise<VrackServicesEligibleManagedService[]>;
}
export declare class VrackServicesClientResourceTask {
    private readonly client;
    constructor(client: OvhClient);
    /** List all asynchronous operations related to the vRack Services */
    list(params: ResourceTaskListParams): Promise<CommonTask[]>;
    /** Iterate over List all asynchronous operations related to the vRack Services. */
    iterate(params: ResourceTaskListParams): AsyncGenerator<CommonTask, void, void>;
    /** Load all pages for List all asynchronous operations related to the vRack Services. */
    listAll(params: ResourceTaskListParams): Promise<CommonTask[]>;
    /** Get the task */
    get(params: ResourceTaskGetParams): Promise<CommonTask>;
}
//# sourceMappingURL=client.d.ts.map