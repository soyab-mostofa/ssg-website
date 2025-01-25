'use client'
import { memo } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'
import { useState, useCallback } from 'react'
import Button from '@/app/_components/shared/Button'
import SectionLayout from '@/app/_components/shared/SectionLayout'
import { cn } from '@/lib/utils'

const CustomerLogo = memo(function CustomerLogo({ logo }: { logo: string }) {
  return (
    <div className="relative aspect-[241/285] w-full max-w-[241px] rounded-lg border border-primary-blue-200">
      <div className="flex aspect-[241/285] w-full max-w-[241px] justify-center">
        <Image src={logo} alt={'certifications'} className="h-auto max-w-full object-cover" fill />
      </div>
    </div>
  )
})

const OurCertifications = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return (
    <SectionLayout
      chip="OUR CERTIFICATIONS"
      heading="Certified Excellence in Apparel"
      headingWidth="500px"
      className="px-4 sm:px-6 lg:px-8"
      subLeft="Shin Shin Group holds globally recognized certifications, ensuring sustainable practices, ethical production, and premium quality standards in every garment manufactured."
    >
      <div className="relative">
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : '900px' }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="container grid grid-cols-3 gap-4 md:grid-cols-5 md:gap-8 lg:grid-cols-5">
            {Array.from({ length: 23 }).map((_, i) => (
              <CustomerLogo key={i} logo={`/awards/awards-${i + 1}.png`} />
            ))}
          </div>
        </motion.div>

        <AnimatePresence>
          {!isOpen && (
            <motion.div
              className="to-transparent absolute inset-0 z-10 bg-gradient-to-t from-others-white via-others-white/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
      </div>

      <div className={cn('relative z-50 mt-8 flex justify-center pb-4', { '-mt-20': !isOpen })}>
        <Button onClick={toggleOpen}>{isOpen ? 'Show Less' : 'View All'}</Button>
      </div>
    </SectionLayout>
  )
}

export default OurCertifications
