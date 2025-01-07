import Image from 'next/image'
import React from 'react'
import { Timeline } from '@/components/ui/timeline'

export function TimelineDemo() {
  const data = [
    {
      title: '1995',
      content: (
        <div>
          <p className="dark:text-neutral-200 mb-8 text-xs font-normal text-grayscale-black-800 md:text-sm">
            Shin Shin Group was founded in 1995 by a group of young entrepreneurs who saw the
          </p>
          <div className="aspect-square">
            <Image
              src="/founding-story-1.png"
              alt="Shin Shin Group booth at Denim Expo"
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      title: '1997',
      content: (
        <div>
          <p className="dark:text-neutral-200 mb-8 text-xs font-normal text-grayscale-black-800 md:text-sm">
            Shin Shin Group has been pioneering sustainable jeans production in Bangladesh,
            exporting to globally recognized fashion brands and retailers.
          </p>
          <div className="aspect-square">
            <Image
              src="/founding-story-1.png"
              alt="Sustainable jeans production"
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      title: '2000',
      content: (
        <div>
          <p className="dark:text-neutral-200 mb-4 text-xs font-normal text-grayscale-black-800 md:text-sm">
            The group is heading towards growth through a focus on tailor-made garments,
            sustainability initiatives, training for mid-level professionals, and efforts to enhance
            efficiency.
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
