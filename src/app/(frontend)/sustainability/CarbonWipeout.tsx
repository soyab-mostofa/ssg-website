import { BlurFade } from '@/components/ui/blur-fade'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import React from 'react'

const pictures = ['/carbon-wipeout-1.png', '/carbon-wipeout-2.png', '/carbon-wipeout-3.png']

const CarbonWipeout = () => {
  return (
    <div className="container py-24">
      <div className="flex flex-col gap-6 pb-6 sm:gap-10 sm:pb-10">
        <h3 className="text-3xl font-bold">Carbon Wipeout</h3>
        <p className="text-base font-normal">
          Shin Shin Group actively pursues a carbon-neutral future. By integrating solar power
          systems, optimizing energy use, and transitioning to LED lighting, we have reduced
          greenhouse gas emissions year-on-year. With ambitious goals to cut emissions by 10% across
          all entities by 2028, we strive to set new standards for environmental responsibility.
        </p>
      </div>
      <Carousel>
        <CarouselContent>
          {pictures.map((picture, index) => {
            return (
              <CarouselItem className="aspect-[379/420] basis-full sm:basis-1/3" key={index}>
                <BlurFade
                  inView
                  duration={0.6}
                  inViewMargin="100px 0px"
                  className="relative h-full w-full overflow-hidden rounded-lg bg-muted"
                >
                  <Image src={picture} alt="carbon-wipeout" fill />
                </BlurFade>
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default CarbonWipeout
