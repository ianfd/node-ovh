import type { OvhClient } from '../core/client';
import { encodePath } from '../core/path';
import type { RequestOptions } from '../core/types';

export type PublicCloudUserRole =
  | 'administrator'
  | 'ai_training_operator'
  | 'ai_training_read'
  | 'authentication'
  | 'backup_operator'
  | 'compute_operator'
  | 'image_operator'
  | 'infrastructure_supervisor'
  | 'key-manager_operator'
  | 'key-manager_read'
  | 'load-balancer_operator'
  | 'network_operator'
  | 'network_security_operator'
  | 'objectstore_operator'
  | 'quantum_operator'
  | 'quantum_reader'
  | 'share_operator'
  | 'volume_operator';

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

export class ObjectStorageClient {
  readonly users: ObjectStorageUsersClient;
  readonly buckets: ObjectStorageBucketsClient;
  readonly policies: ObjectStoragePolicyHelpers;

  constructor(private readonly client: OvhClient) {
    this.users = new ObjectStorageUsersClient(client);
    this.buckets = new ObjectStorageBucketsClient(client);
    this.policies = new ObjectStoragePolicyHelpers();
  }

  endpoint(options: S3EndpointOptions): string {
    const region = options.region.toLowerCase();
    const service = options.website ? 's3-website' : 's3';
    const suffix = options.archive ? '-archive' : '';
    const endpoint = `https://${service}.${region}${suffix}.io.cloud.ovh.net`;
    return options.trailingSlash === false ? endpoint : `${endpoint}/`;
  }

  canonicalUserId(projectName: string, username: string): string {
    return `${projectName}:${username}`;
  }
}

export class ObjectStorageUsersClient {
  readonly roles: ObjectStorageUserRolesClient;
  readonly credentials: ObjectStorageUserCredentialsClient;
  readonly policies: ObjectStorageUserPoliciesClient;

  constructor(private readonly client: OvhClient) {
    this.roles = new ObjectStorageUserRolesClient(client);
    this.credentials = new ObjectStorageUserCredentialsClient(client);
    this.policies = new ObjectStorageUserPoliciesClient(client);
  }

  list(params: ProjectParams, options?: RequestOptions): Promise<PublicCloudUser[]> {
    return this.client.requestLegacy<PublicCloudUser[]>(
      'GET',
      encodePath('/cloud/project/{projectId}/user', params),
      options,
    );
  }

  create(params: ProjectParams & { body: CreateObjectStorageUserBody }, options?: RequestOptions): Promise<PublicCloudUserDetail> {
    return this.client.requestLegacy<PublicCloudUserDetail>(
      'POST',
      encodePath('/cloud/project/{projectId}/user', params),
      { ...options, body: params.body },
    );
  }

  get(params: UserParams, options?: RequestOptions): Promise<PublicCloudUser> {
    return this.client.requestLegacy<PublicCloudUser>(
      'GET',
      encodePath('/cloud/project/{projectId}/user/{userId}', params),
      options,
    );
  }

  delete(params: UserParams, options?: RequestOptions): Promise<void> {
    return this.client.requestLegacy<void>(
      'DELETE',
      encodePath('/cloud/project/{projectId}/user/{userId}', params),
      options,
    );
  }

  regeneratePassword(params: UserParams, options?: RequestOptions): Promise<PublicCloudUserDetail> {
    return this.client.requestLegacy<PublicCloudUserDetail>(
      'POST',
      encodePath('/cloud/project/{projectId}/user/{userId}/regeneratePassword', params),
      options,
    );
  }

  configuration(params: UserParams & { region?: string }, options?: RequestOptions): Promise<ClientConfiguration> {
    return this.client.requestLegacy<ClientConfiguration>(
      'GET',
      encodePath('/cloud/project/{projectId}/user/{userId}/configuration', params),
      { ...options, query: { ...options?.query, region: params.region } },
    );
  }

  openrc(params: UserParams & { region: string; version?: OpenrcVersion }, options?: RequestOptions): Promise<ClientConfiguration> {
    return this.client.requestLegacy<ClientConfiguration>(
      'GET',
      encodePath('/cloud/project/{projectId}/user/{userId}/openrc', params),
      { ...options, query: { ...options?.query, region: params.region, version: params.version } },
    );
  }

