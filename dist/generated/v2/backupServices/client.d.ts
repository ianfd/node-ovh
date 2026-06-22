import type { OvhClient } from '../../../core/client';
import type { PaginatedListOptions, RequestOptions } from '../../../core/types';
import type { BackupTenantVault, BackupTenantVaultTargetSpec, BackupTenantVaultWithIAM, BackupTenantVspc, BackupTenantVspcBackupAgent, BackupTenantVspcBackupAgentCreateSpec, BackupTenantVspcBackupAgentTargetSpec, BackupTenantVspcManagementAgent, BackupTenantVspcTargetSpec, BackupTenantVspcWithIAM, BackupTenantWithIAM, IamResourceTagFilter } from './types';
export interface TenantListParams extends PaginatedListOptions {
    iamTags?: Record<string, IamResourceTagFilter[]>;
}
export interface TenantGetParams extends RequestOptions {
    backupServicesId: string;
}
export interface TenantVaultListParams extends PaginatedListOptions {
    backupServicesId: string;
    iamTags?: Record<string, IamResourceTagFilter[]>;
}
export interface TenantVaultGetParams extends RequestOptions {
    backupServicesId: string;
    vaultId: string;
}
export interface TenantVaultUpdateParams extends RequestOptions {
    backupServicesId: string;
    vaultId: string;
    body: BackupTenantVaultTargetSpec;
}
export interface TenantVspcListParams extends PaginatedListOptions {
    backupServicesId: string;
    iamTags?: Record<string, IamResourceTagFilter[]>;
}
export interface TenantVspcGetParams extends RequestOptions {
    backupServicesId: string;
    vspcTenantId: string;
}
export interface TenantVspcUpdateParams extends RequestOptions {
    backupServicesId: string;
    vspcTenantId: string;
    body: BackupTenantVspcTargetSpec;
}
export interface TenantVspcBackupAgentListParams extends PaginatedListOptions {
    backupServicesId: string;
    vspcTenantId: string;
}
export interface TenantVspcBackupAgentCreateParams extends RequestOptions {
    backupServicesId: string;
    vspcTenantId: string;
    body: BackupTenantVspcBackupAgentCreateSpec;
}
export interface TenantVspcBackupAgentDeleteParams extends RequestOptions {
    backupAgentId: string;
    backupServicesId: string;
    vspcTenantId: string;
}
export interface TenantVspcBackupAgentGetParams extends RequestOptions {
    backupAgentId: string;
    backupServicesId: string;
    vspcTenantId: string;
}
export interface TenantVspcBackupAgentUpdateParams extends RequestOptions {
    backupAgentId: string;
    backupServicesId: string;
    vspcTenantId: string;
    body: BackupTenantVspcBackupAgentTargetSpec;
}
export interface TenantVspcBackupPoliciesListParams extends PaginatedListOptions {
    backupServicesId: string;
    vspcTenantId: string;
}
export interface TenantVspcManagementAgentGetParams extends RequestOptions {
    backupServicesId: string;
    vspcTenantId: string;
}
export declare class BackupServicesClient {
    private readonly client;
    readonly tenant: BackupServicesClientTenant;
    constructor(client: OvhClient);
}
export declare class BackupServicesClientTenant {
    private readonly client;
    readonly vault: BackupServicesClientTenantVault;
    readonly vspc: BackupServicesClientTenantVspc;
    constructor(client: OvhClient);
    /** Retrieves the backup tenants you manage */
    list(params?: TenantListParams): Promise<BackupTenantWithIAM[]>;
    /** Iterate over Retrieves the backup tenants you manage. */
    iterate(params?: TenantListParams): AsyncGenerator<BackupTenantWithIAM, void, void>;
    /** Load all pages for Retrieves the backup tenants you manage. */
    listAll(params?: TenantListParams): Promise<BackupTenantWithIAM[]>;
    /** Retrieves the details of your backup tenant */
    get(params: TenantGetParams): Promise<BackupTenantWithIAM>;
}
export declare class BackupServicesClientTenantVault {
    private readonly client;
    constructor(client: OvhClient);
    /** Lists vaults for your tenant */
    list(params: TenantVaultListParams): Promise<BackupTenantVaultWithIAM[]>;
    /** Iterate over Lists vaults for your tenant. */
    iterate(params: TenantVaultListParams): AsyncGenerator<BackupTenantVaultWithIAM, void, void>;
    /** Load all pages for Lists vaults for your tenant. */
    listAll(params: TenantVaultListParams): Promise<BackupTenantVaultWithIAM[]>;
    /** Retrieves specific vault details */
    get(params: TenantVaultGetParams): Promise<BackupTenantVaultWithIAM>;
    /** Updates vault display name and cloud repository */
    update(params: TenantVaultUpdateParams): Promise<BackupTenantVault>;
}
export declare class BackupServicesClientTenantVspc {
    private readonly client;
    readonly backupAgent: BackupServicesClientTenantVspcBackupAgent;
    readonly backupPolicies: BackupServicesClientTenantVspcBackupPolicies;
    readonly managementAgent: BackupServicesClientTenantVspcManagementAgent;
    constructor(client: OvhClient);
    /** Retrieves list of VSPC tenants */
    list(params: TenantVspcListParams): Promise<BackupTenantVspcWithIAM[]>;
    /** Iterate over Retrieves list of VSPC tenants. */
    iterate(params: TenantVspcListParams): AsyncGenerator<BackupTenantVspcWithIAM, void, void>;
    /** Load all pages for Retrieves list of VSPC tenants. */
    listAll(params: TenantVspcListParams): Promise<BackupTenantVspcWithIAM[]>;
    /** Retrieves details of a specific VSPC tenant */
    get(params: TenantVspcGetParams): Promise<BackupTenantVspcWithIAM>;
    /** Updates the display name of a VSPC tenant */
    update(params: TenantVspcUpdateParams): Promise<BackupTenantVspc>;
}
export declare class BackupServicesClientTenantVspcBackupAgent {
    private readonly client;
    constructor(client: OvhClient);
    /** Lists backup agents */
    list(params: TenantVspcBackupAgentListParams): Promise<BackupTenantVspcBackupAgent[]>;
    /** Iterate over Lists backup agents. */
    iterate(params: TenantVspcBackupAgentListParams): AsyncGenerator<BackupTenantVspcBackupAgent, void, void>;
    /** Load all pages for Lists backup agents. */
    listAll(params: TenantVspcBackupAgentListParams): Promise<BackupTenantVspcBackupAgent[]>;
    /** Creates backup agent */
    create(params: TenantVspcBackupAgentCreateParams): Promise<void>;
    /** Deletes backup agent */
    delete(params: TenantVspcBackupAgentDeleteParams): Promise<void>;
    /** Gets specific backup agent details */
    get(params: TenantVspcBackupAgentGetParams): Promise<BackupTenantVspcBackupAgent>;
    /** Updates backup agent */
    update(params: TenantVspcBackupAgentUpdateParams): Promise<void>;
}
export declare class BackupServicesClientTenantVspcBackupPolicies {
    private readonly client;
    constructor(client: OvhClient);
    /** Retrieves the list of backup policies available in your VSPC */
    list(params: TenantVspcBackupPoliciesListParams): Promise<string[]>;
    /** Iterate over Retrieves the list of backup policies available in your VSPC. */
    iterate(params: TenantVspcBackupPoliciesListParams): AsyncGenerator<string, void, void>;
    /** Load all pages for Retrieves the list of backup policies available in your VSPC. */
    listAll(params: TenantVspcBackupPoliciesListParams): Promise<string[]>;
}
export declare class BackupServicesClientTenantVspcManagementAgent {
    private readonly client;
    constructor(client: OvhClient);
    /** Retrieves the download link for the management agent */
    get(params: TenantVspcManagementAgentGetParams): Promise<BackupTenantVspcManagementAgent>;
}
//# sourceMappingURL=client.d.ts.map