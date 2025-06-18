import '../globals.css'
import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'
import { StagewiseToolbar } from '@stagewise/toolbar-next'
import { ReactPlugin } from '@stagewise-plugins/react'
import {
  OrganizationStructuredData,
  WebsiteStructuredData,
} from '@/app/_components/seo/StructuredData'
import type { Metadata, Viewport } from 'next'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.shinshingroup.com'),
  title: {
    template: '%s | Shin Shin Group',
    default: 'Shin Shin Group - Leading Sustainable Apparel Manufacturer',
  },
  description:
    "Shin Shin Group is Bangladesh's leading sustainable apparel manufacturer, pioneering eco-friendly practices in textile manufacturing with innovative designs and ethical production.",
  keywords: [
    'Shin Shin Group',
    'Bangladesh apparel manufacturer',
    'sustainable textile',
    'eco-friendly clothing',
    'garment manufacturer',
    'textile industry Bangladesh',
    'sustainable fashion',
    'ethical manufacturing',
    'green factory',
    'LEED certified factory',
  ],
  authors: [{ name: 'Shin Shin Group' }],
  creator: 'Shin Shin Group',
  publisher: 'Shin Shin Group',
  applicationName: 'Shin Shin Group',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.shinshingroup.com',
    siteName: 'Shin Shin Group',
    title: 'Shin Shin Group - Leading Sustainable Apparel Manufacturer',
    description:
      "Shin Shin Group is Bangladesh's leading sustainable apparel manufacturer, pioneering eco-friendly practices in textile manufacturing with innovative designs and ethical production.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Shin Shin Group - Leading Sustainable Apparel Manufacturer',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shin Shin Group - Leading Sustainable Apparel Manufacturer',
    description:
      "Shin Shin Group is Bangladesh's leading sustainable apparel manufacturer, pioneering eco-friendly practices in textile manufacturing with innovative designs and ethical production.",
    images: ['/twitter-image.png'],
    creator: '@shinshingroupbd',
    site: '@shinshingroupbd',
  },
  alternates: {
    canonical: 'https://www.shinshingroup.com',
    languages: {
      'en-US': 'https://www.shinshingroup.com',
    },
  },
  category: 'manufacturing',
  classification: 'Business',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className={cn(inter.className, 'relative bg-others-white font-sans subpixel-antialiased')}
        suppressHydrationWarning
      >
        <OrganizationStructuredData />
        <WebsiteStructuredData />
        <StagewiseToolbar
          config={{
            plugins: [ReactPlugin],
          }}
        />
        <main id="main-content">{children}</main>
      </body>
    </html>
  )
}
