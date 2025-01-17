/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { motion } from 'motion/react'
import SectionLayout from '../../shared/SectionLayout'

const timelineData = [
  { year: 2007, x: 40, y: 320, image: '/founding-story-1.png', description: 'Company Founded' },
  {
    year: 2009,
    x: 180,
    y: 280,
    image: '/founding-story-1.png',
    description: 'First Major Milestone',
  },
  {
    year: 2014,
    x: 320,
    y: 260,
    image: '/founding-story-1.png',
    description: 'International Expansion',
  },
  { year: 2015, x: 460, y: 240, image: '/founding-story-1.png', description: 'Product Innovation' },
  { year: 2016, x: 600, y: 200, image: '/founding-story-1.png', description: 'Market Leadership' },
  { year: 2022, x: 740, y: 100, image: '/founding-story-1.png', description: 'Global Recognition' },
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
      className="hidden sm:block"
      subLeft="Shin Shin Group, established in 2007, has grown into a leading apparel conglomerate with 8,727 employees across five factories in Bangladesh. The group achieved."
    >
      <motion.div
        className="container relative mx-auto -mt-24 w-full overflow-visible md:block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <svg viewBox="0 0 800 400" className="h-auto w-full overflow-visible">
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
          )}

          {/* Timeline points with popups */}
          {timelineData.map((point, index) => (
            <motion.g
              key={point.year}
              onHoverStart={() => {
                setHasBeenHovered(true)
                setActiveYear(point.year)
                setActivePoint(point)
              }}
              onHoverEnd={() => {
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
            >
              {/* Popup */}
              {activeYear === point.year && (
                <motion.foreignObject
                  x={point.x - 128}
                  y={point.y - 180}
                  width="256"
                  height="200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2 }}
                  style={{ zIndex: 50 }}
                >
                  <div
                    className="rounded-lg border border-primary-blue-100 bg-others-white shadow-sm"
                    style={{ position: 'relative', zIndex: 50 }}
                  >
                    <motion.img
                      src={point.image}
                      alt={`Event from ${point.year}`}
                      className="h-32 w-full rounded object-cover"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    />
                    <p className="text-gray-600 py-2 text-center text-sm">{point.description}</p>
                  </div>
                </motion.foreignObject>
              )}

              {/* Timeline dot */}
              <motion.circle
                cx={point.x}
                cy={point.y}
                r="6"
                fill={activeYear === point.year ? '#3B82F6' : '#E5E7EB'}
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.2 }}
              />

              {/* Year label */}
              <motion.text
                x={point.x}
                y={point.y + 25}
                textAnchor="middle"
                className="fill-grayscale-black-400 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                {point.year}
              </motion.text>
            </motion.g>
          ))}
        </svg>
      </motion.div>
    </SectionLayout>
  )
}

export default InteractiveTimeline
