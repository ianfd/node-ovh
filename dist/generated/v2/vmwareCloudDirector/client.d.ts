import type { OvhClient } from '../../../core/client';
import type { PaginatedListOptions, RequestOptions } from '../../../core/types';
import type { CommonTask, IamResourceTagFilter, VmwareCloudDirectorBackupBackupDetails, VmwareCloudDirectorBackupBackupDetailsUpdate, VmwareCloudDirectorBackupBackupDetailsWithIAM, VmwareCloudDirectorCompute, VmwareCloudDirectorMigrationMigrationDetails, VmwareCloudDirectorMigrationMigrationDetailsWithIAM, VmwareCloudDirectorNetworkAcl, VmwareCloudDirectorNetworkAclUpdate, VmwareCloudDirectorOrderableResource, VmwareCloudDirectorOrganization, VmwareCloudDirectorOrganizationUpdate, VmwareCloudDirectorOrganizationWithIAM, VmwareCloudDirectorRegion, VmwareCloudDirectorStorage, VmwareCloudDirectorVirtualDataCenter, VmwareCloudDirectorVirtualDataCenterUpdate, VmwareCloudDirectorVirtualDataCenterWithIAM, VmwareCloudDirectorVrackSegment, VmwareCloudDirectorVrackSegmentUpdate } from './types';
export interface BackupListParams extends PaginatedListOptions {
    iamTags?: Record<string, IamResourceTagFilter[]>;
}
export interface BackupGetParams extends RequestOptions {
    backupId: string;
}
export interface BackupUpdateParams extends RequestOptions {
    backupId: string;
    body: VmwareCloudDirectorBackupBackupDetailsUpdate;
}
export interface BackupTaskListParams extends PaginatedListOptions {
    backupId: string;
}
export interface BackupTaskGetParams extends RequestOptions {
    backupId: string;
    taskId: string;
}
export interface MigrationListParams extends PaginatedListOptions {
    iamTags?: Record<string, IamResourceTagFilter[]>;
}
export interface MigrationGetParams extends RequestOptions {
    migrationId: string;
}
export interface MigrationUpdateParams extends RequestOptions {
    migrationId: string;
}
export interface OrganizationListParams extends PaginatedListOptions {
    iamTags?: Record<string, IamResourceTagFilter[]>;
}
export interface OrganizationGetParams extends RequestOptions {
    organizationId: string;
}
export interface OrganizationUpdateParams extends RequestOptions {
    organizationId: string;
    body: VmwareCloudDirectorOrganizationUpdate;
}
export interface OrganizationNetworkAclListParams extends PaginatedListOptions {
    organizationId: string;
}
export interface OrganizationNetworkAclGetParams extends RequestOptions {
    id: string;
    organizationId: string;
}
export interface OrganizationNetworkAclUpdateParams extends RequestOptions {
    id: string;
    organizationId: string;
    body: VmwareCloudDirectorNetworkAclUpdate;
}
export interface OrganizationPasswordCreateParams extends RequestOptions {
    organizationId: string;
}
export interface OrganizationTaskListParams extends PaginatedListOptions {
    organizationId: string;
}
export interface OrganizationTaskGetParams extends RequestOptions {
    organizationId: string;
    taskId: string;
}
export interface OrganizationVirtualDataCenterListParams extends PaginatedListOptions {
    organizationId: string;
    iamTags?: Record<string, IamResourceTagFilter[]>;
}
export interface OrganizationVirtualDataCenterGetParams extends RequestOptions {
    organizationId: string;
    virtualDataCenterId: string;
}
export interface OrganizationVirtualDataCenterUpdateParams extends RequestOptions {
    organizationId: string;
    virtualDataCenterId: string;
    body: VmwareCloudDirectorVirtualDataCenterUpdate;
}
export interface OrganizationVirtualDataCenterComputeListParams extends PaginatedListOptions {
    organizationId: string;
    virtualDataCenterId: string;
}
export interface OrganizationVirtualDataCenterComputeDeleteParams extends RequestOptions {
    computeId: string;
    organizationId: string;
    virtualDataCenterId: string;
}
export interface OrganizationVirtualDataCenterComputeGetParams extends RequestOptions {
    computeId: string;
    organizationId: string;
    virtualDataCenterId: string;
}
export interface OrganizationVirtualDataCenterOrderableResourceGetParams extends RequestOptions {
    organizationId: string;
    virtualDataCenterId: string;
}
export interface OrganizationVirtualDataCenterStorageListParams extends PaginatedListOptions {
    organizationId: string;
    virtualDataCenterId: string;
}
export interface OrganizationVirtualDataCenterStorageDeleteParams extends RequestOptions {
    organizationId: string;
    storageId: string;
    virtualDataCenterId: string;
}
export interface OrganizationVirtualDataCenterStorageGetParams extends RequestOptions {
    organizationId: string;
    storageId: string;
    virtualDataCenterId: string;
}
export interface OrganizationVirtualDataCenterTaskListParams extends PaginatedListOptions {
    organizationId: string;
    virtualDataCenterId: string;
}
export interface OrganizationVirtualDataCenterTaskGetParams extends RequestOptions {
    organizationId: string;
    taskId: string;
    virtualDataCenterId: string;
}
export interface OrganizationVirtualDataCenterVrackSegmentListParams extends PaginatedListOptions {
    organizationId: string;
    virtualDataCenterId: string;
}
export interface OrganizationVirtualDataCenterVrackSegmentDeleteParams extends RequestOptions {
    id: string;
    organizationId: string;
    virtualDataCenterId: string;
}
export interface OrganizationVirtualDataCenterVrackSegmentGetParams extends RequestOptions {
    id: string;
    organizationId: string;
    virtualDataCenterId: string;
}
export interface OrganizationVirtualDataCenterVrackSegmentUpdateParams extends RequestOptions {
    id: string;
    organizationId: string;
    virtualDataCenterId: string;
    body: VmwareCloudDirectorVrackSegmentUpdate;
}
export interface OrganizationVirtualDataCenterVrackSegmentTaskListParams extends PaginatedListOptions {
    id: string;
    organizationId: string;
    virtualDataCenterId: string;
}
export interface OrganizationVirtualDataCenterVrackSegmentTaskGetParams extends RequestOptions {
    id: string;
    organizationId: string;
    taskId: string;
    virtualDataCenterId: string;
}
export interface ReferenceRegionListParams extends PaginatedListOptions {
}
export declare class VmwareCloudDirectorClient {
    private readonly client;
    readonly backup: VmwareCloudDirectorClientBackup;
    readonly migration: VmwareCloudDirectorClientMigration;
    readonly organization: VmwareCloudDirectorClientOrganization;
    readonly reference: VmwareCloudDirectorClientReference;
    constructor(client: OvhClient);
}
export declare class VmwareCloudDirectorClientBackup {
    private readonly client;
    readonly task: VmwareCloudDirectorClientBackupTask;
    constructor(client: OvhClient);
    /** List VMware Cloud Director Backup services */
    list(params?: BackupListParams): Promise<VmwareCloudDirectorBackupBackupDetailsWithIAM[]>;
    /** Iterate over List VMware Cloud Director Backup services. */
    iterate(params?: BackupListParams): AsyncGenerator<VmwareCloudDirectorBackupBackupDetailsWithIAM, void, void>;
    /** Load all pages for List VMware Cloud Director Backup services. */
    listAll(params?: BackupListParams): Promise<VmwareCloudDirectorBackupBackupDetailsWithIAM[]>;
    /** Get VMware Cloud Director Backup service */
    get(params: BackupGetParams): Promise<VmwareCloudDirectorBackupBackupDetailsWithIAM>;
    /** Update VMware Cloud Director Backup service */
    update(params: BackupUpdateParams): Promise<VmwareCloudDirectorBackupBackupDetails>;
}
export declare class VmwareCloudDirectorClientBackupTask {
    private readonly client;
    constructor(client: OvhClient);
    /** List all asynchronous operations related to the VMware Cloud Director backup service */
    list(params: BackupTaskListParams): Promise<CommonTask[]>;
    /** Iterate over List all asynchronous operations related to the VMware Cloud Director backup service. */
    iterate(params: BackupTaskListParams): AsyncGenerator<CommonTask, void, void>;
    /** Load all pages for List all asynchronous operations related to the VMware Cloud Director backup service. */
    listAll(params: BackupTaskListParams): Promise<CommonTask[]>;
    /** Get a specific task related to the VMware Cloud Director backup service */
    get(params: BackupTaskGetParams): Promise<CommonTask>;
}
export declare class VmwareCloudDirectorClientMigration {
    private readonly client;
    constructor(client: OvhClient);
    /** List VMware Cloud Director Migration services */
    list(params?: MigrationListParams): Promise<VmwareCloudDirectorMigrationMigrationDetailsWithIAM[]>;
    /** Iterate over List VMware Cloud Director Migration services. */
    iterate(params?: MigrationListParams): AsyncGenerator<VmwareCloudDirectorMigrationMigrationDetailsWithIAM, void, void>;
    /** Load all pages for List VMware Cloud Director Migration services. */
    listAll(params?: MigrationListParams): Promise<VmwareCloudDirectorMigrationMigrationDetailsWithIAM[]>;
    /** Status of VMware Cloud Director Migration Service */
    get(params: MigrationGetParams): Promise<VmwareCloudDirectorMigrationMigrationDetailsWithIAM>;
    /** Update VMware Cloud Director Migration Service */
    update(params: MigrationUpdateParams): Promise<VmwareCloudDirectorMigrationMigrationDetails>;
}
export declare class VmwareCloudDirectorClientOrganization {
    private readonly client;
    readonly networkAcl: VmwareCloudDirectorClientOrganizationNetworkAcl;
    readonly password: VmwareCloudDirectorClientOrganizationPassword;
    readonly task: VmwareCloudDirectorClientOrganizationTask;
    readonly virtualDataCenter: VmwareCloudDirectorClientOrganizationVirtualDataCenter;
    constructor(client: OvhClient);
    /** List VMware Cloud Director organizations */
    list(params?: OrganizationListParams): Promise<VmwareCloudDirectorOrganizationWithIAM[]>;
    /** Iterate over List VMware Cloud Director organizations. */
    iterate(params?: OrganizationListParams): AsyncGenerator<VmwareCloudDirectorOrganizationWithIAM, void, void>;
    /** Load all pages for List VMware Cloud Director organizations. */
    listAll(params?: OrganizationListParams): Promise<VmwareCloudDirectorOrganizationWithIAM[]>;
    /** Get VMware Cloud Director organization details */
    get(params: OrganizationGetParams): Promise<VmwareCloudDirectorOrganizationWithIAM>;
    /** Update VMware Cloud Director organization details */
    update(params: OrganizationUpdateParams): Promise<VmwareCloudDirectorOrganization>;
}
export declare class VmwareCloudDirectorClientOrganizationNetworkAcl {
    private readonly client;
    constructor(client: OvhClient);
    /** List organization network access control list resources */
    list(params: OrganizationNetworkAclListParams): Promise<VmwareCloudDirectorNetworkAcl[]>;
    /** Iterate over List organization network access control list resources. */
    iterate(params: OrganizationNetworkAclListParams): AsyncGenerator<VmwareCloudDirectorNetworkAcl, void, void>;
    /** Load all pages for List organization network access control list resources. */
    listAll(params: OrganizationNetworkAclListParams): Promise<VmwareCloudDirectorNetworkAcl[]>;
    /** Get organization network access control list resources */
    get(params: OrganizationNetworkAclGetParams): Promise<VmwareCloudDirectorNetworkAcl>;
    /** Update organization network access control list resources */
    update(params: OrganizationNetworkAclUpdateParams): Promise<VmwareCloudDirectorNetworkAcl>;
}
export declare class VmwareCloudDirectorClientOrganizationPassword {
    private readonly client;
    constructor(client: OvhClient);
    /** Reset the VMware Cloud Director organization administrator password */
    create(params: OrganizationPasswordCreateParams): Promise<void>;
}
export declare class VmwareCloudDirectorClientOrganizationTask {
    private readonly client;
    constructor(client: OvhClient);
    /** List all asynchronous operations related to the VMware Cloud Director resources */
    list(params: OrganizationTaskListParams): Promise<CommonTask[]>;
    /** Iterate over List all asynchronous operations related to the VMware Cloud Director resources. */
    iterate(params: OrganizationTaskListParams): AsyncGenerator<CommonTask, void, void>;
    /** Load all pages for List all asynchronous operations related to the VMware Cloud Director resources. */
    listAll(params: OrganizationTaskListParams): Promise<CommonTask[]>;
    /** Get a specific task related to the VMware Cloud Director resources */
    get(params: OrganizationTaskGetParams): Promise<CommonTask>;
}
export declare class VmwareCloudDirectorClientOrganizationVirtualDataCenter {
    private readonly client;
    readonly compute: VmwareCloudDirectorClientOrganizationVirtualDataCenterCompute;
    readonly orderableResource: VmwareCloudDirectorClientOrganizationVirtualDataCenterOrderableResource;
    readonly storage: VmwareCloudDirectorClientOrganizationVirtualDataCenterStorage;
    readonly task: VmwareCloudDirectorClientOrganizationVirtualDataCenterTask;
    readonly vrackSegment: VmwareCloudDirectorClientOrganizationVirtualDataCenterVrackSegment;
    constructor(client: OvhClient);
    /** List all organization Virtual DataCenters */
    list(params: OrganizationVirtualDataCenterListParams): Promise<VmwareCloudDirectorVirtualDataCenterWithIAM[]>;
    /** Iterate over List all organization Virtual DataCenters. */
    iterate(params: OrganizationVirtualDataCenterListParams): AsyncGenerator<VmwareCloudDirectorVirtualDataCenterWithIAM, void, void>;
    /** Load all pages for List all organization Virtual DataCenters. */
    listAll(params: OrganizationVirtualDataCenterListParams): Promise<VmwareCloudDirectorVirtualDataCenterWithIAM[]>;
    /** Get organization Virtual DataCenter details */
    get(params: OrganizationVirtualDataCenterGetParams): Promise<VmwareCloudDirectorVirtualDataCenterWithIAM>;
    /** Update organization Virtual DataCenter details */
    update(params: OrganizationVirtualDataCenterUpdateParams): Promise<VmwareCloudDirectorVirtualDataCenter>;
}
export declare class VmwareCloudDirectorClientOrganizationVirtualDataCenterCompute {
    private readonly client;
    constructor(client: OvhClient);
    /** List organization Virtual DataCenter associated compute resources */
    list(params: OrganizationVirtualDataCenterComputeListParams): Promise<VmwareCloudDirectorCompute[]>;
    /** Iterate over List organization Virtual DataCenter associated compute resources. */
    iterate(params: OrganizationVirtualDataCenterComputeListParams): AsyncGenerator<VmwareCloudDirectorCompute, void, void>;
    /** Load all pages for List organization Virtual DataCenter associated compute resources. */
    listAll(params: OrganizationVirtualDataCenterComputeListParams): Promise<VmwareCloudDirectorCompute[]>;
    /** Delete compute resources associated with an organization's Virtual DataCenter */
    delete(params: OrganizationVirtualDataCenterComputeDeleteParams): Promise<void>;
    /** Get organization Virtual DataCenter associated compute resources */
    get(params: OrganizationVirtualDataCenterComputeGetParams): Promise<VmwareCloudDirectorCompute>;
}
export declare class VmwareCloudDirectorClientOrganizationVirtualDataCenterOrderableResource {
    private readonly client;
    constructor(client: OvhClient);
    /** List all orderable resources related to the organization Virtual DataCenter */
    get(params: OrganizationVirtualDataCenterOrderableResourceGetParams): Promise<VmwareCloudDirectorOrderableResource>;
}
export declare class VmwareCloudDirectorClientOrganizationVirtualDataCenterStorage {
    private readonly client;
    constructor(client: OvhClient);
    /** List organization Virtual DataCenter associated storage resources */
    list(params: OrganizationVirtualDataCenterStorageListParams): Promise<VmwareCloudDirectorStorage[]>;
    /** Iterate over List organization Virtual DataCenter associated storage resources. */
    iterate(params: OrganizationVirtualDataCenterStorageListParams): AsyncGenerator<VmwareCloudDirectorStorage, void, void>;
    /** Load all pages for List organization Virtual DataCenter associated storage resources. */
    listAll(params: OrganizationVirtualDataCenterStorageListParams): Promise<VmwareCloudDirectorStorage[]>;
    /** Delete organization Virtual DataCenter storage resource */
    delete(params: OrganizationVirtualDataCenterStorageDeleteParams): Promise<void>;
    /** Get organization Virtual DataCenter associated storage resources */
    get(params: OrganizationVirtualDataCenterStorageGetParams): Promise<VmwareCloudDirectorStorage>;
}
export declare class VmwareCloudDirectorClientOrganizationVirtualDataCenterTask {
    private readonly client;
    constructor(client: OvhClient);
    /** List all asynchronous operations related to the organization Virtual DataCenter resource */
    list(params: OrganizationVirtualDataCenterTaskListParams): Promise<CommonTask[]>;
    /** Iterate over List all asynchronous operations related to the organization Virtual DataCenter resource. */
    iterate(params: OrganizationVirtualDataCenterTaskListParams): AsyncGenerator<CommonTask, void, void>;
    /** Load all pages for List all asynchronous operations related to the organization Virtual DataCenter resource. */
    listAll(params: OrganizationVirtualDataCenterTaskListParams): Promise<CommonTask[]>;
    /** Get a specific task related to the organization Virtual DataCenter resource */
    get(params: OrganizationVirtualDataCenterTaskGetParams): Promise<CommonTask>;
}
export declare class VmwareCloudDirectorClientOrganizationVirtualDataCenterVrackSegment {
    private readonly client;
    readonly task: VmwareCloudDirectorClientOrganizationVirtualDataCenterVrackSegmentTask;
    constructor(client: OvhClient);
    /** List organization Virtual DataCenter associated vrack segment resources */
    list(params: OrganizationVirtualDataCenterVrackSegmentListParams): Promise<VmwareCloudDirectorVrackSegment[]>;
    /** Iterate over List organization Virtual DataCenter associated vrack segment resources. */
    iterate(params: OrganizationVirtualDataCenterVrackSegmentListParams): AsyncGenerator<VmwareCloudDirectorVrackSegment, void, void>;
    /** Load all pages for List organization Virtual DataCenter associated vrack segment resources. */
    listAll(params: OrganizationVirtualDataCenterVrackSegmentListParams): Promise<VmwareCloudDirectorVrackSegment[]>;
    /** Delete VMware Cloud Director vrack segment resources */
    delete(params: OrganizationVirtualDataCenterVrackSegmentDeleteParams): Promise<VmwareCloudDirectorVrackSegment>;
    /** Get organization Virtual DataCenter associated vrack segment resources */
    get(params: OrganizationVirtualDataCenterVrackSegmentGetParams): Promise<VmwareCloudDirectorVrackSegment>;
    /** Update VMware Cloud Director vrack segment resources */
    update(params: OrganizationVirtualDataCenterVrackSegmentUpdateParams): Promise<VmwareCloudDirectorVrackSegment>;
}
export declare class VmwareCloudDirectorClientOrganizationVirtualDataCenterVrackSegmentTask {
    private readonly client;
    constructor(client: OvhClient);
    /** List all asynchronous operations related to the organization Virtual DataCenter vRack segment resource */
    list(params: OrganizationVirtualDataCenterVrackSegmentTaskListParams): Promise<CommonTask[]>;
    /** Iterate over List all asynchronous operations related to the organization Virtual DataCenter vRack segment resource. */
    iterate(params: OrganizationVirtualDataCenterVrackSegmentTaskListParams): AsyncGenerator<CommonTask, void, void>;
    /** Load all pages for List all asynchronous operations related to the organization Virtual DataCenter vRack segment resource. */
    listAll(params: OrganizationVirtualDataCenterVrackSegmentTaskListParams): Promise<CommonTask[]>;
    /** Get a specific task related to the organization Virtual DataCenter vRack segment resource */
    get(params: OrganizationVirtualDataCenterVrackSegmentTaskGetParams): Promise<CommonTask>;
}
export declare class VmwareCloudDirectorClientReference {
    private readonly client;
    readonly region: VmwareCloudDirectorClientReferenceRegion;
    constructor(client: OvhClient);
}
export declare class VmwareCloudDirectorClientReferenceRegion {
    private readonly client;
    constructor(client: OvhClient);
    /** Get region details */
    list(params?: ReferenceRegionListParams): Promise<VmwareCloudDirectorRegion[]>;
    /** Iterate over Get region details. */
    iterate(params?: ReferenceRegionListParams): AsyncGenerator<VmwareCloudDirectorRegion, void, void>;
    /** Load all pages for Get region details. */
    listAll(params?: ReferenceRegionListParams): Promise<VmwareCloudDirectorRegion[]>;
}
//# sourceMappingURL=client.d.ts.map