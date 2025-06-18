import Script from 'next/script'

interface OrganizationSchema {
  '@context': string
  '@type': string
  name: string
  url: string
  logo: string
  description: string
  address?: {
    '@type': string
    streetAddress?: string
    addressLocality?: string
    addressRegion?: string
    postalCode?: string
    addressCountry?: string
  }
  contactPoint?: {
    '@type': string
    telephone?: string
    contactType: string
    email?: string
  }
  sameAs?: string[]
  foundingDate?: string
  numberOfEmployees?: string
}

interface WebsiteSchema {
  '@context': string
  '@type': string
  name: string
  url: string
  description: string
  publisher: {
    '@type': string
    name: string
  }
  potentialAction?: {
    '@type': string
    target: string
    'query-input': string
  }
}

interface BreadcrumbSchema {
  '@context': string
  '@type': string
  itemListElement: Array<{
    '@type': string
    position: number
    name: string
    item?: string
  }>
}

interface StructuredDataProps {
  type?: 'organization' | 'website' | 'breadcrumb'
  data?: Partial<OrganizationSchema & WebsiteSchema & BreadcrumbSchema>
}

const defaultOrganizationData: OrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Shin Shin Group',
  url: 'https://www.shinshingroup.com',
  logo: 'https://www.shinshingroup.com/logo.png',
  description: 'Shin Shin Group is Bangladesh\'s leading sustainable apparel manufacturer, pioneering eco-friendly practices in textile manufacturing with innovative designs and ethical production.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'House # 25, Road # 34, Gulshan-2',
    addressLocality: 'Dhaka',
    addressRegion: 'Dhaka',
    postalCode: '1212',
    addressCountry: 'BD',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: '+880-2-8836101',
    email: 'info@shinshingroup.com',
  },
  sameAs: [
    'https://linkedin.com/company/shin-shin-group',
    'https://twitter.com/shinshingroupbd',
    'https://facebook.com/shinshingroupbd',
  ],
  foundingDate: '1983',
  numberOfEmployees: '5000+',
}

const defaultWebsiteData: WebsiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Shin Shin Group',
  url: 'https://www.shinshingroup.com',
  description: 'Shin Shin Group is Bangladesh\'s leading sustainable apparel manufacturer, pioneering eco-friendly practices in textile manufacturing with innovative designs and ethical production.',
  publisher: {
    '@type': 'Organization',
    name: 'Shin Shin Group',
  },  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.shinshingroup.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export function StructuredData({ type = 'organization', data = {} }: StructuredDataProps) {
  let structuredData: OrganizationSchema | WebsiteSchema | BreadcrumbSchema

  switch (type) {
    case 'organization':
      structuredData = { ...defaultOrganizationData, ...data } as OrganizationSchema
      break
    case 'website':
      structuredData = { ...defaultWebsiteData, ...data } as WebsiteSchema
      break
    case 'breadcrumb':
      structuredData = data as BreadcrumbSchema
      break
    default:
      structuredData = defaultOrganizationData
  }

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

// Specific components for common use cases
export function OrganizationStructuredData(props?: { data?: Partial<OrganizationSchema> }) {
  return <StructuredData type="organization" data={props?.data} />
}

export function WebsiteStructuredData(props?: { data?: Partial<WebsiteSchema> }) {
  return <StructuredData type="website" data={props?.data} />
}

export function BreadcrumbStructuredData({ items }: { items: Array<{ name: string; url?: string }> }) {
  const breadcrumbData: BreadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  }

  return <StructuredData type="breadcrumb" data={breadcrumbData} />
}
