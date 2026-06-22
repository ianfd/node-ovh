import type { OvhClient } from '../../../core/client';
import type { PaginatedListOptions, RequestOptions } from '../../../core/types';
import type { CommonEvent, CommonTask, IamResourceTagFilter, PublicCloudBlockStorageBackup, PublicCloudBlockStorageBackupCreation, PublicCloudBlockStorageBackupUpdate, PublicCloudBlockStorageBlock, PublicCloudBlockStorageBlockCreation, PublicCloudBlockStorageBlockUpdate, PublicCloudBlockStorageSnapshot, PublicCloudBlockStorageSnapshotCreation, PublicCloudBlockStorageSnapshotUpdate, PublicCloudProjectProjectAsyncWithIAM, PublicCloudRancherCredentials, PublicCloudRancherEligibilityReference, PublicCloudRancherPlanCapability, PublicCloudRancherPlanReference, PublicCloudRancherRancher, PublicCloudRancherRancherCreation, PublicCloudRancherRancherUpdate, PublicCloudRancherVersionCapability, PublicCloudRancherVersionReference, PublicCloudReferenceRegion } from './types';
export interface ProjectListParams extends PaginatedListOptions {
    iamTags?: Record<string, IamResourceTagFilter[]>;
}
export interface ProjectGetParams extends RequestOptions {
    projectId: string;
}
export interface ProjectRancherListParams extends PaginatedListOptions {
    projectId: string;
}
export interface ProjectRancherCreateParams extends RequestOptions {
    projectId: string;
    body: PublicCloudRancherRancherCreation;
}
export interface ProjectRancherDeleteParams extends RequestOptions {
    projectId: string;
    rancherId: string;
}
export interface ProjectRancherGetParams extends RequestOptions {
    projectId: string;
    rancherId: string;
}
export interface ProjectRancherUpdateParams extends RequestOptions {
    projectId: string;
    rancherId: string;
    body: PublicCloudRancherRancherUpdate;
}
export interface ProjectRancherAdminCredentialsCreateParams extends RequestOptions {
    projectId: string;
    rancherId: string;
}
export interface ProjectRancherCapabilitiesPlanListParams extends PaginatedListOptions {
    projectId: string;
    rancherId: string;
}
export interface ProjectRancherCapabilitiesVersionListParams extends PaginatedListOptions {
    projectId: string;
    rancherId: string;
}
export interface ProjectRancherEventListParams extends PaginatedListOptions {
    projectId: string;
    rancherId: string;
}
export interface ProjectRancherTaskListParams extends PaginatedListOptions {
    projectId: string;
    rancherId: string;
}
export interface ProjectRancherTaskGetParams extends RequestOptions {
    projectId: string;
    rancherId: string;
    taskId: string;
}
export interface ProjectReferenceRancherEligibilityGetParams extends RequestOptions {
    projectId: string;
}
export interface ProjectReferenceRancherPlanListParams extends PaginatedListOptions {
    projectId: string;
}
export interface ProjectReferenceRancherVersionListParams extends PaginatedListOptions {
    projectId: string;
}
export interface ProjectReferenceRegionListParams extends PaginatedListOptions {
    projectId: string;
}
export interface ProjectReferenceRegionGetParams extends RequestOptions {
    name: string;
    projectId: string;
}
export interface ProjectStorageBlockBackupListParams extends PaginatedListOptions {
    projectId: string;
    volumeId?: string;
}
export interface ProjectStorageBlockBackupCreateParams extends RequestOptions {
    projectId: string;
    body: PublicCloudBlockStorageBackupCreation;
}
export interface ProjectStorageBlockBackupDeleteParams extends RequestOptions {
    id: string;
    projectId: string;
}
export interface ProjectStorageBlockBackupGetParams extends RequestOptions {
    id: string;
    projectId: string;
}
export interface ProjectStorageBlockBackupUpdateParams extends RequestOptions {
    id: string;
    projectId: string;
    body: PublicCloudBlockStorageBackupUpdate;
}
export interface ProjectStorageBlockSnapshotListParams extends PaginatedListOptions {
    projectId: string;
    volumeId?: string;
}
export interface ProjectStorageBlockSnapshotCreateParams extends RequestOptions {
    projectId: string;
    body: PublicCloudBlockStorageSnapshotCreation;
}
export interface ProjectStorageBlockSnapshotDeleteParams extends RequestOptions {
    id: string;
    projectId: string;
}
export interface ProjectStorageBlockSnapshotGetParams extends RequestOptions {
    id: string;
    projectId: string;
}
export interface ProjectStorageBlockSnapshotUpdateParams extends RequestOptions {
    id: string;
    projectId: string;
    body: PublicCloudBlockStorageSnapshotUpdate;
}
export interface ProjectStorageBlockVolumeListParams extends PaginatedListOptions {
    projectId: string;
}
export interface ProjectStorageBlockVolumeCreateParams extends RequestOptions {
    projectId: string;
    body: PublicCloudBlockStorageBlockCreation;
}
export interface ProjectStorageBlockVolumeDeleteParams extends RequestOptions {
    id: string;
    projectId: string;
}
export interface ProjectStorageBlockVolumeGetParams extends RequestOptions {
    id: string;
    projectId: string;
}
export interface ProjectStorageBlockVolumeUpdateParams extends RequestOptions {
    id: string;
    projectId: string;
    body: PublicCloudBlockStorageBlockUpdate;
}
export interface ReferenceRancherPlanListParams extends PaginatedListOptions {
}
export interface ReferenceRancherVersionListParams extends PaginatedListOptions {
}
export declare class PublicCloudClient {
    private readonly client;
    readonly project: PublicCloudClientProject;
    readonly reference: PublicCloudClientReference;
    constructor(client: OvhClient);
}
export declare class PublicCloudClientProject {
    private readonly client;
    readonly rancher: PublicCloudClientProjectRancher;
    readonly reference: PublicCloudClientProjectReference;
    readonly storage: PublicCloudClientProjectStorage;
    constructor(client: OvhClient);
    /** List all Public Cloud projects */
    list(params?: ProjectListParams): Promise<PublicCloudProjectProjectAsyncWithIAM[]>;
    /** Iterate over List all Public Cloud projects. */
    iterate(params?: ProjectListParams): AsyncGenerator<PublicCloudProjectProjectAsyncWithIAM, void, void>;
    /** Load all pages for List all Public Cloud projects. */
    listAll(params?: ProjectListParams): Promise<PublicCloudProjectProjectAsyncWithIAM[]>;
    /** Get details on a Public Cloud project */
    get(params: ProjectGetParams): Promise<PublicCloudProjectProjectAsyncWithIAM>;
}
export declare class PublicCloudClientProjectRancher {
    private readonly client;
    readonly adminCredentials: PublicCloudClientProjectRancherAdminCredentials;
    readonly capabilities: PublicCloudClientProjectRancherCapabilities;
    readonly event: PublicCloudClientProjectRancherEvent;
    readonly task: PublicCloudClientProjectRancherTask;
    constructor(client: OvhClient);
    /** List managed Rancher services */
    list(params: ProjectRancherListParams): Promise<PublicCloudRancherRancher[]>;
    /** Iterate over List managed Rancher services. */
    iterate(params: ProjectRancherListParams): AsyncGenerator<PublicCloudRancherRancher, void, void>;
    /** Load all pages for List managed Rancher services. */
    listAll(params: ProjectRancherListParams): Promise<PublicCloudRancherRancher[]>;
    /** Create a new managed Rancher service */
    create(params: ProjectRancherCreateParams): Promise<PublicCloudRancherRancher>;
    /** Delete a managed Rancher service */
    delete(params: ProjectRancherDeleteParams): Promise<PublicCloudRancherRancher>;
    /** Get a managed Rancher service */
    get(params: ProjectRancherGetParams): Promise<PublicCloudRancherRancher>;
    /** Update an existing managed Rancher service */
    update(params: ProjectRancherUpdateParams): Promise<PublicCloudRancherRancher>;
}
export declare class PublicCloudClientProjectRancherAdminCredentials {
    private readonly client;
    constructor(client: OvhClient);
    /** Reset the admin password */
    create(params: ProjectRancherAdminCredentialsCreateParams): Promise<PublicCloudRancherCredentials>;
}
export declare class PublicCloudClientProjectRancherCapabilities {
    private readonly client;
    readonly plan: PublicCloudClientProjectRancherCapabilitiesPlan;
    readonly version: PublicCloudClientProjectRancherCapabilitiesVersion;
    constructor(client: OvhClient);
}
export declare class PublicCloudClientProjectRancherCapabilitiesPlan {
    private readonly client;
    constructor(client: OvhClient);
    /** List available and current plans for the given managed Rancher service */
    list(params: ProjectRancherCapabilitiesPlanListParams): Promise<PublicCloudRancherPlanCapability[]>;
    /** Iterate over List available and current plans for the given managed Rancher service. */
    iterate(params: ProjectRancherCapabilitiesPlanListParams): AsyncGenerator<PublicCloudRancherPlanCapability, void, void>;
    /** Load all pages for List available and current plans for the given managed Rancher service. */
    listAll(params: ProjectRancherCapabilitiesPlanListParams): Promise<PublicCloudRancherPlanCapability[]>;
}
export declare class PublicCloudClientProjectRancherCapabilitiesVersion {
    private readonly client;
    constructor(client: OvhClient);
    /** List available and current versions for the given managed Rancher service */
    list(params: ProjectRancherCapabilitiesVersionListParams): Promise<PublicCloudRancherVersionCapability[]>;
    /** Iterate over List available and current versions for the given managed Rancher service. */
    iterate(params: ProjectRancherCapabilitiesVersionListParams): AsyncGenerator<PublicCloudRancherVersionCapability, void, void>;
    /** Load all pages for List available and current versions for the given managed Rancher service. */
    listAll(params: ProjectRancherCapabilitiesVersionListParams): Promise<PublicCloudRancherVersionCapability[]>;
}
export declare class PublicCloudClientProjectRancherEvent {
    private readonly client;
    constructor(client: OvhClient);
    /** List all events related to the managed Rancher service */
    list(params: ProjectRancherEventListParams): Promise<CommonEvent[]>;
    /** Iterate over List all events related to the managed Rancher service. */
    iterate(params: ProjectRancherEventListParams): AsyncGenerator<CommonEvent, void, void>;
    /** Load all pages for List all events related to the managed Rancher service. */
    listAll(params: ProjectRancherEventListParams): Promise<CommonEvent[]>;
}
export declare class PublicCloudClientProjectRancherTask {
    private readonly client;
    constructor(client: OvhClient);
    /** List all asynchronous operations related to the managed Rancher service */
    list(params: ProjectRancherTaskListParams): Promise<CommonTask[]>;
    /** Iterate over List all asynchronous operations related to the managed Rancher service. */
    iterate(params: ProjectRancherTaskListParams): AsyncGenerator<CommonTask, void, void>;
    /** Load all pages for List all asynchronous operations related to the managed Rancher service. */
    listAll(params: ProjectRancherTaskListParams): Promise<CommonTask[]>;
    /** Get a specific task related to the managed Rancher service */
    get(params: ProjectRancherTaskGetParams): Promise<CommonTask>;
}
export declare class PublicCloudClientProjectReference {
    private readonly client;
    readonly rancher: PublicCloudClientProjectReferenceRancher;
    readonly region: PublicCloudClientProjectReferenceRegion;
    constructor(client: OvhClient);
}
export declare class PublicCloudClientProjectReferenceRancher {
    private readonly client;
    readonly eligibility: PublicCloudClientProjectReferenceRancherEligibility;
    readonly plan: PublicCloudClientProjectReferenceRancherPlan;
    readonly version: PublicCloudClientProjectReferenceRancherVersion;
    constructor(client: OvhClient);
}
export declare class PublicCloudClientProjectReferenceRancherEligibility {
    private readonly client;
    constructor(client: OvhClient);
    /** List available eligibility for creating a managed Rancher service */
    get(params: ProjectReferenceRancherEligibilityGetParams): Promise<PublicCloudRancherEligibilityReference>;
}
export declare class PublicCloudClientProjectReferenceRancherPlan {
    private readonly client;
    constructor(client: OvhClient);
    /** List available plans for creating a managed Rancher service */
    list(params: ProjectReferenceRancherPlanListParams): Promise<PublicCloudRancherPlanReference[]>;
    /** Iterate over List available plans for creating a managed Rancher service. */
    iterate(params: ProjectReferenceRancherPlanListParams): AsyncGenerator<PublicCloudRancherPlanReference, void, void>;
    /** Load all pages for List available plans for creating a managed Rancher service. */
    listAll(params: ProjectReferenceRancherPlanListParams): Promise<PublicCloudRancherPlanReference[]>;
}
export declare class PublicCloudClientProjectReferenceRancherVersion {
    private readonly client;
    constructor(client: OvhClient);
    /** List available versions for creating a managed Rancher service */
    list(params: ProjectReferenceRancherVersionListParams): Promise<PublicCloudRancherVersionReference[]>;
    /** Iterate over List available versions for creating a managed Rancher service. */
    iterate(params: ProjectReferenceRancherVersionListParams): AsyncGenerator<PublicCloudRancherVersionReference, void, void>;
    /** Load all pages for List available versions for creating a managed Rancher service. */
    listAll(params: ProjectReferenceRancherVersionListParams): Promise<PublicCloudRancherVersionReference[]>;
}
export declare class PublicCloudClientProjectReferenceRegion {
    private readonly client;
    constructor(client: OvhClient);
    /** List available regions */
    list(params: ProjectReferenceRegionListParams): Promise<PublicCloudReferenceRegion[]>;
    /** Iterate over List available regions. */
    iterate(params: ProjectReferenceRegionListParams): AsyncGenerator<PublicCloudReferenceRegion, void, void>;
    /** Load all pages for List available regions. */
    listAll(params: ProjectReferenceRegionListParams): Promise<PublicCloudReferenceRegion[]>;
    /** Get a region */
    get(params: ProjectReferenceRegionGetParams): Promise<PublicCloudReferenceRegion>;
}
export declare class PublicCloudClientProjectStorage {
    private readonly client;
    readonly block: PublicCloudClientProjectStorageBlock;
    constructor(client: OvhClient);
}
export declare class PublicCloudClientProjectStorageBlock {
    private readonly client;
    readonly backup: PublicCloudClientProjectStorageBlockBackup;
    readonly snapshot: PublicCloudClientProjectStorageBlockSnapshot;
    readonly volume: PublicCloudClientProjectStorageBlockVolume;
    constructor(client: OvhClient);
}
export declare class PublicCloudClientProjectStorageBlockBackup {
    private readonly client;
    constructor(client: OvhClient);
    /** List Public Cloud block storage backups */
    list(params: ProjectStorageBlockBackupListParams): Promise<PublicCloudBlockStorageBackup[]>;
    /** Iterate over List Public Cloud block storage backups. */
    iterate(params: ProjectStorageBlockBackupListParams): AsyncGenerator<PublicCloudBlockStorageBackup, void, void>;
    /** Load all pages for List Public Cloud block storage backups. */
    listAll(params: ProjectStorageBlockBackupListParams): Promise<PublicCloudBlockStorageBackup[]>;
    /** Create a new Public Cloud block storage backup */
    create(params: ProjectStorageBlockBackupCreateParams): Promise<PublicCloudBlockStorageBackup>;
    /** Delete a Public Cloud block storage backup */
    delete(params: ProjectStorageBlockBackupDeleteParams): Promise<PublicCloudBlockStorageBackup>;
    /** Get a Public Cloud block storage backup */
    get(params: ProjectStorageBlockBackupGetParams): Promise<PublicCloudBlockStorageBackup>;
    /** Update an existing Public Cloud block storage backup */
    update(params: ProjectStorageBlockBackupUpdateParams): Promise<PublicCloudBlockStorageBackup>;
}
export declare class PublicCloudClientProjectStorageBlockSnapshot {
    private readonly client;
    constructor(client: OvhClient);
    /** List Public Cloud block storage volume snapshots */
    list(params: ProjectStorageBlockSnapshotListParams): Promise<PublicCloudBlockStorageSnapshot[]>;
    /** Iterate over List Public Cloud block storage volume snapshots. */
    iterate(params: ProjectStorageBlockSnapshotListParams): AsyncGenerator<PublicCloudBlockStorageSnapshot, void, void>;
    /** Load all pages for List Public Cloud block storage volume snapshots. */
    listAll(params: ProjectStorageBlockSnapshotListParams): Promise<PublicCloudBlockStorageSnapshot[]>;
    /** Create a new Public Cloud block storage volume snapshot */
    create(params: ProjectStorageBlockSnapshotCreateParams): Promise<PublicCloudBlockStorageSnapshot>;
    /** Delete a Public Cloud block storage volume snapshot */
    delete(params: ProjectStorageBlockSnapshotDeleteParams): Promise<PublicCloudBlockStorageSnapshot>;
    /** Get a Public Cloud block storage volume snapshot */
    get(params: ProjectStorageBlockSnapshotGetParams): Promise<PublicCloudBlockStorageSnapshot>;
    /** Update an existing Public Cloud block storage volume snapshot */
    update(params: ProjectStorageBlockSnapshotUpdateParams): Promise<PublicCloudBlockStorageSnapshot>;
}
export declare class PublicCloudClientProjectStorageBlockVolume {
    private readonly client;
    constructor(client: OvhClient);
    /** List Public Cloud block storage volumes */
    list(params: ProjectStorageBlockVolumeListParams): Promise<PublicCloudBlockStorageBlock[]>;
    /** Iterate over List Public Cloud block storage volumes. */
    iterate(params: ProjectStorageBlockVolumeListParams): AsyncGenerator<PublicCloudBlockStorageBlock, void, void>;
    /** Load all pages for List Public Cloud block storage volumes. */
    listAll(params: ProjectStorageBlockVolumeListParams): Promise<PublicCloudBlockStorageBlock[]>;
    /** Create a new Public Cloud block storage volume */
    create(params: ProjectStorageBlockVolumeCreateParams): Promise<PublicCloudBlockStorageBlock>;
    /** Delete a Public Cloud block storage volume */
    delete(params: ProjectStorageBlockVolumeDeleteParams): Promise<PublicCloudBlockStorageBlock>;
    /** Get a Public Cloud block storage volume */
    get(params: ProjectStorageBlockVolumeGetParams): Promise<PublicCloudBlockStorageBlock>;
    /** Update an existing Public Cloud block storage volume */
    update(params: ProjectStorageBlockVolumeUpdateParams): Promise<PublicCloudBlockStorageBlock>;
}
export declare class PublicCloudClientReference {
    private readonly client;
    readonly rancher: PublicCloudClientReferenceRancher;
    constructor(client: OvhClient);
}
export declare class PublicCloudClientReferenceRancher {
    private readonly client;
    readonly plan: PublicCloudClientReferenceRancherPlan;
    readonly version: PublicCloudClientReferenceRancherVersion;
    constructor(client: OvhClient);
}
export declare class PublicCloudClientReferenceRancherPlan {
    private readonly client;
    constructor(client: OvhClient);
    /** List available plans for creating a managed Rancher service */
    list(params?: ReferenceRancherPlanListParams): Promise<PublicCloudRancherPlanReference[]>;
    /** Iterate over List available plans for creating a managed Rancher service. */
    iterate(params?: ReferenceRancherPlanListParams): AsyncGenerator<PublicCloudRancherPlanReference, void, void>;
    /** Load all pages for List available plans for creating a managed Rancher service. */
    listAll(params?: ReferenceRancherPlanListParams): Promise<PublicCloudRancherPlanReference[]>;
}
export declare class PublicCloudClientReferenceRancherVersion {
    private readonly client;
    constructor(client: OvhClient);
    /** List available versions for creating a managed Rancher service */
    list(params?: ReferenceRancherVersionListParams): Promise<PublicCloudRancherVersionReference[]>;
    /** Iterate over List available versions for creating a managed Rancher service. */
    iterate(params?: ReferenceRancherVersionListParams): AsyncGenerator<PublicCloudRancherVersionReference, void, void>;
    /** Load all pages for List available versions for creating a managed Rancher service. */
    listAll(params?: ReferenceRancherVersionListParams): Promise<PublicCloudRancherVersionReference[]>;
}
//# sourceMappingURL=client.d.ts.map