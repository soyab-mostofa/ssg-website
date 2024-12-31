import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="relative w-full">
      <div className="container relative h-[600px]">
        <Image
          fill
          className="object-cover object-center w-full"
          src="/hero-background.png"
          alt="Hero"
        />
      </div>
    </div>
  )
}

export default Hero
