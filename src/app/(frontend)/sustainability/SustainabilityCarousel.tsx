'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { sustainabilityItems } from './sustainability-accordion'
import Image from 'next/image'

const SustainabilityCarousel = () => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % sustainabilityItems.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="absolute inset-0 rounded-lg"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <Image
            src={sustainabilityItems[active].image}
            alt={sustainabilityItems[active].title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default SustainabilityCarousel
