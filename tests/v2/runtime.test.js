'use strict';

const assert = require('node:assert/strict');
const test = require('node:test');

const {
  OvhApiError,
  OvhClient,
  legacyApplicationKey,
  oauth2,
} = require('../../dist');

function jsonResponse(body, init = {}) {
  return new Response(JSON.stringify(body), {
    status: init.status || 200,
    statusText: init.statusText,
    headers: {
      'Content-Type': 'application/json',
      ...(init.headers || {}),
    },
  });
}

test('requestWithResponse builds query, schema, pagination, and metadata', async () => {
  const calls = [];
  const client = new OvhClient({
    baseUrl: 'https://example.test/v2',
    schemaVersion: '1.0',
    fetch: async (url, init) => {
      calls.push({ url: String(url), init });
      return jsonResponse([{ id: 'p1' }], {
        headers: {
          'X-Ovh-Queryid': 'query-1',
          'X-Schemas-Version': '1.0',
          'X-Pagination-Cursor-Next': 'next-cursor',
        },
      });
    },
  });

  const response = await client.requestWithResponse('GET', '/iam/policy', {
    query: { action: ['a', 'b'], details: true, empty: undefined },
    pagination: { size: 50, cursor: 'cursor-1' },
  });

  assert.equal(response.queryId, 'query-1');
  assert.equal(response.schemaVersion, '1.0');
  assert.equal(response.nextCursor, 'next-cursor');
  assert.deepEqual(response.data, [{ id: 'p1' }]);
  assert.match(calls[0].url, /^https:\/\/example\.test\/v2\/iam\/policy\?/);
  assert.match(calls[0].url, /action=a/);
  assert.match(calls[0].url, /action=b/);
  assert.match(calls[0].url, /details=true/);
  assert.equal(calls[0].init.headers.get('X-Schemas-Version'), '1.0');
  assert.equal(calls[0].init.headers.get('X-Pagination-Size'), '50');
  assert.equal(calls[0].init.headers.get('X-Pagination-Cursor'), 'cursor-1');
});

test('request throws normalized OvhApiError', async () => {
  const client = new OvhClient({
    baseUrl: 'https://example.test/v2',
    fetch: async () => jsonResponse({ message: 'Forbidden' }, {
      status: 403,
      statusText: 'Forbidden',
      headers: { 'X-Ovh-Queryid': 'query-error' },
    }),
  });

  await assert.rejects(
    client.request('GET', '/iam/policy'),
    (error) => {
      assert.ok(error instanceof OvhApiError);
      assert.equal(error.status, 403);
      assert.equal(error.message, 'Forbidden');
      assert.equal(error.queryId, 'query-error');
      assert.deepEqual(error.body, { message: 'Forbidden' });
      return true;
    },
  );
});

test('iterate follows cursor pagination', async () => {
  const seen = [];
  const client = new OvhClient({
    baseUrl: 'https://example.test/v2',
    fetch: async (url, init) => {
      seen.push({ url: String(url), cursor: init.headers.get('X-Pagination-Cursor') });
      if (!init.headers.get('X-Pagination-Cursor')) {
        return jsonResponse([{ id: 'first' }], {
          headers: { 'X-Pagination-Cursor-Next': 'cursor-2' },
        });
      }
      return jsonResponse([{ id: 'second' }]);
    },
  });

  const items = [];
  for await (const item of client.iam.policy.iterate({ pageSize: 25 })) {
    items.push(item);
  }

  assert.deepEqual(items, [{ id: 'first' }, { id: 'second' }]);
  assert.equal(seen[0].cursor, null);
  assert.equal(seen[1].cursor, 'cursor-2');
});

