import React, {useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/gpu.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#2C2F33] text-[#F4F0DB]'>
        <div>
            <img src={Logo} alt='logo' style={{width: '50px' }} />
        </div>

        {/* menu */}
        <ul className='hidden md:flex'>
            <li>
                <Link to="home" smooth={true} duration={500}>
                home
                </Link>
            </li>
            <li>
                <Link to="about" smooth={true} duration={500}>
                about me
                </Link>
            </li>
            <li>
                <Link to="skills" smooth={true} duration={500}>
                skills
                </Link>
            </li>
            <li>
                <Link to="projects" smooth={true} duration={500}>
                projects
                </Link>
            </li>
            <li>
                <Link to="contact" smooth={true} duration={500}>
                contact me
                </Link>
            </li>
        </ul>

        {/* hamburger menu */}   
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#2C2F33] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                about me
                </Link>    
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                projects
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                contact me
                </Link>
            </li>
        </ul>

        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077B5] rounded-md'>
                    <a className='flex justify-between items-center w-full text-[#F4F0DB]' href="https://www.linkedin.com/in/zavierand/">linkedIn <FaLinkedin size={30} /> </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-md'>
                    <a className='flex justify-between items-center w-full text-[#F4F0DB]' href="https://github.com/zavierand/">github <FaGithub size={30} /> </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#999999] rounded-md'>
                    <a className='flex justify-between items-center w-full text-[#F4F0DB]' href="/">email <HiOutlineMail size={30} /> </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#9CDAF1] rounded-md'>
                    <a className='flex justify-between items-center w-full text-[#F4F0DB]' href="/">resume <BsFillPersonLinesFill size={30} /> </a>
                </li>
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar
