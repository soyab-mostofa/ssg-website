/* eslint-disable @next/next/no-img-element */
'use client'
// import { ArrowRight } from 'lucide-react'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import SectionLayout from '@/app/_components/shared/SectionLayout'
import Autoplay from 'embla-carousel-autoplay'

const data = [
  {
    url: '/sustainability/sustain-1.webp',
    description: 'Use of renewable energy',
  },
  {
    url: '/sustainability/sustain-2.webp',
    description: 'Having LEED Gold green factories',
  },
  {
    url: '/sustainability/sustain-3.webp',
    description: 'Effluent treatment plant (ETP)',
  },
  {
    url: '/sustainability/sustain-4.webp',
    description: 'A member of UN Global Compact',
  },
  {
    url: '/sustainability/sustain-5.webp',
    description: 'Rainwater harvesting system',
  },
]

const SustainabilitySection = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.5 })

  return (
    <SectionLayout
      heading="Sustainability at Our Core"
      dark
      sustainSection
      headingWidth="687px"
      subBottom="Sustainability drives Shin Shin Group, from renewable energy and emission reductions to advanced water and waste management, shaping fashion’s greener future."
      chip="Sustainability"
      className="relative min-h-[500px] overflow-hidden py-16 md:py-28"
      rightButton="Our Sustainability Efforts"
    >
      <div ref={containerRef}>
        {' '}
        <Carousel
          opts={{
            align: 'start',
            containScroll: 'keepSnaps',
            loop: true,
          }}
          plugins={[Autoplay({ delay: 2000, stopOnInteraction: false })]}
          className="z-50 max-h-[500px] w-full overflow-x-hidden"
        >
          {' '}
          <CarouselContent className="min-h-56 xl:ml-[calc((100vw-1270px)/2)]">
            {data.map((item, index) => (
              <CarouselItem
                key={index}
                className="relative z-30 flex w-full basis-80 flex-col pl-4 first:pl-9 sm:basis-[480px] sm:pl-8"
              >
                <motion.div
                  initial={{ width: '0%', height: '100%', opacity: 0 }}
                  animate={
                    isInView && {
                      width: '100%',
                      height: '100%',
                      opacity: 1,
                      transition: {
                        type: 'spring',
                        stiffness: 100,
                        damping: 20,
                        duration: 0.5,
                        staggerChildren: 0.2,
                      },
                    }
                  }
                  transition={{ duration: 0.9, delay: index * 0.2 }}
                  className="z-30 ms-auto h-full overflow-hidden rounded-2xl bg-others-white sm:h-[500px]"
                >
                  {' '}
                  <Image
                    src={item.url}
                    alt="sustainability initiative"
                    width={480}
                    height={360}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView && {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.2 + 0.3,
                      },
                    }
                  }
                  className="mt-4"
                >
                  <h3 className="md:text-custom-30-semibold text-base font-semibold text-others-white md:text-2xl">
                    {item.description}
                  </h3>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <img
        src="/pattern-corner.png"
        alt="pattern"
        aria-hidden
        className="absolute right-[-91px] top-[-109px] z-0 scale-50 opacity-5 md:right-0 md:top-0 md:scale-100"
      />
      <img
        src="/pattern-corner.png"
        alt="pattern"
        aria-hidden
        className="absolute bottom-[-90px] left-[-92px] z-0 rotate-180 scale-50 opacity-5 md:bottom-0 md:left-0 md:scale-100"
      />
    </SectionLayout>
  )
}

export default SustainabilitySection
