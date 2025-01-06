'use client'
import { motion } from 'motion/react'
import React from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  staggerChildren?: number
}

const AnimatedText = ({
  text,
  className = '',
  delay = 0,
  duration = 0.6,
  staggerChildren = 0.03,
}: AnimatedTextProps) => {
  // Container variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delay,
      },
    },
  }

  // Letter variants with smooth easing
  const letterVariants = {
    hidden: {
      y: 100,
      opacity: 0,
      transition: {
        type: 'tween',
        ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier curve similar to Power4
        duration: duration,
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier curve similar to Power4
        duration: duration,
      },
    },
  }

  return (
    <motion.p
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`-mt-2 overflow-hidden pb-2 ${className}`}
    >
      {text.split('').map((char, index) => {
        if (char === ' ') {
          return <span key={index}>&nbsp;</span>
        } else {
          return (
            <motion.span key={index} variants={letterVariants} className="inline-block">
              {char}
            </motion.span>
          )
        }
      })}
    </motion.p>
  )
}

export default AnimatedText
