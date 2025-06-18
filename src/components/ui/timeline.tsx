'use client'
import AnimateTextInView from '@/app/_components/animated/animateTextInView'
import { useScroll, useTransform, motion } from 'motion/react'
import React, { useEffect, useRef, useState } from 'react'

interface TimelineEntry {
  title: string
  eventName?: string
  content: React.ReactNode
}

interface TimelineColors {
  background?: string
  text?: string
  secondaryText?: string
  dot?: string
  dotBorder?: string
  line?: string
  highlight?: string
}

interface TimelineProps {
  data: TimelineEntry[]
  colors?: TimelineColors
}

const defaultColors = {
  background: '#ffffff',
  text: '#1a1a1a',
  secondaryText: '#666666',
  dot: '#e2e8f0',
  dotBorder: '#cbd5e1',
  line: '#e2e8f0',
  highlight: '#3b82f6',
}

export const Timeline = ({ data, colors = {} }: TimelineProps) => {
  const mergedColors = { ...defaultColors, ...colors }
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        setHeight(rect.height)
      }
    }

    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 20%', 'end 80%'],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div
      className="w-full font-sans md:px-10"
      ref={containerRef}
      style={{ backgroundColor: mergedColors.background }}
    >
      <div className="mx-auto -mb-20 max-w-7xl px-4 py-20 md:px-8 lg:px-10">
        <AnimateTextInView text="Timeline Journey" className="text-3xl font-bold md:text-5xl" />
        <p className="max-w-sm text-sm md:text-base" style={{ color: mergedColors.secondaryText }}>
          Track the progress through time
        </p>
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:gap-10 md:pt-40">
            {' '}
            <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
              <div
                className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full md:left-3"
                style={{ backgroundColor: mergedColors.background }}
              >
                <div
                  className="h-4 w-4 rounded-full p-2"
                  style={{
                    backgroundColor: mergedColors.dot,
                    borderColor: mergedColors.dotBorder,
                    borderWidth: '1px',
                  }}
                />
              </div>
              <div className="hidden md:flex md:flex-col md:pl-20">
                <h3
                  className="text-xl font-bold md:text-5xl"
                  style={{ color: mergedColors.secondaryText }}
                >
                  {item.title}
                </h3>
                {item.eventName && (
                  <p
                    className="mt-2 text-sm font-medium md:text-base"
                    style={{ color: mergedColors.text }}
                  >
                    {item.eventName}
                  </p>
                )}
              </div>
            </div>{' '}
            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <div className="mb-4 flex items-center justify-between gap-2 md:hidden">
                <h3
                  className="block text-left text-2xl font-bold"
                  style={{ color: mergedColors.secondaryText }}
                >
                  {item.title}
                </h3>
                {item.eventName && (
                  <p
                    className="text-end text-sm font-semibold"
                    style={{ color: mergedColors.text }}
                  >
                    {item.eventName}
                  </p>
                )}
              </div>
              <div className="prose prose-sm md:prose-base" style={{ color: mergedColors.text }}>
                {item.content}
              </div>
            </div>
          </div>
        ))}

        <div
          style={{
            height: height + 'px',
            left: '2rem',
          }}
          className="absolute top-0 w-[2px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <div
            className="absolute inset-x-0 top-0 h-full w-full"
            style={{ backgroundColor: mergedColors.line }}
          />
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
              backgroundColor: mergedColors.highlight,
            }}
            className="absolute inset-x-0 top-0 w-full rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Timeline
