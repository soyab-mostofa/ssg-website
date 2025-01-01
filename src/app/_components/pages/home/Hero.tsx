import React from 'react'
import HeroTitle from './HeroTitle'
import Button from '../../shared/Button'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <div className="relative mt-16 w-full bg-[url('/hero-bg-mobile.png')] md:bg-[url('/hero-background.png')] h-[600px] md:h-[800px] bg-cover bg-center bg-no-repeat">
      <div className="relative bg-cover  ">
        <div className="container z-10">
          <div className="pt-10 md:pt-[200px]">
            <HeroTitle />
            <Button icon={<ArrowRight />} className="mt-8">
              Explore More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
