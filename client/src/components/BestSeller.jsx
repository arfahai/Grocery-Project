import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import ProductCard from './ProductCard'

const BestSeller = () => {
  const { products } = useContext(AppContext)
  const bestSellers = products.filter(p => p.bestseller).slice(0, 4)

  return (
    <div className='my-12'>
      <div className='text-center mb-8'>
        <h2 className='text-3xl font-bold text-gray-800'>Best Sellers</h2>
        <p className='text-gray-500 text-sm mt-1'>Top picks loved by our customers</p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6'>
        {bestSellers.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  )
}

export default BestSeller