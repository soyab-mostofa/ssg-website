'use client'
import AboutHeader from '@/app/_components/pages/about/AboutHeader'
import SectionLayout from '@/app/_components/shared/SectionLayout'
import React, { useState, useEffect } from 'react'
import SustainabilityAccordion, { sustainabilityItems } from './sustainability-accordion'
import CarbonWipeout from './CarbonWipeout'
import SustainableDevelopment from './SustainableDevelopment'
import ImpactStories from '@/app/_components/pages/home/impact-stories'
import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'

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
      <AboutHeader
        heading={['Our', 'Sustainability']}
        sub="Shin Shin Group is one of the largest conglomerates in Bangladesh, exporting apparel worldwide. The group comprises five factories."
      />
      <SectionLayout
        chip="sustainability"
        heading="Our Green Initiatives"
        className="py-0 pt-16 md:py-0 md:pt-24"
        subLeft={sustainabilityItems[active].content}
      >
        <div className="relative mx-auto h-[500px] max-w-[1200px] overflow-hidden rounded-[8px] bg-cover">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="absolute inset-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <Image
                src={sustainabilityItems[active].image}
                alt={sustainabilityItems[active].title}
                fill
                className="h-full w-full object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
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
