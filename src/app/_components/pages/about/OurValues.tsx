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
      subLeft="Lorem ipsum dolor sit amet consectetur. Mattis arcu lectus morbi a ut massa eget mauris. Dis facilisi gravida neque elementum auctor felis neque facilisis."
    >
      <CoreValues />
      <img
        src="/pattern-corner.png"
        alt="pattern"
        aria-hidden
        className="absolute right-0 top-0 opacity-5"
      />
      <img
        src="/pattern-corner.png"
        alt="pattern"
        aria-hidden
        className="absolute bottom-0 left-0 rotate-180 opacity-5"
      />
    </SectionLayout>
  )
}

export default OurValues
