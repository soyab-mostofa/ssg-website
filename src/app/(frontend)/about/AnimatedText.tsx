'use client'
import { motion, useAnimationControls, cubicBezier, Variants } from 'motion/react'
import React, { useEffect, useMemo, memo } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  staggerChildren?: number
  lineDelay?: number
  lineIndex?: number
}

const customEasing = cubicBezier(0.25, 1, 0.5, 1)

const AnimatedLetter = memo(({ char, variants }: { char: string; variants: Variants }) => {
  if (char === ' ') {
    return <span>&nbsp;</span>
  }
  return (
    <motion.span variants={variants} className="inline-block">
      {char}
    </motion.span>
  )
})
AnimatedLetter.displayName = 'AnimatedLetter'

const AnimatedText = ({
  text,
  className = '',
  delay = 0,
  duration = 0.5,
  staggerChildren = 0.02,
  lineIndex = 0,
  lineDelay = 0.15,
}: AnimatedTextProps) => {
  const controls = useAnimationControls()

  // Calculate total delay including line delay
  const totalDelay = delay + lineIndex * lineDelay

  const { containerVariants, letterVariants } = useMemo(
    () => ({
      containerVariants: {
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren: totalDelay,
            staggerDirection: 1,
            ease: customEasing,
          },
        },
      },
      letterVariants: {
        hidden: {
          y: 100,
          rotateX: -40,
          transition: {
            type: 'spring',
            stiffness: 200,
            damping: 20,
            duration,
          },
        },
        visible: {
          y: 0,
          rotateX: 0,
          transition: {
            type: 'spring',
            stiffness: 200,
            damping: 40,
            duration,
            ease: customEasing,
          },
        },
      },
    }),
    [totalDelay, duration, staggerChildren],
  )

  const letters = useMemo(() => text.split(''), [text])

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start('visible')
    }
    startAnimation()
    return () => {
      controls.stop()
    }
  }, [controls, text])

  return (
    <motion.p
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className={`perspective-500 -mt-2 overflow-hidden pb-2 ${className}`}
    >
      {letters.map((char, index) => (
        <AnimatedLetter key={index} char={char} variants={letterVariants} />
      ))}
    </motion.p>
  )
}

// Example usage wrapper component for multiple lines
export const AnimatedTextLines = memo(
  ({ lines, ...props }: { lines: string[] } & Omit<AnimatedTextProps, 'text' | 'lineIndex'>) => {
    return (
      <div className="space-y-1">
        {lines.map((line, index) => (
          <AnimatedText key={index} text={line} lineIndex={index} {...props} />
        ))}
      </div>
    )
  },
)
AnimatedTextLines.displayName = 'AnimatedTextLines'

export default memo(AnimatedText)
