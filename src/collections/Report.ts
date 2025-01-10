import { CollectionConfig } from 'payload'

const SustainabilityReports: CollectionConfig = {
  slug: 'sustainability-reports',
  admin: {
    useAsTitle: 'year',
    defaultColumns: ['year', 'title', 'updatedAt'],
    group: 'Content',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'year',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'The year of the sustainability report (e.g., 2023)',
      },
      validate: (val: string | string[] | null | undefined) => {
        if (typeof val !== 'string' || !/^\d{4}$/.test(val)) {
          return 'Year must be a 4-digit number'
        }
        return true
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'The title of the report (e.g., Sustainability Report)',
      },
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Cover image for the report (Recommended aspect ratio: 6:8)',
      },
    },
    {
      name: 'reportFile',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'PDF file of the sustainability report',
      },
      filterOptions: {
        mimeType: {
          equals: 'application/pdf',
        },
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
      ],
    },
    {
      name: 'publishedDate',
      type: 'date',
      admin: {
        description: 'The date when this report was published',
        position: 'sidebar',
      },
      required: true,
    },
    {
      name: 'meta',
      type: 'group',
      fields: [
        {
          name: 'description',
          type: 'textarea',
          admin: {
            description: 'Brief description of the report for SEO purposes',
          },
        },
        {
          name: 'keywords',
          type: 'text',
          admin: {
            description: 'Comma-separated keywords for SEO',
          },
        },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
  timestamps: true,
  hooks: {
    beforeChange: [
      ({ data }) => {
        return {
          ...data,
          updatedAt: new Date().toISOString(),
        }
      },
    ],
  },
  versions: {
    drafts: true,
  },
}

export default SustainabilityReports
