[![Node.js Wrapper for OVHcloud APIs](https://ovh.github.io/node-ovh/img/logo.png)](https://ovh.github.io/node-ovh)

The easiest way to use the [OVHcloud.com](https://www.ovhcloud.com) APIs in your [node.js](https://nodejs.org/) applications.

[![NPM Version](https://img.shields.io/npm/v/ovh.svg?style=flat)](https://www.npmjs.org/package/ovh)
[![Build Status](https://img.shields.io/travis/ovh/node-ovh.svg?style=flat)](https://travis-ci.org/ovh/node-ovh)
[![Coverage Status](https://img.shields.io/coveralls/ovh/node-ovh.svg?style=flat)](https://coveralls.io/r/ovh/node-ovh?branch=master)

```js
// Create your first application tokens here: https://api.ovh.com/createToken/?GET=/me
var ovh = require('@ovhcloud/node-ovh')({
  appKey: process.env.APP_KEY,
  appSecret: process.env.APP_SECRET,
  consumerKey: process.env.CONSUMER_KEY
});

ovh.request('GET', '/me', function (err, me) {
  console.log(err || 'Welcome ' + me.firstname);
});
```

You can also use the promised version like this:
```js
ovh.requestPromised('GET', '/me')
  .then(function (response) {
    //Do what you want
  })
  .catch(function (err) {
    //Return an error object like this {error: statusCode, message: message}
  });
```

## Installation

The easiest way to get the latest stable release is to grab it from the
[npm registry](https://npmjs.org/package/@ovhcloud/node-ovh).

```bash
$ npm install @ovhcloud/node-ovh
```

## TypeScript API v2 client beta

This package now exposes a modern async TypeScript client for OVHcloud API v2
through the `@ovhcloud/node-ovh/v2` subpath. The legacy client remains available
from the package root.

```ts
import { OvhClient, oauth2 } from '@ovhcloud/node-ovh/v2';

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
import { OvhClient, legacyApplicationKey } from '@ovhcloud/node-ovh/v2';

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

Alternatively, you may get latest development version directly from Git.

```bash
$ npm install git://github.com/ovh/node-ovh.git
```

## Example Usage

### OAuth2

#### 1. Generate credentials

Generate a valid pair of clientID/clientSecret following this [documentation](https://help.ovhcloud.com/csm/en-manage-service-account?id=kb_article_view&sysparm_article=KB0059343)

#### 2. Create an OVHcloud API client 

```js
var ovh = require('@ovhcloud/node-ovh')({
  clientID: 'YOUR_CLIENT_ID'
  clientSecret: 'YOUR_CLIENT_SECRET'
  endpoint: 'ovh-eu',
});
```

Depending on the API you want to use, you may set the endpoint to:
* `ovh-eu` for OVHcloud Europe API
* `ovh-us` for OVHcloud US API
* `ovh-ca` for OVHcloud Canada API


### Application Key/ApplicationSecret

#### 1. Create an application

Depending the API you plan to use, you need to create an application on the below
websites:

* [OVHcloud Europe](https://eu.api.ovh.com/createApp/)
* [OVHcloud US](https://api.us.ovhcloud.com/createApp/)
* [OVHcloud North-America](https://ca.api.ovh.com/createApp/)
* [SoYouStart Europe](https://eu.api.soyoustart.com/createApp/)
* [SoYouStart North-America](https://ca.api.soyoustart.com/createApp/)
* [Kimsufi Europe](https://eu.api.kimsufi.com/createApp/)
* [Kimsufi North-America](https://ca.api.kimsufi.com/createApp/)

Once created, you will obtain an **application key (AK)** and an **application
secret (AS)**.

#### 2. Authorize your application to access to a customer account

To allow your application to access to a customer account using an OVHcloud API,
you need a **consumer key (CK)**.

Here is a sample code you can use to allow your application to access to a
complete account.

Depending the API you want to use, you need to specify the below API endpoint:

* OVHcloud Europe: ```ovh-eu``` (default)
* OVHcloud US: ```ovh-us```
* OVHcloud North-America: ```ovh-ca```
* SoYouStart Europe: ```soyoustart-eu```
* SoYouStart North-America: ```soyoustart-ca```
* Kimsufi Europe: ```kimsufi-eu```
* Kimsufi North-America: ```kimsufi-ca```

```js
var ovh = require('@ovhcloud/node-ovh')({
  endpoint: 'ovh-eu',
  appKey: 'YOUR_APP_KEY',
  appSecret: 'YOUR_APP_SECRET'
});

ovh.request('POST', '/auth/credential', {
  'accessRules': [
    { 'method': 'GET', 'path': '/*'},
    { 'method': 'POST', 'path': '/*'},
    { 'method': 'PUT', 'path': '/*'},
    { 'method': 'DELETE', 'path': '/*'}
  ]
}, function (error, credential) {
  console.log(error || credential);
});
```

```bash
$ node credentials.js
{ validationUrl: 'https://api.ovh.com/auth/?credentialToken=XXX',
  consumerKey: 'CK',
  state: 'pendingValidation' }
```

This consumer key can be scoped with a **specific authorization**.
For example if your application will only send SMS:

```javascript
ovh.request('POST', '/auth/credential', {
  'accessRules': [
    { 'method': 'POST', 'path': '/sms/*/jobs'},
  ]
}, function (error, credential) {
  console.log(error || credential);
});
```

Once the consumer key will be authorized on the specified URL,
you'll be able to play with the API calls allowed by this key.

#### 3. Let's play!

You are now be able to play with the API. Look at the
[examples available online](https://ovh.github.io/node-ovh#examples).

You can browse the API schemas using the web consoles of the APIs:

* [OVHcloud Europe](https://eu.api.ovh.com/console/)
* [OVHcloud US](https://api.us.ovhcloud.com/console/)
* [OVHcloud North-America](https://ca.api.ovh.com/console/)
* [SoYouStart Europe](https://eu.api.soyoustart.com/console/)
* [SoYouStart North-America](https://ca.api.soyoustart.com/console/)
* [Kimsufi Europe](https://eu.api.kimsufi.com/console/)
* [Kimsufi North-America](https://ca.api.kimsufi.com/console/)

## Migration from 1.x.x to 2.x.x without Proxy support

For example if you use the OVHcloud Europe API, you'll have to check on https://eu.api.ovh.com/console/ the endpoints available for your feature.

In order to have the informations about the bill with id "0123".
+ Before in 1.x.x with Proxy:

```javascript
ovh.me.bill["0123"].$get(function (err, billInformation) {

});
```

+ Now in 2.x.x with promise:

```javascript
ovh.requestPromised('GET', '/me/bill/0123') //This route has been found at https://eu.api.ovh.com/console/
  .then(function (billInformation) {

  })
  .catch(function (err) {

  });
```

## Full documentation and examples

The full documentation is available online: https://ovh.github.io/node-ovh.

## Hacking

### Get the sources

```bash
git clone https://github.com/ovh/node-ovh.git
cd node-ovh
```

You've developed a new cool feature? Fixed an annoying bug? We'd be happy
to hear from you!

### Run the tests

Tests are based on [mocha](https://mochajs.org/).
This package includes unit and integration tests.

```
git clone https://github.com/ovh/node-ovh.git
cd node-ovh
npm install -d
npm test
```

Integration tests use the OVHcloud /domain/zone API, the tokens can be created
[here](https://api.ovh.com/createToken/).

```
export APP_KEY=xxxxx
export APP_SECRET=yyyyy
export CONSUMER_KEY=zzzzz
export DOMAIN_ZONE_NAME=example.com
npm run-script test-integration
```

### Documentation

The documentation is based on [Github Pages](https://pages.github.com/) and is
available in the *gh-pages* branch.


## Supported APIs

### OVHcloud Europe

- **Documentation**: https://eu.api.ovh.com/
- **Community support**: api-subscribe@ml.ovh.net
- **Console**: https://eu.api.ovh.com/console
- **Create application credentials**: https://eu.api.ovh.com/createApp/
- **Create script credentials** (all keys at once): https://eu.api.ovh.com/createToken/

### OVHcloud US

- **Documentation**: https://api.us.ovhcloud.com/
- **Console**: https://api.us.ovhcloud.com/console/
- **Create application credentials**: https://api.us.ovhcloud.com/createApp/
- **Create script credentials** (all keys at once): https://api.us.ovhcloud.com/createToken/

### OVHcloud North America

- **Documentation**: https://ca.api.ovh.com/
- **Community support**: api-subscribe@ml.ovh.net
- **Console**: https://ca.api.ovh.com/console
- **Create application credentials**: https://ca.api.ovh.com/createApp/
- **Create script credentials** (all keys at once): https://ca.api.ovh.com/createToken/

### SoYouStart Europe

- **Documentation**: https://eu.api.soyoustart.com/
- **Community support**: api-subscribe@ml.ovh.net
- **Console**: https://eu.api.soyoustart.com/console/
- **Create application credentials**: https://eu.api.soyoustart.com/createApp/
- **Create script credentials** (all keys at once): https://eu.api.soyoustart.com/createToken/

### SoYouStart North America

- **Documentation**: https://ca.api.soyoustart.com/
- **Community support**: api-subscribe@ml.ovh.net
- **Console**: https://ca.api.soyoustart.com/console/
- **Create application credentials**: https://ca.api.soyoustart.com/createApp/
- **Create script credentials** (all keys at once): https://ca.api.soyoustart.com/createToken/

### Kimsufi Europe

- **Documentation**: https://eu.api.kimsufi.com/
- **Community support**: api-subscribe@ml.ovh.net
- **Console**: https://eu.api.kimsufi.com/console/
- **Create application credentials**: https://eu.api.kimsufi.com/createApp/
- **Create script credentials** (all keys at once): https://eu.api.kimsufi.com/createToken/

### Kimsufi North America

- **Documentation**: https://ca.api.kimsufi.com/
- **Community support**: api-subscribe@ml.ovh.net
- **Console**: https://ca.api.kimsufi.com/console/
- **Create application credentials**: https://ca.api.kimsufi.com/createApp/
- **Create script credentials** (all keys at once): https://ca.api.kimsufi.com/createToken/

## Related links

- **Contribute**: https://github.com/ovh/node-ovh
- **Report bugs**: https://github.com/ovh/node-ovh/issues
- **Download**: https://npmjs.org/package/ovh
