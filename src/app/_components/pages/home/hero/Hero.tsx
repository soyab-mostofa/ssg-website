import React from 'react'
import { ArrowRight } from 'lucide-react'
import HeroTitle from './HeroTitle'
import Button from '@/app/_components/shared/Button'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="relative w-full bg-[url('/hero-bg-mobile.png')] bg-cover bg-[right_0_center] bg-no-repeat md:bg-[url('/hero-bg.webp')] md:bg-[right_0_center] md:pt-0">
      <div className="relative bg-cover">
        <div className="container z-10">
          <div className="pb-32 pt-32 md:pb-60 md:pt-[200px]">
            <HeroTitle />
            <Link href="/about" className="mt-8 inline-block">
              <Button icon={<ArrowRight />} className="mt-8">
                Explore More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
