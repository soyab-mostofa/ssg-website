'use client'
import { motion, Variants } from 'motion/react'
import { FC, useRef } from 'react'
import { useTextLines } from '@/lib/useTextLines'

const AnimatedText: FC<{
  text: string
  className?: string
  delay?: number
}> = ({ text, className = '', delay = 0.5 }) => {
  const containerRef = useRef(null)
  const lines = useTextLines({
    text,
    containerRef,
  })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
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
        type: 'spring',
        stiffness: 50,
        damping: 15,
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1], // This approximates 'power1.out'
      },
    },
  }

  return (
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
      viewport={{ once: true, margin: '-250px' }}
    >
      {lines.map((line, i) => (
        <div key={i} className="relative overflow-hidden pb-1">
          <motion.span variants={lineVariants} className="inline-block">
            {line.text}
          </motion.span>
        </div>
      ))}
    </motion.div>
  )
}
export default AnimatedText
