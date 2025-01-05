import AboutHeader from '@/app/_components/pages/about/AboutHeader'
import SectionLayout from '@/app/_components/shared/SectionLayout'
import React from 'react'

const page = () => {
  return (
    <>
      <AboutHeader
        heading={['Our', 'Facilities']}
        sub="Shin Shin Group is one of the largest conglomerates in Bangladesh, exporting apparel worldwide. The group comprises five factories."
      />
      <SectionLayout
        subLeft="Lorem ipsum dolor sit amet consectetur. Tincidunt id justo ante tortor pellentesque euismod. Condimentum amet sagittis bibendum purus tellus mauris cursus."
        chip="Facilities"
        heading="Our Facilities at a  Glance"
        headingWidth="481px"
      >
        fdsfs
      </SectionLayout>
    </>
  )
}

export default page
