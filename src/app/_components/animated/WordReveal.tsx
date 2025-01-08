'use client'
import React, { useMemo } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

interface WordRevealProps {
  text: string
  className?: string
}

const WordReveal = ({ text, className }: WordRevealProps) => {
  // Respect user's reduced motion preferences
  const shouldReduceMotion = useReducedMotion()

  // Memoize word splitting to avoid unnecessary recalculations
  const words = useMemo(() => {
    return text.split(/(\s+)/).filter(Boolean)
  }, [text])

  const container = {
    hidden: { opacity: 0 },
    visible: (custom: boolean) => ({
      opacity: 1,
      transition: {
        staggerChildren: custom ? 0 : 0.08,
        delayChildren: custom ? 0 : 0.15,
        when: 'beforeChildren',
      },
    }),
  }

  const wordAnimation = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: [0.33, 1, 0.68, 1], // Custom cubic-bezier easing for smoother motion
      },
    },
  }

  return (
    <motion.div
      className={cn('flex flex-wrap', className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: '-10%',
        amount: 0.3, // Trigger animation when 30% of component is visible
      }}
      custom={shouldReduceMotion}
    >
      {words.map((word, index) => {
        const isWhitespace = word.trim() === ''

        if (isWhitespace) {
          return <span key={`space-${index}`} aria-hidden="true" className="w-[0.25em]" />
        }

        return (
          <div key={`word-${index}`} className="overflow-hidden" style={{ margin: '0 0.1em' }}>
            <motion.span variants={wordAnimation} className="inline-block">
              {word}
            </motion.span>
          </div>
        )
      })}
    </motion.div>
  )
}

// Prevent unnecessary re-renders
export default React.memo(WordReveal)
