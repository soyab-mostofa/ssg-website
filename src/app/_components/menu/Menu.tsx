'use client'
import { AnimatePresence, motion, Variants } from 'motion/react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import React, { useState, useEffect } from 'react'
import Hamburger from 'hamburger-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export interface MenuData {
  title: string
  link: string
}

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
      stiffness: 300,
      damping: 20,
      mass: 1,
    },
  },
}

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
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

interface MenuLinkProps {
  href: string
  children: React.ReactNode
  isActive: boolean
  onClick?: () => void
}

export const MenuLink = ({ href, children, isActive, onClick }: MenuLinkProps) => {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-lg px-2 py-1"
      onClick={onClick}
    >
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

const modalVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: 'afterChildren',
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
      when: 'afterChildren',
    },
  },
}

const backdropVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      delay: 0.9,
    },
  },
}

const navLinksVariants: Variants = {
  hidden: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
}

const linkItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
  },
}

const menuData: MenuData[] = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Sustainability', link: '/sustainability' },
  { title: 'Our facilities', link: '/facility' },
  { title: 'Careers', link: '/career' },
]

export default function Menu() {
  const pathName = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathName])

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
            <Image
              src="/logo.png"
              alt="logo"
              width={40}
              height={40}
              className="size-8 md:size-14"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden gap-8 sm:inline-flex">
          {menuData.map((item) => (
            <MenuLink
              key={item.link}
              href={item.link}
              isActive={pathName === item.link}
              onClick={handleLinkClick}
            >
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
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Background Layer */}
            <motion.div className="bg-gray-900 absolute inset-0" variants={backdropVariants} />

            {/* Content Layer */}
            <motion.div className="relative w-full" variants={navLinksVariants}>
              <div className="flex h-full flex-col items-center justify-center gap-8">
                {menuData.map((link, index) => (
                  <Link href={link.link} key={index} onClick={handleLinkClick}>
                    <motion.span
                      className={cn(
                        'hover:text-gray-300 cursor-pointer text-2xl font-light transition-colors',
                        pathName === link.link
                          ? 'text-secondary-red-500'
                          : 'text-grayscale-black-800',
                      )}
                      variants={linkItemVariants}
                    >
                      {link.title}
                    </motion.span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
