/* eslint-disable @next/next/no-img-element */
'use client'
// import { ArrowRight } from 'lucide-react'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import SectionLayout from '@/app/_components/shared/SectionLayout'

const data = [
  'https://images.unsplash.com/photo-1573612664822-d7d347da7b80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1631050165089-6311e0d6c5f3?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1512068549487-5e79d74c7fc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGZhc2hpb258ZW58MHx8MHx8fDA%3D',
]

const SustainabilitySection = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.5 })

  return (
    <SectionLayout
      heading="Sustainability at Our Core"
      dark
      subBottom="Lorem ipsum dolor sit amet consectetur. Mattis arcu lectus morbi a ut massa eget mauris. Dis facilisi gravida neque elementum auctor felis neque facilisis."
      chip="Sustainability"
      headingWidth="687px"
      className="relative overflow-hidden py-16 md:py-28"
    >
      <div ref={containerRef}>
        <Carousel
          opts={{
            align: 'start',
            containScroll: 'keepSnaps',
          }}
          className="z-50 w-full overflow-x-hidden"
        >
          <CarouselContent className="xl:ml-[calc((100vw-1240px)/2)]">
            {data.map((url, index) => (
              <CarouselItem
                key={index}
                className="relative flex w-full basis-80 flex-col pl-4 first:pl-9 sm:basis-[480px] sm:pl-8"
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
                  className="ms-auto h-[360px] overflow-hidden"
                >
                  <Image
                    src={url}
                    alt="product"
                    width={480}
                    height={360}
                    className="h-[250px] w-full rounded-xl object-cover sm:h-[360px]"
                  />
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
        className="absolute bottom-[-90px] left-[-92px] z-0 rotate-180 scale-50 opacity-5 md:scale-100"
      />
    </SectionLayout>
  )
}

export default SustainabilitySection
