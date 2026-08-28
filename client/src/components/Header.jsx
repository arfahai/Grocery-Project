import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col md:flex-row items-center justify-between bg-emerald-50 rounded-2xl px-6 md:px-14 py-10 my-6'>
      <div className='md:w-1/2 flex flex-col items-start gap-4'>
        <p className='text-emerald-700 font-medium text-sm tracking-wide uppercase'>
          Freshness Delivered Daily
        </p>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight'>
          Quality Groceries Right at Your Doorstep
        </h1>
        <p className='text-gray-600 text-sm md:text-base'>
          Browse hundreds of organic products, farm-fresh vegetables, and daily necessities with fast delivery.
        </p>
        <button
          onClick={() => navigate('/products')}
          className='bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-3 rounded-full transition shadow-md'
        >
          Shop Now
        </button>
      </div>
      <div className='md:w-1/2 mt-8 md:mt-0 flex justify-center'>
        <img src={assets.header_img} alt='GreenCart Header' className='w-full max-w-md object-contain' />
      </div>
    </div>
  )
}

export default Header