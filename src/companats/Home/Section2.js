/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import doc1 from "../../aswets/1.png13.jpg";
import doc2 from "../../aswets/1.png14.jpg";
import doc3 from "../../aswets/1.png15.jpg";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./Home.css";

const Section2 = () => {
  return (
    <div>
      <section className="min-sec-2">
        <Container>
          <Row className="">
            <Col lg={6} md={6} sm={12} className="img-sec-2">
              <div className="boxs-images">
                <div className="shap"></div>
                <img src={doc1} className="doc1" />
                <img src={doc2} className="doc2" />
                <img src={doc3} className="doc3" />
                <div className="text-img-sec-2">
                  <h3>20</h3>
                  <h4>Year Experience</h4>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} className="text-sec-2">
              <h5 className="h5">About Us</h5>
              <h2>The Great Place Of Medical Hospital Center</h2>
              <p>
                We provide the special tips and advice’s of heath care treatment
                and high level of best technology involve in the our hospital.
              </p>
              <div className="box-1 d-flex">
                <div className="box-1-1 box-1-2">
                  <span></span>
                  <h5>Emergency Help</h5>
                </div>
                <div className="box-1-1 box-1-3">
                  <span></span>
                  <h5>Qualified Doctors</h5>
                </div>
              </div>
              <div className="box-1 d-flex">
                <div className="box-1-1 box-1-4">
                  <span></span>
                  <h5>Best Professionals</h5>
                </div>
                <div className="box-1-1 box-1-5">
                  <span></span>
                  <h5>Medical Treatment</h5>
                </div>
              </div>
              <Link to="/" className="more">
                Read more
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Section2
