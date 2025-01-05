import React from 'react'
import SectionChip from '../../shared/SectionChip'
import Image from 'next/image'
import { RocketIcon } from 'lucide-react'
import { Card } from '@/components/ui/card'

const FoundingStory = () => {
  return (
    <section className="container overflow-x-hidden py-8 md:py-16 lg:py-24">
      <SectionChip>Founding Story</SectionChip>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {/* Left Column */}
        <div className="flex flex-col space-y-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Founding Story</h2>
            <div className="space-y-4 text-base md:text-lg">
              <p>
                Shin Shin Group is one of the largest conglomerates in Bangladesh, exporting apparel
                worldwide. The group comprises five factories: Shin Shin Apparels Ltd, Jeans Plus
                Ltd, Khalifa Apparels Ltd, Organic Jeans Ltd, and Vancot Limited. All these
                factories practice and promote sustainable and responsible apparel production.
              </p>
              <p>
                By prioritizing the well-being of people and the planet, while striving for
                continuous innovation and the highest quality, Shin Shin Group has earned a
                prestigious position in the fashion industry. The group has received several
                international awards and accolades for its commitment to sustainability and
                inclusivity.
              </p>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="relative aspect-[1.27/1] w-full overflow-hidden rounded-xl">
              <Image
                src="/founding-story-1.png"
                alt="Shin Shin Group facility view 1"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="relative aspect-[1.27/1] w-full overflow-hidden rounded-xl">
              <Image
                src="/founding-story-2.png"
                alt="Shin Shin Group facility view 2"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Featured Image */}
        <div className="relative aspect-[0.97/1] w-full lg:aspect-auto">
          <Image
            src="/founding-story-side.png"
            alt="Shin Shin Group main facility"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="rounded-xl object-cover object-center"
            priority
          />
        </div>
      </div>
      <div className="mt-8 grid gap-8 md:mt-14 md:grid-cols-2">
        <Card className="p-6">
          <div className="w-fit rounded-sm bg-secondary-red-600 p-3 text-others-white">
            <RocketIcon fill="white" size={24} />
          </div>
          <p className="pb-2 pt-3 text-2xl font-semibold">Our Mission</p>
          <p className="text-base">
            To revolutionize the global apparel industry by delivering sustainable, innovative, and
            high-quality solutions that empower people, protect the planet, and create lasting value
            for all stakeholders.
          </p>
        </Card>
        <Card className="p-6">
          <div className="w-fit rounded-sm bg-secondary-red-600 p-3 text-others-white">
            <RocketIcon fill="white" size={24} />
          </div>
          <p className="pb-2 pt-3 text-2xl font-semibold">Our Mission</p>
          <p className="text-base">
            To revolutionize the global apparel industry by delivering sustainable, innovative, and
            high-quality solutions that empower people, protect the planet, and create lasting value
            for all stakeholders.
          </p>
        </Card>
      </div>
    </section>
  )
}

export default FoundingStory
