'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import AnimatedText from '@/app/_components/animated/animatedText'

const HeroTitle = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const titleContent = 'Sustainability Woven Into Every Thread'
  const descriptionContent =
    'Driven by sustainability, inclusivity, and innovation, Shin Shin Group redefines apparel manufacturing with cutting-edge technology and an unwavering commitment to people and the planet.'

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedHero')
    const delay = !hasVisited ? 4000 : 1000

    const timer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => {
        setShowContent(true)
        localStorage.setItem('hasVisitedHero', 'true')
      }, delay)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="mx-auto flex min-h-[350px] max-w-[335px] flex-col items-center justify-center gap-4 md:mx-0 md:min-h-[252px] md:max-w-[687px] md:gap-6">
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
            delay={0.9}
          />
        </>
      ) : null}
    </div>
  )
}

export default HeroTitle
