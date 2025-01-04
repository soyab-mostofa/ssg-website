import React from 'react'
import SectionChip from './SectionChip'
import SplitLines from '../animated/SplitLines'
import AnimateTextInView from '../animated/animateTextInView'
import { cn } from '@/lib/utils'

interface SectionProps {
  chip?: string
  children: React.ReactNode
  className?: string
  dark?: boolean
  heading: string
  subLeft?: string
  subBottom?: string
  headingWidth?: string
}

const SectionLayout = ({
  heading,
  subBottom,
  subLeft,
  chip,
  children,
  headingWidth = '584px',
  dark,
}: SectionProps) => {
  return (
    <section className={cn('py-16 md:py-24', { 'relative bg-primary-blue-900': dark })}>
      <div className="container">
        <div
          className={cn('mb-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10', {
            'md:grid-cols-1': !subLeft,
          })}
        >
          <div
            className={`flex w-full max-w-[${headingWidth}] flex-col items-start gap-2 md:gap-8`}
          >
            <SectionChip dark={dark}>{chip}</SectionChip>
            {/* <SplitLines
              className="text-3xl font-bold md:text-5xl"
              text="A Legacy of Impact and Innovation"
            /> */}
            <AnimateTextInView
              className={cn('w-full pt-2 text-2xl font-bold md:text-5xl', {
                'text-others-white': dark,
              })}
              text={heading}
            />
            {subBottom && (
              <SplitLines
                dark={dark}
                className="flex max-w-[687px] flex-wrap items-center text-base font-normal text-grayscale-black-400 md:text-xl"
                text={subBottom}
              />
            )}
          </div>
          {subLeft && (
            <SplitLines
              className="self-end text-base font-normal text-grayscale-black-400 md:text-xl"
              text={subLeft}
            />
          )}
        </div>
      </div>
      <div>{children}</div>
    </section>
  )
}

export default SectionLayout
