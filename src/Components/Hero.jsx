import React from 'react'
import { Link } from 'react-router-dom'


export const Hero = () => {
  return (
    
      <div>
        <div className='bg-black/95 flex flex-row justify-around p-[15px]'>
        <div className='relative left-[80px] top-[20px] md:pt-[45px] lg:pt-[50px]'>
        <h2 className='text-white font-bold text-[25px] md:text-[45px] lg:text-[55px]'>Comfort, <span className='text-primary'>Care,</span> Compassion.</h2>
        <p className='text-white italic text-[12px] md:text-[15px] lg:text-[18px] '>We care for your pets like they were ours</p>
        <button className='text-white bg-primary p-1 rounded-[10px] mt-2 font-serif hover:bg-white hover:text-primary font-bold lg:p-3'><Link to='ContactPage'>Contact Us</Link></button>
        </div>
        
            <img className=" object-cover h-[280px] md:h-[400px] lg:h-[450px] mr-7" src='Images/Hero-img.png' alt=''/>
        </div>
      </div>

    

  )
}
