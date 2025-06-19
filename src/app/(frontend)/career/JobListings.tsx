'use client'

import { motion } from 'motion/react'
// import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import SectionChip from '@/app/_components/shared/SectionChip'
import Button from '@/app/_components/shared/Button'
import { JobListing } from '@/payload-types'

// Helper function to safely parse dates and handle malformed date strings
const parseDate = (dateString: string): Date => {
  // Remove any leading '+' signs and normalize the date string
  const cleanDateString = dateString.replace(/^\+/, '')
  
  try {
    const parsedDate = new Date(cleanDateString)
    
    // Check if the date is valid and not in the far future (year > 9999)
    if (isNaN(parsedDate.getTime()) || parsedDate.getFullYear() > 9999) {
      // If invalid or far future date, return current date + 30 days as fallback
      const fallbackDate = new Date()
      fallbackDate.setDate(fallbackDate.getDate() + 30)
      return fallbackDate
    }
      return parsedDate
  } catch (_error) {
    // If parsing fails, return current date + 30 days as fallback
    const fallbackDate = new Date()
    fallbackDate.setDate(fallbackDate.getDate() + 30)
    return fallbackDate
  }
}

export default function JobListings({ jobs }: { jobs: JobListing[] }) {
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
            {jobs.map((job, index) => (
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
                      <p className="text-sm font-medium text-primary-blue-500">
                        {job.company.name}
                      </p>
                    </div>                    <div className="flex flex-wrap gap-2 text-lg text-grayscale-black-400">
                      <span>{job.workType}</span>
                      <span>|</span>
                      <span>Posted: {parseDate(job.updatedAt).toDateString()}</span>
                      <span>|</span>
                      <span>{job.location}</span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-[#1D1F2C]">Description</h4>
                      <p className="text-sm text-[#4A4C56]">{job.description}</p>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <div>
                        <span className="text-lg font-bold">{job.salary.amount}</span>
                        <span className="text-gray-600 text-sm">/{job.salary.period}</span>
                      </div>                      <span className="text-sm text-[#1D1F2C]">
                        Deadline: {parseDate(job.applicationDeadline).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="grid gap-3 md:grid-cols-2">
                      <Button className="bg-primary-blue-100 text-primary-blue-500 md:w-full">
                        Details
                      </Button>
                      <Button className="md:w-full">Apply Now</Button>
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
