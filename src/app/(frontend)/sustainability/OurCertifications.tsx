'use client'
import { memo } from 'react'
import Image from 'next/image'
import SectionLayout from '@/app/_components/shared/SectionLayout'

const CustomerLogo = memo(function CustomerLogo({ logo }: { logo: string }) {
  return (
    <div className="relative aspect-[241/285] w-full max-w-[241px] rounded-lg border border-primary-blue-200">
      <div className="flex aspect-[241/285] w-full max-w-[241px] justify-center">
        <Image
          src={logo}
          alt={'certifications'}
          className="h-auto max-w-full object-contain"
          fill
        />
      </div>
    </div>
  )
})

const OurCertifications = () => {
  return (
    <SectionLayout
      chip="OUR CERTIFICATIONS"
      heading="Certified Excellence in Apparel"
      headingWidth="500px"
      className="px-4 sm:px-6 lg:px-8"
      subLeft="Shin Shin Group holds globally recognized certifications, ensuring sustainable practices, ethical production, and premium quality standards in every garment manufactured."
    >
      <div className="container grid grid-cols-3 gap-4 md:grid-cols-5 md:gap-8 lg:grid-cols-5">
        {Array.from({ length: 24 }).map((_, i) => (
          <CustomerLogo key={i} logo={`/certs/certification-${i + 1}.webp`} />
        ))}
      </div>
    </SectionLayout>
  )
}

export default OurCertifications
