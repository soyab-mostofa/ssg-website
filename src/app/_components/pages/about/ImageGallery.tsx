/* eslint-disable @next/next/no-img-element */
import React from 'react'

const AwardsGallery = () => {
  const galleryItems = [
    {
      image: 'founding-story-1.png',
      title: 'Image Title 1',
      description: 'Lorem ipsum dolor sit amet consectetur. Et sed aliquet quisque.',
    },
    {
      image: '/founding-story-1.png',
      title: 'Image Title 2',
      description: 'Lorem ipsum dolor sit amet consectetur. Et sed aliquet quisque.',
    },
    {
      image: '/founding-story-1.png',
      title: 'Image Title 3',
      description: 'Lorem ipsum dolor sit amet consectetur. Et sed aliquet quisque.',
    },
    {
      image: '/founding-story-1.png',
      title: 'Image Title 4',
      description: 'Lorem ipsum dolor sit amet consectetur. Et sed aliquet quisque.',
    },
  ]

  return (
    <div className="bg-gray-100 px-4 py-8">
      <div className="container grid grid-cols-1 gap-6 sm:grid-cols-2">
        {galleryItems.map((item, index) => (
          <div key={index} className="bg-white flex flex-col overflow-hidden">
            <img src={item.image} alt={item.title} className="h-[351px] w-full object-cover" />
            <div className="py-3">
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AwardsGallery
