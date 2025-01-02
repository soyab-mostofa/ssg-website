'use client'
import React from 'react'
import { motion, useInView } from 'motion/react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const DesktopQuote = ({ paragraph }: { paragraph: string }) => {
  const words = paragraph.split(' ')
  const containerRef = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true })

  return (
    <div ref={containerRef} className="relative hidden md:flex">
      <motion.p className="mb-16 mt-12 hidden max-w-sm flex-wrap items-center md:flex md:max-w-[930px]">
        {words.map((word, i) => {
          const isFirstWord = i === 0
          const isLastWord = i === words.length - 1

          // Calculate delay for each word to fit within 0.3s total duration
          const delay = (i / words.length) * 3

          if (isFirstWord) {
            return (
              <motion.span
                key={i}
                initial={{ opacity: 0.3 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0.3 }}
                transition={{
                  duration: 0.1,
                  delay,
                  ease: 'easeOut',
                  type: 'spring',
                  stiffness: 100,
                  damping: 10,
                }}
                className={cn('relative inline-block indent-14 text-2xl md:text-3xl')}
              >
                {word}
                <Image
                  className="absolute -top-4 object-center"
                  width={48}
                  height={48}
                  src="/open-quote.png"
                  alt="quote icon"
                />
              </motion.span>
            )
          }

          if (isLastWord) {
            return (
              <motion.span
                key={i}
                initial={{ opacity: 0.3 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0.3 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 10,
                  duration: 0.1,
                  delay,
                  ease: 'easeOut',
                }}
                className="relative ml-1 inline-block text-2xl md:text-3xl"
              >
                {word}
                <Image
                  className="absolute -right-14 bottom-0 scale-x-[-1] object-center"
                  width={48}
                  height={48}
                  src="/open-quote.png"
                  alt="quote icon"
                />
              </motion.span>
            )
          }

          return (
            <motion.span
              key={i}
              initial={{ opacity: 0.3 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0.3 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 10,
                duration: 0.1,
                delay,
                ease: 'easeOut',
              }}
              className={cn('ml-2 inline-block text-xl md:text-3xl', {
                'ml-10': i === 0,
              })}
            >
              {word}
            </motion.span>
          )
        })}
      </motion.p>
    </div>
  )
}

export default DesktopQuote
