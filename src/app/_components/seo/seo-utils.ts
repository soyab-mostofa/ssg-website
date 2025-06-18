import type { Metadata } from 'next'

interface SEOConfig {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  noindex?: boolean
  nofollow?: boolean
  ogImage?: string
  ogType?: 'website' | 'article'
  twitterCard?: 'summary' | 'summary_large_image'
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  section?: string
  tags?: string[]
}

export function generateSEO(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonical,
    noindex = false,
    nofollow = false,
    ogImage,
    ogType = 'website',
    twitterCard = 'summary_large_image',
    publishedTime,
    modifiedTime,
    authors = [],
    section,
    tags = [],
  } = config

  const metadata: Metadata = {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    robots: {
      index: !noindex,
      follow: !nofollow,
      nocache: false,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },    openGraph: {
      title,
      description,
      type: ogType,
      locale: 'en_US',
      siteName: 'Shin Shin Group',
      ...(ogImage && {
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: title || 'Shin Shin Group',
            type: 'image/png',
          },
        ],
      }),
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors.length > 0 && { authors }),
      ...(section && { section }),
      ...(tags.length > 0 && { tags }),
    },
    twitter: {
      card: twitterCard,
      title,
      description,
      ...(ogImage && { images: [ogImage] }),
      creator: '@shinshingroupbd',
      site: '@shinshingroupbd',
    },
    ...(canonical && {
      alternates: {
        canonical,
      },
    }),
  }

  return metadata
}

export function generatePageSEO({
  title,
  description,
  path,
  keywords = [],
  ogImage = '/og-image.png',
  noindex = false,
  nofollow = false,
}: {
  title: string
  description: string
  path: string
  keywords?: string[]
  ogImage?: string
  noindex?: boolean
  nofollow?: boolean
}): Metadata {  return generateSEO({
    title,
    description,
    keywords,
    canonical: `https://www.shinshingroup.com${path}`,
    ogImage,
    noindex,
    nofollow,
  })
}

export function generateArticleSEO({
  title,
  description,
  path,
  keywords = [],
  ogImage = '/og-image.png',
  publishedTime,
  modifiedTime,
  authors = [],
  section,
  tags = [],
}: {
  title: string
  description: string
  path: string
  keywords?: string[]
  ogImage?: string
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  section?: string
  tags?: string[]
}): Metadata {  return generateSEO({
    title,
    description,
    keywords,
    canonical: `https://www.shinshingroup.com${path}`,
    ogImage,
    ogType: 'article',
    publishedTime,
    modifiedTime,
    authors,
    section,
    tags,
  })
}

export function generateProductSEO({
  title,
  description,
  path,
  keywords = [],
  ogImage = '/og-image.png',
  price,
  currency = 'USD',
  availability = 'InStock',
}: {
  title: string
  description: string
  path: string
  keywords?: string[]
  ogImage?: string
  price?: number
  currency?: string
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder'
}): Metadata {  const metadata = generateSEO({
    title,
    description,
    keywords,
    canonical: `https://www.shinshingroup.com${path}`,
    ogImage,
    ogType: 'website',
  })

  // Add product-specific metadata
  if (price) {
    metadata.other = {
      'product:price:amount': price.toString(),
      'product:price:currency': currency,
      'product:availability': availability,
    }
  }

  return metadata
}

// Helper function to truncate descriptions for meta tags
export function truncateDescription(description: string, maxLength = 160): string {
  if (description.length <= maxLength) return description
  
  const truncated = description.substring(0, maxLength)
  const lastSpace = truncated.lastIndexOf(' ')
  
  return lastSpace > 0 
    ? truncated.substring(0, lastSpace) + '...'
    : truncated + '...'
}

// Helper function to format title with brand
export function formatTitle(title: string, includeBrand = true): string {
  if (!includeBrand) return title
  return title.includes('Shin Shin Group') ? title : `${title} | Shin Shin Group`
}

// Common keyword sets for different page types
export const commonKeywords = {
  fashion: [
    'apparel',
    'garment',
    'textile',
    'clothing',
    'fashion',
    'manufacturing',
    'bangladesh',
  ],
  sustainable: [
    'sustainable',
    'eco-friendly',
    'ethical',
    'green',
    'environment',
    'responsible',
    'LEED certified',
  ],
  manufacturing: [
    'manufacturer',
    'production',
    'factory',
    'quality',
    'wholesale',
    'supplier',
    'textile industry',
  ],
  business: [
    'Shin Shin Group',
    'company',
    'corporate',
    'professional',
    'industry',
    'commerce',
    'bangladesh business',
  ],
}
