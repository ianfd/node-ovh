import type { OvhClient } from '../core/client';
import type { RequestOptions } from '../core/types';
export type PublicCloudUserRole = 'administrator' | 'ai_training_operator' | 'ai_training_read' | 'authentication' | 'backup_operator' | 'compute_operator' | 'image_operator' | 'infrastructure_supervisor' | 'key-manager_operator' | 'key-manager_read' | 'load-balancer_operator' | 'network_operator' | 'network_security_operator' | 'objectstore_operator' | 'quantum_operator' | 'quantum_reader' | 'share_operator' | 'volume_operator';
export type PublicCloudUserStatus = 'creating' | 'deleted' | 'deleting' | 'disabled' | 'ok' | 'updating';
export type OpenrcVersion = 'v2.0' | 'v3';
export type RcloneService = 'storage' | 'storage-s3';
export type ObjectStorageContainerPolicyRole = 'admin' | 'deny' | 'readOnly' | 'readWrite';
export interface PublicCloudRole {
    description?: string;
    id?: string;
    name?: string;
    permissions?: string[];
}
export interface PublicCloudUser {
    creationDate?: string;
    description?: string;
    id?: number;
    openstackId?: string | null;
    roles?: PublicCloudRole[];
    status?: PublicCloudUserStatus;
    username?: string;
}
export interface PublicCloudUserDetail extends PublicCloudUser {
    password?: string;
}
export interface CreateObjectStorageUserBody {
    description?: string | null;
    role?: PublicCloudUserRole | null;
    roles?: PublicCloudUserRole[] | null;
}
export interface S3Credentials {
    access?: string;
    tenantId?: string;
    userId?: string;
}
export interface S3CredentialsWithSecret extends S3Credentials {
    secret?: string;
}
export interface S3CredentialsSecretOnly {
    secret?: string;
}
export interface RawStoragePolicy {
    policy?: string;
}
export interface RcloneConfiguration {
    content?: string;
}
export interface ClientConfiguration {
    content?: string;
}
export interface S3EndpointOptions {
    region: string;
    archive?: boolean;
    website?: boolean;
    trailingSlash?: boolean;
}
export interface S3PolicyDocument {
    Version?: string;
    Statement: S3PolicyStatement[];
}
export interface S3PolicyStatement {
    Sid?: string;
    Effect: 'Allow' | 'Deny';
    Action: string | string[];
    Resource: string | string[];
    Condition?: Record<string, unknown>;
}
export interface CreateS3PolicyOptions {
    bucket?: string;
    prefix?: string;
    sid?: string;
}
export type ObjectStorageVersioningStatus = 'enabled' | 'suspended';
export type ObjectStorageEncryptionAlgorithm = 'AES256' | 'aws:kms';
export type ObjectStorageObjectLockStatus = 'enabled' | 'disabled';
export type ObjectStorageObjectLockMode = 'governance' | 'compliance';
export interface ObjectStorageBucketVersioning {
    status?: ObjectStorageVersioningStatus;
}
export interface ObjectStorageBucketEncryption {
    sseAlgorithm?: ObjectStorageEncryptionAlgorithm;
    kmsMasterKeyId?: string;
}
export interface ObjectStorageBucketObjectLock {
    status?: ObjectStorageObjectLockStatus;
    rule?: {
        mode?: ObjectStorageObjectLockMode;
        period?: string;
    };
}
export interface CreateObjectStorageBucketBody {
    name: string;
    ownerId?: number | null;
    versioning?: ObjectStorageBucketVersioning | null;
    encryption?: ObjectStorageBucketEncryption | null;
    objectLock?: ObjectStorageBucketObjectLock | null;
    lifecycle?: unknown;
    replication?: unknown;
    tags?: Record<string, string> | null;
}
export interface UpdateObjectStorageBucketBody {
    versioning?: ObjectStorageBucketVersioning | null;
    encryption?: ObjectStorageBucketEncryption | null;
    objectLock?: ObjectStorageBucketObjectLock | null;
    lifecycle?: unknown;
    replication?: unknown;
    tags?: Record<string, string> | null;
}
export interface ObjectStorageBucket {
    createdAt?: string;
    encryption?: unknown;
    lifecycle?: unknown;
    name?: string;
    objectLock?: unknown;
    objects?: ObjectStorageObject[];
    objectsCount?: number;
    objectsSize?: number;
    ownerId?: number;
    region?: string;
    replication?: unknown;
    tags?: Record<string, string> | null;
    versioning?: unknown;
    virtualHost?: string;
}
export interface ObjectStorageBucketSummary {
    name?: string;
    objectsCount?: number;
    objectsSize?: number;
    ownerId?: number;
    region?: string;
    virtualHost?: string;
}
export interface ObjectStorageObject {
    contentType?: string;
    lastModified?: string;
    name?: string;
    size?: number;
    storageClass?: string;
    versionId?: string;
}
interface ProjectParams {
    projectId: string;
}
interface UserParams extends ProjectParams {
    userId: number | string;
}
interface RoleParams extends UserParams {
    roleId: string;
}
interface CredentialParams extends UserParams {
    access: string;
}
interface BucketParams extends ProjectParams {
    region: string;
    name: string;
}
interface RegionParams extends ProjectParams {
    region: string;
}
export declare class ObjectStorageClient {
    private readonly client;
    readonly users: ObjectStorageUsersClient;
    readonly buckets: ObjectStorageBucketsClient;
    readonly policies: ObjectStoragePolicyHelpers;
    constructor(client: OvhClient);
    endpoint(options: S3EndpointOptions): string;
    canonicalUserId(projectName: string, username: string): string;
}
export declare class ObjectStorageUsersClient {
    private readonly client;
    readonly roles: ObjectStorageUserRolesClient;
    readonly credentials: ObjectStorageUserCredentialsClient;
    readonly policies: ObjectStorageUserPoliciesClient;
    constructor(client: OvhClient);
    list(params: ProjectParams, options?: RequestOptions): Promise<PublicCloudUser[]>;
    create(params: ProjectParams & {
        body: CreateObjectStorageUserBody;
    }, options?: RequestOptions): Promise<PublicCloudUserDetail>;
    get(params: UserParams, options?: RequestOptions): Promise<PublicCloudUser>;
    delete(params: UserParams, options?: RequestOptions): Promise<void>;
    regeneratePassword(params: UserParams, options?: RequestOptions): Promise<PublicCloudUserDetail>;
    configuration(params: UserParams & {
        region?: string;
    }, options?: RequestOptions): Promise<ClientConfiguration>;
    openrc(params: UserParams & {
        region: string;
        version?: OpenrcVersion;
    }, options?: RequestOptions): Promise<ClientConfiguration>;
    rclone(params: UserParams & {
        region: string;
        service?: RcloneService;
    }, options?: RequestOptions): Promise<RcloneConfiguration>;
}
export declare class ObjectStorageUserRolesClient {
    private readonly client;
    constructor(client: OvhClient);
    list(params: UserParams, options?: RequestOptions): Promise<PublicCloudRole[]>;
    add(params: UserParams & {
        roleId: string;
    }, options?: RequestOptions): Promise<PublicCloudUserDetail>;
    update(params: UserParams & {
        roleIds: string[];
    }, options?: RequestOptions): Promise<PublicCloudUserDetail>;
    get(params: RoleParams, options?: RequestOptions): Promise<PublicCloudRole>;
    delete(params: RoleParams, options?: RequestOptions): Promise<void>;
}
export declare class ObjectStorageUserCredentialsClient {
    private readonly client;
    constructor(client: OvhClient);
    list(params: UserParams, options?: RequestOptions): Promise<S3Credentials[]>;
    create(params: UserParams, options?: RequestOptions): Promise<S3CredentialsWithSecret>;
    get(params: CredentialParams, options?: RequestOptions): Promise<S3Credentials>;
    delete(params: CredentialParams, options?: RequestOptions): Promise<void>;
    revealSecret(params: CredentialParams, options?: RequestOptions): Promise<S3CredentialsSecretOnly>;
}
export declare class ObjectStorageUserPoliciesClient {
    private readonly client;
    constructor(client: OvhClient);
    export(params: UserParams, options?: RequestOptions): Promise<RawStoragePolicy>;
    import(params: UserParams & {
        policy: string | S3PolicyDocument;
    }, options?: RequestOptions): Promise<void>;
}
export declare class ObjectStorageBucketsClient {
    private readonly client;
    constructor(client: OvhClient);
    list(params: RegionParams, options?: RequestOptions): Promise<ObjectStorageBucketSummary[]>;
    create(params: RegionParams & {
        body: CreateObjectStorageBucketBody;
    }, options?: RequestOptions): Promise<ObjectStorageBucket>;
    get(params: BucketParams & {
        noObjects?: boolean;
        prefix?: string;
        limit?: number;
        marker?: string;
    }, options?: RequestOptions): Promise<ObjectStorageBucket>;
    update(params: BucketParams & {
        body: UpdateObjectStorageBucketBody;
    }, options?: RequestOptions): Promise<ObjectStorageBucket>;
    delete(params: BucketParams, options?: RequestOptions): Promise<void>;
    addUserPolicy(params: BucketParams & {
        userId: number | string;
        roleName: ObjectStorageContainerPolicyRole;
        objectKey?: string;
    }, options?: RequestOptions): Promise<void>;
}
export declare class ObjectStoragePolicyHelpers {
    fullAccess(options?: Pick<CreateS3PolicyOptions, 'sid'>): S3PolicyDocument;
    readWrite(options: CreateS3PolicyOptions): S3PolicyDocument;
    readOnly(options: CreateS3PolicyOptions): S3PolicyDocument;
    denyListAllMyBuckets(options?: Pick<CreateS3PolicyOptions, 'sid'>): S3PolicyDocument;
    private forBucket;
}
export {};
//# sourceMappingURL=client.d.ts.map