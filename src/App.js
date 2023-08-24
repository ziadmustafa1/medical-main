import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Navbars from './companats/navbar/Navbars';
import HomePage from './Page/Home/HomePage';
import Footer from './companats/unitly/Footer';
import ContactPage from './Page/Contact/ContactPage';
import BlogPage from './Page/Blog/BlogPage';
import BlogDetailsPage from './Page/Blog/BlogDetailsPage';
import PageNotFound from './Page/PageNotFound/PageNotFound';
import ServicesPage from './Page/Services/ServicesPage';
import ServiceDetailsPage from './Page/Services/ServiceDetailsPage';
import AboutPage from './Page/About/AboutPage';
import OurTeamPage from './Page/OurTeam/OurTeamPage';
import FaqsPage from './Page/Faqs/FaqsPage';
import BookingPage from './Page/Booking/BookingPage';

const App = () => {
  return (
   <BrowserRouter>
   <Navbars />
   <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/contact' element={<ContactPage/>} />
    <Route path='/Blog' element={<BlogPage/>} />
    <Route path='/BlogDetails' element={<BlogDetailsPage/>} />
    <Route path='/PageNotFound' element={<PageNotFound/>} /> 
    <Route path='/services' element={<ServicesPage/>} />  
    <Route path='/servicedetails' element={<ServiceDetailsPage/>} /> 
    <Route path='/About' element={<AboutPage/>} /> 
    <Route path='/OurTeam' element={<OurTeamPage/>} />
    <Route path='/Faq' element={<FaqsPage/>} />
    <Route path='/Booking' element={<BookingPage/>} />
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App
