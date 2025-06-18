# Vercel Blob Storage Setup for Payload CMS

This guide explains how to configure Vercel Blob Storage with Payload CMS for the Shin Shin Group website.

## 📦 Installation

The `@payloadcms/storage-vercel-blob` package has been installed:

```bash
pnpm add @payloadcms/storage-vercel-blob
```

## 🔧 Configuration

### 1. Payload Configuration

The Vercel Blob storage has been configured in `src/payload.config.ts`:

```typescript
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

export default buildConfig({
  // ... other config
  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true, // Enable for Media collection
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
      addRandomSuffix: false,
      cacheControlMaxAge: 365 * 24 * 60 * 60, // 1 year cache
    }),
  ],
})
```

### 2. Environment Variables

Add the following environment variable to your `.env.local` file:

```bash
# Vercel Blob Storage
BLOB_READ_WRITE_TOKEN=your_vercel_blob_token_here
```

## 🔑 Getting Your Vercel Blob Token

### Step 1: Enable Blob Storage in Vercel

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to the **Storage** tab
4. Click **"Create Database"** → **"Blob"**
5. Choose your region (preferably close to your users)
6. Click **"Create"**

### Step 2: Get Your Token

1. After creating the Blob storage, go to the **Settings** tab of your Blob store
2. Copy the `BLOB_READ_WRITE_TOKEN` value
3. Add it to your environment variables

### Step 3: Add to Vercel Environment Variables

1. In your Vercel project dashboard, go to **Settings** → **Environment Variables**
2. Add a new variable:
   - **Name**: `BLOB_READ_WRITE_TOKEN`
   - **Value**: Your token from Step 2
   - **Environments**: Production, Preview, Development (as needed)

## 🏗️ Configuration Options

The Vercel Blob storage plugin supports these configuration options:

```typescript
vercelBlobStorage({
  enabled: boolean,              // Enable/disable the plugin (default: true)
  collections: {                 // Collections to apply Blob storage to
    [collectionSlug]: true | {
      prefix?: string,            // Optional prefix for files
    }
  },
  token: string,                 // Vercel Blob read/write token (required)
  addRandomSuffix: boolean,      // Add random suffix to filenames (default: false)
  cacheControlMaxAge: number,    // Cache-Control max-age in seconds (default: 1 year)
  clientUploads?: boolean,       // Enable direct client uploads (bypasses Vercel limits)
})
```

## 📁 Current Setup

Our configuration:

- **Enabled Collections**: `media`
- **Prefix**: None (files stored at root level)
- **Random Suffix**: Disabled (preserves original filenames)
- **Cache Duration**: 1 year (optimal for static assets)
- **Client Uploads**: Not configured (server-side uploads)

## 🚀 Benefits of Vercel Blob Storage

1. **Seamless Integration**: Native Vercel integration
2. **Global CDN**: Automatic global distribution
3. **Optimized Performance**: Edge caching and delivery
4. **Simple Pricing**: Pay-as-you-use model
5. **No Configuration**: Zero-config CDN and caching
6. **Scalable**: Automatically scales with your needs

## 🔄 Migration from S3

The previous S3 configuration has been replaced with Vercel Blob storage. Key changes:

### Removed S3 Configuration:
- `@payloadcms/storage-s3` package usage
- S3-specific environment variables
- Custom S3 endpoint configuration

### Added Vercel Blob Configuration:
- `@payloadcms/storage-vercel-blob` package
- `BLOB_READ_WRITE_TOKEN` environment variable
- Simplified configuration

## 📝 Usage in Collections

The storage configuration is automatically applied to the specified collections. No changes needed in collection definitions.

Example Media collection (`src/collections/Media.ts`):
```typescript
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: true, // This enables upload functionality
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
```

## 🛠️ Development vs Production

### Development
- Set `BLOB_READ_WRITE_TOKEN` in `.env.local`
- Files uploaded during development go to the same Blob store

### Production
- Environment variable automatically set by Vercel
- Production uploads are isolated from development

## 📊 Monitoring and Limits

### Vercel Blob Limits (as of 2024):
- **Free Plan**: 500MB storage, 1GB bandwidth/month
- **Pro Plan**: 100GB storage, 1TB bandwidth/month
- **Enterprise**: Custom limits

### Monitoring:
1. Check usage in Vercel Dashboard → Storage → Blob
2. Monitor bandwidth usage in Analytics
3. Set up alerts for approaching limits

## 🔍 Troubleshooting

### Common Issues:

1. **"Invalid token" error**:
   - Verify `BLOB_READ_WRITE_TOKEN` is correctly set
   - Ensure token hasn't expired or been revoked

2. **Upload failures**:
   - Check Vercel function timeout limits
   - Consider enabling `clientUploads` for large files

3. **File not found errors**:
   - Verify Blob storage is properly created in Vercel
   - Check that files were uploaded successfully

### Debug Mode:
Add logging to check configuration:

```typescript
console.log('Blob token configured:', !!process.env.BLOB_READ_WRITE_TOKEN)
```

## 📚 Additional Resources

- [Vercel Blob Documentation](https://vercel.com/docs/storage/vercel-blob)
- [Payload Storage Adapters](https://payloadcms.com/docs/upload/storage-adapters)
- [Vercel Pricing](https://vercel.com/pricing/storage)

---

*Last updated: ${new Date().toISOString().split('T')[0]}*
