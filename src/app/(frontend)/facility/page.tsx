import AboutHeader from '@/app/_components/pages/about/AboutHeader'
import SectionLayout from '@/app/_components/shared/SectionLayout'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { MapPin, Factory, Box } from 'lucide-react'
import Image from 'next/image'

const factories = [
  {
    image: '/shin-shin-apperal.png',
    name: 'Shin Shin Apparels Ltd.',
    location: 'Gazipur, Dhaka, Bangladesh',
    capacity: '1.2 M Units/Month',
    productType: 'In-house Laundry',
  },
  {
    image: '/jeans-plus.png',
    name: 'Jeans Plus Ltd.',
    location: 'Gazipur, Dhaka, Bangladesh',
    capacity: '1.2 M Units/Month',
    productType: 'In-house Laundry',
  },
  {
    image: '/organic-jeans.png',
    name: 'Organic Jeans Ltd.',
    location: 'Gazipur, Dhaka, Bangladesh',
    capacity: '1.2 M Units/Month',
    productType: 'In-house Laundry',
  },
  {
    image: '/vancot.png',
    name: 'Vancot Ltd.',
    location: 'Gazipur, Dhaka, Bangladesh',
    capacity: '1.2 M Units/Month',
    productType: 'In-house Laundry',
  },
]

const page = () => {
  return (
    <>
      <AboutHeader
        heading={['Our', 'Facilities']}
        sub="Shin Shin Group is one of the largest conglomerates in Bangladesh, exporting apparel worldwide. The group comprises five factories."
      />
      <SectionLayout
        subLeft="Lorem ipsum dolor sit amet consectetur. Tincidunt id justo ante tortor pellentesque euismod. Condimentum amet sagittis bibendum purus tellus mauris cursus."
        chip="Facilities"
        heading="Our Facilities at a Glance"
        headingWidth="481px"
        className="md:pb-0"
      >
        <div className="flex flex-col gap-4">
          {factories.map((factory, index) => {
            return (
              <section
                key={index}
                className={cn(
                  'container mb-8 md:mb-24',
                  { 'sm:mt-14': index == 0 },
                  { 'mb-0': index === factories.length - 1 },
                )}
              >
                <div
                  className={cn('flex flex-col items-center sm:flex-row', {
                    'sm:flex-row-reverse': index % 2 != 0,
                  })}
                >
                  {/* Image container */}
                  <div
                    className={cn(
                      'relative h-[400px] w-full overflow-hidden rounded-lg bg-muted md:basis-1/2',
                      { 'sm:mr-8': index % 2 === 0 },
                      { 'sm:ml-8': index % 2 !== 0 },
                    )}
                  >
                    <Image
                      fill
                      src={factory.image}
                      alt={factory.name}
                      className="inset-0 object-cover object-center"
                    />
                  </div>

                  {/* Content container */}
                  <div className="space-y-6 md:basis-1/2">
                    <div className="space-y-4">
                      <h1 className="mt-4 text-2xl font-bold tracking-tight sm:mt-0 md:text-4xl">
                        {factory.name}
                      </h1>
                      <p className="text-base text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur. Egestas proin dolor in gravida
                        lectus in nisi egestas. Donec lobortis nisl justo enim laoreet nec sed id.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-primary-blue-500 fill-primary-blue-100 p-2">
                          <MapPin color="white" className="z-10 h-6 w-6" />
                        </div>
                        <div>
                          <div className="text-lg font-medium">Location</div>
                          <div className="text-base text-muted-foreground">{factory.location}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-primary-blue-500 fill-primary-blue-100 p-2">
                          <Factory color="white" className="z-10 h-6 w-6" />
                        </div>
                        <div>
                          <div className="font-medium">Capacity</div>
                          <div className="text-muted-foreground">{factory.capacity}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-primary-blue-500 fill-primary-blue-100 p-2">
                          <Box color="white" className="z-10 h-6 w-6" />
                        </div>
                        <div>
                          <div className="font-medium">Product Type</div>
                          <div className="text-muted-foreground">{factory.productType}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Separator
                  className={cn(
                    'mt-8 hidden h-px w-full bg-grayscale-black-200 md:mt-24 md:inline-block',
                    {
                      hidden: index % 2 != 0,
                      'md:hidden': index % 2 !== 0,
                    },
                  )}
                />
              </section>
            )
          })}
        </div>
      </SectionLayout>
    </>
  )
}

export default page
