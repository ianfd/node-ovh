"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectStoragePolicyHelpers = exports.ObjectStorageBucketsClient = exports.ObjectStorageUserPoliciesClient = exports.ObjectStorageUserCredentialsClient = exports.ObjectStorageUserRolesClient = exports.ObjectStorageUsersClient = exports.ObjectStorageClient = void 0;
const path_1 = require("../core/path");
class ObjectStorageClient {
    client;
    users;
    buckets;
    policies;
    constructor(client) {
        this.client = client;
        this.users = new ObjectStorageUsersClient(client);
        this.buckets = new ObjectStorageBucketsClient(client);
        this.policies = new ObjectStoragePolicyHelpers();
    }
    endpoint(options) {
        const region = options.region.toLowerCase();
        const service = options.website ? 's3-website' : 's3';
        const suffix = options.archive ? '-archive' : '';
        const endpoint = `https://${service}.${region}${suffix}.io.cloud.ovh.net`;
        return options.trailingSlash === false ? endpoint : `${endpoint}/`;
    }
    canonicalUserId(projectName, username) {
        return `${projectName}:${username}`;
    }
}
exports.ObjectStorageClient = ObjectStorageClient;
class ObjectStorageUsersClient {
    client;
    roles;
    credentials;
    policies;
    constructor(client) {
        this.client = client;
        this.roles = new ObjectStorageUserRolesClient(client);
        this.credentials = new ObjectStorageUserCredentialsClient(client);
        this.policies = new ObjectStorageUserPoliciesClient(client);
    }
    list(params, options) {
        return this.client.requestLegacy('GET', (0, path_1.encodePath)('/cloud/project/{projectId}/user', params), options);
    }
    create(params, options) {
        return this.client.requestLegacy('POST', (0, path_1.encodePath)('/cloud/project/{projectId}/user', params), { ...options, body: params.body });
    }
    get(params, options) {
        return this.client.requestLegacy('GET', (0, path_1.encodePath)('/cloud/project/{projectId}/user/{userId}', params), options);
    }
    delete(params, options) {
        return this.client.requestLegacy('DELETE', (0, path_1.encodePath)('/cloud/project/{projectId}/user/{userId}', params), options);
    }
    regeneratePassword(params, options) {
        return this.client.requestLegacy('POST', (0, path_1.encodePath)('/cloud/project/{projectId}/user/{userId}/regeneratePassword', params), options);
    }
    configuration(params, options) {
        return this.client.requestLegacy('GET', (0, path_1.encodePath)('/cloud/project/{projectId}/user/{userId}/configuration', params), { ...options, query: { ...options?.query, region: params.region } });
    }
    openrc(params, options) {
        return this.client.requestLegacy('GET', (0, path_1.encodePath)('/cloud/project/{projectId}/user/{userId}/openrc', params), { ...options, query: { ...options?.query, region: params.region, version: params.version } });
    }
    rclone(params, options) {
        return this.client.requestLegacy('GET', (0, path_1.encodePath)('/cloud/project/{projectId}/user/{userId}/rclone', params), { ...options, query: { ...options?.query, region: params.region, service: params.service ?? 'storage-s3' } });
    }
}
exports.ObjectStorageUsersClient = ObjectStorageUsersClient;
class ObjectStorageUserRolesClient {
    client;
    constructor(client) {
        this.client = client;
    }
    list(params, options) {
        return this.client.requestLegacy('GET', (0, path_1.encodePath)('/cloud/project/{projectId}/user/{userId}/role', params), options);
    }
    add(params, options) {
        return this.client.requestLegacy('POST', (0, path_1.encodePath)('/cloud/project/{projectId}/user/{userId}/role', params), { ...options, body: { roleId: params.roleId } });
    }
    update(params, options) {
        return this.client.requestLegacy('PUT', (0, path_1.encodePath)('/cloud/project/{projectId}/user/{userId}/role', params), { ...options, body: { rolesIds: params.roleIds } });
    }
    get(params, options) {
        return this.client.requestLegacy('GET', (0, path_1.encodePath)('/cloud/project/{projectId}/user/{userId}/role/{roleId}', params), options);
    }
    delete(params, options) {
        return this.client.requestLegacy('DELETE', (0, path_1.encodePath)('/cloud/project/{projectId}/user/{userId}/role/{roleId}', params), options);
    }
}
exports.ObjectStorageUserRolesClient = ObjectStorageUserRolesClient;
class ObjectStorageUserCredentialsClient {
    client;
    constructor(client) {
        this.client = client;
    }
    list(params, options) {
        return this.client.requestLegacy('GET', (0, path_1.encodePath)('/cloud/project/{projectId}/user/{userId}/s3Credentials', params), options);
    }
    create(params, options) {
        return this.client.requestLegacy('POST', (0, path_1.encodePath)('/cloud/project/{projectId}/user/{userId}/s3Credentials', params), options);
    }
    get(params, options) {
        return this.client.requestLegacy('GET', (0, path_1.encodePath)('/cloud/project/{projectId}/user/{userId}/s3Credentials/{access}', params), options);
    }
    delete(params, options) {
        return this.client.requestLegacy('DELETE', (0, path_1.encodePath)('/cloud/project/{projectId}/user/{userId}/s3Credentials/{access}', params), options);
    }
    revealSecret(params, options) {
        return this.client.requestLegacy('POST', (0, path_1.encodePath)('/cloud/project/{projectId}/user/{userId}/s3Credentials/{access}/secret', params), options);
    }
}
exports.ObjectStorageUserCredentialsClient = ObjectStorageUserCredentialsClient;
class ObjectStorageUserPoliciesClient {
    client;
    constructor(client) {
        this.client = client;
    }
    export(params, options) {
        return this.client.requestLegacy('GET', (0, path_1.encodePath)('/cloud/project/{projectId}/user/{userId}/policy', params), options);
    }
    import(params, options) {
        const policy = typeof params.policy === 'string' ? params.policy : JSON.stringify(params.policy);
        return this.client.requestLegacy('POST', (0, path_1.encodePath)('/cloud/project/{projectId}/user/{userId}/policy', params), { ...options, body: { policy } });
    }
}
exports.ObjectStorageUserPoliciesClient = ObjectStorageUserPoliciesClient;
class ObjectStorageBucketsClient {
    client;
    constructor(client) {
        this.client = client;
    }
    list(params, options) {
        return this.client.requestLegacy('GET', (0, path_1.encodePath)('/cloud/project/{projectId}/region/{region}/storage', params), options);
    }
    create(params, options) {
        return this.client.requestLegacy('POST', (0, path_1.encodePath)('/cloud/project/{projectId}/region/{region}/storage', params), { ...options, body: params.body });
    }
    get(params, options) {
        return this.client.requestLegacy('GET', (0, path_1.encodePath)('/cloud/project/{projectId}/region/{region}/storage/{name}', params), {
            ...options,
            query: {
                ...options?.query,
                noObjects: params.noObjects,
                prefix: params.prefix,
                limit: params.limit,
                marker: params.marker,
            },
        });
    }
    update(params, options) {
        return this.client.requestLegacy('PUT', (0, path_1.encodePath)('/cloud/project/{projectId}/region/{region}/storage/{name}', params), { ...options, body: params.body });
    }
    delete(params, options) {
        return this.client.requestLegacy('DELETE', (0, path_1.encodePath)('/cloud/project/{projectId}/region/{region}/storage/{name}', params), options);
    }
    addUserPolicy(params, options) {
        return this.client.requestLegacy('POST', (0, path_1.encodePath)('/cloud/project/{projectId}/region/{region}/storage/{name}/policy/{userId}', params), { ...options, body: { roleName: params.roleName, objectKey: params.objectKey } });
    }
}
exports.ObjectStorageBucketsClient = ObjectStorageBucketsClient;
class ObjectStoragePolicyHelpers {
    fullAccess(options = {}) {
        return {
            Statement: [{
                    Sid: options.sid ?? 'FullAccess',
                    Effect: 'Allow',
                    Action: 's3:*',
                    Resource: '*',
                }],
        };
    }
    readWrite(options) {
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
    readOnly(options) {
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
    denyListAllMyBuckets(options = {}) {
        return {
            Statement: [{
                    Sid: options.sid ?? 'DenyListAllMyBuckets',
                    Effect: 'Deny',
                    Action: 's3:ListAllMyBuckets',
                    Resource: '*',
                }],
        };
    }
    forBucket(options) {
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
exports.ObjectStoragePolicyHelpers = ObjectStoragePolicyHelpers;
function trimSlashes(value) {
    return value.replace(/^\/+|\/+$/g, '');
}
