import SectionChip from '@/app/_components/shared/SectionChip'
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
          <h3 className="max-w-[584px] py-8 text-3xl font-bold sm:text-5xl">
            Pathway to Sustainable Development Goals
          </h3>
        </div>
        <div className="grid grid-cols-4 gap-6 sm:gap-10">
          {data.map((url, index) => {
            return (
              <div key={index} className="relative flex aspect-square items-center justify-center">
                <Image fill src={url} alt="sdg" className="h-auto w-full object-contain" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SustainableDevelopment
