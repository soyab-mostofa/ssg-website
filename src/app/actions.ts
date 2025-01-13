'use server'
import { getPayload } from '@/lib/payload'
import { JobListing, SustainabilityReport } from '@/payload-types'

export const getReports = async () => {
  const payload = await getPayload()
  const { docs } = await payload.find({
    collection: 'sustainability-reports',
    where: {
      year: {
        equals: '2023',
      },
    },
  })
  if (!docs) {
    throw new Error('No reports found')
  }
  return docs as SustainabilityReport[]
}

export const getOpenJobs = async () => {
  const payload = await getPayload()
  const { docs } = await payload.find({
    collection: 'job-listings',
    limit: 3,
  })
  if (!docs) {
    throw new Error('No jobs found')
  }
  return docs as JobListing[]
}
