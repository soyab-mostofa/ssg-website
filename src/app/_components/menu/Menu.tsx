'use client'
import { AnimatePresence, motion, Variants } from 'motion/react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import React, { useState, useRef, useEffect } from 'react'
import Hamburger from 'hamburger-react'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
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
      duration: 0.8,
      type: 'spring',
      stiffness: 100,
      damping: 20,
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
    <Link href={href} className="group relative overflow-hidden rounded-lg px-2 py-1">
      <span className="relative z-10 text-lg">
        <motion.span
          className={cn(
            'relative inline-block',
            isActive ? 'text-secondary-red-500' : 'text-grayscale-black-400',
          )}
          animate={{
            color: isActive ? '#EF4444' : '#9CA3AF',
          }}
          transition={{
            duration: 0.2,
          }}
        >
          {children}
        </motion.span>
        <motion.span
          className="absolute bottom-0 left-0 h-[2px] w-full bg-secondary-red-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isActive ? 1 : 0 }}
          exit={{ scaleX: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 20,
          }}
          style={{
            originX: 0,
            transformOrigin: 'left',
          }}
        />
      </span>
    </Link>
  )
}

const menuData: MenuData[] = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Sustainability', link: '/sustainability' },
  { title: 'Our facilities', link: '/facility' },
  { title: 'Careers', link: '/career' },
]

const socialIcons = [Facebook, Instagram, Twitter, Linkedin]

export interface MenuData {
  title: string
  link: string
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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <div
      className={cn('container relative inset-0 z-50 flex w-full', {
        'fixed h-screen overflow-hidden bg-others-white': isMenuOpen,
      })}
    >
      <div className="menu-bar flex h-14 w-full items-center justify-between sm:h-24">
        <div className="menu-logo text-grayscale-black-900">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={40} height={40} className="sm:h-10 sm:w-10" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden gap-8 sm:inline-flex">
          {menuData.map((item) => (
            <MenuLink key={item.link} href={item.link} isActive={pathName === item.link}>
              {item.title}
            </MenuLink>
          ))}
        </nav>

        <div className="hidden sm:inline-block">
          <Link
            href="/contact"
            className="flex w-full flex-row items-center justify-center gap-2 rounded-[12px] bg-secondary-red-500 px-4 py-3 text-sm text-others-white md:w-fit"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="z-50 sm:hidden">
          <Hamburger toggled={isMenuOpen} toggle={toggleMenu} size={20} />
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
            className="absolute inset-0 top-14 z-40 flex h-[calc(100vh-3.5rem)] flex-col bg-others-white px-4"
          >
            <div className="flex h-full flex-col justify-between py-8">
              <motion.nav
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col space-y-6"
              >
                {menuData.map((item) => (
                  <motion.div key={item.link} variants={itemVariants} className="overflow-hidden">
                    <Link
                      href={item.link}
                      className={cn(
                        'text-xl font-semibold',
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

              <div className="space-y-8">
                {/* Social Icons */}
                <motion.div
                  variants={socialVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex items-center gap-6"
                >
                  {socialIcons.map((Icon, index) => (
                    <motion.a
                      key={index}
                      href="/"
                      variants={itemVariants}
                      className="text-grayscale-black-400 transition-colors hover:text-grayscale-black-900"
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  variants={contactVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-2 text-sm text-grayscale-black-400"
                >
                  <p>Shin Shin Group</p>
                  <p>info@shinshingroup.com</p>
                </motion.div>

                <Link href="/contact">
                  <Button className="mt-4 w-full py-3 text-sm">Contact Us</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
