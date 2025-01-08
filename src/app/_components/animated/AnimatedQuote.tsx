'use client'
import React from 'react'
import { motion, useInView } from 'motion/react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const AnimatedQuote = ({ paragraph }: { paragraph: string }) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true })
  const words = paragraph.split(' ')

  return (
    <div ref={containerRef}>
      <motion.p className="flex max-w-sm flex-wrap items-center md:max-w-[930px]">
        {words.map((word, i) => {
          const isFirstWord = i === 0
          const isLastWord = i === words.length - 1
          const delay = (i / words.length) * 3

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
                className={cn('md:text-quote relative ml-1 inline-block text-xl')}
              >
                {word}
                <Image
                  className="absolute -bottom-1 -right-10 scale-50 scale-x-[-.5] object-center"
                  width={48}
                  height={48}
                  src="/open-quote.png"
                  alt="quote icon"
                />
              </motion.span>
            )
          }

          if (isFirstWord) {
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
                className={cn('md:text-quote relative inline-block indent-12 text-xl')}
              >
                {word}
                <Image
                  className="absolute -top-4 scale-50 object-center"
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
              className={cn('md:text-quote ml-1 inline-block text-xl', {
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

export default AnimatedQuote
