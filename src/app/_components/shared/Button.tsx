import { cn } from '@/lib/utils'
import React from 'react'

interface ButtonProps {
  onClick?: () => void
  children: React.ReactNode
  className?: string
  icon?: React.ReactNode // Changed from Icon to icon for convention
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ icon, onClick, children, className = '', disabled }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex w-full flex-row items-center justify-center gap-2 rounded-[12px] bg-secondary-red-500 px-4 py-3 text-sm text-others-white md:w-fit',
        className,
        disabled,
      )}
    >
      {children} {icon}
    </button>
  )
}

export default Button
