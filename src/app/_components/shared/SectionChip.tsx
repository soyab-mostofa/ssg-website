import { cn } from '@/lib/utils'
import React from 'react'

const SectionChip = ({
  children,
  background,
  color,
  dark,
}: {
  children: React.ReactNode
  background?: string
  color?: string
  dark?: boolean
}) => {
  return (
    <div
      className={cn(
        'flex w-fit items-center justify-between gap-1 rounded-sm bg-primary-blue-100 px-2 py-1 text-base font-medium uppercase text-grayscale-black-400 md:gap-2 md:px-3 md:py-2 md:text-lg',
        background,
        color,
        { 'bg-primary-blue-700 text-others-white': dark },
      )}
    >
      <span className="block h-1 w-1 rounded-[2px] bg-secondary-red-500 leading-6 md:h-2 md:w-2" />
      {children}
    </div>
  )
}

export default SectionChip
