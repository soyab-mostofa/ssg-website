import React from 'react'
import SectionLayout from '../../../shared/SectionLayout'
import VideoPlayer from './VideoPlayer'

const Showreel = () => {
  return (
    <SectionLayout
      heading="A Legacy of Impact and Innovation"
      subLeft="Lorem ipsum dolor sit amet consectetur. Mattis arcu lectus morbi a ut massa eget mauris.
            Dis facilisi gravida neque elementum auctor felis neque facilisis."
      chip="Showreel"
    >
      <div className="container">
        <VideoPlayer />
      </div>
    </SectionLayout>
  )
}

export default Showreel
