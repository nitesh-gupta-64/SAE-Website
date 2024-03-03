import React from 'react'

const NotFound = () => {
  return (
    <div className='w-screen h-screen bg-gray-900 flex items-center justify-center flex-col overflow-x-hidden text-white'>
      <h2 className='font-bold text-4xl'>Page Not <span className='bg-gradient-to-r from-gray-400 to-gray-900 bg-clip-text text-transparent uppercase'>Found</span></h2>
    </div>
  )
}

export default NotFound