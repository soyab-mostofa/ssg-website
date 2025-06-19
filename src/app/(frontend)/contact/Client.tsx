'use client'
import React, { useMemo } from 'react'
import ContactInfo from './ContactInfo'
import dynamic from 'next/dynamic'
import PageHeader from '@/app/_components/pages/about/PageHeader'

const Client = () => {
  const Map = useMemo(
    () =>
      dynamic(() => import('./MapLocation'), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    [],
  )
  console.log('Client')
  return (
    <div>
      <PageHeader
        bgImage="/headers/contact-header.webp"
        heading={['Get in Touch', 'With us']}
        sub="Get in touch with Shin Shin Group. We're here to answer your inquiries and explore partnership opportunities. Reach out to our team today!"
      />
      <ContactInfo />
      <Map />
    </div>
  )
}

export default Client
