import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#E0D9F6] flex justify-center items-center p-4'>
        <form method="POST" action="https://getform.io/f/47797dc6-2760-4061-9df7-6e0c7e5d08c4" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#C252E1] text-[#2A2356]'>Contact</p>
                <p className='text-[#2A2356] py-4'>reach out - zavierand98@gmail.com !!</p>
            </div>
            <input className='p-2 bg-[#CCD6F6]' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#CCD6F6]' type='email' placeholder='Email' name='email' />
            <textarea className='bg-[#CCD6F6] p-2' name="message" rows="10" placeholder='Message' />
            <button className='text-[#F4F0DB] border-2 hover:bg-[#2A2356] hover:border-[#2A2356] px-4 py-3 my-8 mx-auto flex items-center rounded-md'>send email</button>
        </form>

    </div>
  )
}

export default Contact
