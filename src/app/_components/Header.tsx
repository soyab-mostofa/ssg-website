import Image from 'next/image'
import { MobileMenu } from '@/app/_components/MobileMenu'

const Header = () => {
  return (
    <div className="fixed left-0 top-0 z-50 w-full bg-others-white/20 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Image
          width={60}
          height={60}
          className="w-8 object-cover object-center md:w-14"
          src="/logo.png"
          alt="Logo"
          suppressHydrationWarning
        />
        <MobileMenu />
      </div>
    </div>
  )
}
export default Header
