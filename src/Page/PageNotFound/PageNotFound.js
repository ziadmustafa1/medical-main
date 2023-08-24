import React from 'react'
import Contact1 from '../../companats/Contact/Contact1.js'
import NotFound from '../../companats/NotFound/NotFound.js'

const PageNotFound = () => {
  return (
    <div>
    <div className='bah'>
      <Contact1 Contact="Page Not Found" ContactUs="Not Found"/>          
      </div>
      <NotFound/> 
    </div>
  )
}

export default PageNotFound