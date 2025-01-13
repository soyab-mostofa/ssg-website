import { CollectionConfig } from 'payload'

const JobListings: CollectionConfig = {
  labels: {
    singular: 'Job Listing',
    plural: 'Job Listings',
  },
  slug: 'job-listings',
  admin: {
    useAsTitle: 'jobTitle',
    defaultColumns: ['jobTitle', 'company', 'location', 'jobType', 'salary'],
  },
  fields: [
    {
      name: 'jobTitle',
      type: 'text',
      required: true,
      label: 'Job Title',
    },
    {
      name: 'company',
      type: 'group',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'prefix',
          type: 'text',
          required: true,
          admin: {
            description: 'Company prefix (e.g. @Jeans Plus)',
          },
        },
      ],
    },
    {
      name: 'workType',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Onsite',
          value: 'onsite',
        },
        {
          label: 'Remote',
          value: 'remote',
        },
        {
          label: 'Hybrid',
          value: 'hybrid',
        },
      ],
    },
    {
      name: 'employmentType',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Fulltime',
          value: 'fulltime',
        },
        {
          label: 'Part-time',
          value: 'parttime',
        },
        {
          label: 'Contract',
          value: 'contract',
        },
      ],
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'salary',
      type: 'group',
      fields: [
        {
          name: 'amount',
          type: 'number',
          required: true,
        },
        {
          name: 'period',
          type: 'select',
          required: true,
          options: [
            {
              label: 'Per Month',
              value: 'month',
            },
            {
              label: 'Per Year',
              value: 'year',
            },
          ],
        },
      ],
    },
    {
      name: 'applicationDeadline',
      type: 'date',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'active',
      options: [
        {
          label: 'Active',
          value: 'active',
        },
        {
          label: 'Closed',
          value: 'closed',
        },
      ],
    },
    { name: 'Applications', type: 'join', on: 'position', collection: 'job-applications' },
    {
      name: 'applyUrl',
      type: 'text',
      admin: {
        description: 'Direct URL for the application form',
      },
    },
  ],
  timestamps: true,
}

export default JobListings
