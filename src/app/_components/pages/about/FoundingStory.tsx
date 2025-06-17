'use client'
import React from 'react'
import { motion, Variants } from 'motion/react'
import SectionChip from '../../shared/SectionChip'
import Image from 'next/image'
import { Eye, RocketIcon } from 'lucide-react'
import { Card } from '@/components/ui/card'
import AnimateTextInView from '../../animated/animateTextInView'

const fadeIn = {
  hidden: { opacity: 0, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: 'easeInOut',
      delay: 0.2,
      staggerChildren: 0.5,
      easings: [0.5, 0.2, 0.3, 0.1],
    },
  },
} as Variants

const FoundingStory = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px', amount: 0.04 }}
      variants={fadeIn}
      className="container overflow-x-hidden py-8 md:py-16 lg:py-24"
    >
      <SectionChip>Founding Story</SectionChip>

      <div className="mt-8 grid gap-4 lg:grid-cols-2 lg:gap-8">
        <motion.div variants={fadeIn} className="flex flex-col space-y-6">
          <div className="space-y-4">
            <AnimateTextInView
              text="Founding Story"
              className="text-3xl font-bold md:text-4xl lg:text-5xl"
            />
            <motion.div variants={fadeIn} className="space-y-4 text-base md:text-lg">
              <p>
                Shin Shin Group began its journey in 2007, transforming the ready-made garment (RMG)
                sector in Bangladesh. Starting with Shin Shin Apparels Ltd., the group rapidly
                expanded, driven by quality, sustainability, and innovation. Recognizing global
                apparel challenges, it embraced sustainable practices, leveraging advanced
                technologies and skilled workforce to become a preferred partner for global brands.
              </p>
              <p>
                Over the years, Shin Shin Group acquired struggling factories, revitalizing them
                through investments in infrastructure, energy-efficient technologies, and
                sustainable practices. These efforts solidified its reputation as a leader in
                ethical apparel production, catering to markets worldwide, with four factories and
                over 10,000 employees.
              </p>
            </motion.div>
          </div>

          <motion.div variants={fadeIn} className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[1.27/1] w-full overflow-hidden rounded-xl">
              <Image
                src="/about/about-1.JPG"
                alt="Shin Shin Group facility view 1"
                fill
                className="object-cover object-center"
                priority
                suppressHydrationWarning
              />
            </div>
            <div className="relative aspect-[1.27/1] w-full overflow-hidden rounded-xl">
              <Image
                src="/about/about-2.webp"
                alt="Shin Shin Group facility view 2"
                fill
                className="object-cover object-center"
                suppressHydrationWarning
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeIn} className="relative aspect-[0.97/1] w-full lg:aspect-auto">
          <Image
            src="/about/about-4.JPG"
            alt="Shin Shin Group main facility"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="rounded-xl object-cover object-center"
            priority
          />
        </motion.div>
      </div>

      <motion.div variants={fadeIn} className="mt-8 grid gap-8 md:mt-14 md:grid-cols-2">
        <motion.div variants={fadeIn}>
          <Card className="p-6">
            <div className="w-fit rounded-sm bg-secondary-red-600 p-3 text-others-white">
              <RocketIcon fill="#d7191f" size={24} />
            </div>
            <p className="pb-2 pt-3 text-xl font-semibold sm:text-2xl">Our Mission</p>
            <p className="text-base">
              Delivering high-quality, sustainable apparel through ethical practices, innovation,
              and environmental care. Empowering people and fostering circular manufacturing, Shin
              Shin Group creates lasting value for customers and communities.
            </p>
          </Card>
        </motion.div>

        <motion.div variants={fadeIn}>
          <Card className="p-6">
            <div className="w-fit rounded-sm bg-secondary-red-600 p-3 text-others-white">
              <Eye fill="#d7191f" size={24} />
            </div>
            <p className="pb-2 pt-3 text-xl font-semibold sm:text-2xl">Our Vision</p>
            <p className="text-base">
              Becoming the most trusted apparel manufacturing partner, reshaping industries with
              sustainability, inclusively, and innovation. Shin Shin Group envisions a future of
              responsible fashion that uplifts communities and preserves the planet.
            </p>
          </Card>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default FoundingStory
