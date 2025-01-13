'use client'

import { ReactNode, useRef, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'

interface TemplateProps {
  children: ReactNode
}

export default function Template({ children }: TemplateProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  // Smooth spring animation for scroll
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Enable smooth scrolling behavior
  useEffect(() => {
    if (typeof window === 'undefined') return

    const html = document.documentElement
    html.style.scrollBehavior = 'smooth'

    return () => {
      html.style.scrollBehavior = ''
    }
  }, [])

  return (
    <div ref={scrollRef}>
      {/* Progress bar */}
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-primary-blue-900"
        style={{ scaleX }}
      />

      {/* Main content */}
      <motion.div
        className="relative"
        initial={false}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
      >
        {children}
      </motion.div>
    </div>
  )
}
