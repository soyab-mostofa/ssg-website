'use client'
import { AnimatePresence, motion, Variants } from 'motion/react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import React, { useState, useRef, useEffect } from 'react'
import Hamburger from 'hamburger-react'
import { Facebook, Instagram, Linkedin, TabletSmartphoneIcon, Twitter } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Button from '@/app/_components/shared/Button'
export interface MenuData {
  title: string
  link: string
}

// variants.ts

export const overlayVariants: Variants = {
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
}

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

export const itemVariants: Variants = {
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

export const socialVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1.4,
      staggerChildren: 0.1,
    },
  },
}

export const contactVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.8,
      duration: 0.5,
    },
  },
}

// MenuLink.tsx

interface MenuLinkProps {
  href: string
  children: React.ReactNode
  isActive: boolean
}

export const MenuLink = ({ href, children, isActive }: MenuLinkProps) => {
  return (
    <Link href={href} className="group relative">
      <span
        className={cn(
          'text-lg transition-colors duration-200',
          isActive
            ? 'text-grayscale-black-900'
            : 'text-grayscale-black-400 hover:text-grayscale-black-600',
        )}
      >
        {children}
      </span>
      {isActive && (
        <motion.div
          layoutId="activeMenuItem"
          className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary"
          initial={false}
          animate={{ opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 380,
            damping: 30,
          }}
        />
      )}
      <motion.div
        className="absolute -bottom-1 left-0 h-0.5 w-full bg-grayscale-black-300"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isActive ? 0 : 0 }}
        whileHover={{ scaleX: isActive ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
    </Link>
  )
}

// Menu.tsx

const menuData: MenuData[] = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Sustainability', link: '/sustainability' },
  { title: 'Contact', link: '/contact' },
  { title: 'Our facilities', link: '/facility' },
  { title: 'Careers', link: '/career' },
]

const socialIcons = [Facebook, Instagram, Twitter, Linkedin]

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
    <div
      className={cn('container relative inset-0 z-50 flex w-full', {
        'fixed h-screen overflow-hidden bg-others-white': isMenuOpen,
      })}
    >
      <div className="menu-bar flex h-16 w-full items-center justify-between md:h-24">
        <div className="menu-logo text-grayscale-black-900">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={40} height={30} />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden gap-10 sm:inline-flex">
          {menuData.map((item) => (
            <MenuLink key={item.link} href={item.link} isActive={pathName === item.link}>
              {item.title}
            </MenuLink>
          ))}
        </nav>

        <div className="hidden sm:inline-block">
          <Button>Contact Us</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="z-50 sm:hidden">
          <Hamburger toggled={isMenuOpen} toggle={toggleMenu} />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={containerRef}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute inset-0 top-16 z-40 flex h-screen flex-col justify-between bg-others-white"
          >
            <div className="menu-copy container flex h-full justify-between space-x-4 text-5xl">
              <motion.nav
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="mx-auto flex max-w-xl flex-col items-start justify-center"
              >
                {menuData.map((item) => (
                  <motion.div
                    key={item.link}
                    variants={itemVariants}
                    className="menu-link-item overflow-hidden"
                  >
                    <Link
                      href={item.link}
                      className={cn(
                        'menu-link text-2xl font-bold sm:text-5xl',
                        pathName === item.link
                          ? 'text-grayscale-black-900'
                          : 'text-grayscale-black-400',
                      )}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              <div>
                {/* Social Icons */}
                <motion.div
                  variants={socialVariants}
                  initial="hidden"
                  animate="visible"
                  className="menu-info-col flex items-center gap-4 py-4"
                >
                  {socialIcons.map((Icon, index) => (
                    <motion.a
                      key={index}
                      href="/"
                      variants={itemVariants}
                      className="text-grayscale-black-400 transition-colors hover:text-grayscale-black-900"
                    >
                      <Icon />
                    </motion.a>
                  ))}
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  variants={contactVariants}
                  initial="hidden"
                  animate="visible"
                  className="menu-info-col text-sm text-grayscale-black-400"
                >
                  <p>Shin Shin Group</p>
                  <p>info@shinshingroup.com</p>
                </motion.div>
              </div>
            </div>

            {/* Virtual Showroom Button */}
            <div className="menu-preview px-4 pb-8">
              <Button icon={<TabletSmartphoneIcon />} className="mt-8 w-full">
                Explore our Virtual Showroom
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
