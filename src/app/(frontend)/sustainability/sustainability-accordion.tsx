/* eslint-disable @next/next/no-img-element */
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { PlusCircleIcon } from 'lucide-react'
import { BlurFade } from '@/components/ui/blur-fade'

interface AccordionItem {
  title: string
  content: string
  image: string
}

export const sustainabilityItems: AccordionItem[] = [
  {
    title: 'Water',
    content:
      'Shin Shin Group minimizes water use with rainwater harvesting, sensor-based taps, and condensate recovery systems, ensuring every drop is used efficiently.',
    image: '/sustainability/sustain-5.webp',
  },
  {
    title: 'Renewable Energy',
    content:
      'With 91.2 kWp solar energy harnessed in 2023, Shin Shin Group powers its operations sustainably, cutting reliance on non-renewable resources.',
    image: '/sustainability/sustain-1.webp',
  },
  {
    title: 'UN Global Compact Member',
    content:
      'As a signatory of un global compact, ssg adheres to OECD code of conducts of responsible business',
    image: '/sustainability/sustain-4.webp',
  },
  {
    title: 'Green Factory',
    content:
      'Our LEED Gold-certified factory Jeans Plus Limited, integrates eco-friendly designs, energy-efficient technology, and optimized resource use to lead the apparel industry in sustainability.',
    image: '/sustainability/sustain-2.webp',
  },
]

export default function SustainabilityAccordion({
  active,
  setActive,
}: {
  active: number
  setActive: (index: number) => void
}) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(active)

  // Sync accordion state with main component's active state
  useEffect(() => {
    setExpandedIndex(active)
  }, [active])

  const toggleAccordion = (index: number) => {
    const newIndex = expandedIndex === index ? null : index
    setExpandedIndex(newIndex)
    if (newIndex !== null) {
      setActive(newIndex)
    }
  }

  return (
    <div className="relative mt-16 space-y-4 bg-primary-blue-900 pb-16 pt-16 text-others-white sm:mt-24 sm:pb-24 sm:pt-24">
      <div className="container">
        {sustainabilityItems.map((item, index) => (
          <BlurFade inView key={item.title}>
            <div className="border-white/10 border-b last:border-none">
              <button
                onClick={() => toggleAccordion(index)}
                className="relative z-50 flex w-full items-center justify-between py-4 text-left text-2xl font-semibold"
              >
                {item.title}
                <motion.div
                  initial={false}
                  animate={{ rotate: expandedIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <PlusCircleIcon className="h-6 w-6" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {expandedIndex === index && (
                  <motion.div
                    key={`content-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: 'auto',
                      opacity: 1,
                      transition: {
                        height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                        opacity: { duration: 0.25, delay: 0.1 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
                        opacity: { duration: 0.25 },
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-4 pb-6">
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="text-base"
                      >
                        {item.content}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="aspect-[12/8] overflow-hidden rounded-lg"
                      >
                        <img
                          src={item.image}
                          alt={`Illustration for ${item.title}`}
                          className="h-full w-full object-cover"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </BlurFade>
        ))}
      </div>

      <img
        src="/pattern-corner.png"
        alt="pattern"
        aria-hidden
        className="absolute right-[-91px] top-[-109px] z-0 scale-50 opacity-5 md:right-0 md:top-0 md:scale-100"
      />
      <img
        src="/pattern-corner.png"
        alt="pattern"
        aria-hidden
        className="absolute bottom-0 left-0 z-0 rotate-180 scale-50 opacity-5 md:bottom-[-90px] md:left-[-92px] md:scale-100"
      />
    </div>
  )
}
