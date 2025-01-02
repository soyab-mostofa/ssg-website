import React from 'react'
import SectionLayout from '../../../shared/SectionLayout'
import VideoPlayer from './VideoPlayer'

const Showreel = () => {
  return (
    <SectionLayout chip="Showreel">
      <div className="container">
        <VideoPlayer />
      </div>
    </SectionLayout>
  )
}

export default Showreel
