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
      className={`flex text-others-white flex-row justify-center items-center p-4 gap-2 w-full md:w-fit bg-secondary-red-500 rounded-[12px] ${className}`}
    >
      {children} {icon}
    </button>
  )
}

export default Button
