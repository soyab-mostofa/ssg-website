import React from 'react'
import { ArrowRight } from 'lucide-react'
import HeroTitle from './HeroTitle'
import Button from '@/app/_components/shared/Button'

const Hero = () => {
  return (
    <div className="relative  md:pt-0 w-full bg-[url('/hero-bg-mobile.png')] md:bg-[url('/hero-background.png')]  bg-cover bg-center bg-no-repeat">
      <div className="relative bg-cover  ">
        <div className="container z-10">
          <div className="pt-32 md:pt-[200px] pb-32 md:pb-60">
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
