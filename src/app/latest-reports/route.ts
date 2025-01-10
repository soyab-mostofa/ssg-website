import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'sustainability-reports',
    where: {
      year: {
        equals: 2023,
      },
    },
  })
  console.log(data)

  return Response.json(data)
}
