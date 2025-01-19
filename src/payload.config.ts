import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { s3Storage, S3StorageOptions } from '@payloadcms/storage-s3'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import SustainabilityReports from './collections/Report'
import JobApplications from './collections/JobApplications'
import JobListings from './collections/JobListing'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const s3Config: S3StorageOptions = {
  config: {
    endpoint: process.env.S3_ENDPOINT,

    credentials: {
      accessKeyId: process.env.MINIO_ROOT_USER,
      secretAccessKey: process.env.MINIO_ROOT_PASSWORD,
    },
    forcePathStyle: true,
    region: process.env.S3_REGION,
  },
  bucket: process.env.S3_BUCKET,

  collections: {
    media: {
      prefix: 'media',
      generateFileURL: ({ filename, prefix }) =>
        `${process.env.S3_ENDPOINT}/${process.env.S3_BUCKET}/${prefix}/${filename}`,
    },
  },
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, SustainabilityReports, JobApplications, JobListings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI as string,
  }),
  sharp,
  plugins: [s3Storage(s3Config)],
})
