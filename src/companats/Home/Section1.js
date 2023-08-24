/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./Home.css";
import { Col, Container, Row } from "react-bootstrap";
import home from "../../aswets/1.png07.png";
import moslas from "../../aswets/1.png08.png";
import squre from "../../aswets/1.png09.png";
import plus from "../../aswets/1.png11.png";
import circle from "../../aswets/1.png10.png";
const Section1 = () => {
  return (
    <div>
    <section className="min-sec-1">
        <img src={moslas} className="moslas" />
        <Container>
          <Row className="d-flex align-items-center row-home">
            <Col lg={6} md={6} sm={12} className="home-text">
              <img src={circle} className="circle" />
              <h4>We Provide All Health Care Solution</h4>
              <h2>Protect Your Health And Take Care To Of Your Health</h2>
              <a href="#">Read more</a>
              <img src={plus} className="plus" />
            </Col>
            <Col lg={6} md={6} sm={12} className="img-home">
              <img src={home} className="min-img" />
              <img src={squre} className="squre" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Section1