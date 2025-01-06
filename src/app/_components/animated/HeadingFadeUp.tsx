'use client'
import { useRef } from 'react'
import { motion, Variants } from 'motion/react'
import { cn } from '@/lib/utils'
import { useTextLines } from '@/lib/useTextLines'

interface TextRevealProps {
  text: string
  className?: string
  center?: boolean
  dark?: boolean
}

const HeadingFadeUp = ({ text, className, center, dark = false }: TextRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const phrases = useTextLines({
    text,
    containerRef,
  })
  console.log(phrases)

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.8,
        duration: 0.5,
      },
    },
  } as Variants

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
      animate="visible"
      viewport={{ once: true }}
    >
      {phrases.map((line, index) => (
        <div
          key={index}
          className={cn(
            'overflow-hidden',
            center && 'flex flex-wrap justify-center md:inline-block',
          )}
        >
          <motion.div
            variants={lineAnimation}
            className={cn('ml-1 leading-relaxed', { 'text-primary-blue-200': dark })}
          >
            {line.text}
          </motion.div>
        </div>
      ))}
    </motion.div>
  )
}

export default HeadingFadeUp
