/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import { motion } from 'motion/react'

interface AnimatedImageRevealProps {
  imageSrc: string
  imageAlt: string
  imageHeight?: string
  imageWidth?: string
  title?: string
  titleClassName?: string
  animationDuration?: number
  animationDelay?: number
  damping?: number
  stiffness?: number
  className?: string
}

const AnimatedImageReveal = ({
  imageSrc,
  imageAlt,
  imageHeight = 'h-full',
  imageWidth = 'w-full',
  animationDuration = 1,
  animationDelay = 0,
  damping = 50,
  stiffness = 100,
  className = '',
}: AnimatedImageRevealProps) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = imageSrc
    img.onload = () => setImageLoaded(true)
  }, [imageSrc])

  return (
    <div className={`absolute overflow-hidden ${imageWidth} ${className}`}>
      <motion.div
        initial={{ width: '0%' }}
        animate={imageLoaded ? { width: '100%' } : { width: '0%' }}
        transition={{
          duration: animationDuration,
          ease: [0.65, 0.02, 0.23, 1],
          type: 'spring',
          damping: damping,
          stiffness: stiffness,
          delay: animationDelay,
        }}
        className={`relative ${imageHeight}`}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`h-full w-full object-cover object-center ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-300`}
          onLoad={() => setImageLoaded(true)}
        />
      </motion.div>
    </div>
  )
}

export default AnimatedImageReveal
