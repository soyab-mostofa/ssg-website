import ChairmansThoughts from '../_components/pages/home/chairman'
import Hero from '../_components/pages/home/hero/Hero'
import Showreel from '../_components/pages/home/showreel/Showreel'

const Page = () => {
  return (
    <div className="flex flex-col h-[400vh]">
      <Hero />
      <Showreel />
      <ChairmansThoughts />
    </div>
  )
}
export default Page
