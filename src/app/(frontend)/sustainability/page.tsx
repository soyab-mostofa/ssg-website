import AboutHeader from '@/app/_components/pages/about/AboutHeader'
import SectionLayout from '@/app/_components/shared/SectionLayout'
import Image from 'next/image'
import React from 'react'
import SustainabilityAccordion from './sustainability-accordion'
import CarbonWipeout from './CarbonWipeout'
import SustainableDevelopment from './SustainableDevelopment'
import ImpactStories from '@/app/_components/pages/home/impact-stories'

const SustainabilityPage = () => {
  return (
    <div>
      <AboutHeader
        heading={['Our', 'Sustainability']}
        sub="Shin Shin Group is one of the largest conglomerates in Bangladesh, exporting apparel worldwide. The group comprises five factories."
      />
      <SectionLayout
        chip="sustainability"
        heading="Our Green Initiatives"
        className="py-0 pt-16 md:py-0 md:pt-24"
        subLeft="Conserving natural resources like water is imperative to our vision as a sustainable clothing manufacturer. So, our approach is to reduce, reuse, and recycle. In 2020 alone, we have saved 24.31% of water, reducing 5% of wastewater!"
      >
        <div className="relative aspect-[12/5] overflow-hidden rounded-[8px]">
          <Image
            className="container overflow-hidden rounded-[8px] object-cover"
            src="/sustainability-windmill.png"
            alt="sustainability"
            fill
          />
        </div>
        <SustainabilityAccordion />
        <CarbonWipeout />
        <SustainableDevelopment />
        <ImpactStories />
      </SectionLayout>
    </div>
  )
}

export default SustainabilityPage
