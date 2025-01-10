import React from 'react'
import SustainabilityPage from './Client'
import { getPayload } from '@/lib/payload'

const page = async () => {
  const payload = await getPayload()
  const { docs } = await payload.find({
    collection: 'sustainability-reports',
    where: {
      year: {
        equals: '2023',
      },
    },
  })

  return (
    <div>
      <SustainabilityPage reports={docs} />
    </div>
  )
}

export default page
