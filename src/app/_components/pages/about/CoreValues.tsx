/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from '@/components/ui/card'
import { Sprout, Lightbulb, Shield, Users, Award, HandshakeIcon } from 'lucide-react'
import React, { memo } from 'react'

const ValueCard = memo(
  ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
    <Card className="p-6">
      <div className="w-fit rounded-sm bg-secondary-red-600 p-3 text-primary-foreground">
        <Icon fill="#d7191f" size={24} />
      </div>
      <p className="pb-2 pt-3 text-xl font-semibold sm:text-2xl">{title}</p>
      <p className="text-base text-muted-foreground">{description}</p>
    </Card>
  ),
)

ValueCard.displayName = 'ValueCard'

const CoreValues = () => {
  const values = [
    {
      title: 'Sustainability',
      description: 'Committed to eco-friendly practices for a greener future.',
      icon: Sprout,
    },
    {
      title: 'Innovation',
      description: 'Driving progress through cutting-edge solutions.',
      icon: Lightbulb,
    },
    {
      title: 'Integrity',
      description: 'Upholding transparency and ethical practices in all endeavors.',
      icon: Shield,
    },
    {
      title: 'Inclusivity',
      description: 'Fostering diversity and empowering marginalized communities.',
      icon: Users,
    },
    {
      title: 'Quality',
      description: 'Delivering excellence through uncompromising standards.',
      icon: Award,
    },
    {
      title: 'Collaboration',
      description: 'Building strong partnerships to achieve shared success.',
      icon: HandshakeIcon,
    },
  ]

  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((value) => (
          <ValueCard
            key={value.title}
            icon={value.icon}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
    </div>
  )
}

export default memo(CoreValues)
