'use client'
import SectionLayout from '@/app/_components/shared/SectionLayout'
import Image from 'next/image'
import React, { useState } from 'react'
import JobListings from './JobListings'
import ApplicationForm from './ApplicationForm'
import { motion } from 'motion/react'
import PageHeader from '@/app/_components/pages/about/PageHeader'

interface CultureItem {
  url: string
  position: string
  name?: string
  quote: string
}

const data: CultureItem[] = [
  {
    url: '/career/employee-1.webp',
    name: 'Al Amin',
    position: 'Assistant General Manager, IT',
    quote:
      'At Shin Shin Group, the collaborative environment fuels innovation and pushes me to deliver cutting-edge IT solutions that drive our mission forward.',
  },
  {
    url: '/career/employee-2.webp',
    name: 'Roksana Jahan',
    position: 'Deputy Manager, Quality',
    quote:
      'Working at Shin Shin Group, I take pride in ensuring every garment meets the highest quality standards, knowing my work helps build trust with customers globally.',
  },
  {
    url: '/career/employee-3.webp',
    name: 'Sujan Paul',
    position: 'Senior General Manager',
    quote:
      'My journey at Shin Shin Group has been shaped by strong teamwork and leadership – together we’re creating meaningful impact through sustainable apparel manufacturing.',
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

const EmployeeCard: React.FC<{ item: CultureItem; index: number }> = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      key={index}
      className="group relative aspect-square w-full cursor-pointer overflow-hidden rounded-lg"
      variants={fadeInUp}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatedImage
        src={item.url}
        alt={`${item.name} - ${item.position}`}
        className="z-0 origin-center rounded-lg object-cover object-center transition-all duration-500 ease-in-out"
      />

      {/* Dark Overlay with Content */}
      <motion.div
        className="absolute inset-0 z-50 flex h-full w-full flex-col items-center justify-center rounded-lg bg-others-white p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <div className="text-white text-left">
          <motion.blockquote
            className="mb-4 text-sm font-medium leading-relaxed md:text-base lg:text-lg"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 30, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          >
            &ldquo;{item.quote}&rdquo;
          </motion.blockquote>

          <motion.div
            className="border-t border-others-white/30 pt-3"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 30, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          >
            <p className="text-white text-sm font-bold md:text-base">{item.name}</p>
            <p className="text-white/90 text-xs font-medium md:text-sm">{item.position}</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const Page: React.FC = () => {
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
            <div className="relative aspect-video max-h-[500px] w-full overflow-hidden rounded-lg">
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
          subLeft="At Shin Shin Group, we believe in empowering our people and fostering a collaborative, inclusive environment. Our team members are at the heart of our success, driving innovation and making a global impact in the apparel industry. Discover what it's like to build your career."
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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
      >
        <JobListings />
      </motion.div>

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
