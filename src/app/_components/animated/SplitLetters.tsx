/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useAnimate, stagger } from 'motion/react'
import { useInView } from 'motion/react'
import { cn } from '@/lib/utils'

interface SplitLettersProps {
  children: string
  className?: string
}

const SplitLetters: React.FC<SplitLettersProps> = ({ children, className = '' }) => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '0px 0px -30% 0px' })
  const [scope, animate] = useAnimate()

  useEffect(() => {
    if (isInView) {
      const chars = scope.current.querySelectorAll('.char')
      animate(
        chars,
        {
          y: ['110%', '0%'],
          rotateZ: ['10deg', '0deg'],
          opacity: [0, 1],
        },
        {
          duration: 0.3,
          ease: 'easeOut',
          delay: stagger(0.02, { from: 'first', ease: 'linear' }),
        },
      )
    }
  }, [isInView, animate])

  const words = children.split(' ')

  return (
    <motion.div ref={containerRef} className="overflow-hidden">
      <div ref={scope}>
        {words.map((word: string, i: number) => (
          <span key={i} className="inline-block mr-2">
            {word.split('').map((char: string, j: number) => (
              <span
                key={j}
                className={cn(className, 'char inline-block')}
                style={{
                  transform: 'translateY(110%) rotateZ(10deg)',
                  opacity: 0,
                }}
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default SplitLetters
