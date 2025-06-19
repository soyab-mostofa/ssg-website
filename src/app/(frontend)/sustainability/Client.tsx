'use client'
import React, { useState, useEffect, useCallback } from 'react'
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useMotionValue,
  useDragControls,
  PanInfo,
} from 'motion/react'
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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  // Simple motion values for drag functionality only
  const dragX = useMotionValue(0)
  const dragControls = useDragControls()

  // Drag interaction handlers
  const handleDragStart = useCallback(() => {
    setIsDragging(true)
    setIsAutoPlaying(false)
  }, [])

  const handleDragEnd = useCallback(
    (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      setIsDragging(false)
      const threshold = 50
      const velocity = info.velocity.x

      if (Math.abs(info.offset.x) > threshold || Math.abs(velocity) > 500) {
        const direction = info.offset.x > 0 ? -1 : 1
        setActive((prev) => {
          const newActive = prev + direction
          return newActive < 0
            ? sustainabilityItems.length - 1
            : newActive >= sustainabilityItems.length
              ? 0
              : newActive
        })
      }

      dragX.set(0)
      setTimeout(() => setIsAutoPlaying(true), 3000)
    },
    [dragX],
  )

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

  const imageVariants = {
    initial: {
      opacity: 0,
      filter: 'blur(15px)',
    },
    animate: {
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.3,
      },
    },
    exit: {
      opacity: 0,
      filter: 'blur(15px)',
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  }

  // Auto-play effect with pause on interaction
  useEffect(() => {
    if (!isAutoPlaying || isDragging) return

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % sustainabilityItems.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, isDragging])

  return (
    <div>
      <PageHeader
        bgImage="/headers/sustainability-header.webp"
        heading={['Our', 'Sustainability']}
        sub="Our commitment to a better future: People, planet, and responsible production. Explore our green initiatives and social impact programs"
      />{' '}
      {/* Award-worthy Sustainability Section */}
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
            {' '}
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
                  style={{
                    textShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    perspective: '1000px',
                  }}
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
            </motion.div>{' '}
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
                  style={{
                    textShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  }}
                >
                  {sustainabilityItems[active].content}
                </motion.p>
              </AnimatePresence>
            </motion.div>
          </div>{' '}
          {/* Revolutionary Image Display */}
          <motion.div
            className="relative mx-auto h-96 w-full max-w-[1400px] overflow-hidden rounded-3xl shadow-2xl md:h-[600px]"
            whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`image-${active}`}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="relative h-full w-full"
                drag="x"
                dragControls={dragControls}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                style={{ x: dragX }}
                whileDrag={{
                  scale: shouldReduceMotion ? 1 : 0.95,
                  rotate: shouldReduceMotion ? 0 : 0,
                }}
              >
                <Image
                  src={sustainabilityItems[active].image}
                  alt={sustainabilityItems[active].title}
                  fill
                  className="object-cover object-center"
                  priority
                />

                {/* Interactive Overlay */}
                <motion.div
                  className="from-black/20 via-transparent to-transparent absolute inset-0 bg-gradient-to-t"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />

                {/* Drag Indicator */}
                {!shouldReduceMotion && (
                  <motion.div
                    className="bg-white/20 absolute bottom-4 right-4 rounded-full p-3 backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="text-white h-6 w-6">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13 6v5h5v-2h-3V6h-2zM6 13v2h3v3h2v-5H6z" />
                      </svg>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
          {/* Interactive Progress Indicators */}
          <motion.div
            className="mt-12 flex justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {sustainabilityItems.map((_, index) => (
              <motion.button
                key={index}
                className={`relative h-3 rounded-full transition-all duration-500 ${
                  index === active
                    ? 'bg-gray-800 w-12 shadow-lg'
                    : 'bg-gray-300 hover:bg-gray-400 w-3'
                }`}
                onClick={() => {
                  setActive(index)
                  setIsAutoPlaying(false)
                  setTimeout(() => setIsAutoPlaying(true), 5000)
                }}
                whileHover={{ scale: shouldReduceMotion ? 1 : 1.2 }}
                whileTap={{ scale: shouldReduceMotion ? 1 : 0.9 }}
                aria-label={`View ${sustainabilityItems[index].title}`}
              >
                {index === active && (
                  <motion.div
                    className="from-blue-400 to-green-400 absolute inset-0 rounded-full bg-gradient-to-r"
                    layoutId="activeIndicator"
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
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
