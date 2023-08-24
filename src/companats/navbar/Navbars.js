/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Form, Link, NavLink } from 'react-router-dom';

import './Nav.css'
import logo from '../../aswets/1.png03.png'
import { Button } from 'react-bootstrap';

const Navbars = () => {
  return (
    <div>
        <Navbar expand="lg" className='barrs'>
      <Container className='navvv'>
        <Navbar.Brand href="#home" className='brand-logo'>
          <img src={logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
          <Nav className="me-auto d-flex align-items-center">
            <Nav.Link  as={NavLink} className='link'>Home</Nav.Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <Link to="/PageNotFound" style={{textDecoration:"none"}}><NavDropdown.Item href="#action/3.1"> Error 404 </NavDropdown.Item></Link>
              <Link to="/About" style={{textDecoration:"none"}}>
              <NavDropdown.Item href="#action/3.2">
              About
              </NavDropdown.Item>
              </Link>
              <Link to="/OurTeam" style={{textDecoration:"none"}}>
              <NavDropdown.Item href="#action/3.3">Our Team</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link to="/Faq" style={{textDecoration:"none"}}>
              <NavDropdown.Item href="#action/3.4">
              Faq's
              </NavDropdown.Item>
              </Link> 
              <Link to="/Booking" style={{textDecoration:"none"}}>
              <NavDropdown.Item href="#action/3.5"> 
                Booking           
              </NavDropdown.Item>
              </Link>
              </NavDropdown>
            {/* 2 */}
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <Link to="/services" style={{textDecoration:"none"}}><NavDropdown.Item href="#action/3.1">services</NavDropdown.Item></Link>
              <Link to="/servicedetails" style={{textDecoration:"none"}}><NavDropdown.Item href="#action/3.2">
              servicedetails
              </NavDropdown.Item></Link>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            {/* 3 */}
            <NavDropdown title="Blog" id="basic-nav-dropdown">
            <Link to="/Blog" style={{textDecoration:"none"}}><NavDropdown.Item href="#action/3.1"> Blogs </NavDropdown.Item></Link>
            <Link to="/BlogDetails" style={{textDecoration:"none"}}><NavDropdown.Item href="#action/3.1"> BlogDetails </NavDropdown.Item></Link>
            </NavDropdown>
            <Link to="/contact" style={{textDecoration:"none"}}><h6> contact us</h6></Link>
            <Link to="/contact" style={{textDecoration:"none"}}> <Button className='btn'>contact us</Button></Link>
          </Nav>
        
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbars