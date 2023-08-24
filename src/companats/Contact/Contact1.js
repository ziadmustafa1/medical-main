/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'

const Contact1 = ({Contact,ContactUs}) => {
  return (
    <div className='about-us-all '>            
            <div className="about-us-all-section flex flex-col justify-center items-center">
                <h2 className='HeaderForAll font-bold text-4xl md:text-7xl'>{Contact}</h2>
                <div className=' ShapeForAll flex items-center gap-2 text-xl md:text-2xl text-white py-3 px-5 rounded-xl my-5'>
                    <span><AiFillHome /></span>
                    <span className=''>Home / {ContactUs}</span>
                </div>
            </div>
        </div>
    )
}
 


export default Contact1