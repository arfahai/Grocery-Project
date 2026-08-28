import React from 'react'
import { assets } from '../assets/assets'

const BottomBanner = () => {
  return (
    <div className='my-14'>
      <img
        src={assets.bottom_banner}
        alt='Banner'
        className='w-full hidden md:block rounded-2xl shadow'
      />
      <img
        src={assets.bottom_banner_sm}
        alt='Banner'
        className='w-full md:hidden rounded-xl shadow'
      />
    </div>
  )
}

export default BottomBanner