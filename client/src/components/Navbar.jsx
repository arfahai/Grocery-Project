import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate, NavLink } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const navigate = useNavigate()
  const { getCartCount, token, setToken, userData, setSearchQuery, searchQuery } =
    useContext(AppContext)
  const [showLoginModal, setShowLoginModal] = useState(false)

  const logout = () => {
    localStorage.removeItem('token')
    setToken('')
    navigate('/')
  }

  return (
    <nav className='flex items-center justify-between py-4 border-b border-gray-200 font-medium'>
      <Link to='/'>
        <img src={assets.logo} alt='GreenCart Logo' className='w-36 cursor-pointer' />
      </Link>

      <ul className='hidden md:flex items-center gap-6 text-gray-700 text-sm'>
        <NavLink to='/' className='hover:text-emerald-600'>Home</NavLink>
        <NavLink to='/products' className='hover:text-emerald-600'>All Products</NavLink>
      </ul>

      <div className='flex items-center gap-4 sm:gap-6'>
        <div className='relative hidden sm:flex items-center bg-gray-100 px-3 py-1.5 rounded-full w-48 lg:w-64'>
          <input
            type='text'
            placeholder='Search groceries...'
            className='bg-transparent outline-none text-xs w-full'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <img src={assets.search_icon} alt='Search' className='w-4 h-4 text-gray-400' />
        </div>

        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} alt='Cart' className='w-6 h-6' />
          <span className='absolute -top-1 -right-2 bg-emerald-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full'>
            {getCartCount()}
          </span>
        </Link>

        {token ? (
          <div className='group relative cursor-pointer'>
            <img src={assets.profile_icon} alt='Profile' className='w-7 h-7 rounded-full' />
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-20'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-md text-xs'>
                <p onClick={() => navigate('/my-orders')} className='cursor-pointer hover:text-black'>
                  My Orders
                </p>
                <p onClick={logout} className='cursor-pointer hover:text-black'>
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className='bg-emerald-600 text-white text-xs px-5 py-2 rounded-full hover:bg-emerald-700 transition'
          >
            Login
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar