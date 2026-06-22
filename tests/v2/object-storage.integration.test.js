'use strict';

const assert = require('node:assert/strict');
const test = require('node:test');

const {
  OvhClient,
  legacyApplicationKey,
  oauth2,
} = require('../../dist');

const enabled = process.env.OVH_OBJECT_STORAGE_INTEGRATION === '1';
const projectId = process.env.OVH_PROJECT_ID;
const bucket = process.env.OVH_OBJECT_STORAGE_BUCKET;
const region = process.env.OVH_OBJECT_STORAGE_REGION || 'GRA';
const hasOAuth = Boolean(process.env.OVH_CLIENT_ID && process.env.OVH_CLIENT_SECRET);
const hasLegacy = Boolean(process.env.OVH_APP_KEY && process.env.OVH_APP_SECRET && process.env.OVH_CONSUMER_KEY);

test('credentialed Object Storage user and S3 credential flow', {
  skip: skipReason(),
  timeout: 120000,
}, async () => {
  const client = new OvhClient({
    endpoint: process.env.OVH_ENDPOINT || 'ovh-eu',
    auth: createAuth(),
    timeout: 30000,
  });

  let createdUserId;
  let createdBucketName;
  const description = `node-ovh-object-storage-${Date.now()}`;

  try {
    const user = await client.s3.users.create({
      projectId,
      body: {
        description,
        roles: ['objectstore_operator'],
      },
    });

    assert.equal(typeof user.id, 'number');
    assert.equal(typeof user.username, 'string');
    createdUserId = user.id;

    const credentials = await client.s3.users.credentials.create({
      projectId,
      userId: createdUserId,
    });

    assert.equal(typeof credentials.access, 'string');
    assert.equal(typeof credentials.secret, 'string');

    if (bucket) {
      const createdBucket = await client.s3.buckets.create({
        projectId,
        region,
        body: {
          name: bucket,
          ownerId: createdUserId,
        },
      });

      createdBucketName = createdBucket.name || bucket;

      await client.s3.users.policies.import({
        projectId,
        userId: createdUserId,
        policy: client.s3.policies.readWrite({ bucket }),
      });

      const exportedPolicy = await client.s3.users.policies.export({
        projectId,
        userId: createdUserId,
      });

      assert.match(exportedPolicy.policy || '', new RegExp(`arn:aws:s3:::${escapeRegExp(bucket)}`));
    }
  } finally {
    if (createdBucketName !== undefined) {
      await client.s3.buckets.delete({
        projectId,
        region,
        name: createdBucketName,
      });
    }
    if (createdUserId !== undefined) {
      await client.s3.users.delete({
        projectId,
        userId: createdUserId,
      });
    }
  }
});

function skipReason() {
  if (!enabled) {
    return 'set OVH_OBJECT_STORAGE_INTEGRATION=1 to run credentialed Object Storage integration tests';
  }
  if (!projectId) {
    return 'set OVH_PROJECT_ID';
  }
  if (!hasOAuth && !hasLegacy) {
    return 'set OAuth2 credentials or legacy AK/AS/CK credentials';
  }
  return false;
}

function createAuth() {
  if (hasOAuth) {
    return oauth2({
      clientId: process.env.OVH_CLIENT_ID,
      clientSecret: process.env.OVH_CLIENT_SECRET,
    });
  }

  return legacyApplicationKey({
    applicationKey: process.env.OVH_APP_KEY,
    applicationSecret: process.env.OVH_APP_SECRET,
    consumerKey: process.env.OVH_CONSUMER_KEY,
  });
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
