'use strict';

const assert = require('node:assert/strict');
const test = require('node:test');

const enabled = process.env.OVH_LIVE_SCHEMA === '1';

test('live OVH v2 schema index exposes expected sections', { skip: !enabled }, async () => {
  const response = await fetch('https://api.eu.ovhcloud.com/v2');
  assert.equal(response.ok, true);

  const index = await response.json();
  const paths = new Set(index.apis.map((api) => api.path));
  assert.equal(paths.has('/account'), true);
  assert.equal(paths.has('/iam'), true);
  assert.equal(typeof index.basePath, 'string');
});

test('live OVH v2 account schema has version operations', { skip: !enabled }, async () => {
  const response = await fetch('https://api.eu.ovhcloud.com/v2/account.json');
  assert.equal(response.ok, true);

  const schema = await response.json();
  const version = schema.apis.find((api) => api.path === '/account/version');
  assert.ok(version);
  assert.deepEqual(
    version.operations.map((operation) => operation.httpMethod).sort(),
    ['GET', 'PUT'],
  );
});
