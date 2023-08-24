import React from 'react'
import Contact1 from '../../companats/Contact/Contact1'
import './About.css'
import About from '../../companats/AboutPage/About'
import About2 from '../../companats/AboutPage/About2'
import About3 from '../../companats/AboutPage/About3'
import Services4 from '../../companats/Services/Services4'
import About4 from '../../companats/AboutPage/About4'

const AboutPage = () => {
  return (
    <div>
        <Contact1 Contact="About Us" ContactUs="About Us"/>
        <About/>
        <About2/>
        <About3/>
        <About4/>
        <Services4/>
    </div>
  )
}

export default AboutPage