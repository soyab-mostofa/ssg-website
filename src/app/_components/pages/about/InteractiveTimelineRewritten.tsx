'use client'

import React, { useState, useCallback, useMemo, memo } from 'react'
import { motion, AnimatePresence, type Variants } from 'motion/react'
import Image from 'next/image'
import SectionLayout from '../../shared/SectionLayout'

// Types for better type safety
interface TimelinePoint {
  readonly yearText: string
  readonly year: number
  readonly x: number
  readonly y: number
  readonly image: string
  readonly description: string
}

interface TimelinePopupProps {
  point: TimelinePoint
}

interface TimelineDotProps {
  point: TimelinePoint
  isActive: boolean
  index: number
  onHover: () => void
  onLeave: () => void
}

interface TimelineLabelProps {
  point: TimelinePoint
  index: number
}

// Static timeline data - moved outside component to prevent recreation
const TIMELINE_DATA: readonly TimelinePoint[] = [
  {
    yearText: 'Jeans Plus Ltd',
    year: 2007,
    x: 40,
    y: 320,
    image: '/timeline/jeans-plus.webp',
    description:
      'Jeans Plus Ltd established, marking the beginning of our journey in apparel manufacturing.',
  },
  {
    yearText: 'Shin Shin Apparels Ltd',
    year: 2009,
    x: 180,
    y: 280,
    image: '/timeline/shinshin-apparel.webp',
    description: 'Shin Shin Apparels Ltd established, focusing on quality and sustainability.',
  },
  {
    yearText: 'Organic Jeans Ltd',
    year: 2014,
    x: 320,
    y: 260,
    image: '/timeline/organic.webp',
    description: 'Organic Jeans Ltd launched, specializing in eco-friendly denim production.',
  },
  {
    yearText: 'Vancot Ltd',
    year: 2015,
    x: 460,
    y: 240,
    image: '/timeline/vancot.webp',
    description: 'Vancot Ltd established, expanding into knitwear and woven garments.',
  },
  {
    yearText: 'Khalifa Apparels Ltd',
    year: 2016,
    x: 600,
    y: 200,
    image: '/vancot.png',
    description: 'Khalifa Apparels Ltd launched, focusing on high-quality apparel manufacturing.',
  },
  {
    yearText: 'Saud Garments Industries Ltd',
    year: 2020,
    x: 740,
    y: 100,
    image: '/timeline/saud.webp',
    description:
      'Saud Garments Industries Ltd established, enhancing production capacity and sustainability efforts.',
  },
] as const

// Animation variants for better performance and reusability
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const pathVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.8, ease: 'easeInOut' },
      opacity: { duration: 0.3 },
    },
  },
}

const dotVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
    y: 10,
  },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: index * 0.1,
      ease: 'easeOut',
    },
  }),
  hover: {
    scale: 1.4,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
}

const labelVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.8 + index * 0.1,
      ease: 'easeOut',
    },
  }),
}

const popupVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.95,
    transition: {
      duration: 0.15,
      ease: 'easeIn',
    },
  },
}

// Memoized Timeline Popup Component
const TimelinePopup = memo<TimelinePopupProps>(({ point }) => {
  // Calculate safe popup position
  const popupStyle = useMemo(() => {
    const leftPercentage = (point.x / 800) * 100
    const topPercentage = ((point.y - 140) / 400) * 100

    return {
      left: `${Math.max(5, Math.min(85, leftPercentage))}%`,
      top: `${Math.max(5, topPercentage)}%`,
      transform: 'translateX(-50%)',
    }
  }, [point.x, point.y])

  return (
    <motion.div
      className="bg-white absolute z-50 w-52 overflow-hidden rounded-xl border border-primary-blue-100 shadow-lg shadow-primary-blue-500/20"
      style={{
        ...popupStyle,
        pointerEvents: 'none',
        willChange: 'transform',
      }}
      variants={popupVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="relative overflow-hidden">
        <Image
          src={point.image}
          alt={`${point.yearText} - ${point.year}`}
          className="h-32 w-full object-cover"
          width={208}
          height={128}
          sizes="(max-width: 768px) 100vw, 208px"
          priority={false}
        />
        <div className="from-black/20 to-transparent absolute inset-0 bg-gradient-to-t" />
      </div>
      <div className="p-3">
        <h4 className="mb-1 text-sm font-semibold text-primary-blue-600">{point.year}</h4>
        <p className="mb-2 text-xs font-medium text-grayscale-black-600">{point.yearText}</p>
        <p className="text-xs leading-relaxed text-grayscale-black-500">{point.description}</p>
      </div>
    </motion.div>
  )
})

TimelinePopup.displayName = 'TimelinePopup'

// Memoized Timeline Dot Component
const TimelineDot = memo<TimelineDotProps>(({ point, isActive, index, onHover, onLeave }) => {
  return (
    <motion.g
      custom={index}
      variants={dotVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: '-10%' }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{ cursor: 'pointer' }}
      className="select-none"
    >
      <circle
        cx={point.x}
        cy={point.y}
        r="7"
        fill={isActive ? '#3B82F6' : '#E5E7EB'}
        stroke={isActive ? '#1D4ED8' : '#D1D5DB'}
        strokeWidth="2"
        style={{
          filter: isActive ? 'drop-shadow(0 2px 4px rgba(59, 130, 246, 0.3))' : 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          transformOrigin: 'center',
        }}
      />
      {/* Invisible larger hit area for better touch/mouse interaction */}
      <circle cx={point.x} cy={point.y} r="15" fill="transparent" style={{ cursor: 'pointer' }} />
    </motion.g>
  )
})

