import React from 'react'
import SectionLayout from '../../shared/SectionLayout'
import AwardsGallery from './ImageGallery'

const OurAwards = () => {
  return (
    <SectionLayout
      chip="awards"
      heading="Awards & Recognition"
      subLeft="Lorem ipsum dolor sit amet consectetur. Mattis arcu lectus morbi a ut massa eget mauris. Dis facilisi gravida neque elementum auctor felis neque facilisis."
    >
      <AwardsGallery />
    </SectionLayout>
  )
}

export default OurAwards
