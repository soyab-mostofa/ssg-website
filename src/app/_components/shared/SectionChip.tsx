import { cn } from '@/lib/utils'
import React from 'react'

const SectionChip = ({
  children,
  background,
  color,
}: {
  children: React.ReactNode
  background?: string
  color?: string
}) => {
  return (
    <div
      className={cn(
        'uppercase flex w-fit items-center rounded-sm text-grayscale-black-400 justify-between gap-1 md:gap-2 bg-primary-blue-100 px-2 py-1 md:px-3 md:py-2 text-base md:text-lg font-medium',
        background,
        color,
      )}
    >
      <span className="block h-1 w-1 md:h-2 md:w-2 rounded-[2px] bg-secondary-red-500 leading-6" />
      {children}
    </div>
  )
}

export default SectionChip
