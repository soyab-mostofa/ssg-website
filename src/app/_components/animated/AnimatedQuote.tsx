'use client'
import React from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const AnimatedQuote = ({ paragraph }: { paragraph: string }) => {
  const c = paragraph.split(' ')

  const words = c.map((word, i) => {
    const lastWord = i === c.length - 1
    if (lastWord) {
      return (
        <motion.span key={i} className={cn('relative ml-1 inline-block text-xl md:text-quote')}>
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
    if (i === 0) {
      return (
        <motion.span
          key={i}
          className={cn('relative inline-block indent-12 text-xl md:text-quote')}
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
        className={cn('ml-1 inline-block text-xl md:text-quote', { 'ml-10': i === 0 })}
      >
        {word}
      </motion.span>
    )
  })
  return (
    <motion.p className="flex max-w-sm flex-wrap items-center md:max-w-[930px]">{words}</motion.p>
  )
}

export default AnimatedQuote
