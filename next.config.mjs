import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    reactCompiler: true,
    webpackMemoryOptimizations: true,
  },

  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com', 'assets.aceternity.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Your Next.js config here
}

export default withPayload(nextConfig)
