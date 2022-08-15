import React from 'react'
import Cpp from '../assets/cpp.svg'
import Css from '../assets/css.svg'
import GitHub from '../assets/github.svg'
import HTML from '../assets/html.svg'
import JavaScript from '../assets/javascript.svg'
import Python from '../assets/python.svg'
import ReactImg from '../assets/react.svg'
import SQL from '../assets/sql.svg'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#586AE2] text-[#F4F0DB]'>
    
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#2A2356]'>Skills</p>
                <p classNamw='py-4'>these are the languages i have learned through my coursework and on my own time and am comfortable working in:</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040C15] rounded-md hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Cpp} alt='C++'/>
                    <p className='my-4'>C++</p>
                </div>
                <div className='shadow-md shadow-[#040C15] rounded-md hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Python} alt='python'/>
                    <p className='my-4'>python</p>
                </div>
                <div className='shadow-md shadow-[#040C15] rounded-md hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt='javascript'/>
                    <p className='my-4'>javascript</p>
                </div>
                <div className='shadow-md shadow-[#040C15] rounded-md hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={SQL} alt='sql'/>
                    <p className='my-4'>SQL</p>
                </div>
                <div className='shadow-md shadow-[#040C15] rounded-md hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt='html'/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040C15] rounded-md hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Css} alt='css'/>
                    <p className='my-4'>css</p>
                </div>
                <div className='shadow-md shadow-[#040C15] rounded-md hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt='react'/>
                    <p className='my-4'>react</p>
                </div>
                <div className='shadow-md shadow-[#040C15] rounded-md hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt='github'/>
                    <p className='my-4'>github</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills