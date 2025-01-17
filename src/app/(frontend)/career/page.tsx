'use client'
import SectionLayout from '@/app/_components/shared/SectionLayout'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import JobListings from './JobListings'
import ApplicationForm from './ApplicationForm'
import { motion } from 'motion/react'
import { getOpenJobs } from '@/app/actions'
import { JobListing } from '@/payload-types'
import PageHeader from '@/app/_components/pages/about/PageHeader'

interface CultureItem {
  url: string
  subTitle: string
}

const data: CultureItem[] = [
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

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const imageScale = {
  hidden: { opacity: 0, scale: 1.2 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: 'easeOut' },
  },
}

const AnimatedImage: React.FC<{ src: string; alt: string; className?: string }> = ({
  src,
  alt,
  className,
}) => (
  <motion.div
    className="relative h-full w-full"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-100px' }}
    variants={imageScale}
  >
    <Image src={src} alt={alt} className={className} fill />
  </motion.div>
)

const Page: React.FC = () => {
  const [jobs, setJobs] = useState<JobListing[]>([])
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    const res = await getOpenJobs()
    console.log(res)
    setJobs(res)
  }

  return (
    <div className="space-y-12 sm:space-y-16 md:space-y-24">
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <PageHeader
          bgImage="/headers/career-header.webp"
          heading={['Career', 'Shin Shin Group']}
          sub="Shin Shin Group is one of the largest conglomerates in Bangladesh, exporting apparel worldwide. The group comprises five factories."
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
      >
        <SectionLayout
          heading="Diverse Workforce"
          chip="Overview"
          subLeft="Lorem ipsum dolor sit amet consectetur. Odio enim aenean sed morbi ac. Scelerisque egestas eros vel libero vel. Orci libero orci varius dolor eu mattis sed vestibulum tincidunt. Accumsan malesuada mattis lobortis purus purus eros."
        >
          <div className="container px-4 sm:px-6 md:px-8">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <AnimatedImage
                src="/career-header.png"
                alt="career"
                className="origin-center object-cover"
              />
            </div>
          </div>
        </SectionLayout>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
      >
        <SectionLayout
          heading="Team & Culture Overview"
          chip="Team & Culture"
          dark
          subLeft="Conserving natural resources like water is imperative to our vision as a sustainable clothing manufacturer. So, our approach is to reduce, reuse, and recycle. In 2020 alone, we have saved 24.31% of water, reducing 5% of wastewater!"
        >
          <motion.div className="container px-4 sm:px-6 md:px-8" variants={staggerContainer}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
              {data.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative aspect-square w-full overflow-hidden rounded-lg"
                  variants={fadeInUp}
                >
                  <AnimatedImage
                    src={item.url}
                    alt={`culture-${index + 1}`}
                    className="origin-center rounded-lg object-cover object-center"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </SectionLayout>
      </motion.div>
      {jobs.length > 0 && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <JobListings jobs={jobs} />
        </motion.div>
      )}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
      >
        <ApplicationForm />
      </motion.div>
    </div>
  )
}

export default Page
