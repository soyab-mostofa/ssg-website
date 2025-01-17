import Image from 'next/image'
import React from 'react'
import AnimatedText from '@/app/(frontend)/about/AnimatedText'
import HeadingFadeUp from '../../animated/HeadingFadeUp'

const PageHeader = ({
  heading,
  sub,
  bgImage,
}: {
  heading: string[]
  sub?: string
  bgImage?: string
}) => {
  return (
    <div className="relative mx-auto h-[500px] w-full sm:h-[600px] md:h-[700px]">
      <div className="container relative z-10 flex h-full flex-col justify-end gap-4 pb-12 text-others-white sm:gap-5 sm:pb-16 md:gap-6 md:pb-24">
        <div className="max-w-full text-4xl font-bold sm:text-6xl md:max-w-[805px] md:text-8xl">
          {heading.map((text, index) => (
            <AnimatedText
              key={index}
              text={text}
              delay={0.3 + index * 0.1}
              duration={0.8}
              staggerChildren={0.05}
            />
          ))}
        </div>
        <div className="h-auto max-w-full text-base sm:h-[40px] sm:text-lg md:h-[50px] md:max-w-[805px]">
          {sub && <HeadingFadeUp text={sub} />}
        </div>
      </div>
      <Image
        fill
        src={bgImage ? bgImage : '/headers/about-header.png'}
        alt="about"
        className="origin-center bg-center object-cover"
        priority
      />
    </div>
  )
}

export default PageHeader
