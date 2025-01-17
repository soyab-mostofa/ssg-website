'use client'
import { memo } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'
import { useState, useCallback } from 'react'
import TextFadeUp from '../../animated/TextFadeUp'
import SectionChip from '../../shared/SectionChip'
import Button from '../../shared/Button'
import AnimateTextInView from '../../animated/animateTextInView'

// Move customers data outside component to prevent recreation on rerenders

// Memoized customer logo component
const CustomerLogo = memo(function CustomerLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="mb-10 w-[calc(50%-20px)] rounded-lg border border-primary-blue-200 md:w-[calc(25%-20px)]">
      <Image
        src={logo}
        alt={name}
        width={276}
        height={124}
        className="h-auto object-cover"
        loading="lazy"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
    </div>
  )
})

export default function CustomersSection() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return (
    <section className="container py-24">
      <div className="mb-10 flex flex-col justify-between gap-8 md:flex-row">
        <div className="flex basis-1/2 flex-col items-start gap-8">
          <SectionChip>OUR CUSTOMERS</SectionChip>
          <AnimateTextInView
            text="Trusted by Industry Leaders"
            className="text-3xl font-bold md:text-5xl"
          />
        </div>

        <div className="mt-auto h-full max-w-[584px] basis-1/2">
          <TextFadeUp
            className="text-base text-grayscale-black-400"
            text="Lorem ipsum dolor sit amet consectetur. Mattis arcu lectus morbi a ut massa eget mauris.
            Dis facilisi gravida neque elementum auctor felis neque facilisis.Z"
          />
        </div>
      </div>

      {/* Logos Grid */}
      <div className="relative">
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : '430px' }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="flex flex-wrap items-center justify-between">
            {Array.from({ length: 29 }).map((_, i) => (
              <CustomerLogo
                key={`partner-${i + 1}`}
                name={'partner name'}
                logo={`/partners/partner-${i + 1}.png`}
              />
            ))}
          </div>
        </motion.div>

        <AnimatePresence>
          {!isOpen && (
            <motion.div
              className="to-transparent absolute inset-0 z-10 bg-gradient-to-t from-others-white via-others-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
      </div>

      <div className="relative z-50 mt-10 flex justify-center pb-4">
        <Button onClick={toggleOpen}>{isOpen ? 'Show Less' : 'View All'}</Button>
      </div>
    </section>
  )
}
