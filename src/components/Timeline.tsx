import Image from 'next/image'
import React from 'react'
import { Timeline } from '@/components/ui/timeline'

export function MobileTimeline() {
  const data = [
    {
      title: '2007',
      eventName: 'Jeans Plus Ltd Established',
      content: (
        <div>
          <p className="dark:text-neutral-200 mb-4 text-xs font-normal text-grayscale-black-800 md:text-sm">
            Jeans Plus Ltd established as the foundation of our sustainable apparel manufacturing
            journey.
          </p>
          <div className="aspect-square">
            <Image
              src="/jeans-plus.webp"
              alt="Jeans Plus Ltd"
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
      eventName: 'Shin Shin Apparels Ltd Established',
      content: (
        <div>
          <p className="dark:text-neutral-200 mb-4 text-xs font-normal text-grayscale-black-800 md:text-sm">
            Shin Shin Apparels Ltd established, focusing on quality and sustainability.
          </p>
          <div className="aspect-square">
            <Image
              src="/shinshin-apparel.webp"
              alt="Shin Shin Apparels Ltd"
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
      eventName: 'Organic Jeans Ltd Launched',
      content: (
        <div>
          <p className="dark:text-neutral-200 mb-4 text-xs font-normal text-grayscale-black-800 md:text-sm">
            Organic Jeans Ltd launched, specializing in eco-friendly denim production.
          </p>
          <div className="aspect-square">
            <Image
              src="/organic-jeans.webp"
              alt="Organic Jeans Ltd"
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      title: '2015',
      eventName: 'Vancot Ltd Established',
      content: (
        <div>
          <p className="dark:text-neutral-200 mb-4 text-xs font-normal text-grayscale-black-800 md:text-sm">
            Vancot Ltd established, expanding into knitwear and woven garments.
          </p>
          <div className="aspect-square">
            <Image
              src="/timeline/vancot.webp"
              alt="Vancot Ltd"
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
      eventName: 'Saud Garments Industries Ltd Established',
      content: (
        <div>
          <p className="dark:text-neutral-200 mb-4 text-xs font-normal text-grayscale-black-800 md:text-sm">
            Saud Garments Industries Ltd established, enhancing production capacity and
            sustainability efforts.
          </p>
          <div className="aspect-square">
            <Image
              src="/timeline/saud.webp"
              alt="Saud Garments Industries Ltd"
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
