import SectionLayout from '@/app/_components/shared/SectionLayout'
import React from 'react'
import { ProductCarousel } from './ProductCarousel'

const ProductSection = () => {
  return (
    <SectionLayout
      headingWidth="100%"
      productSection
      chip="PRODUCTS"
      heading="Discover Style for Every Generation"
    >
      <ProductCarousel />
    </SectionLayout>
  )
}

export default ProductSection
