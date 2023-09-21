"use client"
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
const Header = () => {

    const [toggle, settoggle] = useState(false)
    return (
        <div className=' bg-blue-600 p-4'>
            <div className=' max-w-[1240px] py-[15px] px-[15px] items-center border border-black rounded-2xl mx-auto shadow-md shadow-gray-950 flex justify-between'>
                <div className=' text-3xl font-bold'>
                    Web page
                </div>
                {
                    toggle ?
                        <AiOutlineClose onClick={() => settoggle(!toggle)} className=' text-white text-2xl md:hidden block hover:cursor-pointer' />
                        :
                        < GiHamburgerMenu onClick={() => settoggle(!toggle)} className='text-white text-2xl md:hidden block hover:cursor-pointer' />
                }


                <ul className='hidden md:flex text-white gap-10'>
                    <li>Home</li>
                    <li>Company</li>
                    <li>Resoureces</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                {/* Responsive menu */}
                <ul className={` duration-500 md:hidden w-full text-white fixed bg-black top-[99px] 
                    ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
                    <li className='p-5 hover:border-b-2 hover:border-white hover:cursor-pointer'>Home</li>
                    <li className='p-5 hover:border-b-2 hover:border-white hover:cursor-pointer'>Company</li>
                    <li className='p-5 hover:border-b-2 hover:border-white hover:cursor-pointer'>Resoureces</li>
                    <li className='p-5 hover:border-b-2 hover:border-white hover:cursor-pointer'>About</li>
                    <li className='p-5 hover:cursor-pointer'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header