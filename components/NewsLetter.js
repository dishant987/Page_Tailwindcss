import React from 'react'

const NewsLetter = () => {
  return (
    <div className='bg-blue-600 p-4'> 
        <div className='max-w-[1240px] md:flex mx-auto justify-between my-8'>
                <div className='m-2'>
                    <h1 className='text-[20px] md:text-[40px] font-bold text-white'>Want to learn latest CSE skills?</h1>
                    <span className=' text-white'>Sign up to our newsletter and stay up to date</span>
                </div>
                <div className='m-2'>
                  <input type="text" className=' p-[10px] mr-2 sm:w-full md:w-[70%] rounded-lg' placeholder='Email'/>
                  <button className=' bg-slate-950 rounded-lg text-white p-[10px]  hover:bg-stone-700 hover:duration-500 hover:ease-out'>Notify Me</button>
                  <br />
                  <p className='text-white mt-3'>
                    We care the protection of your data . read our Privacy Policy
                  </p>
                </div>
        </div>
    </div>
  )
}

export default NewsLetter