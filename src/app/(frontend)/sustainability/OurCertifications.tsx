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

const certificationLogos = [
  'Accord.webp',
  'RSC.webp',
  'BSCI.webp',
  'Sedex.webp',
  'Higg Index.webp',
  'amfori BEPI.webp',
  'Better Work.webp',
  'SLCP.webp',
  'WRAP.webp',
  'ELEVATE RSA.webp',
  'SCAN.webp',
  'Supply Chain Security.webp',
  'GOTS.webp',
  'OCS 100.webp',
  'RCS.webp',
  'OEKO-TEX 100.webp',
  'GRS.webp',
  'Mothers@Work.webp',
  'RWS.webp',
  'ISO 14000.webp',
]

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
        {certificationLogos.map((logoName) => (
          <CustomerLogo key={logoName} logo={`/certs/${logoName}`} />
        ))}
      </div>
    </SectionLayout>
  )
}

export default OurCertifications
