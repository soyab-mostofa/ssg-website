import React from 'react'

const HeroTitle = () => {
  return (
    <div className="flex flex-col max-w-[335px] items-center justify-center gap-4  md:gap-6 md:max-w-[687px]">
      <p className="font-semibold text-[48px] text-others-white leading-[1.2] md:text-[60px]">
        Innovating Today for a Sustainable Tomorrow
      </p>
      <p className=" text-others-white text-base leading-[1.4] md:text-[20px] text-white">
        With five state-of-the-art factories and a commitment to sustainability, Shin Shin Group
        delivers world-class apparel solutions that prioritize people, planet, and progress.
      </p>
    </div>
  )
}

export default HeroTitle
