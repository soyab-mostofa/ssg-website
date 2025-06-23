'use client'

import React, { useState, useCallback, useMemo, memo } from 'react'
import { motion, AnimatePresence, type Variants } from 'motion/react'
import Image from 'next/image'
import SectionLayout from '../../shared/SectionLayout'
import { Card, CardContent } from '@/components/ui/card'

// Types for better type safety
interface TimelinePoint {
  readonly yearText: string
  readonly year: number
  readonly position: { x: number; y: number }
  readonly image: string
  readonly description: string
}

interface TimelinePopupProps {
  point: TimelinePoint
  position: { x: number; y: number }
}

// Static timeline data with percentage-based positioning
const TIMELINE_DATA: readonly TimelinePoint[] = [
  {
    yearText: 'Jeans Plus Ltd',
    year: 2007,
    position: { x: 10, y: 80 },
    image: '/timeline/jeans-plus.webp',
    description:
      'Jeans Plus Ltd established, marking the beginning of our journey in apparel manufacturing.',
  },
  {
    yearText: 'Shin Shin Apparels Ltd',
    year: 2009,
    position: { x: 25, y: 65 },
    image: '/timeline/shinshin-apparel.webp',
    description: 'Shin Shin Apparels Ltd established, focusing on quality and sustainability.',
  },
  {
    yearText: 'Organic Jeans Ltd',
    year: 2014,
    position: { x: 45, y: 45 },
    image: '/timeline/organic.webp',
    description: 'Organic Jeans Ltd launched, specializing in eco-friendly denim production.',
  },
  {
    yearText: 'Vancot Ltd',
    year: 2015,
    position: { x: 65, y: 55 },
    image: '/timeline/vancot.webp',
    description: 'Vancot Ltd established, expanding into knitwear and woven garments.',
  },
  {
    yearText: 'Khalifa Apparels Ltd',
    year: 2016,
    position: { x: 80, y: 40 },
    image: '/vancot.png',
    description: 'Khalifa Apparels Ltd launched, focusing on high-quality apparel manufacturing.',
  },
  {
    yearText: 'Saud Garments Industries Ltd',
    year: 2022,
    position: { x: 95, y: 25 },
    image: '/timeline/saud.webp',
    description:
      'Saud Garments Industries Ltd established, enhancing production capacity and sustainability efforts.',
  },
] as const

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const dotVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
}

// Timeline Popup Component
const TimelinePopup = memo<TimelinePopupProps>(({ point, position }) => {
  return (
    <motion.div
      className="pointer-events-none fixed z-50 bg-others-white"
      style={{
        left: position.x - 160,
        top: position.y - 250,
        transform: 'translate(-50%, -100%)',
      }}
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <Card className="w-80 border-0 bg-others-white shadow-lg">
        <CardContent className="overflow-hidden p-0">
          <div className="relative overflow-hidden">
            <Image
              src={point.image}
              alt={`${point.yearText} - ${point.year}`}
              className="h-32 w-full object-cover"
              width={320}
              height={128}
              sizes="320px"
              priority={false}
            />
            <div className="to-transparent absolute inset-0 bg-gradient-to-t from-others-dark-background/20" />
          </div>{' '}
          <div className="p-4">
            <p className="mb-2 text-sm leading-relaxed text-grayscale-black-400">
              {point.description}
            </p>
          </div>
        </CardContent>
      </Card>{' '}
      {/* Arrow pointing down */}
      <div className="absolute left-1/2 top-full -translate-x-1/2 transform">
        <div className="border-transparent h-0 w-0 border-l-4 border-r-4 border-t-4 border-t-others-white" />
      </div>
    </motion.div>
  )
})

TimelinePopup.displayName = 'TimelinePopup'

