'use client'
import React from 'react'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import SectionChip from '@/app/_components/shared/SectionChip'
import { NumberTicker } from '@/components/ui/number-ticker'
import DesktopQuote from '@/app/_components/animated/DesktopQuote'
import AnimatedQuote from '@/app/_components/animated/AnimatedQuote'
import { motion } from 'motion/react'

const ChairmansThoughts = () => {
  return (
    <section className="bg-[#F6F6F6] py-14 md:py-28">
      <div className="container">
        <div className="top-8">
          <SectionChip>CHAIRMAN&apos;S THOUGHTS</SectionChip>
          <DesktopQuote paragraph="Continuous improvement is not just our goal, it's in our DNA. We strive to surpass our achievements every day, empowering our people and prioritizing eco-friendly RMG production to become the top global apparel and textile supplier." />
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div className="relative mb-16 mt-12 md:hidden">
              <AnimatedQuote paragraph="Continuous improvement is not just our goal, it's in our DNA. We strive to surpass our achievements every day, empowering our people and prioritizing eco-friendly RMG production to become the top global apparel and textile supplier." />
            </div>
            <div className="h-fit md:basis-1/2 md:max-w-[380px]">
              <motion.div
                initial={{ width: '0%' }}
                whileInView={{
                  width: '100%',
                  transition: {
                    duration: 0.5,
                    easings: 'linear',
                    type: 'spring',
                    damping: 30,
                  },
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="h-[436px] relative"
              >
                <Image
                  src="/chairman.png"
                  alt="Chairman's Thought"
                  className="object-center object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                />
              </motion.div>
              <div className="flex flex-col gap-1">
                <p className="mt-3 text-xl inline-block md:text-3xl font-bold">
                  Mohammad Sohel Sadat
                </p>
                <p className="text-lg inline-block text-grayscale-black-400 md:text-2xl">
                  Chairman, Shin Shin Group
                </p>
              </div>
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
        <li className="text-grayscale-black-400/20 pb-4 md:border-b-0 md:pb-6 md:pr-6">
          <div className="mb-5 flex items-center gap-4">
            <p className="text-5xl text-primary-blue-500 font-bold">
              <NumberTicker value={10} />k
            </p>
            <p className="text-lg font-medium w-24 text-primary-blue-500">Total Workforce</p>
          </div>
          <p className="text-grayscale-black-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a neque ipsa tempore
            perspiciatis nostrum ad reprehenderit sint dolorum amet?
          </p>
        </li>
        <li className="text-grayscale-black-400/20 py-4 md:border-b-0 md:pb-6 md:pl-6 md:pt-0">
          <div className="mb-5 flex items-center gap-4">
            <p className="text-5xl text-primary-blue-500 font-bold">
              <NumberTicker value={130} />k
            </p>
            <p className="text-lg font-medium w-24 text-primary-blue-500">Total Workforce</p>
          </div>
          <p className="text-grayscale-black-400 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a neque ipsa tempore
            perspiciatis nostrum ad reprehenderit sint dolorum amet?
          </p>
        </li>
      </div>
      <Separator className="hidden md:block" />
      <div className="flex flex-col md:flex-row md:divide-x-2">
        <li className="text-grayscale-black-400/20 pb-4 md:border-b-0 md:pr-6">
          <div className="mb-5 mt-6 flex items-center gap-4">
            <p className="text-5xl text-primary-blue-500 font-bold">
              <NumberTicker value={10} />k
            </p>
            <p className="text-lg font-medium w-24 text-primary-blue-500">Total Workforce</p>
          </div>
          <p className="text-grayscale-black-400 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a neque ipsa tempore
            perspiciatis nostrum ad reprehenderit sint dolorum amet?
          </p>
        </li>
        <li className="text-grayscale-black-400/20 pb-4 md:border-b-0 md:pl-6">
          <div className="mb-5 mt-6 flex items-center gap-4">
            <p className="text-5xl text-primary-blue-500 font-bold">
              <NumberTicker value={10} />k
            </p>
            <p className="text-lg font-medium w-24 text-primary-blue-500">Total Workforce</p>
          </div>
          <p className="text-grayscale-black-400 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a neque ipsa tempore
            perspiciatis nostrum ad reprehenderit sint dolorum amet?
          </p>
        </li>
      </div>
    </ul>
  )
}

export default ChairmansThoughts
