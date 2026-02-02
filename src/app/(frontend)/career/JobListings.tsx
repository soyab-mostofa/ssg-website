'use client'

import { motion } from 'motion/react'
import { Card, CardContent } from '@/components/ui/card'
import SectionChip from '@/app/_components/shared/SectionChip'
import Button from '@/app/_components/shared/Button'

interface PlaceholderJob {
  jobTitle: string
  company: string
  workType: string
  location: string
  description: string
  salary: string
  deadline: string
}

const placeholderJobs: PlaceholderJob[] = [
  {
    jobTitle: 'Industrial Engineer',
    company: 'Shin Shin Apparels Ltd.',
    workType: 'Full-time',
    location: 'Dhaka, Bangladesh',
    description:
      'Lead production line optimization, implement lean manufacturing techniques, and improve operational efficiency in our state-of-the-art garment manufacturing facility. Requires experience in IE tools and garment production processes.',
    salary: 'BDT 50,000 - 80,000',
    deadline: 'March 15, 2026',
  },
  {
    jobTitle: 'Quality Assurance Manager',
    company: 'Shin Shin Washing Plant Ltd.',
    workType: 'Full-time',
    location: 'Gazipur, Bangladesh',
    description:
      'Oversee quality control processes for washing and finishing operations. Ensure compliance with international standards (WRAP, BSCI, etc.) and buyer specifications. Lead quality team and implement continuous improvement initiatives.',
    salary: 'BDT 60,000 - 90,000',
    deadline: 'March 20, 2026',
  },
  {
    jobTitle: 'Merchandiser',
    company: 'Shin Shin Group',
    workType: 'Full-time',
    location: 'Dhaka, Bangladesh',
    description:
      'Coordinate with international buyers and internal production teams to ensure timely delivery of orders. Handle order processing, shipment planning, and communication with buyers. Experience with EU/US markets preferred.',
    salary: 'BDT 40,000 - 70,000',
    deadline: 'March 25, 2026',
  },
]

const createMailtoLink = (jobTitle: string): string => {
  const subject = encodeURIComponent(`Application for ${jobTitle}`)
  const body = encodeURIComponent(
    `Dear Hiring Team,\n\nI am writing to express my interest in the ${jobTitle} position at Shin Shin Group.\n\nPlease find my CV attached.\n\nBest regards,`,
  )
  return `mailto:e-requitment@shinshingroup.com?subject=${subject}&body=${body}`
}

export default function JobListings() {
  return (
    <section className="w-full bg-grayscale-black-100 py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="space-y-6">
          <SectionChip>JOB OPENINGS</SectionChip>
          <motion.p
            className="text-lg font-bold tracking-tight text-grayscale-black-500 md:text-xl lg:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, repeatCount: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We are always looking for talented individuals to join our team. If you are passionate
            about sustainability and are looking for a challenging and rewarding career, we
            encourage you to apply.
          </motion.p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {placeholderJobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="space-y-4 p-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">{job.jobTitle}</h3>
                      <p className="text-sm font-medium text-primary-blue-500">{job.company}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 text-lg text-grayscale-black-400">
                      <span>{job.workType}</span>
                      <span>|</span>
                      <span>{job.location}</span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-[#1D1F2C]">Description</h4>
                      <p className="text-sm text-[#4A4C56]">{job.description}</p>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <div>
                        <span className="text-sm font-bold">{job.salary}</span>
                        <span className="text-gray-600 text-xs">/month</span>
                      </div>
                      <span className="text-sm text-[#1D1F2C]">Deadline: {job.deadline}</span>
                    </div>
                    <div className="grid gap-3">
                      <Button
                        className="w-full"
                        onClick={() => (window.location.href = createMailtoLink(job.jobTitle))}
                      >
                        Apply
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
