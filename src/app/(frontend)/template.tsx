'use client'

import { ReactNode, useRef, useEffect, useState } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react'
import LoadingAnimation from '../../components/LoadingAnimation'
import Menu from '../_components/menu/Menu'
import Footer from '../_components/shared/Footer'

interface TemplateProps {
  children: ReactNode
}

export default function Template({ children }: TemplateProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const [isLoaded, setIsLoaded] = useState(false)

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
    <LoadingAnimation onLoadingComplete={() => setIsLoaded(true)}>
      <div ref={scrollRef}>
        {/* Progress bar */}
        <motion.div
          className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-primary-blue-900"
          style={{ scaleX }}
        />

        {/* Main content with reveal animation */}
        <AnimatePresence mode="wait">
          {isLoaded ? (
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.4, 0, 0.2, 1],
                },
              }}
              exit={{ opacity: 0, y: 20 }}
            >
              <Menu />
              {children}
              <Footer />
            </motion.div>
          ) : (
            <motion.div className="relative opacity-0" exit={{ opacity: 0 }}>
              <Menu />
              {children}
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </LoadingAnimation>
  )
}
