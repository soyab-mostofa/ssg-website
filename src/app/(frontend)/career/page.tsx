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
  position: string
  subTitle: string
  name?: string
  quote: string
}

const data: CultureItem[] = [
  {
    url: '/career/employee-1.JPG',
    name: 'Al Amin',
    position: 'Assistant General Manager, IT',
    subTitle:
      'Lorem ipsum dolor sit amet consectetur. Odio enim aenean sed morbi ac. Scelerisque egestas eros vel libero vel. Orci libero orci varius dolor eu mattis sed vestibulum tincidunt. Accumsan malesuada mattis lobortis purus purus eros.',
    quote:
      'Innovation drives us forward. Every day at Shin Shin Group brings new opportunities to revolutionize how technology serves our mission.',
  },
  {
    url: '/career/employee-2.JPG',
    name: 'Roksana Jahan',
    position: 'Deputy Manager, Quality',
    subTitle:
      'Lorem ipsum dolor sit amet consectetur. Odio enim aenean sed morbi ac. Scelerisque egestas eros vel libero vel. Orci libero orci varius dolor eu mattis sed vestibulum tincidunt. Accumsan malesuada mattis lobortis purus purus eros.',
    quote:
      "Quality is not just our standard—it's our promise. Every stitch tells a story of excellence and dedication.",
  },
  {
    url: '/career/employee-3.JPG',
    name: 'Sujan Paul',
    position: 'Senior General Manager',
    subTitle:
      'Lorem ipsum dolor sit amet consectetur. Odio enim aenean sed morbi ac. Scelerisque egestas eros vel libero vel. Orci libero orci varius dolor eu mattis sed vestibulum tincidunt. Accumsan malesuada mattis lobortis purus purus eros.',
    quote:
      'Leadership means empowering others to achieve greatness. Together, we build not just garments, but dreams.',
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
          heading={['Career at', 'Shin Shin Group']}
          sub="Shin Shin Group is one of the largest conglomerates in Bangladesh, exporting apparel worldwide. The group comprises four factories."
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
          subLeft="Shin Shin Group is dedicated to fostering a rich and varied workforce. The company actively promotes an inclusive environment, recognizing the value of all individuals. Beyond employment, Shin Shin Group is committed to supporting its employees and their families through various welfare initiatives."
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
                <EmployeeCard key={index} item={item} index={index} />
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

const EmployeeCard: React.FC<{ item: CultureItem; index: number }> = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      key={index}
      className="group relative aspect-square w-full cursor-pointer overflow-hidden rounded-lg bg-others-white"
      variants={fadeInUp}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image - hidden on hover */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 1 }}
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <AnimatedImage
          src={item.url}
          alt={`${item.name} - ${item.position}`}
          className="origin-center rounded-lg object-cover object-center"
        />
      </motion.div>

      {/* White Background with Content - shown on hover */}
      <motion.div
        className="bg-white absolute inset-0 z-20 flex h-full w-full flex-col items-center justify-center rounded-lg p-6 shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <div className="text-black text-center">
          <motion.blockquote
            className="text-gray-800 mb-4 text-sm font-medium italic leading-relaxed md:text-base lg:text-lg"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 30, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          >
            &ldquo;{item.quote}&rdquo;
          </motion.blockquote>

          <motion.div
            className="border-gray-300 border-t pt-3"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 30, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          >
            <p className="text-black text-sm font-bold md:text-base">{item.name}</p>
            <p className="text-gray-600 text-xs font-medium md:text-sm">{item.position}</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Page
