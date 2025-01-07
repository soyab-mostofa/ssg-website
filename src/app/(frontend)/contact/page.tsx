import AboutHeader from '@/app/_components/pages/about/AboutHeader'
import React from 'react'
import ContactInfo from './ContactInfo'

const page = () => {
  return (
    <div>
      <AboutHeader
        heading={['Get in Touch', 'With us']}
        sub="Shin Shin Group is one of the largest conglomerates in Bangladesh, exporting apparel worldwide. The group comprises five factories."
      />
      <ContactInfo />
    </div>
  )
}

export default page
