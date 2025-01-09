'use client'
import React from 'react'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import SectionChip from '@/app/_components/shared/SectionChip'
import { NumberTicker } from '@/components/ui/number-ticker'
import DesktopQuote from '@/app/_components/animated/DesktopQuote'
import AnimatedQuote from '@/app/_components/animated/AnimatedQuote'
import { motion } from 'motion/react'
import AnimateTextInView from '@/app/_components/animated/animateTextInView'

const ChairmansThoughts = () => {
  return (
    <section className="bg-[#F6F6F6] py-14 md:py-28">
      <div className="container">
        <div className="top-8">
          <SectionChip>CHAIRMAN&apos;S THOUGHTS</SectionChip>
          <DesktopQuote paragraph="Continuous improvement is not just our goal, it's in our DNA. We strive to surpass our achievements every day, empowering our people and prioritizing eco-friendly RMG production to become the top global apparel and textile supplier." />
          <div className="flex flex-col justify-between md:flex-row md:gap-8">
            <div className="relative mb-4 mt-12 md:mb-16 md:hidden">
              <AnimatedQuote paragraph="Continuous improvement is not just our goal, it's in our DNA. We strive to surpass our achievements every day, empowering our people and prioritizing eco-friendly RMG production to become the top global apparel and textile supplier." />
            </div>
            <div className="h-fit md:max-w-[380px] md:basis-1/2">
              <motion.div
                initial={{ width: '0%' }}
                whileInView={{
                  width: '100%',
                  transition: {
                    duration: 1,
                    easings: 'linear',
                    easing: [0.65, 0.02, 0.23, 1],
                    type: 'spring',
                    damping: 50,
                    stiffness: 100,
                  },
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative h-[436px]"
              >
                <Image
                  src="/chairman.png"
                  alt="Chairman's Thought"
                  className="object-cover object-center"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                />
              </motion.div>
              <AnimateTextInView
                text="  Mohammad Sohel Sadat"
                className="mt-4 text-2xl font-bold text-grayscale-black-400 md:text-3xl"
              />
              <AnimateTextInView
                text="Chairman, Shin Shin Group"
                className="mb-8 flex text-xl text-grayscale-black-400 md:mb-0 md:text-2xl"
              />
            </div>
            <MetricsList />
          </div>
        </div>
      </div>
    </section>
  )
}

function MetricsList() {
  return (
    <ul className="flex flex-col md:basis-1/2">
      <div className="flex flex-col md:flex-row md:divide-x-2">
        <li className="pb-4 text-grayscale-black-400/20 md:border-b-0 md:pb-6 md:pr-6">
          <div className="mb-5 flex items-center gap-4">
            <p className="text-5xl font-bold text-primary-blue-500">
              <NumberTicker value={10} />k
            </p>
            <p className="w-24 text-lg font-medium text-primary-blue-500">Total Workforce</p>
          </div>
          <p className="text-grayscale-black-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a neque ipsa tempore
            perspiciatis nostrum ad reprehenderit sint dolorum amet?
          </p>
        </li>
        <li className="py-4 text-grayscale-black-400/20 md:border-b-0 md:pb-6 md:pl-6 md:pt-0">
          <div className="mb-5 flex items-center gap-4">
            <p className="text-5xl font-bold text-primary-blue-500">
              <NumberTicker value={130} />k
            </p>
            <p className="w-24 text-lg font-medium text-primary-blue-500">Total Workforce</p>
          </div>
          <p className="text-base text-grayscale-black-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a neque ipsa tempore
            perspiciatis nostrum ad reprehenderit sint dolorum amet?
          </p>
        </li>
      </div>
      <Separator className="hidden md:block" />
      <div className="flex flex-col md:flex-row md:divide-x-2">
        <li className="pb-4 text-grayscale-black-400/20 md:border-b-0 md:pr-6">
          <div className="mb-5 mt-6 flex items-center gap-4">
            <p className="text-5xl font-bold text-primary-blue-500">
              <NumberTicker value={10} />k
            </p>
            <p className="w-24 text-lg font-medium text-primary-blue-500">Total Workforce</p>
          </div>
          <p className="text-base text-grayscale-black-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a neque ipsa tempore
            perspiciatis nostrum ad reprehenderit sint dolorum amet?
          </p>
        </li>
        <li className="pb-4 text-grayscale-black-400/20 md:border-b-0 md:pl-6">
          <div className="mb-5 mt-6 flex items-center gap-4">
            <p className="text-5xl font-bold text-primary-blue-500">
              <NumberTicker value={10} />k
            </p>
            <p className="w-24 text-lg font-medium text-primary-blue-500">Total Workforce</p>
          </div>
          <p className="text-base text-grayscale-black-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a neque ipsa tempore
            perspiciatis nostrum ad reprehenderit sint dolorum amet?
          </p>
        </li>
      </div>
    </ul>
  )
}

export default ChairmansThoughts
