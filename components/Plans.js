import React from 'react'

const Plans = () => {
    return (
        <div className='py-[100px] mx-2'>
            <div className=' max-w-[1240px] mx-auto md:grid grid-cols-3 gap-[40px]'>
                <div className='shadow-2xl h-[500px] hover:scale-105 duration-300 flex flex-col justify-center items-center gap-4 bg-gray-200'>
                    <img src="/single.png" alt="img" className=' h-[100px] w-[100px] pb-2' />
                    <h1 className=' font-bold text-3xl'>Web Development</h1>
                    <h1 className=' font-extrabold text-2xl'>$1000</h1>
                    <p className='px-10 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Nesciunt deserunt ullam obcaecati reiciendis dolore minus
                        numquam adipisci vel beatae. Asperiores voluptatem tempore minus.</p>
                    <button className=' w-[40%] bg-black border-5 border-white font-bold rounded-lg text-white p-3 m-2  hover:bg-green-600  ease-in hover:duration-300 '>Get Started</button>
                </div>
                <div className='shadow-2xl h-[500px] hover:scale-105 duration-300 flex flex-col justify-center items-center gap-4 bg-gray-200'>
                    <img src="/double.png" alt="img" className=' h-[100px] w-[100px] pb-2' />
                    <h1 className=' font-bold text-3xl'>MERN Stack</h1>
                    <h1 className=' font-extrabold text-2xl'>$2000</h1>
                    <p className='px-10 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Nesciunt deserunt ullam obcaecati reiciendis dolore minus
                        numquam adipisci vel beatae. Asperiores voluptatem tempore minus.</p>
                    <button className=' w-[40%] bg-black border-5 border-white font-bold rounded-lg text-white p-3 m-2  hover:bg-green-600  ease-in hover:duration-300 '>Get Started</button>

                </div>
                <div className='shadow-2xl h-[500px] hover:scale-105 duration-300 flex flex-col justify-center items-center gap-4 bg-gray-200'>
                    <img src="/triple.png" alt="img" className=' h-[100px] w-[100px] pb-2' />
                    <h1 className=' font-bold text-3xl'>Android Development</h1>
                    <h1 className=' font-extrabold text-2xl'>$800</h1>
                    <p className='px-10 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Nesciunt deserunt ullam obcaecati reiciendis dolore minus
                        numquam adipisci vel beatae. Asperiores voluptatem tempore minus.</p>
                    <button className=' w-[40%] bg-black border-5 border-white font-bold rounded-lg text-white p-3 m-2  hover:bg-green-600  ease-in hover:duration-300 '>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Plans