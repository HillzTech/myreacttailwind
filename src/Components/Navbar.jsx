import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; 
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

export const Navbar = () => {
const [nav, setNav] = useState(false)
  return (
    <div className=' flex flex-column justify-between px-5 p-3 fixed top-0 right-0'>
        <h1 className='font-bold text-3xl text-yellow-600 italic cursor-pointer font-serif'><Link to='/'></Link></h1>
        <div className=''>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer text-white'>
          <AiOutlineMenu size={26} />
        </div>
            {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-primary fixed w-[30%] h-screen z-10 top-0 right-0'></div> : ''}
      
      {/* Side drawer menu */}
      <div className={nav ? 'fixed top-0 right-0 w-[345px] h-screen bg-black/80 z-10 duration-300' : 'fixed top-0 right-[-100%] w-[345px] h-screen bg-black z-10 duration-300 lg:flex flex-row justify-between align-center'  }>
        <AiOutlineClose
            onClick={()=> setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer text-white'
        />
        
        <nav>
            <ul className='flex flex-col p-9 text-white cursor-pointer ml-20 '>
                <li className='text-xl py-2.5 flex'><Link to='/'>HOME</Link></li>
                <li className='text-xl py-2.5 flex'><Link to='/BioPage'>BIO</Link></li>
                <li className='text-xl py-2.5 flex'><Link to='Gallery'>GALLERY</Link></li>
                <li className='text-xl py-2.5 flex'><Link to='FAQ'>TOURS</Link></li>
                <li className='text-xl py-2 flex'><Link to='FAQ'>BOOKINGS</Link></li>
                
                
            </ul>
        </nav>
      </div>
            
        </div> 
    </div>
  )
}