  rclone(params: UserParams & { region: string; service?: RcloneService }, options?: RequestOptions): Promise<RcloneConfiguration> {
    return this.client.requestLegacy<RcloneConfiguration>(
      'GET',
      encodePath('/cloud/project/{projectId}/user/{userId}/rclone', params),
      { ...options, query: { ...options?.query, region: params.region, service: params.service ?? 'storage-s3' } },
    );
  }
}

export class ObjectStorageUserRolesClient {
  constructor(private readonly client: OvhClient) {}

  list(params: UserParams, options?: RequestOptions): Promise<PublicCloudRole[]> {
    return this.client.requestLegacy<PublicCloudRole[]>(
      'GET',
      encodePath('/cloud/project/{projectId}/user/{userId}/role', params),
      options,
    );
  }

  add(params: UserParams & { roleId: string }, options?: RequestOptions): Promise<PublicCloudUserDetail> {
    return this.client.requestLegacy<PublicCloudUserDetail>(
      'POST',
      encodePath('/cloud/project/{projectId}/user/{userId}/role', params),
      { ...options, body: { roleId: params.roleId } },
    );
  }

  update(params: UserParams & { roleIds: string[] }, options?: RequestOptions): Promise<PublicCloudUserDetail> {
    return this.client.requestLegacy<PublicCloudUserDetail>(
      'PUT',
      encodePath('/cloud/project/{projectId}/user/{userId}/role', params),
      { ...options, body: { rolesIds: params.roleIds } },
    );
  }

  get(params: RoleParams, options?: RequestOptions): Promise<PublicCloudRole> {
    return this.client.requestLegacy<PublicCloudRole>(
      'GET',
      encodePath('/cloud/project/{projectId}/user/{userId}/role/{roleId}', params),
      options,
    );
  }

  delete(params: RoleParams, options?: RequestOptions): Promise<void> {
    return this.client.requestLegacy<void>(
      'DELETE',
      encodePath('/cloud/project/{projectId}/user/{userId}/role/{roleId}', params),
      options,
    );
  }
}

export class ObjectStorageUserCredentialsClient {
  constructor(private readonly client: OvhClient) {}

  list(params: UserParams, options?: RequestOptions): Promise<S3Credentials[]> {
    return this.client.requestLegacy<S3Credentials[]>(
      'GET',
      encodePath('/cloud/project/{projectId}/user/{userId}/s3Credentials', params),
      options,
    );
  }

  create(params: UserParams, options?: RequestOptions): Promise<S3CredentialsWithSecret> {
    return this.client.requestLegacy<S3CredentialsWithSecret>(
      'POST',
      encodePath('/cloud/project/{projectId}/user/{userId}/s3Credentials', params),
      options,
    );
  }

  get(params: CredentialParams, options?: RequestOptions): Promise<S3Credentials> {
    return this.client.requestLegacy<S3Credentials>(
      'GET',
      encodePath('/cloud/project/{projectId}/user/{userId}/s3Credentials/{access}', params),
      options,
    );
  }

  delete(params: CredentialParams, options?: RequestOptions): Promise<void> {
    return this.client.requestLegacy<void>(
      'DELETE',
      encodePath('/cloud/project/{projectId}/user/{userId}/s3Credentials/{access}', params),
      options,
    );
  }

  revealSecret(params: CredentialParams, options?: RequestOptions): Promise<S3CredentialsSecretOnly> {
    return this.client.requestLegacy<S3CredentialsSecretOnly>(
      'POST',
      encodePath('/cloud/project/{projectId}/user/{userId}/s3Credentials/{access}/secret', params),
      options,
    );
  }
}

export class ObjectStorageUserPoliciesClient {
  constructor(private readonly client: OvhClient) {}

  export(params: UserParams, options?: RequestOptions): Promise<RawStoragePolicy> {
    return this.client.requestLegacy<RawStoragePolicy>(
      'GET',
      encodePath('/cloud/project/{projectId}/user/{userId}/policy', params),
      options,
    );
  }

  import(params: UserParams & { policy: string | S3PolicyDocument }, options?: RequestOptions): Promise<void> {
    const policy = typeof params.policy === 'string' ? params.policy : JSON.stringify(params.policy);
    return this.client.requestLegacy<void>(
      'POST',
      encodePath('/cloud/project/{projectId}/user/{userId}/policy', params),
      { ...options, body: { policy } },
    );
  }
}

export class ObjectStorageBucketsClient {
  constructor(private readonly client: OvhClient) {}

  list(params: RegionParams, options?: RequestOptions): Promise<ObjectStorageBucketSummary[]> {
    return this.client.requestLegacy<ObjectStorageBucketSummary[]>(
      'GET',
      encodePath('/cloud/project/{projectId}/region/{region}/storage', params),
      options,
    );
  }

