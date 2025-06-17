import React from 'react'
import SectionLayout from '../../../shared/SectionLayout'
import VideoPlayer from './VideoPlayer'

const Showreel = () => {
  return (
    <SectionLayout
      heading="A Legacy of Impact and Innovation"
      subLeft="
Since 2007, Shin Shin Group has been a key player in Bangladesh’s apparel industry. With four advanced factories focusing on sustainability, delivering high-quality garments while promoting ethical labor practices, environmental stewardship, and social responsibility."
      chip="Showreel"
    >
      <div className="container">
        <VideoPlayer />
      </div>
    </SectionLayout>
  )
}

export default Showreel
