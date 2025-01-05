import { Card } from '@/components/ui/card'
import React from 'react'

const CoreValues = () => {
  const values = [
    {
      title: 'Sustainability',
      description: 'Committed to eco-friendly practices for a greener future.',
      icon: '🌱', // Replace with an actual icon if needed
    },
    {
      title: 'Innovation',
      description: 'Driving progress through cutting-edge solutions.',
      icon: '💡', // Replace with an actual icon if needed
    },
    {
      title: 'Integrity',
      description: 'Upholding transparency and ethical practices in all endeavors.',
      icon: '🛡️', // Replace with an actual icon if needed
    },
    {
      title: 'Inclusivity',
      description: 'Fostering diversity and empowering marginalized communities.',
      icon: '🤝', // Replace with an actual icon if needed
    },
    {
      title: 'Quality',
      description: 'Delivering excellence through uncompromising standards.',
      icon: '⭐', // Replace with an actual icon if needed
    },
    {
      title: 'Collaboration',
      description: 'Building strong partnerships to achieve shared success.',
      icon: '🤝', // Replace with an actual icon if needed
    },
  ]

  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((value, index) => (
          <Card
            key={index}
            className="text-black flex flex-col items-start rounded-lg bg-others-white p-6 shadow-md"
          >
            <div className="mb-4 text-3xl">{value.icon}</div>
            <h3 className="mb-2 text-2xl font-semibold">{value.title}</h3>
            <p className="text-base">{value.description}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default CoreValues
