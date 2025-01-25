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
      x: '-100%',
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <>
      <div className="fixed right-4 z-50 sm:hidden">
        <Hamburger toggled={isMenuOpen} toggle={toggleMenu} size={24} color="#000" />
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="bg-white fixed inset-0 z-40"
          >
            <motion.ul className="flex h-full flex-col items-center justify-center space-y-6 bg-others-white p-8">
              {menuData.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={link.link} onClick={handleLinkClick} className="inline-block">
                    <span
                      className={cn(
                        'text-3xl font-light transition-colors duration-300',
                        pathName === link.link
                          ? 'text-secondary-red-500'
                          : 'hover:text-gray-500 text-grayscale-black-800',
                      )}
                    >
                      {link.title}
                    </span>
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 6 * 0.1 }}
              >
                <Link href={'/contact'} onClick={handleLinkClick} className="block">
                  <span
                    className={cn(
                      'text-3xl font-light transition-colors duration-300',
                      pathName === 'contact'
                        ? 'text-secondary-red-500'
                        : 'hover:text-gray-500 text-grayscale-black-800',
                    )}
                  >
                    Contact Us
                  </span>
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileMenu
