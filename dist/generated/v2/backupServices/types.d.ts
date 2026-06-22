/** Backup agent target product type for your environment */
export type BackupAgentProductTypeEnum = "ON_PREMISE" | "OVHCLOUD_BAREMETAL" | "OVHCLOUD_PUBLIC_CLOUD" | "OVHCLOUD_VPS";
/** Indicates the status of the backup agent */
export type BackupAgentStatusEnum = "CREATING" | "DISABLED" | "ENABLED" | "NOT_CONFIGURED" | "NOT_INSTALLED" | "UPDATING";
/** Defines performance levels for a bucket */
export type BackupBucketPerformanceEnum = "HIGH_PERF" | "STANDARD";
/** Roles that a bucket can assume */
export type BackupBucketRoleEnum = "PRIMARY" | "REPLICA";
/** Backup tenant resource */
export interface BackupTenant {
    createdAt?: string;
    currentState?: BackupTenantCurrentState;
    currentTasks?: CommonCurrentTask[];
    id?: string;
    resourceStatus?: CommonResourceStatusEnum;
    targetSpec?: BackupTenantTargetSpec;
    updatedAt?: string;
}
/** Shows the current state of a backup tenant with its associated VSPC tenants and vaults */
export interface BackupTenantCurrentState {
    id?: string;
    name?: string;
    vaults?: string[];
    vspcTenants?: string[];
}
/** Specifies the target state of your backup tenant */
export interface BackupTenantTargetSpec {
    name?: string;
}
/** Represents a backup tenant vault */
export interface BackupTenantVault {
    createdAt?: string;
    currentState?: BackupTenantVaultCurrentState;
    currentTasks?: CommonCurrentTask[];
    id?: string;
    resourceStatus?: CommonResourceStatusEnum;
    targetSpec?: BackupTenantVaultTargetSpec;
    updatedAt?: string;
}
/** Represents a bucket resource for a vault */
export interface BackupTenantVaultBucket {
    id?: string;
    name?: string;
    performance?: BackupBucketPerformanceEnum;
    region?: CommonRegionEnum;
    role?: BackupBucketRoleEnum;
    status?: CommonResourceStatusEnum;
}
/** Provides vault resource for a backup tenant */
export interface BackupTenantVaultCurrentState {
    buckets?: BackupTenantVaultBucket[];
    id?: string;
    name?: string;
    region?: CommonRegionEnum;
    resourceName?: string;
    status?: CommonResourceStatusEnum;
    type?: BackupVaultTypeEnum;
    vspcTenants?: string[];
}
/** Specifies the target state of your vault */
export interface BackupTenantVaultTargetSpec {
    name: string;
}
/** Represents a backup tenant vault */
export interface BackupTenantVaultWithIAM {
    createdAt?: string;
    currentState?: BackupTenantVaultCurrentState;
    currentTasks?: CommonCurrentTask[];
    iam?: IamResourceMetadata | null;
    id?: string;
    resourceStatus?: CommonResourceStatusEnum;
    targetSpec?: BackupTenantVaultTargetSpec;
    updatedAt?: string;
}
/** Represents a VSPC tenant */
export interface BackupTenantVspc {
    createdAt?: string;
    currentState?: BackupTenantVspcCurrentState;
    currentTasks?: CommonCurrentTask[];
    id?: string;
    resourceStatus?: CommonResourceStatusEnum;
    targetSpec?: BackupTenantVspcTargetSpec;
    updatedAt?: string;
}
/** Represents a VSPC backup agent */
export interface BackupTenantVspcBackupAgent {
    createdAt?: string;
    currentState?: BackupTenantVspcBackupAgentCurrentState;
    currentTasks?: CommonCurrentTask[];
    id?: string;
    status?: BackupAgentStatusEnum;
    targetSpec?: BackupTenantVspcBackupAgentTargetSpec;
    updatedAt?: string;
}
/** Creates a VSPC backup agent */
export interface BackupTenantVspcBackupAgentCreateSpec {
    displayName?: string;
    ips?: string[];
    productResourceName?: string;
    region?: CommonRegionEnum;
}
/** Represents a VSPC backup agent */
export interface BackupTenantVspcBackupAgentCurrentState {
    id?: string;
    ips?: string[];
    name?: string;
    policy?: string;
    productResourceName?: string;
    type?: BackupAgentProductTypeEnum;
    vaultId?: string | null;
}
/** Specifies the desired target state of a backup agent */
export interface BackupTenantVspcBackupAgentTargetSpec {
    displayName?: string;
    ips?: string[];
    policy?: string;
}
/** Details about a VSPC tenant */
export interface BackupTenantVspcCurrentState {
    accessUrl?: string;
    backupAgents?: BackupTenantVspcBackupAgentCurrentState[];
    companyName?: string;
    id?: string;
    name?: string;
    region?: CommonRegionEnum;
    status?: CommonResourceStatusEnum;
    vaults?: BackupTenantVspcVault[];
}
/** Provides the download links for the Management Agent for all the supported OS */
export interface BackupTenantVspcManagementAgent {
    linuxDeployScript?: string | null;
    linuxUrl?: string;
    macUrl?: string;
    windowsUrl?: string;
}
/** Specifies the target state of your VSPC tenant */
export interface BackupTenantVspcTargetSpec {
    name: string;
}
/** Represent a vault linked to your VSPC tenant */
export interface BackupTenantVspcVault {
    allowedIps?: string[];
    id?: string;
    name?: string;
    performance?: BackupBucketPerformanceEnum;
    region?: CommonRegionEnum;
    resourceName?: string;
    status?: CommonResourceStatusEnum;
    type?: BackupVaultTypeEnum;
}
/** Represents a VSPC tenant */
export interface BackupTenantVspcWithIAM {
    createdAt?: string;
    currentState?: BackupTenantVspcCurrentState;
    currentTasks?: CommonCurrentTask[];
    iam?: IamResourceMetadata | null;
    id?: string;
    resourceStatus?: CommonResourceStatusEnum;
    targetSpec?: BackupTenantVspcTargetSpec;
    updatedAt?: string;
}
/** Backup tenant resource */
export interface BackupTenantWithIAM {
    createdAt?: string;
    currentState?: BackupTenantCurrentState;
    currentTasks?: CommonCurrentTask[];
    iam?: IamResourceMetadata | null;
    id?: string;
    resourceStatus?: CommonResourceStatusEnum;
    targetSpec?: BackupTenantTargetSpec;
    updatedAt?: string;
}
/** Indicates a vault billing type */
export type BackupVaultTypeEnum = "BUNDLE" | "PAYGO";
/** Asynchronous operation currently running */
export interface CommonCurrentTask {
    errors?: CommonTaskError[] | null;
    id?: string;
    link?: string;
    status?: CommonCurrentTaskStatusEnum | null;
    type?: string;
}
/** Current status of a task. A task in ERROR cannot be retried without your inputs. PENDING tasks will be executed as soon as possible. A RUNNING task is currently executing your original request. SCHEDULED is used for tasks that will be executed in the future */
export type CommonCurrentTaskStatusEnum = "ERROR" | "PENDING" | "RUNNING" | "SCHEDULED" | "WAITING_USER_INPUT";
/** RegionEnum */
export type CommonRegionEnum = "af-north-lz-rba" | "ap-south-mum" | "ap-southeast-sgp" | "ap-southeast-syd" | "ca-east-bhs" | "ca-east-tor" | "eu-central-lz-buh" | "eu-central-lz-prg" | "eu-central-lz-sof" | "eu-central-waw" | "eu-north-lz-cph" | "eu-north-lz-hel" | "eu-north-lz-osl" | "eu-north-lz-sto" | "eu-south-lz-lis" | "eu-south-lz-mad" | "eu-south-lz-mil" | "eu-south-mil" | "eu-west-eri" | "eu-west-gra" | "eu-west-gra-snc" | "eu-west-lim" | "eu-west-lz-ams" | "eu-west-lz-bru" | "eu-west-lz-dln" | "eu-west-lz-lux" | "eu-west-lz-mnc" | "eu-west-lz-mrs" | "eu-west-lz-vie" | "eu-west-lz-zrh" | "eu-west-par" | "eu-west-rbx" | "eu-west-rbx-snc" | "eu-west-sbg" | "eu-west-sbg-snc" | "us-central-lz-slc" | "us-central-lz-stl" | "us-east-lz-atl" | "us-east-lz-bos" | "us-east-lz-chi" | "us-east-lz-dal" | "us-east-lz-mia" | "us-east-lz-nyc" | "us-east-vin" | "us-west-hil" | "us-west-lz-den" | "us-west-lz-lax" | "us-west-lz-pao" | "us-west-lz-phx" | "us-west-lz-sea";
/** ResourceStatusEnum */
export type CommonResourceStatusEnum = "CREATING" | "DELETING" | "ERROR" | "OUT_OF_SYNC" | "READY" | "SUSPENDED" | "UNKNOWN" | "UPDATING";
/** Errors that occured on the task */
export interface CommonTaskError {
    message?: string;
}
/** Resource tag filter */
export interface IamResourceTagFilter {
    operator?: IamResourceTagFilterOperatorEnum | null;
    value?: string;
}
/** Operator that can be used in order to filter resources tags */
export type IamResourceTagFilterOperatorEnum = "EQ" | "EXISTS" | "ILIKE" | "LIKE" | "NEQ" | "NEXISTS";
/** IAM resource metadata embedded in services models */
export interface IamResourceMetadata {
    displayName?: string | null;
    id?: string;
    state?: IamResourceMetadataStateEnum | null;
    tags?: Record<string, string> | null;
    urn?: string;
}
/** Resource state */
export type IamResourceMetadataStateEnum = "EXPIRED" | "IN_CREATION" | "OK" | "SUSPENDED";
//# sourceMappingURL=types.d.ts.map