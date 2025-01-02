'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

interface TextRevealProps {
  text: string
  className?: string
  center?: boolean
}

const TextFadeUp = ({ text, className, center }: TextRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [lines, setLines] = useState<string[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    // Function to split text into lines
    const splitIntoLines = () => {
      const container = containerRef.current
      if (!container) return

      // Create a temporary element to measure text
      const tempDiv = document.createElement('div')
      tempDiv.style.position = 'absolute'
      tempDiv.style.visibility = 'hidden'
      tempDiv.style.width = `${container.offsetWidth}px`
      tempDiv.style.fontSize = window.getComputedStyle(container).fontSize
      tempDiv.style.fontFamily = window.getComputedStyle(container).fontFamily
      tempDiv.style.whiteSpace = 'normal'
      document.body.appendChild(tempDiv)

      // Split text into words
      const words = text.split(' ')
      const lines: string[] = []
      let currentLine = ''

      words.forEach((word) => {
        tempDiv.textContent = `${currentLine} ${word}`.trim()
        if (tempDiv.offsetHeight > parseInt(window.getComputedStyle(tempDiv).lineHeight)) {
          lines.push(currentLine.trim())
          currentLine = word
        } else {
          currentLine = `${currentLine} ${word}`.trim()
        }
      })
      lines.push(currentLine.trim())

      document.body.removeChild(tempDiv)
      setLines(lines)
    }

    splitIntoLines()

    // Recalculate on resize
    const handleResize = () => {
      splitIntoLines()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [text])

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8,
      },
    },
  }

  const lineAnimation = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1], // Custom easing similar to power1.out
      },
    },
  }

  return (
    <motion.div
      ref={containerRef}
      className={cn('overflow-hidden', className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {lines.map((line, index) => (
        <div
          key={index}
          className={cn('overflow-hidden', center && 'flex flex-wrap justify-center md:block')}
        >
          <motion.div variants={lineAnimation} className="leading-relaxed">
            {line}
          </motion.div>
        </div>
      ))}
    </motion.div>
  )
}

export default TextFadeUp
