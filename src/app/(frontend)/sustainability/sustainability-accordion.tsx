/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { PlusCircleIcon } from 'lucide-react'

interface AccordionItem {
  title: string
  content: string
  image: string
}

const items: AccordionItem[] = [
  {
    title: 'Water',
    content:
      'Conserving natural resources like water is imperative to our vision as a sustainable clothing manufacturer. So, our approach is to reduce, reuse, and recycle. In 2020 alone, we have saved 24.31% of water, reducing 5% of wastewater!',
    image: '/sustainability-windmill.png',
  },
  {
    title: 'Renewable Energy',
    content:
      'Our commitment to renewable energy drives us towards a sustainable future. We have implemented solar panels and wind turbines across our facilities, achieving 60% renewable energy usage in our operations.',
    image: '/sustainability-windmill.png',
  },
  {
    title: 'Green Factory',
    content:
      "Our green factories are designed with sustainability at their core. From energy-efficient lighting to waste reduction programs, we're creating manufacturing spaces that minimize environmental impact.",
    image: '/sustainability-windmill.png',
  },
]

export default function SustainabilityAccordion() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="relative mt-16 space-y-4 bg-primary-blue-900 pb-16 pt-16 text-others-white sm:mt-24 sm:pb-24 sm:pt-24">
      <div className="container">
        {items.map((item, index) => (
          <div key={item.title} className="border-white/10 border-b last:border-none">
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
        className="absolute bottom-[-90px] left-[-92px] z-0 rotate-180 scale-50 opacity-5 md:scale-100"
      />
    </div>
  )
}
