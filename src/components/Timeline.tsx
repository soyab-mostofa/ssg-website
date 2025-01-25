import Image from 'next/image'
import React from 'react'
import { Timeline } from '@/components/ui/timeline'

export function MobileTimeline() {
  const data = [
    {
      title: '2007',
      content: (
        <div>
          <p className="dark:text-neutral-200 mb-4 text-xs font-normal text-grayscale-black-800 md:text-sm">
            First factory, Shin Shin Apparels Ltd, established.
          </p>
          <div className="aspect-square">
            <Image
              src="/founding-story-1.png"
              alt="Tailor-made garment production"
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      title: '2009',
      content: (
        <div>
          <p className="dark:text-neutral-200 mb-4 text-xs font-normal text-grayscale-black-800 md:text-sm">
            Organic Jeans Ltd launched to align with eco-conscious goals.
          </p>
          <div className="aspect-square">
            <Image
              src="/founding-story-1.png"
              alt="Tailor-made garment production"
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      title: '2014',
      content: (
        <div>
          <p className="dark:text-neutral-200 mb-4 text-xs font-normal text-grayscale-black-800 md:text-sm">
            Jeans Plus Ltd acquired and transformed into a sustainability pioneer.
          </p>
          <div className="aspect-square">
            <Image
              src="/founding-story-1.png"
              alt="Tailor-made garment production"
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      title: '2016',
      content: (
        <div>
          <p className="dark:text-neutral-200 mb-4 text-xs font-normal text-grayscale-black-800 md:text-sm">
            Suad Garments Industries Ltd added high-end formalwear to our portfolio.
          </p>
          <div className="aspect-square">
            <Image
              src="/founding-story-1.png"
              alt="Tailor-made garment production"
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      title: '2020',
      content: (
        <div>
          <p className="dark:text-neutral-200 mb-4 text-xs font-normal text-grayscale-black-800 md:text-sm">
            LEED Gold certification for adopting green factory practices.
          </p>
          <div className="aspect-square">
            <Image
              src="/founding-story-1.png"
              alt="Tailor-made garment production"
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      title: '2023',
      content: (
        <div>
          <p className="dark:text-neutral-200 mb-4 text-xs font-normal text-grayscale-black-800 md:text-sm">
            Projected turnover of USD 126.24 million, powered by sustainability and innovation.
          </p>
          <div className="aspect-square">
            <Image
              src="/founding-story-1.png"
              alt="Tailor-made garment production"
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      ),
    },
  ]
  return (
    <div className="w-full md:hidden">
      <Timeline data={data} />
    </div>
  )
}
