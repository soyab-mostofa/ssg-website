'use client'
import React from 'react'
import FoundingStory from '@/app/_components/pages/about/FoundingStory'
import AboutHeader from '@/app/_components/pages/about/AboutHeader'
import OurValues from '@/app/_components/pages/about/OurValues'
import InteractiveTimeline from '@/app/_components/pages/about/InteractiveTimeline'
import OurAwards from '@/app/_components/pages/about/AwardsGallery'

const Page = () => {
  return (
    <section>
      <AboutHeader
        heading={['About', 'Shin Shin Group']}
        sub="Shin Shin Group is one of the largest conglomerates in Bangladesh, exporting apparel worldwide. The group comprises five factories."
      />
      <FoundingStory />
      <OurValues />
      <InteractiveTimeline />
      <OurAwards />
    </section>
  )
}

export default Page
