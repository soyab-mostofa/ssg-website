'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import Image from 'next/image'

interface SustainabilityItem {
  title: string
  content: string
  image: string
}

interface SustainabilityImageDisplayProps {
  items: SustainabilityItem[]
  activeIndex: number
  onNavigate: (index: number) => void
  className?: string
}

const SustainabilityImageDisplay: React.FC<SustainabilityImageDisplayProps> = ({
  items,
  activeIndex,
  onNavigate,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion()
  const [imageLoadingStates, setImageLoadingStates] = useState<Record<number, boolean>>({})
  const [imageErrorStates, setImageErrorStates] = useState<Record<number, boolean>>({})
  const [hasInitialized, setHasInitialized] = useState(false)

  // Initialize loading states for all images
  useEffect(() => {
    const initialLoadingStates = items.reduce((acc, _, index) => {
      acc[index] = true
      return acc
    }, {} as Record<number, boolean>)
    setImageLoadingStates(initialLoadingStates)
    setHasInitialized(true)
  }, [items])

  // Handle image load completion
  const handleImageLoad = (index: number) => {
    setImageLoadingStates(prev => ({
      ...prev,
      [index]: false
    }))
  }

  // Handle image load errors
  const handleImageError = (index: number) => {
    setImageLoadingStates(prev => ({
      ...prev,
      [index]: false
    }))
    setImageErrorStates(prev => ({
      ...prev,
      [index]: true
    }))
  }

  // Preload adjacent images for smooth transitions
  useEffect(() => {
    if (items.length === 0) return

    const preloadImage = (src: string) => {
      const img = new window.Image()
      img.src = src
    }

    // Preload previous and next images
    const prevIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1

    if (items[prevIndex]) preloadImage(items[prevIndex].image)
    if (items[nextIndex]) preloadImage(items[nextIndex].image)
  }, [activeIndex, items])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault()
          onNavigate(activeIndex === 0 ? items.length - 1 : activeIndex - 1)
          break
        case 'ArrowRight':
          event.preventDefault()
          onNavigate(activeIndex === items.length - 1 ? 0 : activeIndex + 1)
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIndex, items.length, onNavigate])

  const imageVariants = {
    initial: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 1.02,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.98,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.4,
        ease: 'easeInOut',
      },
    },
  }

  const currentItem = items[activeIndex]

  if (!currentItem || !items.length) {
    return (
      <div className={`relative ${className}`}>
        {/* Fixed aspect ratio container for empty state */}
        <div className="relative mx-auto w-full max-w-[1200px] aspect-[16/9] md:aspect-[2.4/1] bg-gray-100 rounded-2xl flex items-center justify-center">
          <p className="text-gray-500 text-center px-4">No sustainability items available</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      {/* Main Image Container with Fixed Aspect Ratio */}
      <motion.div
        className="relative mx-auto w-full max-w-[1200px] aspect-[16/9] md:aspect-[2.4/1] overflow-hidden rounded-2xl bg-gray-100 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          // Ensure consistent height to prevent layout shift
          minHeight: '400px',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`image-${activeIndex}`}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative h-full w-full"
          >
            {/* Loading skeleton */}
            {imageLoadingStates[activeIndex] && hasInitialized && (
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
            )}

            {/* Error fallback */}
            {imageErrorStates[activeIndex] && (
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="mt-2 text-sm text-gray-500">Image not available</p>
                </div>
              </div>
            )}
            
            <Image
              src={currentItem.image}
              alt={currentItem.title}
              fill
              className="object-cover object-center transition-opacity duration-300"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              priority={activeIndex === 0}
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1200px, 1200px"
              onLoad={() => handleImageLoad(activeIndex)}
              onError={() => handleImageError(activeIndex)}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAQABADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyEcDvvGbmPTzQyKJN78r4IATXJk"
              loading={activeIndex === 0 ? 'eager' : 'lazy'}
            />

            {/* Subtle overlay for better contrast */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Navigation Dots */}
      <motion.div
        className="mt-8 flex justify-center space-x-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => onNavigate(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              index === activeIndex
                ? 'bg-blue-600 scale-110'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to sustainability item ${index + 1}: ${items[index].title}`}
            aria-current={index === activeIndex ? 'true' : 'false'}
          />
        ))}
      </motion.div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-4 right-4 flex justify-between pointer-events-none -translate-y-1/2">
        <motion.button
          onClick={() => onNavigate(activeIndex === 0 ? items.length - 1 : activeIndex - 1)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm transition-all duration-200 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-blue-500 pointer-events-auto shadow-lg"
          whileHover={{ scale: shouldReduceMotion ? 1 : 1.1 }}
          whileTap={{ scale: shouldReduceMotion ? 1 : 0.95 }}
          aria-label="Previous sustainability item"
        >
          <svg
            className="h-6 w-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </motion.button>

        <motion.button
          onClick={() => onNavigate(activeIndex === items.length - 1 ? 0 : activeIndex + 1)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm transition-all duration-200 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-blue-500 pointer-events-auto shadow-lg"
          whileHover={{ scale: shouldReduceMotion ? 1 : 1.1 }}
          whileTap={{ scale: shouldReduceMotion ? 1 : 0.95 }}
          aria-label="Next sustainability item"
        >
          <svg
            className="h-6 w-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
      </div>
    </div>
  )
}

export default SustainabilityImageDisplay
