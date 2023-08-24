import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../Home/Home.css'
const Contact2 = () => {
    return (
        <div>
            <Container className='bor'>
                <div className='min-sec-4 min-sec-4 mt-5 bg-light'>
                    <Row className="d-flex align-items-center">
                        <Col lg={5} md={6} sm={12}>
                            <div className="form-box mb-2 w-100">                                
                                <form>
                                    <input type="text" placeholder="Your Name" />
                                    <input type="text" placeholder="Email" />
                                    <input type="text" placeholder="Phone number" />
                                    <select className="form-select form-control">
                                        <option>Selecty Department</option>
                                        <option>One</option>
                                        <option>Two</option>
                                        <option>Three</option>
                                        </select>
                                        <div className="form-group col-md-12 mt-3"><textarea name="message" required="" className="form-control" placeholder="Type Message"></textarea></div>
                                    <Link to='/' className="link w-50 text-center"> submit </Link>
                                </form>
                            </div>
                        </Col>
                        <Col lg={7} md={6} sm={12}>
                            <div className="box-imges-55">
                                <div className='hr'>
                                    <Container className='p-5'>
                                    <h1>
                                    Contact Us For Any 
                                    </h1>
                                    <h1>Informations</h1>
                                    <h3><i className="fa-solid fa-map-location-dot" style={{color:"white"}}></i> Location</h3>
                                    <hr/>
                                    <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                                    <h3><i className="fa-solid fa-address-card" style={{color:"white"}}></i> Email & Phone</h3>
                                    <hr/>
                                    <h5>info@yourdomain.com
                                    <br/>  (+68) 120034509</h5>
                                    <h3><i className="fa-solid fa-globe" style={{color:"white"}}></i> Follow Us </h3>
                                    <hr/>
                                    <Row>
                                    <Col md="1" lg="1" sm="1"> <i className="fa-brands fa-twitter" style={{color:"#26297c",backgroundColor:"#ffff",padding:"5px",borderRadius:"5px"}}></i> </Col>
                                    <Col md="1" lg="1" sm="1"> <i className="fa-brands fa-linkedin" style={{color:"#26297c",backgroundColor:"#ffff",padding:"5px",borderRadius:"5px"}}></i> </Col>
                                    <Col md="1" lg="1" sm="1"> <i className="fa-brands fa-instagram" style={{color:"#26297c",backgroundColor:"#ffff",padding:"5px",borderRadius:"5px"}}></i> </Col>
                                    </Row>
                                    </Container>
                                </div>                                                                                           
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Contact2
