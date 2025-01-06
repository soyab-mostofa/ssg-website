import { MapPin, Factory, Box } from 'lucide-react'

export default function CompanyProfile() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid gap-8 sm:grid-cols-2 sm:items-start sm:gap-12">
        {/* Image container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted">
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
            placeholder
          </div>
        </div>

        {/* Content container */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight">Shin Shin Apparels Ltd.</h1>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur. Egestas proin dolor in gravida lectus in nisi
              egestas. Donec lobortis nisl justo enim laoreet nec sed id.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-primary" />
              <div>
                <div className="font-medium">Location</div>
                <div className="text-muted-foreground">Gazipur, Dhaka, Bangladesh</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Factory className="mt-1 h-5 w-5 text-primary" />
              <div>
                <div className="font-medium">Capacity</div>
                <div className="text-muted-foreground">1.2 M Units/Month</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Box className="mt-1 h-5 w-5 text-primary" />
              <div>
                <div className="font-medium">Product Type</div>
                <div className="text-muted-foreground">In-house Laundry</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
