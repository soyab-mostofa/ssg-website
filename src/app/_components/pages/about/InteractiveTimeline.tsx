'use client'

import type React from 'react'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

interface TimelinePoint {
  yearText: string
  year: number
  position: { x: number; y: number }
  image: string
  description: string
}

const TIMELINE_DATA: readonly TimelinePoint[] = [
  {
    yearText: 'Jeans Plus Ltd',
    year: 2007,
    position: { x: 8, y: 75 },
    image: '/public/jeans-plus.webp',
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
    position: { x: 48, y: 55 },
    image: '/timeline/organic.webp',
    description: 'Organic Jeans Ltd launched, specializing in eco-friendly denim production.',
  },
  {
    yearText: 'Vancot Ltd',
    year: 2015,
    position: { x: 65, y: 45 },
    image: '/timeline/vancot.webp',
    description: 'Vancot Ltd established, expanding into knitwear and woven garments.',
  },
  {
    yearText: 'Saud Garments Industries Ltd',
    year: 2022,
    position: { x: 92, y: 35 },
    image: '/timeline/saud.webp',
    description:
      'Saud Garments Industries Ltd established, enhancing production capacity and sustainability efforts.',
  },
] as const

export default function Timeline() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(2) // Default to Organic Jeans Ltd (2014)
  const [visiblePoints, setVisiblePoints] = useState<number[]>([])
  const [popupEvent, setPopupEvent] = useState<TimelinePoint | null>(TIMELINE_DATA[2]) // Default to Organic Jeans Ltd
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 })
  const timelineRef = useRef<HTMLDivElement>(null)

  // Sequential appearance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start sequential animation
            TIMELINE_DATA.forEach((_, index) => {
              setTimeout(() => {
                setVisiblePoints((prev) => [...prev, index])
              }, index * 300) // 300ms delay between each point
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 },
    )

    if (timelineRef.current) {
      observer.observe(timelineRef.current)
    }
    return () => observer.disconnect()
  }, [])

  // Set default popup position for Organic Jeans Ltd (2014) after timeline loads
  useEffect(() => {
    if (timelineRef.current && visiblePoints.includes(2)) {
      // Calculate position for Organic Jeans Ltd (index 2)
      const timelineRect = timelineRef.current.getBoundingClientRect()
      const organicJeansData = TIMELINE_DATA[2]

      // Calculate the position of the timeline point
      const pointX = timelineRect.left + (timelineRect.width * organicJeansData.position.x) / 100
      const pointY = timelineRect.top + (timelineRect.height * organicJeansData.position.y) / 100

      setPopupPosition({
        x: pointX,
        y: pointY - 20, // 20px gap above the point
      })
    }
  }, [visiblePoints])
  const handleMouseEnter = (event: TimelinePoint, index: number, e: React.MouseEvent) => {
    setHoveredIndex(index)
    const rect = e.currentTarget.getBoundingClientRect()

    // Position popup above the timeline point with fixed positioning
    setPopupEvent(event)
    setPopupPosition({
      x: rect.left + rect.width / 2,
      y: rect.top - 20, // 20px gap above the point (fixed positioning doesn't need scrollY)
    })
  }
  const handleMouseLeave = () => {
    setHoveredIndex(null)
    setPopupEvent(null)
  }

  // Create SVG path for curved line
  const createPath = () => {
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
  }

  const getSegmentPath = (startIndex: number, endIndex: number) => {
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
  }
  return (
    <div className="min-h-screen w-full bg-grayscale-black-100 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <div className="mb-6 inline-block rounded-lg bg-others-white px-4 py-2 shadow-sm">
            <span className="font-medium text-secondary-red-500">■ TIMELINE</span>
          </div>
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
            <h1 className="text-4xl font-bold text-grayscale-black-500 md:text-5xl">Our Journey</h1>
            <p className="text-lg leading-relaxed text-grayscale-black-400">
              Shin Shin Group, established in 2007, has grown into a leading apparel conglomerate
              with multiple manufacturing facilities across Bangladesh. The group achieved
              remarkable milestones in sustainable manufacturing and innovation through strategic
              expansions and acquisitions.
            </p>
          </div>
        </div>
        {/* Timeline */}
        <div ref={timelineRef} className="relative h-[500px] w-full md:h-96">
          {/* SVG for the timeline path */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{ zIndex: 1 }}
          >
            {' '}
            {/* Main timeline path - subtle connecting line */}
            <path
              d={createPath()}
              stroke="hsl(220 4% 70%)" // grayscale-black-200
              strokeWidth="0.8"
              fill="none"
              className="transition-all duration-500"
              vectorEffect="non-scaling-stroke"
            />
            {/* Animated highlighted segment - primary blue line */}
            {hoveredIndex !== null && (
              <path
                d={getSegmentPath(0, hoveredIndex)}
                stroke="hsl(212 65% 27%)" // primary-blue-500
                strokeWidth="1.2"
                fill="none"
                vectorEffect="non-scaling-stroke"
                className="animate-pulse"
                style={{
                  strokeDasharray: '2000',
                  strokeDashoffset: '0',
                  animation: 'drawLine 1s ease-out forwards',
                }}
              />
            )}
          </svg>

          {/* Timeline points and labels */}
          {TIMELINE_DATA.map((event, index) => (
            <div
              key={event.year}
              className={`absolute -translate-x-1/2 -translate-y-1/2 transform transition-all duration-500 ${
                visiblePoints.includes(index) ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
              }`}
              style={{
                left: `${event.position.x}%`,
                top: `${event.position.y}%`,
                zIndex: 2,
                transitionDelay: `${index * 300}ms`,
              }}
            >
              {' '}
              {/* Year label */}
              <div className="absolute left-1/2 top-6 -translate-x-1/2 transform whitespace-nowrap">
                <span className="text-sm font-bold text-grayscale-black-500">{event.year}</span>
              </div>
              {/* Company name label - positioned below year */}
              <div className="absolute left-1/2 top-10 max-w-32 -translate-x-1/2 transform whitespace-nowrap text-center">
                <span className="text-xs font-medium leading-tight text-grayscale-black-400">
                  {event.yearText}
                </span>
              </div>
              {/* Timeline point */}
              <div
                className={`border-3 h-4 w-4 cursor-pointer rounded-full transition-all duration-300 ${
                  hoveredIndex === index
                    ? 'scale-150 border-primary-blue-500 bg-primary-blue-500 shadow-lg shadow-primary-blue-500/50'
                    : 'border-others-white bg-primary-blue-600 shadow-lg hover:scale-125 hover:shadow-xl'
                }`}
                onMouseEnter={(e) => handleMouseEnter(event, index, e)}
                onMouseLeave={handleMouseLeave}
              />
            </div>
          ))}
        </div>{' '}
        {/* Popup - only image and description with smooth transitions */}
        {popupEvent && (
          <div
            className="pointer-events-none fixed z-50"
            style={{
              left: popupPosition.x,
              top: popupPosition.y,
              transform: 'translate(-50%, -100%)', // This positions the card above the point
            }}
          >
            {' '}
            <Card className="w-80 overflow-hidden border-0 bg-others-white shadow-2xl duration-200 animate-in fade-in-0 zoom-in-95 md:w-96">
              {' '}
              <CardContent className="p-0">
                <div className="overflow-hidden">
                  <Image
                    src={popupEvent.image || '/placeholder.svg'}
                    alt={popupEvent.yearText}
                    className="h-48 w-full object-cover transition-transform duration-300 ease-out hover:scale-105"
                    width={384}
                    height={192}
                    sizes="(max-width: 768px) 320px, 384px"
                  />
                </div>
                <div className="p-5">
                  {' '}
                  <p className="text-sm leading-relaxed text-grayscale-black-400">
                    {popupEvent.description}
                  </p>
                </div>
              </CardContent>
            </Card>{' '}
            {/* Enhanced arrow pointing down */}
            <div className="absolute left-1/2 top-full -translate-x-1/2 transform">
              <div className="border-transparent h-0 w-0 border-l-8 border-r-8 border-t-8 border-t-others-white drop-shadow-lg" />
            </div>
          </div>
        )}
      </div>

      {/* Custom CSS for line drawing animation */}
      <style jsx>{`
        @keyframes drawLine {
          from {
            stroke-dashoffset: 2000;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  )
}
