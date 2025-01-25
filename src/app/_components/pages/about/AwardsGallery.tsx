import React from 'react'
import SectionLayout from '../../shared/SectionLayout'
import AwardsGallery from './ImageGallery'

const OurAwards = () => {
  return (
    <SectionLayout
      chip="awards"
      heading="Awards & Recognition"
      subLeft="Shin Shin Group earned international awards and global certifications, showcasing sustainability, ethics, and inclusivity."
    >
      <AwardsGallery />
    </SectionLayout>
  )
}

export default OurAwards
