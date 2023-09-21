"use client"
import React from 'react'
import Typed from 'react-typed'
const Banner = () => {
  return (
    <div className='bg-blue-600 w-full py-[50px]'>
      <div className='max-w-[1240px] my-[100px] mx-auto text-center font-bold '>
        <div className=' text-xl md:text-3xl md:p-[24px]'>
          Learn with us
        </div>
        <h2 className='text-white text-3xl md:text-[80px] md:p-[24px]'>Grow with us </h2>
        <div className='text-[20px] md:text-[50px] md:p-[20px] text-white'>

          Learn
          <Typed className='pl-3' strings={[' React development ' ,' web development']} 
          typeSpeed={100} 
          loop={true}
          backSpeed={100}
          />

        </div>
      </div>
    </div>
  )
}

export default Banner
