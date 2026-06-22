import { OvhClient, oauth2 } from '@ovhcloud/node-ovh/v2';

const projectId = requiredEnv('OVH_PROJECT_ID');
const region = process.env.OVH_S3_REGION ?? 'GRA';
const bucket = requiredEnv('OVH_S3_BUCKET');

const client = new OvhClient({
  endpoint: 'ovh-eu',
  auth: oauth2({
    clientId: requiredEnv('OVH_CLIENT_ID'),
    clientSecret: requiredEnv('OVH_CLIENT_SECRET'),
  }),
});

const user = await client.s3.users.create({
  projectId,
  body: {
    description: `node-ovh-s3-${Date.now()}`,
    roles: ['objectstore_operator'],
  },
});

const credentials = await client.s3.users.credentials.create({
  projectId,
  userId: user.id!,
});

await client.s3.buckets.create({
  projectId,
  region,
  body: {
    name: bucket,
    ownerId: user.id!,
    versioning: { status: 'enabled' },
  },
});

await client.s3.users.policies.import({
  projectId,
  userId: user.id!,
  policy: client.s3.policies.readWrite({ bucket }),
});

console.log({
  endpoint: client.s3.endpoint({ region }),
  region: region.toLowerCase(),
  userId: user.id,
  username: user.username,
  accessKeyId: credentials.access,
  secretAccessKey: credentials.secret,
});

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}
