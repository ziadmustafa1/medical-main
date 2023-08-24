/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./Home.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import mobile from "../../aswets/1.png23.png";
import girl from "../../aswets/1.png24.png";

const Section4 = () => {
  return (
    <div>
      <section className="min-sec-4">
        <Container>
          <Row className="d-flex align-items-center">
            <Col lg={5} md={6} sm={12}>
              <div className="form-box mb-2">
                <span></span>
                <h2>Book Appointment</h2>
               <form>
               <input type="text" placeholder="select debrement"/>
               <input type="text" placeholder="select debrement"/>
               <input type="text" placeholder="your name"/>
               <input type="number" placeholder="phone number" />
               <input type="date" className="date"/>
               <Link to='/' className="link">appointment now</Link>
               </form>
              </div>
            </Col>
            <Col lg={7} md={6} sm={12}>
              <div className="box-imges mobile">
                <img src={mobile} className="mobile"/>
                <img src={girl} className="girl"/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Section4
