import Image from 'next/image'
import React from 'react'

const pictures = ['/carbon-wipeout-1.png', '/carbon-wipeout-2.png', '/carbon-wipeout-3.png']

const CarbonWipeout = () => {
  return (
    <div className="container py-24">
      <div className="flex flex-col gap-6 pb-6 sm:gap-10 sm:pb-10">
        <h3 className="text-3xl font-bold">Carbon Wipeout</h3>
        <p className="text-base font-normal">
          As an environmentally responsible business, we are firmly committed to minimizing our
          carbon footprint and transitioning towards a sustainable, zero-carbon economy. To reduce
          our environmental impact, we are setting up solar panels to prevent 2,000 tons of CO2 from
          being released into the environment every year and create closed-loop systems.
        </p>
      </div>
      <div className="flex flex-col gap-8 sm:flex-row">
        {pictures.map((picture, index) => {
          return (
            <div
              key={index}
              className="relative aspect-[379/420] w-full overflow-hidden rounded-lg bg-muted"
            >
              <Image src={picture} alt="carbon-wipeout" fill />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CarbonWipeout
