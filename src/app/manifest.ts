import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Shin Shin Group - Leading Sustainable Apparel Manufacturer',
    short_name: 'Shin Shin Group',
    description:
      "Shin Shin Group is Bangladesh's leading sustainable apparel manufacturer, pioneering eco-friendly practices in textile manufacturing with innovative designs and ethical production.",
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    orientation: 'portrait',
    scope: '/',
    id: 'shin-shin-group-app',
    categories: ['business', 'manufacturing', 'sustainability'],
    lang: 'en',
    dir: 'ltr',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    screenshots: [
      {
        src: '/screenshot-wide.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Shin Shin Group Homepage - Desktop View',
      },
      {
        src: '/screenshot-narrow.png',
        sizes: '750x1334',
        type: 'image/png',
        form_factor: 'narrow',
        label: 'Shin Shin Group Homepage - Mobile View',
      },
    ],
    related_applications: [],
    prefer_related_applications: false,
  }
}
