'use client'
import Hamburger from 'hamburger-react'
import { Facebook, Instagram, Linkedin, TabletSmartphoneIcon, Twitter } from 'lucide-react'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import Button from '../shared/Button'
import { AnimatePresence, motion, Variants } from 'motion/react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const data = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Sustainability', link: '/sustainability' },
  { title: 'Contact', link: '/contact' },
  { title: 'Our facilities', link: '/facility' },
  { title: 'Careers', link: '/career' },
]

const overlayVariants = {
  hidden: {
    clipPath: 'polygon(0 0, 100% 0%, 100% 0, 0 0)',
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 15,
      mass: 1.5,
    },
  },
  visible: {
    clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 15,
      mass: 1.5,
    },
  },
} as Variants

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: {
    y: 100,
    opacity: 0,
    clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
  },
  visible: {
    y: 0,
    opacity: 1,
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 15,
    },
  },
}

const socialVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1.4,
      staggerChildren: 0.1,
    },
  },
}

const contactVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.8,
      duration: 0.5,
    },
  },
}

export default function Menu() {
  const pathName = usePathname()
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathName])

  return (
    <div className="menu-container container relative inset-0 flex w-full">
      <div className="menu-bar flex h-16 w-full items-center justify-between">
        <div className="menu-logo text-grayscale-black-900">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={40} height={30} />
          </Link>
        </div>
        <div className="menu-open z-50">
          <Hamburger toggled={isMenuOpen} toggle={toggleMenu} />
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={containerRef}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="menu-overlay fixed inset-0 top-16 z-40 flex flex-col justify-between bg-others-white"
          >
            <div className="menu-copy container flex justify-between space-x-4 text-5xl">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="menu-links"
              >
                {data.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="menu-link-item overflow-hidden py-2"
                  >
                    <Link href={item.link} className="menu-link">
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              <div className="menu-info self-end">
                <motion.div
                  variants={socialVariants}
                  initial="hidden"
                  animate="visible"
                  className="menu-info-col flex items-center gap-4 divide-x py-4"
                >
                  {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                    <motion.a key={index} href="/" variants={itemVariants}>
                      <Icon />
                    </motion.a>
                  ))}
                </motion.div>
                <motion.div
                  variants={contactVariants}
                  initial="hidden"
                  animate="visible"
                  className="menu-info-col text-xl"
                >
                  <p>Shin Shin Group</p>
                  <p>info@shinshingroup.com</p>
                </motion.div>
              </div>
            </div>
            <div className="menu-preview">
              <Button icon={<TabletSmartphoneIcon />} className="mt-8">
                Explore our Virtual Showroom
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
