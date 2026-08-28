import React from 'react'
import { categories } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Categories = () => {
  const navigate = useNavigate()

  return (
    <div className='my-10'>
      <h2 className='text-2xl font-bold text-gray-800 mb-6'>Shop by Category</h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4'>
        {categories.map((cat, index) => (
          <div
            key={index}
            onClick={() => navigate(`/products/${cat.path}`)}
            className='flex flex-col items-center p-4 bg-gray-50 border border-gray-100 rounded-xl cursor-pointer hover:shadow-md transition hover:-translate-y-1'
          >
            <img src={cat.image} alt={cat.name} className='w-16 h-16 object-contain mb-2' />
            <p className='text-sm font-medium text-gray-700'>{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories