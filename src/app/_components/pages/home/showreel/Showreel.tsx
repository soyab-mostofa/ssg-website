import React from 'react'
import SectionLayout from '../../../shared/SectionLayout'
import VideoPlayer from './VideoPlayer'

const Showreel = () => {
  return (
    <SectionLayout
      heading="A Legacy of Impact and Innovation"
      subLeft="Since 2007, Shin Shin Group has been leading the way in responsible garment manufacturing. With five advanced factories, we champion environmental stewardship, inclusivity, and circular production to deliver unmatched quality for global brands."
      chip="Showreel"
    >
      <div className="container">
        <VideoPlayer />
      </div>
    </SectionLayout>
  )
}

export default Showreel
