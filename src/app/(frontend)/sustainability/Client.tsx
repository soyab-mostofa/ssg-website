'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { sustainabilityItems } from './sustainability-data'
import CarbonWipeout from './CarbonWipeout'
import SustainableDevelopment from './SustainableDevelopment'
import ImpactStories from '@/app/_components/pages/home/impact-stories'
import SustainabilityReport from './sustainability-report'
import OurCertifications from './OurCertifications'
import PageHeader from '@/app/_components/pages/about/PageHeader'
import SectionChip from '@/app/_components/shared/SectionChip'
import SustainabilityImageDisplay from './SustainabilityImageDisplay'

const SustainabilityPage = () => {
  const [active, setActive] = useState<number>(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Handle navigation
  const handleNavigate = (index: number) => {
    setActive(index)
    setIsAutoPlaying(false)
    // Resume auto-play after user interaction
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  // Advanced layout animation variants
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        when: 'beforeChildren',
      },
    },
  }

  const titleVariants = {
    initial: {
      opacity: 0,
      filter: 'blur(10px)',
    },
    animate: {
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    exit: {
      opacity: 0,
      filter: 'blur(10px)',
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
  }

  const contentVariants = {
    initial: {
      opacity: 0,
      filter: 'blur(8px)',
    },
    animate: {
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.15,
      },
    },
    exit: {
      opacity: 0,
      filter: 'blur(8px)',
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
  }

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % sustainabilityItems.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  return (
    <div>
      <PageHeader
        bgImage="/headers/sustainability-header.webp"
        heading={['Our', 'Sustainability']}
        sub="Our commitment to a better future: People, planet, and responsible production. Explore our green initiatives and social impact programs"
      />{' '}
      {/* Sustainability Interactive Section */}
      <motion.section
        className="bg-white relative overflow-hidden py-16 md:py-24"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <div className="container relative mx-auto px-4">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SectionChip>sustainability</SectionChip>
          </motion.div>
          <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Enhanced Title Section */}
            <motion.div className="relative flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={`title-${active}`}
                  variants={titleVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="from-gray-900 via-blue-600 to-green-600 text-transparent bg-gradient-to-r bg-clip-text text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
                >
                  {sustainabilityItems[active].title}
                </motion.h2>
              </AnimatePresence>

              {/* Decorative Elements */}
              <motion.div
                className="from-blue-400/20 to-green-400/20 absolute -left-4 -top-4 h-20 w-20 rounded-full bg-gradient-to-br blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>

            {/* Enhanced Content Section */}
            <motion.div className="relative flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`content-${active}`}
                  variants={contentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="text-gray-700 text-base font-light leading-relaxed md:text-xl"
                >
                  {sustainabilityItems[active].content}
                </motion.p>
              </AnimatePresence>
            </motion.div>
          </div>
          {/* Sustainability Image Display */}
          <SustainabilityImageDisplay
            items={sustainabilityItems}
            activeIndex={active}
            onNavigate={handleNavigate}
            className="mt-16"
          />
        </div>
      </motion.section>
      <CarbonWipeout />
      <SustainableDevelopment />
      <ImpactStories />
      <SustainabilityReport />
      <OurCertifications />
    </div>
  )
}

export default SustainabilityPage
