'use client'

import { motion } from 'motion/react'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import SectionChip from '@/app/_components/shared/SectionChip'
import AnimateTextInView from '@/app/_components/animated/animateTextInView'
import Button from '@/app/_components/shared/Button'

export default function ApplicationForm() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [file, setFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
  }

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[.7fr_1fr] lg:gap-12">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionChip>APPLY NOW</SectionChip>
            <AnimateTextInView
              text="Start your journey with us"
              className="max-w-[364px] text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            />
          </motion.div>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimateTextInView
              text="Join Our Team – Apply Today!"
              className="text-3xl font-medium"
              delay={0.2}
            />
            <form onSubmit={handleSubmit} className="mx-auto max-w-lg space-y-6 md:mx-0 md:me-auto">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    required
                    className="w-full border-0 border-b px-0 focus-visible:ring-0"
                  />
                </div>

                <div className="space-y-2">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    required
                    className="w-full border-0 border-b px-0 focus-visible:ring-0"
                  />
                </div>

                <div className="space-y-2">
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                    className="w-full border-0 border-b px-0 focus-visible:ring-0"
                  />
                </div>

                <div className="space-y-2">
                  <Select required>
                    <SelectTrigger className="w-full rounded-none border-0 border-b focus:ring-0">
                      <SelectValue placeholder="Position Applying For" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fashion-merchandiser">Fashion Merchandiser</SelectItem>
                      <SelectItem value="quality-assurance">Quality Assurance Officer</SelectItem>
                      <SelectItem value="textile-designer">Textile Designer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume" className="block">
                    Upload Resume<span className="text-red-500 text-sm">*</span>
                  </Label>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <Input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      required
                      className="w-full border-0 sm:w-fit"
                      placeholder="Upload resume"
                      onChange={(e) => setFile(e.target.files?.[0] || null)}
                    />
                    <span className="text-sm text-grayscale-black-400">(Max 5mb)</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2 sm:items-center">
                  <Checkbox id="terms" required className="mt-1 sm:mt-0" />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the{' '}
                    <a href="#" className="text-secondary-red-500 hover:underline">
                      Terms & Conditions
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-secondary-red-500 hover:underline">
                      Privacy Policy
                    </a>
                  </Label>
                </div>
              </div>

              <Button className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit →'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
