import { CollectionConfig } from 'payload'

const JobApplications: CollectionConfig = {
  labels: {
    singular: 'Job Application',
    plural: 'Job Applications',
  },
  slug: 'job-applications',
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'position', 'email', 'createdAt', 'status'],
  },
  access: {
    read: ({ req: { user } }) => {
      // Only authenticated admin users can read applications
      return Boolean(user?.role?.includes('admin'))
    },
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'phoneNumber',
      type: 'text',
      required: true,
    },
    {
      name: 'position',
      type: 'relationship',
      relationTo: 'job-listings',
      required: true,
      hasMany: false,
    },
    {
      name: 'resume',
      type: 'upload',
      required: true,
      relationTo: 'media',
      filterOptions: {
        mimeTypes: {
          contains: [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          ],
        },
      },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'pending',
      options: [
        {
          label: 'Pending Review',
          value: 'pending',
        },
        {
          label: 'Under Review',
          value: 'reviewing',
        },
        {
          label: 'Shortlisted',
          value: 'shortlisted',
        },
        {
          label: 'Interview Scheduled',
          value: 'interview',
        },
        {
          label: 'Offered',
          value: 'offered',
        },
        {
          label: 'Hired',
          value: 'hired',
        },
        {
          label: 'Rejected',
          value: 'rejected',
        },
      ],
    },
    {
      name: 'termsAccepted',
      type: 'checkbox',
      required: true,
      label: 'Terms and Conditions Accepted',
    },
    {
      name: 'privacyPolicyAccepted',
      type: 'checkbox',
      required: true,
      label: 'Privacy Policy Accepted',
    },
    {
      name: 'internalNotes',
      type: 'richText',
      admin: {
        description: 'Internal notes about the candidate',
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        // Ensure both agreements are accepted
        if (!data.termsAccepted || !data.privacyPolicyAccepted) {
          throw new Error('Both Terms & Conditions and Privacy Policy must be accepted')
        }
      },
    ],
  },
  timestamps: true,
}

export default JobApplications
