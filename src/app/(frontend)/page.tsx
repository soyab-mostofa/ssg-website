import ChairmansThoughts from '../_components/pages/home/chairman'
import Hero from '../_components/pages/home/hero/Hero'
import Showreel from '../_components/pages/home/showreel/Showreel'
import SustainabilitySection from '../_components/pages/home/sustainability'

const Page = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Showreel />
      <ChairmansThoughts />
      <SustainabilitySection />
    </div>
  )
}
export default Page
