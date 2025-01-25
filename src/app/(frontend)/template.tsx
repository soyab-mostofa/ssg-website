'use client'

import { ReactNode, useRef, useEffect, useState } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react'
import Menu from '../_components/menu/Menu'
import Footer from '../_components/shared/Footer'

// Create a global variable to track the initial load
let isApplicationLoaded = false

interface TemplateProps {
  children: ReactNode
  logoSrc?: string
}

export default function Template({ children, logoSrc = '/logo.png' }: TemplateProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  const [isFirstLoad] = useState(!isApplicationLoaded)
  const [showContent, setShowContent] = useState(isApplicationLoaded)

  // Smooth spring animation for scroll
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Handle initial load
  useEffect(() => {
    if (!isApplicationLoaded) {
      isApplicationLoaded = true
      setTimeout(() => {
        setShowContent(true)
      }, 2000)
    }
  }, [])

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

      <AnimatePresence mode="wait">
        {isFirstLoad && !showContent && (
          <motion.div
            className="bg-white fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: {
                duration: 1,
                ease: 'easeOut',
              },
            }}
          >
            <motion.img
              src={logoSrc}
              alt="Logo"
              className="h-20 w-20"
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{
                scale: [0.8, 1.1, 0.8],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                times: [0, 0.5, 1],
                repeat: 0,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="relative"
        initial={isFirstLoad ? { opacity: 0 } : { opacity: 1 }}
        animate={{
          opacity: showContent ? 1 : 0,
          transition: {
            duration: 0.8,
            delay: isFirstLoad ? 2 : 0,
            ease: 'easeOut',
          },
        }}
      >
        <Menu />
        {children}
        <Footer />
      </motion.div>
    </div>
  )
}
