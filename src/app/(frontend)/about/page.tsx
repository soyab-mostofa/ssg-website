'use client'
import React from 'react'
import FoundingStory from '@/app/_components/pages/about/FoundingStory'
import OurValues from '@/app/_components/pages/about/OurValues'
import InteractiveTimeline from '@/app/_components/pages/about/InteractiveTimeline'
import OurAwards from '@/app/_components/pages/about/AwardsGallery'
import { TimelineDemo } from '@/components/Timeline'
import PageHeader from '@/app/_components/pages/about/PageHeader'

const Page = () => {
  return (
    <section>
      <PageHeader
        bgImage="/headers/about-header.webp"
        heading={['About', 'Shin Shin Group']}
        sub="Shin Shin Group is one of the largest conglomerates in Bangladesh, exporting apparel worldwide. The group comprises five factories."
      />
      <FoundingStory />
      <OurValues />
      <InteractiveTimeline />
      <TimelineDemo />
      <OurAwards />
    </section>
  )
}

export default Page
