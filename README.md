# OVHcloud API v2 TypeScript client

A modern async TypeScript client for OVHcloud API v2, generated from the v2
schema index and designed for strong autocomplete, typed request options,
cursor pagination, OAuth2 service accounts, and practical Object Storage/S3
workflows.

## Installation

Install the package with your preferred package manager.

```bash
bun add @accelome/node-ovh
```

## TypeScript API v2 client beta

The package root and the `./v2` subpath both expose the same v2 client.

```ts
import { OvhClient, oauth2 } from '@accelome/node-ovh';

const client = new OvhClient({
  endpoint: 'ovh-eu',
  auth: oauth2({
    clientId: process.env.OVH_CLIENT_ID!,
    clientSecret: process.env.OVH_CLIENT_SECRET!,
  }),
});

const version = await client.account.version.get();
const policies = await client.iam.policy.list({ details: true });
const ranchers = await client.publicCloud.project.rancher.list({
  projectId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
});
```

The v2 client is promise-only and supports request timeouts, `AbortSignal`,
schema-version headers, response metadata, cursor pagination, OAuth2 service
accounts, and legacy AK/AS/CK signing.

### Generic requests

Use `request<T>()` as an escape hatch when a generated convenience method does
not exist yet.

```ts
const policies = await client.request<Array<{ id: string }>>(
  'GET',
  '/iam/policy',
  { query: { details: true } },
);
```

Use `requestWithResponse<T>()` when response headers matter.

```ts
const response = await client.requestWithResponse('GET', '/iam/policy', {
  pagination: { size: 100 },
  schemaVersion: '1.0',
});

console.log(response.queryId, response.schemaVersion, response.nextCursor);
```

### Pagination

Paginated v2 endpoints expose cursor helpers.

```ts
for await (const policy of client.iam.policy.iterate({ pageSize: 100 })) {
  console.log(policy.id);
}

const allPolicies = await client.iam.policy.listAll({ pageSize: 100 });
```

Generated sections are attached from the live v2 schema index and follow the
static API path segments for editor navigation. For example:

```ts
await client.account.version.get();
await client.iam.policy.get({ policyId: '...' });
await client.okms.resource.credential.create({ okmsId: '...', body: { csr: '...' } });
await client.publicCloud.project.storage.block.volume.list({ projectId: '...' });
await client.vrackServices.resource.eligibleManagedService.list({ vrackServicesId: '...' });
```

### Object Storage / S3

The v2 schema currently contains Object Storage models but does not expose the
S3 bucket and Public Cloud user operations as generated v2 routes. For this
workflow the v2 client exposes an explicit compatibility namespace backed by the
official Public Cloud `/1.0` routes.

```ts
const user = await client.s3.users.create({
  projectId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  body: {
    description: 'backup-writer',
    roles: ['objectstore_operator'],
  },
});

const credentials = await client.s3.users.credentials.create({
  projectId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  userId: user.id!,
});

await client.s3.buckets.create({
  projectId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  region: 'GRA',
  body: {
    name: 'my-backups',
    ownerId: user.id!,
    versioning: { status: 'enabled' },
  },
});

await client.s3.users.policies.import({
  projectId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  userId: user.id!,
  policy: client.s3.policies.readWrite({ bucket: 'my-backups' }),
});

console.log(credentials.access, credentials.secret);
console.log(client.s3.endpoint({ region: 'GRA' }));
```

You can also attach one of OVHcloud's predefined bucket access profiles.

```ts
await client.s3.buckets.addUserPolicy({
  projectId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  region: 'GRA',
  name: 'my-backups',
  userId: user.id!,
  roleName: 'readWrite',
});
```

The same helper is available as `client.objectStorage` if you prefer the product
name over the shorthand.

A complete vertical slice is available in
`examples/object-storage-s3.ts`. It creates an Object Storage user, creates a
bucket through OVHcloud's Public Cloud API, creates S3 credentials for that user,
imports a read/write bucket policy, and prints the AWS-compatible endpoint and
credentials shape.

```bash
OVH_CLIENT_ID=... \
OVH_CLIENT_SECRET=... \
OVH_PROJECT_ID=... \
OVH_S3_REGION=GRA \
OVH_S3_BUCKET=my-backups \
bun examples/object-storage-s3.ts
```

The Object Storage integration test is disabled by default. Enable it only in a
real OVHcloud account that can create and delete Public Cloud users:

```bash
OVH_OBJECT_STORAGE_INTEGRATION=1 \
OVH_CLIENT_ID=... \
OVH_CLIENT_SECRET=... \
OVH_PROJECT_ID=... \
OVH_OBJECT_STORAGE_BUCKET=my-backups \
bun run test:v2
```

`OVH_OBJECT_STORAGE_BUCKET` is optional for the integration test. When omitted,
the test creates the Object Storage user and S3 credentials, then deletes the
user during cleanup without importing a bucket policy.

### Legacy credentials

OAuth2 service accounts are recommended for API v2, but legacy credentials are
also supported.

```ts
import { OvhClient, legacyApplicationKey } from '@accelome/node-ovh';

const client = new OvhClient({
  endpoint: 'ovh-eu',
  auth: legacyApplicationKey({
    applicationKey: process.env.APP_KEY!,
    applicationSecret: process.env.APP_SECRET!,
    consumerKey: process.env.CONSUMER_KEY!,
  }),
});
```

### Schema generation

The generated client is designed around the OVHcloud API v2 schema index at
`https://api.eu.ovhcloud.com/v2`. The generator fetches and caches section
schemas, then emits TypeScript models and clients.

```bash
bun run generate:v2
bun run build:v2
bun run test:v2
```