test('generated clients are attached and nested by API path', async () => {
  const calls = [];
  const client = new OvhClient({
    baseUrl: 'https://example.test/v2',
    fetch: async (url, init) => {
      calls.push({ url: String(url), init });
      return jsonResponse([]);
    },
  });

  assert.equal(typeof client.account.version.get, 'function');
  assert.equal(typeof client.publicCloud.project.rancher.list, 'function');
  assert.equal(typeof client.okms.resource.credential.create, 'function');

  await client.publicCloud.project.rancher.list({
    projectId: 'project-1',
    pageSize: 10,
  });

  assert.equal(
    calls[0].url,
    'https://example.test/v2/publicCloud/project/project-1/rancher',
  );
  assert.equal(calls[0].init.headers.get('X-Pagination-Size'), '10');
});

test('objectStorage helper targets legacy Public Cloud user and S3 credential routes', async () => {
  const calls = [];
  const client = new OvhClient({
    baseUrl: 'https://example.test/v2',
    fetch: async (url, init) => {
      calls.push({ url: String(url), init });
      if (String(url).endsWith('/s3Credentials')) {
        return jsonResponse({ access: 'access-key', secret: 'secret-key' });
      }
      return jsonResponse({ id: 42, username: 'user-abc', password: 'password' });
    },
  });

  assert.equal(client.s3, client.objectStorage);
  assert.equal(typeof client.objectStorage.users.create, 'function');

  const user = await client.objectStorage.users.create({
    projectId: 'project-1',
    body: {
      description: 'backups',
      roles: ['objectstore_operator'],
    },
  });
  const credentials = await client.s3.users.credentials.create({
    projectId: 'project-1',
    userId: user.id,
  });

  assert.equal(calls[0].url, 'https://example.test/1.0/cloud/project/project-1/user');
  assert.equal(calls[0].init.method, 'POST');
  assert.deepEqual(JSON.parse(calls[0].init.body), {
    description: 'backups',
    roles: ['objectstore_operator'],
  });
  assert.equal(
    calls[1].url,
    'https://example.test/1.0/cloud/project/project-1/user/42/s3Credentials',
  );
  assert.equal(credentials.secret, 'secret-key');
});

test('objectStorage helper imports policies and assigns users to buckets', async () => {
  const calls = [];
  const client = new OvhClient({
    baseUrl: 'https://example.test/v2',
    fetch: async (url, init) => {
      calls.push({ url: String(url), init });
      return jsonResponse(null);
    },
  });

  const policy = client.s3.policies.readWrite({ bucket: 'backups', prefix: '/daily/' });
  await client.s3.users.policies.import({
    projectId: 'project-1',
    userId: 42,
    policy,
  });
  await client.s3.buckets.addUserPolicy({
    projectId: 'project-1',
    region: 'GRA',
    name: 'backups',
    userId: 42,
    roleName: 'readWrite',
    objectKey: 'daily',
  });

  assert.deepEqual(policy.Statement[0].Resource, [
    'arn:aws:s3:::backups',
    'arn:aws:s3:::backups/daily/*',
  ]);
  assert.equal(
    calls[0].url,
    'https://example.test/1.0/cloud/project/project-1/user/42/policy',
  );
  assert.equal(JSON.parse(calls[0].init.body).policy, JSON.stringify(policy));
  assert.equal(
    calls[1].url,
    'https://example.test/1.0/cloud/project/project-1/region/GRA/storage/backups/policy/42',
  );
  assert.deepEqual(JSON.parse(calls[1].init.body), {
    roleName: 'readWrite',
    objectKey: 'daily',
  });
});

