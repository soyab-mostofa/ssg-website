'use server'
import { getPayload } from '@/lib/payload'
import { SustainabilityReport } from '@/payload-types'

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
