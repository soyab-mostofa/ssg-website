'use client'
import SectionLayout from '@/app/_components/shared/SectionLayout'
import React, { useState, useEffect } from 'react'
import SustainabilityAccordion, { sustainabilityItems } from './sustainability-accordion'
import CarbonWipeout from './CarbonWipeout'
import SustainableDevelopment from './SustainableDevelopment'
import ImpactStories from '@/app/_components/pages/home/impact-stories'
import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'
import SustainabilityReport from './sustainability-report'
import OurCertifications from './OurCertifications'
import PageHeader from '@/app/_components/pages/about/PageHeader'

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
        sub="Shin Shin Group is one of the largest conglomerates in Bangladesh, exporting apparel worldwide. The group comprises five factories."
      />
      <SectionLayout
        chip="sustainability"
        heading="Our Green Initiatives"
        className="py-0 pt-16 md:py-0 md:pt-24"
        subLeft={sustainabilityItems[active].content}
      >
        <div className="relative mx-auto aspect-[2.4/1] max-w-[1240px]">
          {/* Responsive container with dynamic padding-top based on aspect ratio */}
          <div className="relative w-full pb-[41.66%] sm:pb-[41.66%] md:pb-[41.66%] lg:pb-[41.66%]">
            <div className="container absolute inset-0 mx-auto">
              <div className="relative h-full w-full overflow-hidden rounded-lg bg-grayscale-black-100">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    className="absolute inset-0 rounded-lg"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  >
                    <Image
                      src={sustainabilityItems[active].image}
                      alt={sustainabilityItems[active].title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
        <SustainabilityAccordion />
        <CarbonWipeout />
        <SustainableDevelopment />
        <ImpactStories />
        <SustainabilityReport />
        <OurCertifications />
      </SectionLayout>
    </div>
  )
}

export default SustainabilityPage
