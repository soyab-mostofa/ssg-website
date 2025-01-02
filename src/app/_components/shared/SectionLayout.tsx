import React from 'react'
import SectionChip from './SectionChip'
import SplitLines from '../animated/SplitLines'
import AnimatedText from '../animated/animatedText'

interface SectionProps {
  chip?: string
  children: React.ReactNode
}

const SectionLayout = ({ chip, children }: SectionProps) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-10 grid grid-cols-1 gap-6 md:gap-10 md:grid-cols-2">
          <div className="flex flex-col items-start gap-8">
            <SectionChip>{chip}</SectionChip>
            {/* <SplitLines
              className="text-3xl font-bold md:text-5xl"
              text=" A Legacy of Impact and Innovation"
            /> */}
            <AnimatedText
              className="text-2xl font-bold md:text-5xl"
              text="A Legacy of Impact and Innovation"
            />
          </div>
          <SplitLines
            className="self-end font-normal md:text-xl text-grayscale-black-400 text-base"
            text=" Lorem ipsum dolor sit amet consectetur. Mattis arcu lectus morbi a ut massa eget mauris.
            Dis facilisi gravida neque elementum auctor felis neque facilisis."
          />
        </div>
      </div>
      <div>{children}</div>
    </section>
  )
}

export default SectionLayout
