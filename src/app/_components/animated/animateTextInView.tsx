'use client'
import { motion, Variants } from 'motion/react'
import { FC, HTMLAttributes, useRef } from 'react'
import { useTextLines } from '@/lib/useTextLines'
import { cn } from '@/lib/utils'

const AnimateTextInView: FC<{
  text: string
  className?: HTMLAttributes<HTMLDivElement>['className']
  delay?: number
  childClass?: HTMLAttributes<HTMLSpanElement>['className']
}> = ({ childClass, text, className = '', delay = 0.1 }) => {
  const containerRef = useRef(null)
  const lines = useTextLines({
    text,
    containerRef,
  })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12, // Reduced for smoother sequence
        delayChildren: delay,
      },
    },
  } as Variants

  const lineVariants = {
    hidden: {
      y: '100%',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2, // Increased duration for smoother motion
        ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier easing
        opacity: {
          duration: 0.8,
          ease: [0.215, 0.61, 0.355, 1],
        },
      },
    },
  }

  // Add spaces back to text and handle whitespace properly
  // const processedText = text.replace(/\s+/g, ' ').trim()

  return (
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className={`whitespace-pre-wrap ${className}`}
      viewport={{ once: true, margin: '-100px' }}
    >
      {lines.map((line, i) => (
        <div
          key={i}
          className={cn('relative overflow-hidden md:mr-1 md:inline-block md:pb-1', childClass)}
        >
          <motion.span variants={lineVariants} className="inline-block whitespace-pre-wrap">
            {line.text}
          </motion.span>
        </div>
      ))}
    </motion.div>
  )
}

export default AnimateTextInView
