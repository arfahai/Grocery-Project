import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className='mt-20 border-t border-gray-200 pt-10 pb-6 text-gray-600 text-sm'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
        <div className='md:col-span-2'>
          <img src={assets.logo} alt='GreenCart' className='w-36 mb-4' />
          <p className='text-xs text-gray-500 max-w-sm leading-relaxed'>
            GreenCart is your reliable online grocery store providing organic and farm-fresh items right to your home with seamless digital payments and real-time tracking.
          </p>
        </div>
        <div>
          <h4 className='font-semibold text-gray-800 mb-3'>Quick Links</h4>
          <ul className='space-y-2 text-xs'>
            <li><a href='/' className='hover:underline'>Home</a></li>
            <li><a href='/products' className='hover:underline'>All Products</a></li>
            <li><a href='/cart' className='hover:underline'>Cart</a></li>
          </ul>
        </div>
        <div>
          <h4 className='font-semibold text-gray-800 mb-3'>Get In Touch</h4>
          <ul className='space-y-2 text-xs text-gray-500'>
            <li>+1-800-GREENCART</li>
            <li>support@greencart.com</li>
          </ul>
        </div>
      </div>
      <div className='border-t border-gray-100 pt-4 text-center text-xs text-gray-400'>
        © {new Date().getFullYear()} GreenCart. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer