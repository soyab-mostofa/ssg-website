'use client'
import { memo } from 'react'
import Image from 'next/image'
import SectionChip from '../../shared/SectionChip'
import AnimateTextInView from '../../animated/animateTextInView'
import TextFadeUp from '../../animated/TextFadeUp'

// Brand images data - arranged in specified order
const BRAND_IMAGES = [
  'H&M.png',
  'Primark.png',
  'Pull&Bear.png',
  'Zara.png',
  'Walmart.png',
  'George.png',
  'C&A.png',
  'Bestseller.png',
  'Jack & Jones.png',
  'Selected Homme.png',
  'Next.png',
  'HEMA.png',
  'Carrefour.png',
  'Just Jeans.png',
  "Sainsbury's.png",
  'Nutmeg.png',
  'Walt Disney.png',
  'Zeco.png',
  'New Look.png',
  'Dunnes Stores.png',
  'Lidl.png',
] as const

// Memoized customer logo component
const CustomerLogo = memo(function CustomerLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="mb-10 flex min-h-[124px] w-[calc(50%-20px)] items-center justify-center overflow-hidden rounded-lg border border-primary-blue-200 md:w-[calc(25%-20px)]">
      <Image
        src={logo}
        alt={name}
        width={276}
        height={124}
        className="h-auto max-h-[124px] max-w-40 object-contain p-2 md:max-w-[276px]"
        loading="lazy"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
    </div>
  )
})

export default function CustomersSection() {
  return (
    <section className="container py-24">
      <div className="mb-10 flex flex-col justify-between gap-2 md:flex-row md:gap-8">
        <div className="flex basis-1/2 flex-col items-start gap-8">
          <SectionChip>OUR CUSTOMERS</SectionChip>
          <AnimateTextInView
            className={'-mb-1 w-full pt-2 text-2xl font-bold md:text-5xl'}
            text="Trusted by Global Apparel Leaders"
          />
        </div>

        <div className="mt-auto h-full max-w-[584px] basis-1/2">
          <TextFadeUp
            className="-ml-1 self-end text-base font-normal text-grayscale-black-400 md:text-xl"
            text="From high-street fashion to timeless classics, Shin Shin Group partners with leading global brands, ensuring quality, innovation, and sustainable practices at every step."
          />
        </div>
      </div>{' '}
      {/* Logos Grid */}
      <div className="flex flex-wrap items-center justify-between">
        {BRAND_IMAGES.map((brandImage) => {
          // Extract brand name from filename (remove .png extension)
          const brandName = brandImage.replace('.png', '')

          return <CustomerLogo key={brandName} name={brandName} logo={`/brands/${brandImage}`} />
        })}
      </div>
    </section>
  )
}
