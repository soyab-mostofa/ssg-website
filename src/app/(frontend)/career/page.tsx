import AboutHeader from '@/app/_components/pages/about/AboutHeader'
import SectionLayout from '@/app/_components/shared/SectionLayout'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <AboutHeader
        heading={['Career', 'Shin Shin Group']}
        sub="Shin Shin Group is one of the largest conglomerates in Bangladesh, exporting apparel worldwide. The group comprises five factories."
      />
      <SectionLayout
        heading="Diverse Workforce"
        chip="Overview"
        subLeft="Lorem ipsum dolor sit amet consectetur. Odio enim aenean sed morbi ac. Scelerisque egestas eros vel libero vel. Orci libero orci varius dolor eu mattis sed vestibulum tincidunt. Accumsan malesuada mattis lobortis purus purus eros."
      >
        <div className="container">
          <div className="relative aspect-video">
            <Image
              src="/career-header.png"
              alt="career"
              className="origin-center object-cover"
              fill
            />
          </div>
        </div>
      </SectionLayout>
      <SectionLayout
        heading="Team & Culture Overview"
        chip="Team & Culture"
        dark
        subLeft="Conserving  natural resources like water is imperative to our vision as a sustainable clothing manufacturer. So, our approach is to reduce, reuse, and recycle. In 2020 alone, we have saved 24.31% of water, reducing 5% of wastewater!"
      >
        <div className="container">
          {/* <div className="relative aspect-video">
            <Image
              src="/career-header.png"
              alt="career"
              className="origin-center object-cover"
              fill
            />
          </div> */}
        </div>
      </SectionLayout>
    </div>
  )
}

export default page
