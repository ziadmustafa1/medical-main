import React from 'react'
import './Services.css'
import Contact1 from '../../companats/Contact/Contact1'
import Services from '../../companats/Services/Services'
import Services2 from '../../companats/Services/Services2'
import Services3 from '../../companats/Services/Services3'
import Services4 from '../../companats/Services/Services4'

const ServicesPage = () => {
  return (
    <div>
      <Contact1 Contact="Services" ContactUs="Services"/>
      <Services/>
      <Services2/>
      <Services3/>
      <Services4/>
    </div>
  )
}

export default ServicesPage
