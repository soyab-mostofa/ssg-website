"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface TimelinePoint {
  yearText: string
  year: number
  position: { x: number; y: number }
  image: string
  description: string
}

const TIMELINE_DATA: readonly TimelinePoint[] = [
  {
    yearText: "Jeans Plus Ltd",
    year: 2007,
    position: { x: 8, y: 75 },
    image: "/timeline/jeans-plus.webp",
    description: "Jeans Plus Ltd established, marking the beginning of our journey in apparel manufacturing.",
  },
  {
    yearText: "Shin Shin Apparels Ltd",
    year: 2009,
    position: { x: 25, y: 65 },
    image: "/timeline/shinshin-apparel.webp",
    description: "Shin Shin Apparels Ltd established, focusing on quality and sustainability.",
  },
  {
    yearText: "Organic Jeans Ltd",
    year: 2014,
    position: { x: 48, y: 55 },
    image: "/timeline/organic.webp",
    description: "Organic Jeans Ltd launched, specializing in eco-friendly denim production.",
  },
  {
    yearText: "Vancot Ltd",
    year: 2015,
    position: { x: 65, y: 45 },
    image: "/timeline/vancot.webp",
    description: "Vancot Ltd established, expanding into knitwear and woven garments.",
  },
  {
    yearText: "Saud Garments Industries Ltd",
    year: 2022,
    position: { x: 92, y: 35 },
    image: "/timeline/saud.webp",
    description: "Saud Garments Industries Ltd established, enhancing production capacity and sustainability efforts.",
  },
] as const

export default function Timeline() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [visiblePoints, setVisiblePoints] = useState<number[]>([])
  const [popupEvent, setPopupEvent] = useState<TimelinePoint | null>(null)
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
    if (TIMELINE_DATA.length < 2) return ""

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
    if (startIndex >= endIndex || endIndex >= TIMELINE_DATA.length) return ""

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
    <div className="w-full min-h-screen bg-grayscale-black-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block bg-others-white px-4 py-2 rounded-lg shadow-sm mb-6">
            <span className="text-secondary-red-500 font-medium">■ TIMELINE</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <h1 className="text-4xl md:text-5xl font-bold text-grayscale-black-500">Our Journey</h1>
            <p className="text-grayscale-black-400 text-lg leading-relaxed">
              Shin Shin Group, established in 2007, has grown into a leading apparel conglomerate with multiple
              manufacturing facilities across Bangladesh. The group achieved remarkable milestones in sustainable
              manufacturing and innovation through strategic expansions and acquisitions.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative h-[500px] md:h-96 w-full">
          {/* SVG for the timeline path */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{ zIndex: 1 }}
          >            {/* Main timeline path - subtle connecting line */}
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
                  strokeDasharray: "2000",
                  strokeDashoffset: "0",
                  animation: "drawLine 1s ease-out forwards",
                }}
              />
            )}
          </svg>

          {/* Timeline points and labels */}
          {TIMELINE_DATA.map((event, index) => (
            <div
              key={event.year}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                visiblePoints.includes(index) ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
              style={{
                left: `${event.position.x}%`,
                top: `${event.position.y}%`,
                zIndex: 2,
                transitionDelay: `${index * 300}ms`,
              }}
            >              {/* Year label */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <span className="text-sm font-bold text-grayscale-black-500">{event.year}</span>
              </div>

              {/* Company name label - positioned below year */}
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap max-w-32 text-center">
                <span className="text-xs font-medium text-grayscale-black-400 leading-tight">{event.yearText}</span>
              </div>

              {/* Timeline point */}
              <div
                className={`w-4 h-4 rounded-full border-3 cursor-pointer transition-all duration-300 ${
                  hoveredIndex === index
                    ? "bg-primary-blue-500 border-primary-blue-500 scale-150 shadow-lg shadow-primary-blue-500/50"
                    : "bg-primary-blue-600 border-others-white shadow-lg hover:scale-125 hover:shadow-xl"
                }`}
                onMouseEnter={(e) => handleMouseEnter(event, index, e)}
                onMouseLeave={handleMouseLeave}
              />
            </div>
          ))}
        </div>        {/* Popup - only image and description with smooth transitions */}
        {popupEvent && (
          <div
            className="fixed z-50 pointer-events-none"
            style={{
              left: popupPosition.x,
              top: popupPosition.y,
              transform: "translate(-50%, -100%)", // This positions the card above the point
            }}
          >            <Card className="w-80 md:w-96 shadow-2xl border-0 bg-others-white overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200">            <CardContent className="p-0">
                <div className="overflow-hidden">
                  <Image
                    src={popupEvent.image || "/placeholder.svg"}
                    alt={popupEvent.yearText}
                    className="w-full h-48 object-cover transition-transform duration-300 ease-out hover:scale-105"
                    width={384}
                    height={192}
                    sizes="(max-width: 768px) 320px, 384px"
                  />
                </div>
                <div className="p-5">                  <p className="text-sm text-grayscale-black-400 leading-relaxed">
                    {popupEvent.description}
                  </p>
                </div>
              </CardContent>
            </Card>            {/* Enhanced arrow pointing down */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full">
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-others-white drop-shadow-lg" />
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
