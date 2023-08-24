import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import "./Home.css";
import sv from "../../aswets/52.png"

const Section5 = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col md="4" sm="12">
                <h5 style={{color:"#f17732",fontSize:"20px",fontWeight:"bold"}} className='d mt-lg-5'>  Services  </h5>
                <h1 style={{color:"#1f2278",fontWeight:"bold"}}>  We Cover A Big Variety Of Medical Services   </h1>
                <p>  We provide the special tips and advice’s of heath care treatment and high level of best.   </p>
                <Button className='bt'> All Services </Button>
                </Col>
                <Col md="8" sm="12">
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={sv} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Section5