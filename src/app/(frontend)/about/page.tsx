'use client'
import TextFadeUp from '@/app/_components/animated/SplitLines'
import Image from 'next/image'
import React from 'react'
import AnimatedText from './AnimatedText'

const Page = () => {
  return (
    <section className="">
      <div className="relative mx-auto h-[700px] w-full">
        <div className="gap container relative z-10 flex h-full flex-col justify-end gap-6 pb-24 text-others-white">
          <div className="text-8xl font-bold md:max-w-[805px]">
            <AnimatedText text="About" delay={0.3} duration={0.8} staggerChildren={0.05} />
            <AnimatedText
              text="Shin Shin Group"
              delay={0.6}
              duration={0.8}
              staggerChildren={0.05}
            />
          </div>
          <div className="h-[50px] text-lg md:max-w-[805px]">
            <TextFadeUp text="Shin Shin Group is one of the largest conglomerates in Bangladesh, exporting apparel worldwide. The group comprises five factories." />
          </div>
        </div>
        <Image fill src="/about.png" alt="about" className="origin-center bg-center object-cover" />
      </div>
    </section>
  )
}

export default Page
