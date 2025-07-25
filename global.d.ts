declare global {
  namespace NodeJS {
    interface ProcessEnv {
      S3_BUCKET: string

      MINIO_ROOT_USER: string

      MINIO_ROOT_PASSWORD: string

      S3_ENDPOINT?: string

      S3_REGION?: string

      PAYLOAD_SECRET?: string

      MONGODB_URI?: string
      MONGO_USERNAME?: string
      MONGO_PASSWORD?: string
      S3_PUBLIC_ENDPOINT?: string
    }
  }
}

export {}
