import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Hero } from '../Components/Hero'
import { Services } from '../Components/Services'
import { Newsletter } from '../Components/Newsletter'
import Slider from '../Components/Slider'
import Accordion from '../Components/FAQ'

export const HomePage = () => {
  return (
    <div>
    
        <Hero />
        <Services />
        <Slider />
        <Newsletter />
        <Accordion />

    </div>
  )
}
