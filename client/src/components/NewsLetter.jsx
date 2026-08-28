import React from 'react'

const NewsLetter = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div className='my-12 text-center py-10 bg-emerald-50 rounded-2xl px-4'>
      <h2 className='text-2xl font-bold text-gray-800'>Subscribe to get 20% Off</h2>
      <p className='text-gray-500 text-xs sm:text-sm mt-2'>
        Receive weekly updates, fresh stock alerts, and exclusive discounts directly in your inbox.
      </p>

      <form onSubmit={onSubmitHandler} className='flex items-center justify-center max-w-md mx-auto mt-6 gap-2'>
        <input
          type='email'
          placeholder='Enter your email address'
          className='w-full px-4 py-2.5 rounded-full text-xs sm:text-sm border border-gray-300 outline-none focus:border-emerald-600'
          required
        />
        <button
          type='submit'
          className='bg-emerald-600 text-white text-xs sm:text-sm px-6 py-2.5 rounded-full hover:bg-emerald-700 transition shrink-0'
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default NewsLetter