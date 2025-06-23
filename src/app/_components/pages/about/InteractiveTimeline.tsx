/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { motion } from 'motion/react'
import SectionLayout from '../../shared/SectionLayout'

const timelineData = [
  {
    yearText: 'Jeans Plus Ltd',
    year: 2007,
    x: 40,
    y: 320,
    image: '/timeline/jeans-plus.webp',
    description: 'Jeans Plus Ltd',
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
]

const InteractiveTimeline = () => {
  const [hasBeenHovered, setHasBeenHovered] = useState<any>(false)
  const [activeYear, setActiveYear] = useState<any>(2014)
  const [activePoint, setActivePoint] = useState<any>(timelineData[2])

  const pathData = `M ${timelineData.map((point) => `${point.x} ${point.y}`).join(' L ')}`

  const getPartialPath = (targetYear: number) => {
    const points = timelineData
      .filter((point) => point.year <= targetYear)
      .map((point) => `${point.x} ${point.y}`)
    return `M ${points.join(' L ')}`
  }

  return (
    <SectionLayout
      heading="Our Journey"
      chip="timeline"
      className="hidden md:block"
      subLeft="Shin Shin Group, established in 2007, has grown into a leading apparel conglomerate with 11,000 employees across four factories in Bangladesh."
    >
      <motion.div
        className="container relative mx-auto -mt-24 w-full overflow-visible md:block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <svg 
          viewBox="0 0 800 400" 
          className="h-auto w-full" 
          style={{ 
            overflow: 'visible', 
            fontFamily: 'inherit',
            WebkitTextSizeAdjust: '100%'
          }}
        >
          {/* Base timeline path */}
          <motion.path
            d={pathData}
            stroke="#E5E7EB"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
          {/* Highlighted path */}
          {activeYear && (
            <motion.path
              d={getPartialPath(activeYear)}
              stroke="#3B82F6"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          )}{' '}
          {/* Timeline points with popups */}
          {timelineData.map((point, index) => (
            <motion.g
              key={point.year}
              onMouseEnter={() => {
                setHasBeenHovered(true)
                setActiveYear(point.year)
                setActivePoint(point)
              }}
              onMouseLeave={() => {
                if (hasBeenHovered) {
                  setActiveYear(null)
                  setActivePoint(null)
                }
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              style={{ cursor: 'pointer' }}
              className="relative z-10"            >              {/* Timeline dot */}
              <motion.circle
                cx={point.x}
                cy={point.y}
                r="6"
                className="z-10"
                fill={activeYear === point.year ? '#3B82F6' : '#E5E7EB'}
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.2 }}
              />
            </motion.g>
          ))}
        </svg>

        {/* Year labels positioned outside SVG for better Safari compatibility */}
        {timelineData.map((point, index) => (
          <div
            key={`label-${point.year}`}
            className="absolute z-20 pointer-events-none"
            style={{
              left: `${(point.x / 800) * 100}%`,
              top: `${((point.y + 35) / 400) * 100}%`,
              transform: 'translateX(-50%)',
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-xs font-bold text-primary-blue-500 mb-1">
                {point.year}
              </div>
              <div className="text-[10px] text-grayscale-black-400 leading-tight">
                <div>{point.yearText.split(' ')[0]}</div>
                <div>{point.yearText.split(' ').slice(1).join(' ')}</div>
              </div>
            </motion.div>
          </div>
        ))}{/* Popup moved outside SVG for Safari compatibility */}
        {activePoint && (
          <motion.div
            className="absolute z-50 overflow-hidden rounded-lg border border-primary-blue-100 bg-others-white shadow-sm shadow-primary-blue-500/30"
            style={{
              left: `${Math.max(0, Math.min(80, (activePoint.x / 800) * 100))}%`,
              top: `${Math.max(0, ((activePoint.y - 140) / 400) * 100)}%`,
              width: '200px',
              height: 'auto',
              transform: 'translateX(-50%)',
              pointerEvents: 'none',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <motion.img
              src={activePoint.image}
              alt={`Event from ${activePoint.year}`}
              className="h-32 w-full object-cover"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            />
            <p className="text-gray-600 inline-flex p-2 text-center text-xs font-semibold">
              {activePoint.description}
            </p>
          </motion.div>
        )}
      </motion.div>
    </SectionLayout>
  )
}

export default InteractiveTimeline
