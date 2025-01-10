'use server'
import { getPayload as getPayloadCMS } from 'payload'
import config from '@payload-config'

export async function getPayload() {
  return getPayloadCMS({ config })
}
