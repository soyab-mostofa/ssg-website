'use client'
import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { Squash as Hamburger } from 'hamburger-react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { menuData } from './Menu'

const MobileMenu = () => {
  const pathName = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Manage body overflow more safely
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  const menuVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  }
  return (
    <>
      <div className="flex items-center sm:hidden">
        <Hamburger toggled={isMenuOpen} toggle={toggleMenu} size={24} color="#000" />
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="bg-white fixed inset-0 z-[60] backdrop-blur-md"
          >
            {/* Close button area */}
            <div className="absolute right-4 top-4 z-10">
              <Hamburger toggled={isMenuOpen} toggle={toggleMenu} size={24} color="#000" />
            </div>

            {/* Menu content - Properly centered accounting for mobile viewport */}
            <div className="flex min-h-screen items-center justify-center bg-primary-blue-500/70 px-8 backdrop-blur-lg">
              <motion.ul className="flex flex-col items-center space-y-6 text-center">
                {menuData.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                  >
                    <Link href={link.link} onClick={handleLinkClick} className="block">
                      <span
                        className={cn(
                          'text-3xl font-light text-others-white transition-all duration-300 hover:scale-105 sm:text-4xl',
                          pathName === link.link
                            ? 'text-secondary-red-500'
                            : 'text-grayscale-black-100 hover:text-secondary-red-500',
                        )}
                      >
                        {link.title}
                      </span>
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: menuData.length * 0.15 + 0.3 }}
                  className="mt-6"
                >
                  <Link href={'/contact'} onClick={handleLinkClick} className="block">
                    <span
                      className={cn(
                        'inline-flex items-center gap-2 rounded-[12px] bg-secondary-red-500 px-8 py-4 text-lg font-medium text-others-white transition-all duration-300 hover:scale-105 hover:bg-secondary-red-600',
                      )}
                    >
                      Contact Us
                    </span>
                  </Link>
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileMenu
