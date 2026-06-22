import {
  OvhClient,
  oauth2,
  type PublicCloudUserRole,
  type S3CredentialsWithSecret,
  type S3PolicyDocument,
} from '../../src';

const client = new OvhClient({
  endpoint: 'ovh-eu',
  auth: oauth2({
    clientId: 'client-id',
    clientSecret: 'client-secret',
  }),
});

const objectStorageRole: PublicCloudUserRole = 'objectstore_operator';
const policy: S3PolicyDocument = client.s3.policies.readWrite({
  bucket: 'typed-bucket',
  prefix: 'daily',
});

async function exerciseObjectStorageSurface(): Promise<S3CredentialsWithSecret> {
  const user = await client.objectStorage.users.create({
    projectId: 'project-id',
    body: {
      description: 'typed-storage-user',
      roles: [objectStorageRole],
    },
  });

  await client.s3.users.roles.add({
    projectId: 'project-id',
    userId: user.id!,
    roleId: 'role-id',
  });

  const credentials = await client.s3.users.credentials.create({
    projectId: 'project-id',
    userId: user.id!,
  });

  await client.s3.buckets.create({
    projectId: 'project-id',
    region: 'GRA',
    body: {
      name: 'typed-bucket',
      ownerId: user.id!,
      versioning: { status: 'enabled' },
      encryption: { sseAlgorithm: 'AES256' },
      tags: { app: 'typed' },
    },
  });

  await client.s3.users.policies.import({
    projectId: 'project-id',
    userId: user.id!,
    policy,
  });

  await client.s3.buckets.addUserPolicy({
    projectId: 'project-id',
    region: 'GRA',
    name: 'typed-bucket',
    userId: user.id!,
    roleName: 'readWrite',
  });

  const endpoint: string = client.s3.endpoint({ region: 'GRA' });
  const canonicalUserId: string = client.objectStorage.canonicalUserId('project-name', user.username!);

  void endpoint;
  void canonicalUserId;

  return credentials;
}

void exerciseObjectStorageSurface;
