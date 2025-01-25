/* eslint-disable @next/next/no-img-element */
import React from 'react'
import SectionLayout from '../../shared/SectionLayout'
import CoreValues from './CoreValues'

const OurValues = () => {
  return (
    <SectionLayout
      dark
      chip="Our values"
      heading="Values That Drive Us Forward"
      className="relative"
      subLeft="At Shin Shin Group, our values form the cornerstone of our journey toward innovation, sustainability, and excellence in apparel manufacturing. These principles guide our actions and define our purpose"
    >
      <CoreValues />
      <img
        src="/pattern-corner.png"
        alt="pattern"
        aria-hidden
        className="absolute right-[-91px] top-[-109px] z-0 scale-50 opacity-5 md:right-0 md:top-0 md:scale-100"
      />
      <img
        src="/pattern-corner.png"
        alt="pattern"
        aria-hidden
        className="absolute bottom-[-90px] left-[-92px] z-0 rotate-180 scale-50 opacity-5 md:bottom-0 md:left-0 md:scale-100"
      />
    </SectionLayout>
  )
}

export default OurValues
