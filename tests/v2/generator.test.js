'use strict';

const assert = require('node:assert/strict');
const test = require('node:test');
const accountSchema = require('../fixtures/v2/account.json');
const { generateSection } = require('../../scripts/generate-v2-client');

test('generator converts OVH section schema into TypeScript types and client methods', () => {
  const section = generateSection(accountSchema, 'account');

  assert.equal(section.sectionName, 'account');
  assert.equal(section.className, 'AccountClient');
  assert.equal(section.operations.length, 2);
  assert.match(section.typesSource, /export interface VersionsVersionAccountVersionInput/);
  assert.match(section.typesSource, /targetSpec: VersionsVersionAccountVersionTargetSpec;/);
  assert.match(section.clientSource, /readonly version: AccountClientVersion/);
  assert.match(section.clientSource, /get\(params: RequestOptions = {}\)/);
  assert.match(section.clientSource, /update\(params: VersionUpdateParams\)/);
  assert.match(section.clientSource, /"PUT", encodePath\("\/account\/version"/);
});

test('generated broad index exports section type namespaces', () => {
  const generatedIndex = require('node:fs').readFileSync(
    require('node:path').join(__dirname, '../../src/generated/v2/index.ts'),
    'utf8',
  );

  assert.match(generatedIndex, /export \* as IamTypes from '.\/iam\/types';/);
  assert.match(generatedIndex, /export \* as PublicCloudTypes from '.\/publicCloud\/types';/);
});

test('generator keeps local model references in query parameters', () => {
  const iamClient = require('node:fs').readFileSync(
    require('node:path').join(__dirname, '../../src/generated/v2/iam/client.ts'),
    'utf8',
  );

  assert.match(iamClient, /tags\?: Record<string, IamResourceTagFilter\[]>;/);
});
