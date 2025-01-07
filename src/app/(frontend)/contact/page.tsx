'use client'
import AboutHeader from '@/app/_components/pages/about/AboutHeader'

import React from 'react'
import ContactInfo from './ContactInfo'
import DhakaMap from './MapLocation'

const page = () => {
  return (
    <div>
      <AboutHeader
        heading={['Get in Touch', 'With us']}
        sub="Shin Shin Group is one of the largest conglomerates in Bangladesh, exporting apparel worldwide. The group comprises five factories."
      />
      <ContactInfo />
      <DhakaMap />
    </div>
  )
}

export default page
