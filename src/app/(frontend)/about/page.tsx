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
        bgImage="/about/about-image.webp"
        heading={['About', 'Shin Shin Group']}
        sub="Discover Shin Shin Group's journey as a leading apparel conglomerate, committed to quality, innovation, and global excellence since 2007."
      />{' '}
      <FoundingStory />
      <OurValues />
      <div className="hidden md:block">
        <InteractiveTimeline />
      </div>
      <div className="block md:hidden">
        <MobileTimeline />
      </div>
      {/* <OurAwards /> */}
    </section>
  )
}

export default Page
