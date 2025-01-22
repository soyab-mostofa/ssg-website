'use client'
import React, { useState, useEffect } from 'react'
import { motion, useAnimation, AnimatePresence } from 'motion/react'

const LoadingAnimation = ({ children, onLoadingComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const simulateLoading = async () => {
      // Start with quick progress up to 70%
      for (let i = 0; i <= 70; i++) {
        setProgress(i)
        await new Promise((resolve) => setTimeout(resolve, 20))
      }

      // Slow down progress from 70% to 90%
      for (let i = 71; i <= 90; i++) {
        setProgress(i)
        await new Promise((resolve) => setTimeout(resolve, 50))
      }

      // Final completion
      setProgress(100)
      await new Promise((resolve) => setTimeout(resolve, 500))
      setIsLoading(false)
      onLoadingComplete?.()
    }

    simulateLoading()
  }, [onLoadingComplete])

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loading"
          className="bg-white fixed inset-0 z-50 flex flex-col items-center justify-center"
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: [0.45, 0, 0.55, 1],
            },
          }}
        >
          <div className="bg-gray-200 relative h-1 w-64 overflow-hidden rounded-full">
            <motion.div
              className="bg-blue-600 absolute left-0 top-0 h-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
              }}
            />
          </div>

          <motion.div
            className="mt-4 text-2xl font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.span
              key={progress}
              className="inline-block"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.3 }}
            >
              {progress}%
            </motion.span>
          </motion.div>

          <motion.div
            className="text-gray-500 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Loading your experience
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingAnimation
