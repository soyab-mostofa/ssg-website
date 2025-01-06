import React from 'react'

interface ButtonProps {
  onClick?: () => void
  children: React.ReactNode
  className?: string
  icon?: React.ReactNode // Changed from Icon to icon for convention
}

const Button: React.FC<ButtonProps> = ({ icon, onClick, children, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`px flex w-full flex-row items-center justify-center gap-2 rounded-[12px] bg-secondary-red-500 px-4 py-3 text-sm text-others-white md:w-fit ${className}`}
    >
      {children} {icon}
    </button>
  )
}

export default Button
