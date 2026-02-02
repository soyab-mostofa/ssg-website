'use client'
import SectionLayout from '@/app/_components/shared/SectionLayout'
import React from 'react'

import { memo } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import { motion } from 'motion/react'
import Autoplay from 'embla-carousel-autoplay'

const stories = [
  {
    title: 'Created employment opportunities for people from indigenous communities',
    image:
      '/Impact stories/Created employment opportunities for people from indigenous communities.webp',
  },
  {
    title: 'Fair price shops for workers & employees',
    image: '/Impact stories/Fair price shops for workers & employees.webp',
  },
  {
    title: 'Free eye check-ups and distribution of free eye glasses',
    image: '/Impact stories/Free eye check-ups and distribution of free eye glasses.webp',
  },
  {
    title: 'Free medical clinic for workers',
    image: '/Impact stories/Free medical clinic for workers.webp',
  },
  {
    title: 'Gainful employment for persons of short stature',
    image: '/Impact stories/Gainful employment for persons of short stature.webp',
  },
  {
    title: 'Providing free sanitary napkins to female workers',
    image: '/Impact stories/Providing free sanitary napkins to female workers.webp',
  },
  {
    title: "Regular awareness session for workers' health & hygiene",
    image: '/Impact stories/Regular awareness session for workers_ health & hygiene.webp',
  },
]

const StoryCard = memo(({ story, index }: { story: (typeof stories)[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative h-full overflow-hidden rounded-xl"
    >
      <Image
        src={story.image}
        alt={story.title}
        width={995}
        height={600}
        className="h-full w-full object-cover"
        priority={index === 0}
        loading={index === 0 ? 'eager' : 'lazy'}
      />
      <div className="absolute inset-0 bg-grayscale-black-800/30" />
      <div className="to-transparent absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-grayscale-black-800/80 via-grayscale-black-800/40 sm:h-28 md:h-32" />
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        className="absolute bottom-4 left-4 max-w-[90%] text-base font-semibold text-others-white sm:bottom-6 sm:left-6 sm:text-xl md:bottom-8 md:left-8 md:text-2xl lg:text-3xl"
      >
        {story.title}
      </motion.h3>
    </motion.div>
  )
})

StoryCard.displayName = 'StoryCard'

const CarouselControls = memo(() => (
  <div className="bottom-4 left-0 right-0 flex items-center justify-center gap-4 sm:gap-8">
    <CarouselPrevious className="!static h-8 w-8 rounded-[10px] border border-secondary-red-200 bg-[#fde8e9] text-secondary-red-500 hover:bg-others-white hover:text-secondary-red-600 sm:h-10 sm:w-10 xl:mt-4" />
    <CarouselNext className="!static h-8 w-8 rounded-[10px] border-0 border-secondary-red-900 bg-secondary-red-500 text-others-white hover:bg-secondary-red-600 hover:text-others-white sm:h-10 sm:w-10 xl:mt-4" />
  </div>
))

CarouselControls.displayName = 'CarouselControls'

export default function ImpactStories() {
  return (
    <SectionLayout
      heading="Stories of Change and Impact"
      chip="IMPACT STORIES"
      className="relative py-8 sm:py-12"
      grayBG
      headingWidth="100%"
      productSection
    >
      {' '}
      <Carousel
        opts={{
          align: 'start',
          containScroll: 'keepSnaps',
          loop: true,
        }}
        plugins={[Autoplay({ delay: 2000, stopOnInteraction: false })]}
        className="w-full"
      >
        {' '}
        <CarouselContent className="mb-10 ml-0 mr-2 h-48 min-h-56 sm:h-52 md:h-64 lg:h-72 xl:ml-[calc((100vw-1270px)/2)] xl:h-[450px]">
          {stories.map((story, index) => (
            <CarouselItem
              key={story.title}
              className="h-full basis-80 overflow-hidden pl-4 pr-2 sm:basis-[480px] xl:pr-0"
            >
              <StoryCard story={story} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselControls /> */}
      </Carousel>
    </SectionLayout>
  )
}
