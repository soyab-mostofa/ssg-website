'use client'

import AnimateTextInView from '@/app/_components/animated/animateTextInView'
import Button from '@/app/_components/shared/Button'
import SectionChip from '@/app/_components/shared/SectionChip'
import { Separator } from '@/components/ui/separator'
import { motion } from 'motion/react'
import { Download } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Media, SustainabilityReport as SustainabilityReportType } from '@/payload-types'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Link from 'next/link'
import SustainabilityReportSkeleton from './skeleton'
import axios from 'axios'

const fetchReports = async () => {
  const { data } = await axios.get('/api/latest-reports')
  return data as SustainabilityReportType[]
}

export default function SustainabilityReport() {
  const [reports, setReports] = useState<SustainabilityReportType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchReports()
      setReports(data)
    }
    fetchData()
  }, [])

  const [isLoading, setIsLoading] = useState(true)
  const availability = reports.map((report) => report.year)
  const [year, setYear] = useState(2023)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <SustainabilityReportSkeleton />
  }

  const file = reports.find((report) => Number(report.year) === year)?.reportFile as Media
  if (file.url === null || file.url === '' || file.url === undefined) {
    return <SustainabilityReportSkeleton />
  }

  return (
    isLoading || (
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
            <Select>
              <SelectTrigger className="w-[164px] self-end">
                <SelectValue defaultValue={year} placeholder={year} />
              </SelectTrigger>
              <SelectContent>
                {availability.map((year) => (
                  <SelectItem
                    className="inline-flex items-center gap-2 self-end rounded-full border border-grayscale-black-200 px-4 py-2"
                    key={year}
                    value={year}
                  >
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Card */}
          <div className="relative overflow-hidden rounded-2xl bg-[#0B1829] bg-[url('/bg-pattern-full.svg')] p-10 md:p-14">
            <div className="relative flex flex-col gap-6">
              <div className="flex flex-col-reverse justify-between gap-6 sm:flex-row sm:gap-0">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-others-white sm:text-5xl">2023</h2>
                  <h3 className="text-2xl font-bold text-others-white sm:text-3xl">
                    Sustainability Report
                  </h3>
                </div>

                <div className="border-white/10 relative mx-auto aspect-[140/175] h-80 max-w-[240px] overflow-hidden rounded border-4 sm:mx-0 sm:ms-auto sm:h-[175px]">
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
                <span className="hidden text-base text-grayscale-black-100 md:inline-block md:text-lg">
                  Download Document
                </span>
                <Button className="w-full px-4 py-3 md:max-w-[140px]">
                  <Link className="inline-flex gap-8" href={file.url} download>
                    Download
                    <Download className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    )
  )
}
