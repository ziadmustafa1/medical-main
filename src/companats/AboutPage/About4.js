/* eslint-disable no-unused-vars */
import React from 'react'
import { PiQuotesFill } from 'react-icons/pi'
import image1 from "../../aswets/Circle.png";
import image2 from "../../aswets/doc5.jfif";
import image3 from "../../aswets/doc6.jfif";
import image4 from "../../aswets/doc7.jfif";
import image5 from "../../aswets/doc8.jfif";
import image6 from "../../aswets/doc9.jfif";
import image7 from "../../aswets/doc10.jfif";

const About4 = () => {
  return (
    <div>
        <div class="Testimonial py-10">
        <p class="testimonial-header">Testimonial</p>
        <h2 class="testimonial-header-h2">See What Are The Patients Saying About us</h2>
        <div class="Testimonial-section grid lg:grid-cols-2 items-center justify-center">
        <div class="relative left-testimonial-section mx-auto">
        <img src={image1} className="bn" alt="" />
        <ul class="">
            <li class="absolute top-0 left-48">
            <img className="w-16 h-16 rounded-full" src={image2} alt="" />
                </li>
                <li class="absolute top-20 right-8">
                <img className="w-16 h-16 rounded-full" src={image3} alt="" />
                    </li><li class="absolute bottom-2 left-48">
                    <img className="w-16 h-16 rounded-full" src={image4} alt="" />
                        </li>
                        <li className="absolute bottom-20 right-8">
                            <img className="w-16 h-16 rounded-full" src={image5} alt="" />
                        </li>
                        <li className="absolute bottom-20 left-8">
                            <img className="w-16 h-16 rounded-full" src={image6} alt="" />
                        </li>
                        <li className="absolute top-20 left-8">
                            <img className="w-16 h-16 rounded-full" src={image7} alt="" />
                        </li>
                                <li class="absolute top-20 left-8">
                                    <img class="w-16 h-16 rounded-full" src={image6} alt=""/>
                                    </li>
                                    </ul>
                                    </div>
                                    <div class="testimonial-bx lg:w-4/6">
                                        <div class="testimonial-content">
                                            <p class="leading-loose w-full text-white mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.</p>
                                            </div>
                                            <div class="client-info text-white my-2">
                                                <h5 class="name text-white text-xl">Mohamed Taher</h5>
                                                <p class="text-lg">Patient</p>
                                                </div>
                                                <div class="quote-icon">
                                                    <i class="fas fa-quote-left">
                                                        </i>
                                                        </div>
                                                        <div class="quotes">
                                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M116,72v88a48.05,48.05,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Z"></path></svg>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default About4