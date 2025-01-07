/* eslint-disable @next/next/no-img-element */
'use client'
import AboutHeader from '@/app/_components/pages/about/AboutHeader'
import SectionLayout from '@/app/_components/shared/SectionLayout'
import React from 'react'
import SustainabilityAccordion from './sustainability-accordion'
import CarbonWipeout from './CarbonWipeout'
import SustainableDevelopment from './SustainableDevelopment'
import ImpactStories from '@/app/_components/pages/home/impact-stories'
import { motion } from 'motion/react'
import Image from 'next/image'

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
        <div className="relative mx-auto h-[500px] max-w-[1200px] rounded-[8px] bg-[url('/sustainability-windmill.png')] bg-cover" />
        <SustainabilityAccordion />
        <CarbonWipeout />
        <SustainableDevelopment />
        <ImpactStories />
      </SectionLayout>
    </div>
  )
}

export default SustainabilityPage
