'use client'

import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player/youtube'
import Image from 'next/image'
import PlayIcon from '../../../../../../public/Play.svg'
import { motion } from 'motion/react'

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const videoSrc = 'https://www.youtube.com/watch?v=GXXb3n5B4ls'

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handlePlay = () => {
    if (!hasPlayed) {
      setIsPlaying(true)
      setHasPlayed(true)
    }
  }

  const handleEnded = () => {
    setIsPlaying(false)
  }

  if (!isMounted) {
    return (
      <div className="flex h-[300px] min-w-full flex-col md:h-[641px]">
        <div className="relative mt-auto flex h-[641px] min-w-full items-center justify-center overflow-hidden rounded-2xl">
          <Image
            src="/video-overlay.png"
            alt="Video Overlay"
            fill
            className="object-cover object-bottom"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-[300px] w-full flex-col md:h-[641px]">
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: 641 }}
        viewport={{ amount: 0.1, once: true, margin: '300px' }}
        transition={{ duration: 0.1, type: 'spring', stiffness: 10, damping: 5 }}
        style={{ overflow: 'hidden' }}
        className="relative mt-auto flex items-center justify-center overflow-hidden rounded-2xl"
      >
        <ReactPlayer
          width="100%"
          height="100%"
          className="absolute inset-0 mt-auto"
          url={videoSrc}
          controls
          playing={isPlaying}
          light={false}
          onEnded={handleEnded}
        />
        {!isPlaying && !hasPlayed && (
          <>
            <Image
              src="/video-overlay.png"
              alt="Video Overlay"
              fill
              className="z-10 mt-auto object-cover object-bottom"
              onClick={handlePlay}
            />
            <Image
              src={PlayIcon}
              alt="Play Icon"
              height={110}
              width={110}
              className="relative h-12 w-12 md:h-24 md:w-24 z-20 cursor-pointer"
              onClick={handlePlay}
            />
          </>
        )}
      </motion.div>
    </div>
  )
}

export default VideoPlayer
