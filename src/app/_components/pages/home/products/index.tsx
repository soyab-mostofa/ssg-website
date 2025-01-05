import SectionLayout from '@/app/_components/shared/SectionLayout'
import React from 'react'
import { ProductCarousel } from './ProductCarousel'

const ProductSection = () => {
  return (
    <SectionLayout chip="PRODUCTS" heading="Discover Style for Every Generation">
      <ProductCarousel />
    </SectionLayout>
  )
}

export default ProductSection
