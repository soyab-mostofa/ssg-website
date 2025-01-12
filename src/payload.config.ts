// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { s3Storage, S3StorageOptions } from '@payloadcms/storage-s3'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import SustainabilityReports from './collections/Report'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const s3Config: S3StorageOptions = {
  collections: {
    media: {
      disableLocalStorage: true,
      disablePayloadAccessControl: true,
      generateFileURL: ({ filename }) =>
        `${process.env.S3_PUBLIC_ENDPOINT}/api/v1/buckets/shin-shin-media/objects/download?preview=true&prefix=${filename}&version_id=null`,
    },
  },
  bucket: process.env.S3_BUCKET,
  config: {
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
    endpoint: process.env.S3_ENDPOINT,
    region: process.env.S3_REGION,
    forcePathStyle: true,
    logger: console,
  },
  acl: 'public-read',
  disableLocalStorage: true,
  enabled: true,
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, SustainabilityReports],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    // storage-adapter-placeholder
    s3Storage(s3Config),
  ],
})
