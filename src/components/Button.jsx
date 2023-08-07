import React from 'react'

const Button = ({name}) => {
  return (
    <div className='text-white text-center mt-7'>
        <button className='bg-gradient-to-r from-indigo-950 to-indigo-900 rounded-[30px] md:px-10 px-20 py-1 md:text-xl md:text-md font-medium shadow-2xl ease-in-out duration-200 hover:translate-y-[-1px] mb-5'> {name} </button>
    </div>
  )
}

export default Button