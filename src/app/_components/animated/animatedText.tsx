'use client'
import React from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

interface WordRevealProps {
  text: string
  className?: string
}

const WordReveal = ({ text, className }: WordRevealProps) => {
  // Split text into words, preserving spaces and punctuation
  const words = text.split(/(\s+)/).filter(Boolean)

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const wordAnimation = {
    hidden: { y: '110%', opacity: 1 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.215, 0.61, 0.355, 1], // Custom easing similar to power1.out
      },
    },
  }

  return (
    <motion.div
      className={cn('flex flex-wrap', className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {words.map((word, index) => {
        // Check if the word is just whitespace
        if (word.trim() === '') {
          // return null
          return <span key={index}>&nbsp;</span>
        }

        return (
          <div key={index} className="overflow-hidden pb-2">
            <motion.span variants={wordAnimation} className="inline-block">
              {word}
            </motion.span>
          </div>
        )
      })}
    </motion.div>
  )
}

export default WordReveal
