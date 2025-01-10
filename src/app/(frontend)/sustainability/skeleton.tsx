'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { Separator } from '@/components/ui/separator'

export default function SustainabilityReportSkeleton() {
  return (
    <div className="container py-16 md:py-24">
      <div className="space-y-10">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start justify-between">
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="mt-8 h-12 w-64 md:w-96" />
          </div>
          <Skeleton className="h-10 w-32 rounded-full" />
        </div>

        {/* Card */}
        <div className="relative overflow-hidden rounded-2xl bg-[#0B1829] p-6 md:p-14">
          <div className="relative flex flex-col gap-6">
            <div className="flex flex-col-reverse justify-between gap-6 sm:flex-row sm:gap-0">
              <div className="space-y-2">
                <Skeleton className="bg-white/20 h-12 w-32" />
                <Skeleton className="bg-white/20 h-10 w-64" />
              </div>
              <Skeleton className="bg-white/20 aspect-[6/8] min-w-32 rounded" />
            </div>

            <Separator className="h-px bg-others-white/30" />

            <div className="flex items-center justify-between">
              <Skeleton className="bg-white/20 h-6 w-40" />
              <Skeleton className="bg-white/20 h-10 w-32 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
