'use client'
import React from 'react'
import { motion, Variants } from 'motion/react'

interface HeroTextAnimationProps {
  text: string
  className?: string
  delay?: number
}

const HeroTextAnimation: React.FC<HeroTextAnimationProps> = ({
  text,
  className = '',
  delay = 0.5,
}) => {
  // Split text into words while preserving spaces
  const words = text.split(' ')

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  }

  const wordVariants: Variants = {
    hidden: {
      y: '100%',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden">
          <motion.span variants={wordVariants} className="inline-block">
            {word}
            {/* Add space after each word except the last one */}
            {index < words.length - 1 && '\u00A0'}
          </motion.span>
        </span>
      ))}
    </motion.div>
  )
}

export default HeroTextAnimation
