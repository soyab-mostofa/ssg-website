import AboutHeader from '@/app/_components/pages/about/AboutHeader'
import SectionLayout from '@/app/_components/shared/SectionLayout'
import Image from 'next/image'
import React from 'react'
import JobListings from './JobListings'
import ApplicationForm from './ApplicationForm'

const data = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1677368598706-4fa4f345d579?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    subTitle:
      'Lorem ipsum dolor sit amet consectetur. Odio enim aenean sed morbi ac. Scelerisque egestas eros vel libero vel. Orci libero orci varius dolor eu mattis sed vestibulum tincidunt. Accumsan malesuada mattis lobortis purus purus eros.',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1677368598706-4fa4f345d579?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    subTitle:
      'Lorem ipsum dolor sit amet consectetur. Odio enim aenean sed morbi ac. Scelerisque egestas eros vel libero vel. Orci libero orci varius dolor eu mattis sed vestibulum tincidunt. Accumsan malesuada mattis lobortis purus purus eros.',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1677368598706-4fa4f345d579?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    subTitle:
      'Lorem ipsum dolor sit amet consectetur. Odio enim aenean sed morbi ac. Scelerisque egestas eros vel libero vel. Orci libero orci varius dolor eu mattis sed vestibulum tincidunt. Accumsan malesuada mattis lobortis purus purus eros.',
  },
]

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
        <div className="container flex flex-wrap justify-between">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative aspect-square w-full rounded-lg sm:w-[calc(33.33%-.75rem)]"
            >
              <Image
                src={item.url}
                alt="career"
                className="origin-center rounded-lg object-cover object-center"
                fill
              />
            </div>
          ))}
        </div>
      </SectionLayout>
      <JobListings />
      <ApplicationForm />
    </div>
  )
}

export default page
