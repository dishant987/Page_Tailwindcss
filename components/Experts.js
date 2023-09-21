"use client"
import React from 'react'
import Typed from 'react-typed'
const Experts = () => {
    return (
        <div className='max-w-[1240px] mx-auto my-10 p-2 bg-slate-200 rounded-2xl md:grid grid-cols-2'>
            <div className=' col-span-1 md:w-[90%] text-center'>
                <img className='inline rounded-3xl' src="/laptop.jpg" alt="laptop" />
            </div>
            <div className='col-span-1 flex flex-col justify-center items-center'>
                <h1 className=' text-lime-600 text-3xl font-bold my-2'>
                    
                    <Typed className='pl-3' strings={['Learn Form Experts']}
                        typeSpeed={100}
                        loop={true}
                        backSpeed={100}
                    />

                </h1>
                <p className='my-2 px-12 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi commodi minus excepturi in, unde iste quos
                    dolorem asperiores beatae, quam, odit
                    libero autem eligendi corrupti saepe necessitatibus
                    molestias! Cupiditate, reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo deleniti quibusdam error est magni omnis ipsa cupiditate 
                    ab repellat assumenda doloribus laboriosam nulla nam expedita officiis, quos itaque vero?
                </p>
                <button className=' w-[30%] bg-slate-950 rounded-2xl text-white p-3 m-2  hover:bg-stone-700 hover:ease-out hover:duration-500 '>Get Started</button>
            </div>

        </div>
    )
}

export default Experts