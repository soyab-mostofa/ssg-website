'use client'
import AnimateTextInView from '@/app/_components/animated/animateTextInView'
import SectionLayout from '@/app/_components/shared/SectionLayout'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { MapPin, Factory, Box, LucideIcon } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'motion/react'
import PageHeader from '@/app/_components/pages/about/PageHeader'

interface Factory {
  image: string
  name: string
  location: string
  capacity: string
  productType: string
}

const factories: Factory[] = [
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

const imageVariants = {
  hidden: {
    scale: 1.2,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

const infoVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: index * 0.1,
    },
  }),
}

interface FactoryImageProps {
  src: string
  alt: string
}

const FactoryImage: React.FC<FactoryImageProps> = ({ src, alt }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px', amount: 0.3 }}
      variants={imageVariants}
      className="relative h-full w-full"
    >
      <Image
        fill
        src={src}
        alt={alt}
        className="object-cover object-center"
        priority={false}
        loading="lazy"
        quality={85}
      />
    </motion.div>
  )
}

interface FactoryInfoProps {
  icon: LucideIcon
  label: string
  value: string
  index: number
}

const FactoryInfo: React.FC<FactoryInfoProps> = ({ icon: Icon, label, value, index }) => (
  <motion.div
    className="flex items-center gap-2 sm:gap-3"
    variants={infoVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-50px' }}
    custom={index}
  >
    <div className="rounded-full bg-primary-blue-500 fill-primary-blue-100 p-1.5 sm:p-2">
      <Icon color="white" className="h-5 w-5 sm:h-6 sm:w-6" />
    </div>
    <div>
      <div className="text-sm font-medium sm:text-base">{label}</div>
      <div className="text-xs text-muted-foreground sm:text-sm">{value}</div>
    </div>
  </motion.div>
)

const Page: React.FC = () => {
  return (
    <>
      <PageHeader
        bgImage="/headers/facilities-header.webp"
        heading={['Our', 'Facilities']}
        sub="Shin Shin Group is one of the largest conglomerates in Bangladesh, exporting apparel worldwide. The group comprises five factories."
      />
      <div className="px-4 sm:px-6 md:px-8">
        <SectionLayout
          subLeft="Lorem ipsum dolor sit amet consectetur. Tincidunt id justo ante tortor pellentesque euismod. Condimentum amet sagittis bibendum purus tellus mauris cursus."
          chip="Facilities"
          heading="Our Facilities at a Glance"
          headingWidth="481px"
          className="md:pb-0"
        >
          <div className="container flex flex-col gap-8 last:mb-16 sm:gap-12 md:gap-16">
            {factories.map((factory, index) => (
              <section
                key={index}
                className={cn(
                  'w-full',
                  { 'sm:mt-8': index === 0 },
                  { 'mb-0': index === factories.length - 1 },
                )}
              >
                <div
                  className={cn('flex flex-col gap-6 sm:gap-8', {
                    'sm:flex-row': index % 2 === 0,
                    'sm:flex-row-reverse': index % 2 !== 0,
                  })}
                >
                  {/* Image container */}
                  <motion.div
                    className={cn(
                      'relative h-[200px] w-full overflow-hidden rounded-lg bg-muted sm:h-[300px] md:h-[400px]',
                      'sm:basis-1/2',
                      { 'sm:mr-6 md:mr-8': index % 2 === 0 },
                      { 'sm:ml-6 md:ml-8': index % 2 !== 0 },
                    )}
                  >
                    <FactoryImage src={factory.image} alt={factory.name} />
                  </motion.div>

                  {/* Content container */}
                  <div className="flex flex-col gap-4 sm:basis-1/2 sm:gap-6">
                    <div className="space-y-3 sm:space-y-4">
                      <AnimateTextInView
                        className="text-xl font-bold tracking-tight sm:text-2xl md:text-4xl"
                        text={factory.name}
                      />
                      <AnimateTextInView
                        childClass="text-sm sm:text-base md:pb-0 overflow-visible"
                        className="text-muted-foreground"
                        text="Lorem ipsum dolor sit amet consectetur. Egestas roin dolor in gravida lectus in nisi egestas. Donec lobortis nisl justo enim laoreet nec sed id."
                      />
                    </div>

                    <div className="flex flex-col gap-3 sm:gap-4">
                      <FactoryInfo
                        icon={MapPin}
                        label="Location"
                        value={factory.location}
                        index={0}
                      />
                      <FactoryInfo
                        icon={Factory}
                        label="Capacity"
                        value={factory.capacity}
                        index={1}
                      />
                      <FactoryInfo
                        icon={Box}
                        label="Product Type"
                        value={factory.productType}
                        index={2}
                      />
                    </div>
                  </div>
                </div>
                {index !== factories.length - 1 && (
                  <Separator
                    className={cn('mt-8 h-px w-full bg-grayscale-black-200 sm:mt-12 md:mt-16')}
                  />
                )}
              </section>
            ))}
          </div>
        </SectionLayout>
      </div>
    </>
  )
}

export default Page
