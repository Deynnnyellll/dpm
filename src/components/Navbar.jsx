import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    };

    
  return (
    <div className='text-white flex justify-between items-center h-24 w-max-[1240px] mx-auto px-4 cursor-pointer relative z-50'>
        <h1 className='w-full text-3xl font-bold text-gray-400'> DPM </h1>

        <ul className='hidden md:flex'>
            <li className='underline p-4 hover:animate-pulse'>
                <Link to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='p-4 hover:animate-pulse'>
                <Link to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className='p-4 hover:animate-pulse'>
                <Link to="project" smooth={true} duration={500}>
                    Project
                </Link>
            </li>
            <li className='p-4 hover:animate-pulse'>
                <Link to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>

        <div onClick={handleNav} className='block md:hidden fixed right-5'>
            {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu  size={25} />}
        </div>

        <div className={!nav ? 'fixed left-0 top-0 w-[75%] h-full bg-slate-900 opacity-90 ease-in-out duration-500 md:hidden text-center text-2xl font-semibold'  : 'fixed left-[-100%]'}>
            <ul className='pt-4 mt-20'>
                <li className='p-4 hover:animate-pulse'>
                    <Link onClick={handleNav} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='p-4 hover:animate-pulse'>
                    <Link onClick={handleNav} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='p-4 hover:animate-pulse'>
                    <Link onClick={handleNav} to="project" smooth={true} duration={500}>
                        Project
                    </Link>
                </li>
                <li className='p-4 hover:animate-pulse'>
                    <Link onClick={handleNav} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

        </div>
    </div>
    
  )
}

export default Navbar