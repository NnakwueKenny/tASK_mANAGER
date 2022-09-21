import React from 'react'

const Preloader = () => {
  return (
    <div className='absolute top-0 left-0 h-full w-full flex justify-center items-center bg-gray-300 bg-opacity-50'>
        <div>
            <span className='inline-flex h-12 w-12  border-4 border-r-cyan-500 rounded-full animate-spin'></span>
        </div>
    </div>
  )
}

export default Preloader