import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Contact3 = () => {
  return (
    <Container>
        <Row>            
            <Col md="6" lg="4" sm="12" className='p-5'>
                <div style={{border:"#e2c4ff 5px"}}>
                <h2>
                <i className="fa-solid fa-phone"></i>
                </h2>
                <h3 style={{color:"#1f2278"}}>Contact Number</h3>
                <h4>+001 123 456 790</h4>
                <h4>+002 3424 44 00</h4>
                </div>
            </Col>            
            <Col md="6" lg="4" sm="12" className='p-5'>
                <div style={{border:"#ffbdbc 5px"}}>
                <h2>
                <i className="fa-solid fa-envelope-open-text"></i>
                </h2>
                <h3 style={{color:"#1f2278"}}>Email Address</h3>
                <h4>info@yourdomain.com</h4>
                <h4>example@support.com</h4>
                </div>
            </Col>                     
            <Col md="6" lg="4" sm="12" className='p-5'>
                <div style={{border:"#a4fcc4 5px"}}>
                <h2>
                <i className="fa-solid fa-map-location-dot"></i>
                </h2>
                <h3 style={{color:"#1f2278"}}>Address</h3>
                <h4>2005 Stokes Isle Apt. 896, Venaville </h4>
                <h4>10010, USA</h4>
                </div>
            </Col>            
        </Row>
    </Container>
  )
}

export default Contact3