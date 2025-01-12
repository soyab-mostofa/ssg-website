import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com', 'assets.aceternity.com'],
  },
  // Your Next.js config here
}

export default withPayload(nextConfig)