TimelineDot.displayName = 'TimelineDot'

// Memoized Timeline Label Component
const TimelineLabel = memo<TimelineLabelProps>(({ point, index }) => {
  // Split text for better layout
  const [firstLine, ...restLines] = point.yearText.split(' ')
  const secondLine = restLines.join(' ')

  return (
    <motion.div
      className="pointer-events-none absolute z-20"
      style={{
        left: `${(point.x / 800) * 100}%`,
        top: `${((point.y + 40) / 400) * 100}%`,
        transform: 'translateX(-50%)',
      }}
      custom={index}
      variants={labelVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
    >
      <div className="text-center">
        <div className="mb-1 text-sm font-bold text-primary-blue-600 drop-shadow-sm">
          {point.year}
        </div>
        <div className="text-[11px] leading-tight text-grayscale-black-500">
          <div className="font-medium">{firstLine}</div>
          {secondLine && <div>{secondLine}</div>}
        </div>
      </div>
    </motion.div>
  )
})

TimelineLabel.displayName = 'TimelineLabel'

// Main Interactive Timeline Component
const InteractiveTimeline = memo(() => {
  const [activePoint, setActivePoint] = useState<TimelinePoint | null>(null)
  const [hasInteracted, setHasInteracted] = useState(false)

  // Memoized path calculations
  const { fullPath, activePath } = useMemo(() => {
    const pathPoints = TIMELINE_DATA.map((point) => `${point.x} ${point.y}`)
    const fullPath = `M ${pathPoints.join(' L ')}`

    let activePath = ''
    if (activePoint) {
      const activeIndex = TIMELINE_DATA.findIndex((p) => p.year === activePoint.year)
      if (activeIndex >= 0) {
        const activePoints = pathPoints.slice(0, activeIndex + 1)
        activePath = `M ${activePoints.join(' L ')}`
      }
    }

    return { fullPath, activePath }
  }, [activePoint])

  // Optimized event handlers
  const handleDotHover = useCallback(
    (point: TimelinePoint) => {
      setActivePoint(point)
      if (!hasInteracted) {
        setHasInteracted(true)
      }
    },
    [hasInteracted],
  )
  const handleDotLeave = useCallback(() => {
    if (hasInteracted) {
      setActivePoint(null)
    }
  }, [hasInteracted])

  return (
    <SectionLayout
      heading="Our Journey"
      chip="timeline"
      className="hidden md:block"
      subLeft="Shin Shin Group, established in 2007, has grown into a leading apparel conglomerate with 11,000 employees across four factories in Bangladesh."
    >
      <motion.div
        className="container relative mx-auto -mt-24 w-full overflow-visible"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-20%' }}
      >
        {/* SVG Timeline */}
        <svg
          viewBox="0 0 800 400"
          className="h-auto w-full"
          style={{
            overflow: 'visible',
            fontFamily: 'inherit',
          }}
          role="img"
          aria-label="Timeline showing company milestones from 2007 to 2020"
        >
          {/* Base timeline path */}
          <motion.path
            d={fullPath}
            stroke="#E5E7EB"
            strokeWidth="2"
            fill="none"
            variants={pathVariants}
            style={{
              vectorEffect: 'non-scaling-stroke',
            }}
          />

          {/* Active timeline path */}
          <AnimatePresence>
            {activePoint && activePath && (
              <motion.path
                d={activePath}
                stroke="#3B82F6"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                exit={{ pathLength: 0, opacity: 0 }}
                transition={{
                  pathLength: { duration: 0.5, ease: 'easeInOut' },
                  opacity: { duration: 0.2 },
                }}
                style={{
                  vectorEffect: 'non-scaling-stroke',
                  filter: 'drop-shadow(0 1px 2px rgba(59, 130, 246, 0.2))',
                }}
              />
            )}
          </AnimatePresence>

          {/* Timeline dots */}
          {TIMELINE_DATA.map((point, index) => (
            <TimelineDot
              key={point.year}
              point={point}
              isActive={activePoint?.year === point.year}
              index={index}
              onHover={() => handleDotHover(point)}
              onLeave={handleDotLeave}
            />
          ))}
        </svg>
        {/* Year labels positioned outside SVG for better cross-browser compatibility */}
        {TIMELINE_DATA.map((point, index) => (
          <TimelineLabel key={`label-${point.year}`} point={point} index={index} />
        ))}{' '}
        {/* Popup with AnimatePresence for better exit animations */}
        <AnimatePresence mode="wait">
          {activePoint && <TimelinePopup key={activePoint.year} point={activePoint} />}
        </AnimatePresence>
      </motion.div>
    </SectionLayout>
  )
})

InteractiveTimeline.displayName = 'InteractiveTimeline'

export default InteractiveTimeline
