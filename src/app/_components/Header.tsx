import Image from 'next/image'
import { MobileMenu } from '@/app/_components/MobileMenu'

const Header = () => {
  return (
    <div className="flex items-center justify-between h-16 container px-2">
      <Image
        width={60}
        height={60}
        className="object-cover object-center w-8"
        src="/logo.png"
        alt="Logo"
      />
      <MobileMenu />
    </div>
  )
}
export default Header
