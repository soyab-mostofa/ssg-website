'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import AnimatedText from '@/app/_components/animated/animatedText'

const HeroTitle = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const titleContent = 'Innovating Today for a Sustainable Tomorrow'
  const descriptionContent =
    'With five state-of-the-art factories and a commitment to sustainability, Shin Shin Group delivers world-class apparel solutions that prioritize people, planet, and progress.'

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => setShowContent(true), 100)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="mx-auto flex min-h-fit max-w-[335px] flex-col items-center justify-center gap-4 md:mx-0 md:min-h-[252px] md:max-w-[687px] md:gap-6">
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="bg-white inline-block h-3 w-3 rounded-full"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>
      ) : showContent ? (
        <>
          <AnimatedText
            text={titleContent}
            className="flex flex-wrap justify-center text-4xl font-bold text-others-white md:justify-start md:text-6xl md:leading-tight"
          />
          <AnimatedText
            text={descriptionContent}
            className="text-white flex flex-wrap justify-center text-base leading-[1.4] text-others-white md:justify-start md:text-[20px]"
            delay={0.9} // Start after title animation
          />
        </>
      ) : null}
    </div>
  )
}

export default HeroTitle