  create(
    params: RegionParams & { body: CreateObjectStorageBucketBody },
    options?: RequestOptions,
  ): Promise<ObjectStorageBucket> {
    return this.client.requestLegacy<ObjectStorageBucket>(
      'POST',
      encodePath('/cloud/project/{projectId}/region/{region}/storage', params),
      { ...options, body: params.body },
    );
  }

  get(
    params: BucketParams & { noObjects?: boolean; prefix?: string; limit?: number; marker?: string },
    options?: RequestOptions,
  ): Promise<ObjectStorageBucket> {
    return this.client.requestLegacy<ObjectStorageBucket>(
      'GET',
      encodePath('/cloud/project/{projectId}/region/{region}/storage/{name}', params),
      {
        ...options,
        query: {
          ...options?.query,
          noObjects: params.noObjects,
          prefix: params.prefix,
          limit: params.limit,
          marker: params.marker,
        },
      },
    );
  }

  update(
    params: BucketParams & { body: UpdateObjectStorageBucketBody },
    options?: RequestOptions,
  ): Promise<ObjectStorageBucket> {
    return this.client.requestLegacy<ObjectStorageBucket>(
      'PUT',
      encodePath('/cloud/project/{projectId}/region/{region}/storage/{name}', params),
      { ...options, body: params.body },
    );
  }

  delete(params: BucketParams, options?: RequestOptions): Promise<void> {
    return this.client.requestLegacy<void>(
      'DELETE',
      encodePath('/cloud/project/{projectId}/region/{region}/storage/{name}', params),
      options,
    );
  }

  addUserPolicy(
    params: BucketParams & { userId: number | string; roleName: ObjectStorageContainerPolicyRole; objectKey?: string },
    options?: RequestOptions,
  ): Promise<void> {
    return this.client.requestLegacy<void>(
      'POST',
      encodePath('/cloud/project/{projectId}/region/{region}/storage/{name}/policy/{userId}', params),
      { ...options, body: { roleName: params.roleName, objectKey: params.objectKey } },
    );
  }
}

export class ObjectStoragePolicyHelpers {
  fullAccess(options: Pick<CreateS3PolicyOptions, 'sid'> = {}): S3PolicyDocument {
    return {
      Statement: [{
        Sid: options.sid ?? 'FullAccess',
        Effect: 'Allow',
        Action: 's3:*',
        Resource: '*',
      }],
    };
  }

  readWrite(options: CreateS3PolicyOptions): S3PolicyDocument {
    return this.forBucket({
      ...options,
      sid: options.sid ?? 'ReadWriteBucket',
      actions: [
        's3:GetObject',
        's3:PutObject',
        's3:DeleteObject',
        's3:ListBucket',
        's3:ListMultipartUploadParts',
        's3:ListBucketMultipartUploads',
        's3:AbortMultipartUpload',
        's3:GetBucketLocation',
      ],
    });
  }

  readOnly(options: CreateS3PolicyOptions): S3PolicyDocument {
    return this.forBucket({
      ...options,
      sid: options.sid ?? 'ReadOnlyBucket',
      actions: [
        's3:GetObject',
        's3:ListBucket',
        's3:ListMultipartUploadParts',
        's3:ListBucketMultipartUploads',
      ],
    });
  }

  denyListAllMyBuckets(options: Pick<CreateS3PolicyOptions, 'sid'> = {}): S3PolicyDocument {
    return {
      Statement: [{
        Sid: options.sid ?? 'DenyListAllMyBuckets',
        Effect: 'Deny',
        Action: 's3:ListAllMyBuckets',
        Resource: '*',
      }],
    };
  }

  private forBucket(options: CreateS3PolicyOptions & { actions: string[] }): S3PolicyDocument {
    if (!options.bucket) {
      throw new Error('A bucket name is required to build a bucket-scoped S3 policy');
    }

    const objectArn = options.prefix
      ? `arn:aws:s3:::${options.bucket}/${trimSlashes(options.prefix)}/*`
      : `arn:aws:s3:::${options.bucket}/*`;

    return {
      Statement: [{
        Sid: options.sid,
        Effect: 'Allow',
        Action: options.actions,
        Resource: [`arn:aws:s3:::${options.bucket}`, objectArn],
      }],
    };
  }
}

function trimSlashes(value: string): string {
  return value.replace(/^\/+|\/+$/g, '');
}
