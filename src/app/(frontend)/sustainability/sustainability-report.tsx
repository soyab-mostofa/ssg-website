'use client'

import AnimateTextInView from '@/app/_components/animated/animateTextInView'
import Button from '@/app/_components/shared/Button'
import SectionChip from '@/app/_components/shared/SectionChip'
import { Separator } from '@/components/ui/separator'
import { motion } from 'motion/react'
import { ChevronDown, Download } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function SustainabilityReport() {
  const [year, setYear] = useState('2023')

  return (
    <div className="container py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-10"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start justify-between">
            <SectionChip>Report</SectionChip>
            <AnimateTextInView
              className="w-full pt-8 text-2xl font-bold md:text-5xl"
              text="Sustainability Reports"
              delay={0.2}
            />
          </div>
          <button className="inline-flex items-center gap-2 self-end rounded-full border border-grayscale-black-200 px-4 py-2">
            {year}
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>

        {/* Card */}
        <div className="relative overflow-hidden rounded-2xl bg-[#0B1829] bg-[url('/bg-pattern-full.svg')] p-6 md:p-14">
          <div className="relative flex flex-col gap-6">
            <div className="flex flex-col-reverse justify-between gap-6 sm:flex-row sm:gap-0">
              <div className="space-y-2">
                <h2 className="text-5xl font-bold text-others-white">2023</h2>
                <h3 className="text-3xl font-bold text-others-white">Sustainability Report</h3>
              </div>

              <div className="border-white/10 relative aspect-[6/8] min-w-32 overflow-hidden rounded border-4">
                <Image
                  src="/sustain-report.png"
                  alt="Sustainability Report Cover"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <Separator className="h-px bg-others-white/30" />

            <div className="flex items-center justify-between">
              <span className="text-base text-grayscale-black-100 md:text-lg">
                Download Document
              </span>
              <Button>
                Download
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
