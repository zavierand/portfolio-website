import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#586AE2] text-[#F4F0DB]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#2A2356]'>
                        about
                    </p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>yurr. i'm zavier, but you can call me zav. </p>
                    </div>
                    <div>
                        <p>i'm a full-time student pursuing my degree in computer science.
                            looking to break into the tech field. i have many interests ranging 
                            from fashion, to sports, to cooking, and even anime! my tech interests
                            include data science, backend engineering, and machine learning. below
                            are some additional skills - languages and frameworks, i am comfortable 
                            working with as well as projects i have completed.
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About