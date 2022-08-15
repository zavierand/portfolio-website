import React from 'react'
import CowboyBebop from '../assets/cowboybebop.png'
import Hangman from '../assets/hangman.jpg'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-[#F4F0DB] bg-[#2A2356]'>
        <div className='max-w-[1000px] mx-autp p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-[#F4F0DB] border-[#6ECBF5]'>projects</p>
            </div>

            {/* contatiner */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                <div style={{backgroundImage: `url(${CowboyBebop})`}} className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center content-div'>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-[#FFFFFF] tracking-wider'>
                            python images application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#2C2F33] font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#2C2F33] font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Hangman})`}} className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center content-div'>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-[#FFFFFF] tracking-wider'>
                            pygames library
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#2C2F33] font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#2C2F33] font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Projects