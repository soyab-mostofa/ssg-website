import React from 'react'
import SectionChip from './SectionChip'
import TextFadeUp from '../animated/TextFadeUp'
import AnimateTextInView from '../animated/animateTextInView'
import { cn } from '@/lib/utils'
import Button from './Button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface SectionProps {
  chip?: string
  children: React.ReactNode
  className?: string
  dark?: boolean
  heading: string
  subLeft?: string
  subBottom?: string
  headingWidth?: string
  grayBG?: boolean
  rightButton?: string
  sustainSection?: boolean
  productSection?: boolean
}

const SectionLayout = ({
  heading,
  subBottom,
  subLeft,
  chip,
  children,
  headingWidth = '584px',
  dark,
  grayBG,
  className,
  rightButton,
  sustainSection,
  productSection,
}: SectionProps) => {
  return (
    <section
      className={cn(
        'py-16 md:py-24',
        { 'relative bg-primary-blue-900': dark },
        { 'bg-grayscale-black-100': grayBG },
        className,
      )}
    >
      <div className="container">
        <div
          className={cn('mb-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10', {
            'md:grid-cols-1': !subLeft && !rightButton,
            'md:grid-cols-[687px_1fr]': sustainSection,
            'md:grid-cols-[1fr]': productSection,
          })}
        >
          <div
            style={{ maxWidth: headingWidth }}
            className={`flex w-full flex-col items-start gap-2 md:gap-8`}
          >
            <SectionChip dark={dark}>{chip}</SectionChip>
            <AnimateTextInView
              className={cn('-mb-1 w-full pt-2 text-2xl font-bold md:text-5xl', {
                'text-others-white': dark,
              })}
              text={heading}
              delay={0.2}
            />
            {subBottom && (
              <TextFadeUp
                dark={dark}
                className="flex max-w-[687px] flex-wrap items-center text-base font-normal text-grayscale-black-400 md:text-xl"
                text={subBottom}
              />
            )}
          </div>
          {subLeft && (
            <TextFadeUp
              className={cn('self-end text-base font-normal text-grayscale-black-400 md:text-xl', {
                'text-grayscale-black-100': dark,
              })}
              text={subLeft}
            />
          )}
          {rightButton && (
            <Link className="inline-flex justify-end self-end" href="#">
              <Button>
                <ArrowRight /> {rightButton}
              </Button>
            </Link>
          )}
        </div>
      </div>
      <div>{children}</div>
    </section>
  )
}

export default SectionLayout
