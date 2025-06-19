'use client'
import React, { useState, useEffect, useCallback } from 'react'
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useMotionValue,
  useTransform,
  useSpring,
  useVelocity,
  useAnimationFrame,
  useDragControls,
  PanInfo,
} from 'motion/react'
import { sustainabilityItems } from './sustainability-data'
import CarbonWipeout from './CarbonWipeout'
import SustainableDevelopment from './SustainableDevelopment'
import ImpactStories from '@/app/_components/pages/home/impact-stories'
import Image from 'next/image'
import SustainabilityReport from './sustainability-report'
import OurCertifications from './OurCertifications'
import PageHeader from '@/app/_components/pages/about/PageHeader'
import SectionChip from '@/app/_components/shared/SectionChip'

const SustainabilityPage = () => {
  const [active, setActive] = useState<number>(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  // Advanced motion values for complex animations
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const dragX = useMotionValue(0)
  const dragControls = useDragControls()

  // Physics-based spring animations
  const springConfig = { damping: 30, stiffness: 300, mass: 0.8 }
  const smoothMouseX = useSpring(mouseX, springConfig)
  const smoothMouseY = useSpring(mouseY, springConfig)

  // Transform values for parallax effects
  const titleX = useTransform(smoothMouseX, [-300, 300], [-15, 15])
  const titleY = useTransform(smoothMouseY, [-300, 300], [-10, 10])
  const imageParallax = useTransform(smoothMouseX, [-300, 300], [-30, 30])
  const contentFloat = useTransform(smoothMouseY, [-200, 200], [-5, 5])
  // Velocity tracking for dynamic animations
  const xVelocity = useVelocity(dragX)
  const velocityScale = useTransform(xVelocity, [-1000, 1000], [0.8, 1.2])
  const backgroundGradient = useTransform(
    dragX,
    [-200, 0, 200],
    [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    ],
  )

  // Mouse tracking handler
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      mouseX.set(x)
      mouseY.set(y)
    },
    [mouseX, mouseY],
  )

  // Drag interaction handlers
  const handleDragStart = useCallback(() => {
    setIsDragging(true)
    setIsAutoPlaying(false)
  }, [])

  const handleDragEnd = useCallback(
    (_: unknown, info: PanInfo) => {
      setIsDragging(false)
      const threshold = 50
      const velocity = info.velocity.x

      if (Math.abs(info.offset.x) > threshold || Math.abs(velocity) > 500) {
        const direction = info.offset.x > 0 ? -1 : 1
        setActive((prev) => {
          const newActive = prev + direction
          return newActive < 0
            ? sustainabilityItems.length - 1
            : newActive >= sustainabilityItems.length
              ? 0
              : newActive
        })
      }

      dragX.set(0)
      setTimeout(() => setIsAutoPlaying(true), 3000) // Resume auto-play after 3s
    },
    [dragX],
  )

  // Advanced layout animation variants
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const titleVariants = {
    initial: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : -100,
      y: shouldReduceMotion ? 0 : -20,
      rotateY: shouldReduceMotion ? 0 : -25,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 400,
        mass: 0.6,
      },
    },
    exit: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : 100,
      y: shouldReduceMotion ? 0 : 20,
      rotateY: shouldReduceMotion ? 0 : 25,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  }

  const contentVariants = {
    initial: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : 60,
      y: shouldReduceMotion ? 0 : 15,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 30,
        stiffness: 350,
        delay: 0.1,
      },
    },
    exit: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : -60,
      y: shouldReduceMotion ? 0 : -15,
      scale: 0.95,
      transition: {
        duration: 0.25,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  }

  const imageVariants = {
    initial: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 1.2,
      rotateZ: shouldReduceMotion ? 0 : 5,
      filter: 'blur(8px) brightness(0.8)',
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotateZ: 0,
      filter: 'blur(0px) brightness(1)',
      transition: {
        type: 'spring',
        damping: 35,
        stiffness: 280,
        delay: 0.2,
      },
    },
    exit: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.8,
      rotateZ: shouldReduceMotion ? 0 : -5,
      filter: 'blur(4px) brightness(0.6)',
      transition: {
        duration: 0.4,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  }

  // Auto-play effect with pause on interaction
  useEffect(() => {
    if (!isAutoPlaying || isDragging) return

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % sustainabilityItems.length)
    }, 4000) // Slower for better experience

    return () => clearInterval(interval)
  }, [isAutoPlaying, isDragging])

  // Animation frame loop for dynamic effects
  useAnimationFrame(() => {
    // Add subtle floating animation when not interacting
    if (!isDragging && !shouldReduceMotion) {
      const time = Date.now() * 0.001
      contentFloat.set(Math.sin(time) * 3)
    }
  })

  return (
    <div>
      <PageHeader
        bgImage="/headers/sustainability-header.webp"
        heading={['Our', 'Sustainability']}
        sub="Our commitment to a better future: People, planet, and responsible production. Explore our green initiatives and social impact programs"
      />

      {/* Award-Worthy Sustainability Section */}
      <motion.section
        className="overflow-hidden py-16 md:py-24"
        variants={containerVariants}
        initial="initial"
        animate="animate"
        onMouseMove={handleMouseMove}
        style={{
          background: backgroundGradient,
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SectionChip>sustainability</SectionChip>
          </motion.div>

          {/* Interactive Content Area */}
          <motion.div
            className="perspective-1000 mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16"
            drag="x"
            dragControls={dragControls}
            dragConstraints={{ left: -100, right: 100 }}
            dragElastic={0.2}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            style={{ x: dragX }}
          >
            {/* Left Side - Enhanced Title */}
            <motion.div
              className="relative flex flex-col justify-center"
              style={{
                x: titleX,
                y: titleY,
                rotateY: useTransform(dragX, [-100, 100], [-5, 5]),
              }}
            >
              <AnimatePresence mode="wait">
                <motion.h2
                  key={`title-${active}`}
                  layoutId="sustainability-title"
                  variants={titleVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="text-grayscale-black relative z-10 text-4xl font-bold md:text-5xl lg:text-6xl"
                  style={{
                    textShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    perspective: '1000px',
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          scale: 1.05,
                          rotateY: 5,
                          transition: { type: 'spring', stiffness: 400, damping: 10 },
                        }
                  }
                >
                  {sustainabilityItems[active].title}
                </motion.h2>
              </AnimatePresence>

              {/* Dynamic background element */}
              <motion.div
                className="from-blue-500/10 to-purple-500/10 absolute inset-0 rounded-2xl bg-gradient-to-r"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>

            {/* Right Side - Enhanced Content */}
            <motion.div
              className="relative flex flex-col justify-center"
              style={{
                y: contentFloat,
                rotateY: useTransform(dragX, [-100, 100], [5, -5]),
              }}
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={`content-${active}`}
                  layoutId="sustainability-content"
                  variants={contentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="bg-white/30 border-white/20 relative z-10 rounded-xl border p-6 text-lg leading-relaxed text-grayscale-black-600 backdrop-blur-sm md:text-xl"
                  style={{
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: -5,
                          boxShadow: '0 35px 60px -12px rgba(0, 0, 0, 0.3)',
                          transition: { type: 'spring', stiffness: 400, damping: 10 },
                        }
                  }
                >
                  {sustainabilityItems[active].content}
                </motion.p>
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Enhanced Image Container */}
          <motion.div
            className="relative mx-auto h-[500px] w-full max-w-[1200px] overflow-hidden rounded-2xl bg-grayscale-black-100"
            style={{
              perspective: '1000px',
              x: imageParallax,
            }}
            whileHover={
              shouldReduceMotion
                ? {}
                : {
                    scale: 1.02,
                    rotateY: 2,
                    transition: { type: 'spring', stiffness: 400, damping: 15 },
                  }
            }
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`image-${active}`}
                layoutId="sustainability-image"
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="relative h-full w-full"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <Image
                  src={sustainabilityItems[active].image}
                  alt={sustainabilityItems[active].title}
                  fill
                  className="object-cover object-center"
                  priority
                />

                {/* Gradient overlay for depth */}
                <motion.div
                  className="from-black/30 via-transparent to-transparent absolute inset-0 bg-gradient-to-t"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Enhanced Progress Indicators */}
          <motion.div
            className="mt-12 flex justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {sustainabilityItems.map((_, index) => (
              <motion.button
                key={index}
                className={`relative h-3 overflow-hidden rounded-full transition-all duration-500 ${
                  index === active
                    ? 'from-blue-500 to-purple-600 w-12 bg-gradient-to-r'
                    : 'w-3 bg-grayscale-black-300 hover:bg-grayscale-black-400'
                }`}
                onClick={() => {
                  setActive(index)
                  setIsAutoPlaying(false)
                  setTimeout(() => setIsAutoPlaying(true), 5000)
                }}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: 1.2,
                        y: -2,
                      }
                }
                whileTap={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: 0.95,
                      }
                }
                animate={
                  index === active
                    ? {
                        boxShadow: [
                          '0 0 0 0 rgba(59, 130, 246, 0.7)',
                          '0 0 0 10px rgba(59, 130, 246, 0)',
                          '0 0 0 0 rgba(59, 130, 246, 0)',
                        ],
                      }
                    : {}
                }
                transition={{
                  boxShadow: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeOut',
                  },
                }}
                aria-label={`View ${sustainabilityItems[index].title}`}
              >
                {/* Progress fill animation */}
                {index === active && (
                  <motion.div
                    className="from-cyan-400 to-blue-500 absolute inset-0 bg-gradient-to-r"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 4, ease: 'linear' }}
                    style={{ transformOrigin: 'left' }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Velocity-based visual feedback */}
          <AnimatePresence>
            {isDragging && (
              <motion.div
                className="pointer-events-none fixed inset-0 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {' '}
                <motion.div
                  className="text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-6xl font-bold"
                  style={{
                    scale: velocityScale,
                    filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.5))',
                  }}
                >
                  {Math.abs(xVelocity.get()) > 200 ? '⚡' : '👆'}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>

      <CarbonWipeout />
      <SustainableDevelopment />
      <ImpactStories />
      <SustainabilityReport />
      <OurCertifications />
    </div>
  )
}

export default SustainabilityPage
