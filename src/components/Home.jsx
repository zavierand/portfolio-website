import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#2C2F33]'>

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#F4F0DB]'>this is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#C252E1]'>zav.ier()</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#F4F0DB]'>a student</h2>
            <p className='text-[#F4F0DB] py-4 max-w-[700px]'>a full-time student pursuing degree in computer science. looking to gain experience
                in the professional field through internships.
            </p>
            <div>
                <button className='text-[#FFFFFF] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#6ECBF5] hover:border-[#6ECBF5] rounded-md'>contact me 
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 hover:' />
                </span>
                </button>
            </div>
        </div>

    </div>
  )
}

export default Home
