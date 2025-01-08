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

const stories = [
  {
    title: 'Employment for differently-abled persons',
    image: 'https://images.unsplash.com/photo-1573612664822-d7d347da7b80',
  },
  {
    title: 'Free medical services',
    image: 'https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f',
  },
  {
    title: 'Community support programs',
    image: 'https://images.unsplash.com/photo-1631050165089-6311e0d6c5f3',
  },
  {
    title: 'Access to education',
    image: 'https://images.unsplash.com/photo-1679607581913-85ddcff3f19c',
  },
].map((story) => ({
  ...story,
  image: `${story.image}?q=80&w=2070&auto=format&fit=crop`,
}))

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
      <div className="to-transparent absolute inset-0 bg-gradient-to-t from-grayscale-black-800/40 via-grayscale-black-800/20" />
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
    <CarouselPrevious className="!static h-8 w-8 rounded-[10px] border-0 bg-[#fde8e9] text-secondary-red-500 hover:bg-others-white hover:text-secondary-red-600 sm:h-10 sm:w-10 xl:mt-4" />
    <CarouselNext className="!static h-8 w-8 rounded-[10px] border-0 bg-secondary-red-500 text-others-white hover:bg-secondary-red-600 hover:text-others-white sm:h-10 sm:w-10 xl:mt-4" />
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
    >
      <Carousel
        opts={{
          align: 'start',
          containScroll: 'keepSnaps',
        }}
        className="w-full"
      >
        <CarouselContent className="mb-10 ml-0 mr-2 h-60 sm:h-60 md:h-80 lg:h-96 xl:ml-[calc((100vw-1240px)/2)] xl:h-[600px]">
          {stories.map((story, index) => (
            <CarouselItem
              key={story.title}
              className="h-full basis-[300px] overflow-hidden pl-4 pr-2 sm:basis-[400px] md:basis-[500px] lg:basis-[600xp] xl:basis-[995px] xl:pr-0"
            >
              <StoryCard story={story} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselControls />
      </Carousel>
    </SectionLayout>
  )
}
