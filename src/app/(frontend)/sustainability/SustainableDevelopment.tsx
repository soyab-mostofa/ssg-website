import AnimateTextInView from '@/app/_components/animated/animateTextInView'
import SectionChip from '@/app/_components/shared/SectionChip'
import { BlurFade } from '@/components/ui/blur-fade'
import Image from 'next/image'
import React from 'react'

const data = [
  '/sdg/sdg-1.svg',
  '/sdg/sdg-2.svg',
  '/sdg/sdg-3.svg',
  '/sdg/sdg-4.svg',
  '/sdg/sdg-5.svg',
  '/sdg/sdg-6.svg',
  '/sdg/sdg-7.svg',
  '/sdg/sdg-8.svg',
]

const SustainableDevelopment = () => {
  return (
    <div>
      <div className="container sm:pb-16 md:pb-24">
        <div>
          <SectionChip>SDG GOALS</SectionChip>
          <AnimateTextInView
            text="Pathway to Sustainable Development Goals."
            className="mb-4 mt-4"
            childClass="w-full pt-2 text-2xl font-bold md:text-5xl"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-10">
          {data.map((url, index) => {
            return (
              <div key={index} className="relative flex aspect-square items-center justify-center">
                <BlurFade className="absolute inset-0" inView>
                  <Image fill src={url} alt="sdg" className="h-auto w-full object-contain" />
                </BlurFade>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SustainableDevelopment