// Main Interactive Timeline Component
const InteractiveTimeline = memo(() => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [popupEvent, setPopupEvent] = useState<TimelinePoint | null>(null)
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 })

  // Create smooth curved path
  const createPath = useMemo(() => {
    if (TIMELINE_DATA.length < 2) return ''

    let path = `M ${TIMELINE_DATA[0].position.x} ${TIMELINE_DATA[0].position.y}`

    for (let i = 1; i < TIMELINE_DATA.length; i++) {
      const prev = TIMELINE_DATA[i - 1]
      const curr = TIMELINE_DATA[i]

      // Calculate control points for smooth curve
      const controlX1 = prev.position.x + (curr.position.x - prev.position.x) * 0.5
      const controlY1 = prev.position.y
      const controlX2 = prev.position.x + (curr.position.x - prev.position.x) * 0.5
      const controlY2 = curr.position.y

      path += ` C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${curr.position.x} ${curr.position.y}`
    }

    return path
  }, [])

  // Create segment path for hover effect
  const getSegmentPath = useCallback((startIndex: number, endIndex: number) => {
    if (startIndex >= endIndex || endIndex >= TIMELINE_DATA.length) return ''

    let path = `M ${TIMELINE_DATA[startIndex].position.x} ${TIMELINE_DATA[startIndex].position.y}`

    for (let i = startIndex + 1; i <= endIndex; i++) {
      const prev = TIMELINE_DATA[i - 1]
      const curr = TIMELINE_DATA[i]

      const controlX1 = prev.position.x + (curr.position.x - prev.position.x) * 0.5
      const controlY1 = prev.position.y
      const controlX2 = prev.position.x + (curr.position.x - prev.position.x) * 0.5
      const controlY2 = curr.position.y

      path += ` C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${curr.position.x} ${curr.position.y}`
    }

    return path
  }, [])

  const handleMouseEnter = useCallback(
    (event: TimelinePoint, index: number, e: React.MouseEvent) => {
      setHoveredIndex(index)
      setPopupEvent(event)
      const rect = e.currentTarget.getBoundingClientRect()
      setPopupPosition({
        x: rect.left + rect.width / 2,
        y: rect.top - 10,
      })
    },
    [],
  )

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null)
    setPopupEvent(null)
  }, [])

  return (
    <SectionLayout
      heading="Our Journey"
      chip="timeline"
      className="hidden md:block"
      subLeft="Shin Shin Group, established in 2007, has grown into a leading apparel conglomerate with 11,000 employees across four factories in Bangladesh. The group achieved remarkable milestones in sustainable manufacturing."
    >
      <motion.div
        className="container relative mx-auto -mt-16 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-20%' }}
      >
        {/* Timeline Container */}
        <div className="relative h-96 w-full">
          {/* SVG for the timeline path */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{ zIndex: 1 }}
          >
            {/* Main timeline path - Subtle thin connecting line */}
            <motion.path
              d={createPath}
              stroke="hsl(220 4% 85%)" // Very light gray
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-300"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{
                pathLength: { duration: 2, ease: 'easeInOut', delay: 0.3 },
                opacity: { duration: 0.5, delay: 0.5 },
              }}
            />
            {/* Highlighted segment - Subtle blue highlight */}
            <AnimatePresence>
              {hoveredIndex !== null && (
                <motion.path
                  d={getSegmentPath(0, hoveredIndex)}
                  stroke="hsl(212 65% 27%)" // primary-blue-500
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-all duration-300"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.8 }}
                  exit={{ pathLength: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                />
              )}
            </AnimatePresence>
          </svg>

          {/* Timeline points and labels */}
          {TIMELINE_DATA.map((event, index) => (
            <motion.div
              key={event.year}
              className="absolute -translate-x-1/2 -translate-y-1/2 transform"
              style={{
                left: `${event.position.x - 1}%`,
                top: `${event.position.y - 2}%`,
                zIndex: 2,
              }}
              variants={dotVariants}
              custom={index}
            >
              {/* Year label */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 transform whitespace-nowrap">
                <span className="text-lg font-bold text-primary-blue-600 drop-shadow-sm">
                  {event.year}
                </span>
              </div>
              {/* Company name label */}
              <div className="absolute -bottom-12 left-1/2 max-w-20 -translate-x-1/2 transform whitespace-nowrap text-center">
                <span className="text-xs font-medium leading-tight text-grayscale-black-500">
                  {event.yearText.split(' ').slice(0, 2).join(' ')}
                </span>
                {event.yearText.split(' ').length > 2 && (
                  <div className="text-xs leading-tight text-grayscale-black-500">
                    {event.yearText.split(' ').slice(2).join(' ')}
                  </div>
                )}
              </div>{' '}
              {/* Timeline point */}
              <div
                className={`border-3 h-4 w-4 cursor-pointer rounded-full transition-all duration-200 ${
                  hoveredIndex === index
                    ? 'scale-150 border-primary-blue-700 bg-primary-blue-500 shadow-lg shadow-primary-blue-500/40'
                    : 'border-grayscale-black-200 bg-grayscale-black-200 shadow-md hover:scale-125 hover:border-primary-blue-500 hover:bg-primary-blue-500'
                }`}
                onMouseEnter={(e) => handleMouseEnter(event, index, e)}
                onMouseLeave={handleMouseLeave}
              />
            </motion.div>
          ))}
        </div>

        {/* Popup */}
        <AnimatePresence mode="wait">
          {popupEvent && (
            <TimelinePopup key={popupEvent.year} point={popupEvent} position={popupPosition} />
          )}
        </AnimatePresence>
      </motion.div>
    </SectionLayout>
  )
})

InteractiveTimeline.displayName = 'InteractiveTimeline'

export default InteractiveTimeline
