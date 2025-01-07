'use client'

import { motion } from 'motion/react'
import { Card, CardContent } from '@/components/ui/card'
import AnimateTextInView from '@/app/_components/animated/animateTextInView'
import SectionChip from '@/app/_components/shared/SectionChip'
import Button from '@/app/_components/shared/Button'

export default function ContactInfo() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-24">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Contact Information */}
          <div className="space-y-6">
            <SectionChip>CONTACT INFO</SectionChip>
            <div className="space-y-4">
              <AnimateTextInView
                text="Have Questions?"
                className="text-3xl font-bold md:text-5xl"
                delay={0.2}
              />
              <AnimateTextInView
                text="We're Here to Help"
                className="text-3xl font-bold md:text-5xl"
                delay={0.3}
              />
            </div>
            <motion.div
              className="space-y-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-4">
                <svg className="h-6 w-6 text-primary-blue-500" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                  />
                </svg>
                <a href="mailto:info@example.com" className="text-base hover:text-primary-blue-500">
                  info@example.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <svg className="h-6 w-6 text-primary-blue-500" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7z"
                  />
                </svg>
                <a href="tel:+8801777-762307" className="text-base hover:text-primary-blue-500">
                  +8801777-762307
                </a>
              </div>
              <div className="flex items-center gap-4">
                <svg className="h-6 w-6 text-primary-blue-500" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                  />
                </svg>
                <p className="text-base">
                  House # 93, Road # 13, Sector # 10, Uttara Model Town,
                  <br />
                  Dhaka-1230, Bangladesh.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="h-full border-none shadow-none">
              <CardContent className="p-6">
                <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full border-0 border-b py-3 focus-visible:ring-0"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full border-0 border-b py-3 focus-visible:ring-0"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full border-0 border-b py-3 focus-visible:ring-0"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Write your message here"
                      rows={4}
                      className="w-full border-0 border-b py-3 focus-visible:ring-0"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="terms" className="h-4 w-4" />
                    <label htmlFor="terms" className="text-sm">
                      I agree to the{' '}
                      <a href="#" className="text-secondary-red-500">
                        Terms & Conditions
                      </a>{' '}
                      and{' '}
                      <a href="#" className="text-secondary-red-500">
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                  <Button className="w-full md:w-full">Submit</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
