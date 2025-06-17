'use client'
import React from 'react'
import FoundingStory from '@/app/_components/pages/about/FoundingStory'
import OurValues from '@/app/_components/pages/about/OurValues'
import InteractiveTimeline from '@/app/_components/pages/about/InteractiveTimeline'
// import OurAwards from '@/app/_components/pages/about/AwardsGallery'
import { MobileTimeline } from '@/components/Timeline'
import PageHeader from '@/app/_components/pages/about/PageHeader'

const Page = () => {
  return (
    <section className="overflow-x-hidden">
      <PageHeader
        bgImage="/headers/about-header.webp"
        heading={['About', 'Shin Shin Group']}
        sub="Shin Shin Group is a leading Bangladeshi conglomerate in the apparel industry. It serves global markets with high-quality, eco-friendly products​
"
      />
      <FoundingStory />
      <OurValues />
      <InteractiveTimeline />
      <MobileTimeline />
      {/* <OurAwards /> */}
    </section>
  )
}

export default Page
