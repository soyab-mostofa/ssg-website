'use client'

import React, { useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { motion, useInView } from 'motion/react'
import { Card } from '@/components/ui/card'
const ANIMATION_VARIANTS = {
  imageContainer: {
    hidden: {
      height: '100%',
      width: '0%',
      opacity: 0,
    },
    visible: {
      width: '100%',
      height: '100%',
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 30,
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 30,
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  },
  text: {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  },
  textContainer: {
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  },
} as const
const CATEGORIES = [
  {
    title: "Men's Wear",
    description: 'Classic, Comfortable, Timeless.',
    url: 'https://images.unsplash.com/photo-1535530705774-695729778c55?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: "Women's Wear",
    description: 'Elegant, Versatile, Empowering.',
    url: 'https://images.unsplash.com/photo-1495298599282-d8920eb5009b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: "Girl's Wear",
    description: 'Fun, Durable, Eco-Friendly.',
    url: 'https://images.unsplash.com/photo-1601762603339-fd61e28b698a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: "Boy's Wear",
    description: 'Fun, Durable, Eco-Friendly.',
    url: 'https://images.unsplash.com/photo-1512068549487-5e79d74c7fc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGZhc2hpb258ZW58MHx8MHx8fDA%3D',
  },
  {
    title: "Men's Wear",
    description: 'Classic, Comfortable, Timeless.',
    url: 'https://images.unsplash.com/photo-1535530705774-695729778c55?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: "Women's Wear",
    description: 'Elegant, Versatile, Empowering.',
    url: 'https://images.unsplash.com/photo-1495298599282-d8920eb5009b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: "Girl's Wear",
    description: 'Fun, Durable, Eco-Friendly.',
    url: 'https://images.unsplash.com/photo-1601762603339-fd61e28b698a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: "Boy's Wear",
    description: 'Fun, Durable, Eco-Friendly.',
    url: 'https://images.unsplash.com/photo-1512068549487-5e79d74c7fc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGZhc2hpb258ZW58MHx8MHx8fDA%3D',
  },
  {
    title: "Men's Wear",
    description: 'Classic, Comfortable, Timeless.',
    url: 'https://images.unsplash.com/photo-1535530705774-695729778c55?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: "Women's Wear",
    description: 'Elegant, Versatile, Empowering.',
    url: 'https://images.unsplash.com/photo-1495298599282-d8920eb5009b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: "Girl's Wear",
    description: 'Fun, Durable, Eco-Friendly.',
    url: 'https://images.unsplash.com/photo-1601762603339-fd61e28b698a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: "Boy's Wear",
    description: 'Fun, Durable, Eco-Friendly.',
    url: 'https://images.unsplash.com/photo-1512068549487-5e79d74c7fc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGZhc2hpb258ZW58MHx8MHx8fDA%3D',
  },
] as const

export function ProductCarousel() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' })
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  useEffect(() => {
    console.log(isInView)
  }, [isInView])

  React.useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
      })
    }
  }, [emblaApi])

  return (
    <div className="relative" ref={containerRef}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex xl:ml-[calc((100vw-1240px)/2)]">
          {CATEGORIES.map((product, index) => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_100%] pr-4 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%]"
            >
              <div className="relative ml-4 w-full pr-4 xl:mr-0">
                <Card className="flex h-full w-full flex-col border-0 shadow-none">
                  <motion.div
                    className="relative ms-auto h-[300px] w-full p-0 sm:h-[400px]"
                    initial={{ width: '0%', opacity: 0 }}
                    animate={
                      isInView && {
                        width: '100%',

                        opacity: 1,
                        transition: {
                          type: 'spring',
                          stiffness: 100,
                          damping: 30,
                          duration: 0.5,
                          staggerChildren: 0.2,
                        },
                      }
                    }
                    transition={{ duration: 0.9, delay: index * 0.2 }}
                  >
                    <Image
                      src={product.url}
                      alt={`${product.title} product`}
                      fill
                      className="rounded-xl object-cover"
                      priority={false}
                    />
                  </motion.div>
                  <motion.div
                    className="bottom-0 left-0 mt-4 space-y-1 rounded-lg"
                    initial="hidden"
                    whileInView="visible"
                    variants={ANIMATION_VARIANTS.textContainer}
                  >
                    <motion.h3
                      className="md:text-custom-30-semibold text-2xl font-semibold"
                      variants={ANIMATION_VARIANTS.text}
                    >
                      {product.title}
                    </motion.h3>
                    <motion.p
                      className="text-base text-grayscale-black-400"
                      variants={ANIMATION_VARIANTS.text}
                    >
                      {product.description}
                    </motion.p>
                  </motion.div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        {CATEGORIES.map((_, index) => (
          <button
            key={index}
            className={`mx-1 h-3 w-3 rounded-full ${
              index === selectedIndex ? 'bg-secondary-red-500' : 'bg-grayscale-black-300'
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}
