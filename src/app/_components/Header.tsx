import Image from 'next/image'
import { MobileMenu } from '@/app/_components/MobileMenu'

const Header = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full">
      <div className="container flex h-16 items-center justify-between  ">
        <Image
          width={60}
          height={60}
          className="object-cover object-center w-8"
          src="/logo.png"
          alt="Logo"
        />
        <MobileMenu />
      </div>
    </div>
  )
}
export default Header