test('objectStorage helper creates and manages buckets through OVH Public Cloud routes', async () => {
  const calls = [];
  const client = new OvhClient({
    baseUrl: 'https://example.test/v2',
    fetch: async (url, init) => {
      calls.push({ url: String(url), init });
      return jsonResponse({ name: 'backups', region: 'GRA', ownerId: 42 });
    },
  });

  await client.s3.buckets.create({
    projectId: 'project-1',
    region: 'GRA',
    body: {
      name: 'backups',
      ownerId: 42,
      versioning: { status: 'enabled' },
      encryption: { sseAlgorithm: 'AES256' },
      tags: { app: 'backup' },
    },
  });
  await client.s3.buckets.get({
    projectId: 'project-1',
    region: 'GRA',
    name: 'backups',
    noObjects: true,
  });
  await client.s3.buckets.delete({
    projectId: 'project-1',
    region: 'GRA',
    name: 'backups',
  });

  assert.equal(
    calls[0].url,
    'https://example.test/1.0/cloud/project/project-1/region/GRA/storage',
  );
  assert.equal(calls[0].init.method, 'POST');
  assert.deepEqual(JSON.parse(calls[0].init.body), {
    name: 'backups',
    ownerId: 42,
    versioning: { status: 'enabled' },
    encryption: { sseAlgorithm: 'AES256' },
    tags: { app: 'backup' },
  });
  assert.equal(
    calls[1].url,
    'https://example.test/1.0/cloud/project/project-1/region/GRA/storage/backups?noObjects=true',
  );
  assert.equal(calls[2].init.method, 'DELETE');
});

test('objectStorage helper builds OVH S3 endpoint and canonical user id', () => {
  const client = new OvhClient({
    baseUrl: 'https://example.test/v2',
    fetch: async () => jsonResponse({ ok: true }),
  });

  assert.equal(client.s3.endpoint({ region: 'GRA' }), 'https://s3.gra.io.cloud.ovh.net/');
  assert.equal(
    client.s3.endpoint({ region: 'RBX', archive: true, trailingSlash: false }),
    'https://s3.rbx-archive.io.cloud.ovh.net',
  );
  assert.equal(
    client.s3.endpoint({ region: 'GRA', website: true }),
    'https://s3-website.gra.io.cloud.ovh.net/',
  );
  assert.equal(client.s3.canonicalUserId('my_project', 'storage-user'), 'my_project:storage-user');
});

test('OAuth2 auth fetches and caches token', async () => {
  let tokenCalls = 0;
  const apiCalls = [];
  const fetchImpl = async (url, init) => {
    if (String(url).includes('/oauth2/token')) {
      tokenCalls += 1;
      assert.equal(init.method, 'POST');
      assert.match(init.headers.Authorization, /^Basic /);
      return jsonResponse({ access_token: 'token-1', expires_in: 3600 });
    }

    apiCalls.push(init.headers.get('Authorization'));
    return jsonResponse({ ok: true });
  };

  const client = new OvhClient({
    baseUrl: 'https://example.test/v2',
    fetch: fetchImpl,
    auth: oauth2({
      clientId: 'client',
      clientSecret: 'secret',
      tokenUrl: 'https://auth.example.test/oauth2/token',
      fetch: fetchImpl,
    }),
  });

  await client.request('GET', '/account/version');
  await client.request('GET', '/account/version');

  assert.equal(tokenCalls, 1);
  assert.deepEqual(apiCalls, ['Bearer token-1', 'Bearer token-1']);
});

test('legacy auth signs requests with API time', async () => {
  const calls = [];
  const fetchImpl = async (url, init = {}) => {
    if (String(url).endsWith('/auth/time')) {
      return new Response(String(Math.round(Date.now() / 1000)), { status: 200 });
    }
    calls.push({ url: String(url), init });
    return jsonResponse({ ok: true });
  };

  const client = new OvhClient({
    baseUrl: 'https://example.test/v2',
    fetch: fetchImpl,
    auth: legacyApplicationKey({
      applicationKey: 'ak',
      applicationSecret: 'as',
      consumerKey: 'ck',
      authTimeUrl: 'https://example.test/auth/time',
    }),
  });

  await client.request('POST', '/iam/policy', { body: { name: 'policy' } });

  const headers = calls[0].init.headers;
  assert.equal(headers.get('X-Ovh-Application'), 'ak');
  assert.equal(headers.get('X-Ovh-Consumer'), 'ck');
  assert.match(headers.get('X-Ovh-Signature'), /^\$1\$[0-9a-f]{40}$/);
});
