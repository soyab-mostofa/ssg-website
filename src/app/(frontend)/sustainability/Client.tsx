'use client'
import React, { useState, useEffect } from 'react'
import { sustainabilityItems } from './sustainability-data'
import CarbonWipeout from './CarbonWipeout'
import SustainableDevelopment from './SustainableDevelopment'
import ImpactStories from '@/app/_components/pages/home/impact-stories'
import Image from 'next/image'
import SustainabilityReport from './sustainability-report'
import OurCertifications from './OurCertifications'
import PageHeader from '@/app/_components/pages/about/PageHeader'
import SectionChip from '@/app/_components/shared/SectionChip'

const SustainabilityPage = () => {
  const [active, setActive] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % sustainabilityItems.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <PageHeader
        bgImage="/headers/sustainability-header.webp"
        heading={['Our', 'Sustainability']}
        sub="Shin Shin Group pioneers sustainability through water conservation, renewable energy, green factories, and carbon reduction, reshaping the future of apparel manufacturing."
      />{' '}
      {/* Sustainability Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <SectionChip>sustainability</SectionChip>
          </div>

          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Left Side - Title */}
            <div className="flex flex-col justify-center">
              <h2 className="text-grayscale-black text-4xl font-bold md:text-5xl lg:text-6xl">
                {sustainabilityItems[active].title}
              </h2>
            </div>

            {/* Right Side - Text Content */}
            <div className="flex flex-col justify-center">
              <p className="text-lg leading-relaxed text-grayscale-black-600 md:text-xl">
                {sustainabilityItems[active].content}
              </p>
            </div>
          </div>
          {/* Full-width Image */}
          <div className="relative mx-auto h-[500px] w-full max-w-[1200px] overflow-hidden rounded-lg bg-grayscale-black-100">
            <Image
              src={sustainabilityItems[active].image}
              alt={sustainabilityItems[active].title}
              fill
              className="object-cover object-center transition-opacity duration-500"
              priority
            />
          </div>
        </div>
      </section>
      <CarbonWipeout />
      <SustainableDevelopment />
      <ImpactStories />
      <SustainabilityReport />
      <OurCertifications />
    </div>
  )
}

export default SustainabilityPage
