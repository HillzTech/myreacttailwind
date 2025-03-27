import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Hero } from '../Components/Hero'
import { VideoPlayer } from '../Components/VideoPlayer'
import { Services } from '../Components/Services'
import { Newsletter } from '../Components/Newsletter'
import Slider from '../Components/Slider'
import Accordion from '../Components/FAQ'

export const HomePage = () => {
  return (
    <div className='bg-black min-h-screen overflow-y-auto'>
    
        <Hero />
        <Slider />
        <VideoPlayer />
    </div>
  )
}
