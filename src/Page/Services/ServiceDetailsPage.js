import React from 'react'
import './Services.css'
import Contact1 from '../../companats/Contact/Contact1'
import ServiceDetails from '../../companats/Services/ServiceDetails'

const ServiceDetailsPage = () => {
  return (
    <div>
      <Contact1 Contact="Service Details" ContactUs="Service Details"/>
      <ServiceDetails />
    </div>
  )
}

export default ServiceDetailsPage
