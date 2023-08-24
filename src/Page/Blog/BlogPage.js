import React from 'react'
import Contact1 from '../../companats/Contact/Contact1'
import CardBlog from '../../companats/Blog/CardBlog'
import { Col, Container, Row } from 'react-bootstrap'
import Pagination1 from '../../companats/unitly/Pagination'

const BlogPage = () => {
  return (
    <div className='bah'>
      <Contact1 Contact="Blog Grid 3" ContactUs="Blog Grid 3"/>
      
      <Container className='mt-4 mb-4'>
        <Row>
            <Col md="4" lg="4" sm="12">
                <CardBlog/>
            </Col>
            <Col md="4" lg="4" sm="12">
                <CardBlog/>
            </Col>
            <Col md="4" lg="4" sm="12">
                <CardBlog/>
            </Col>
            <Col md="4" lg="4" sm="12">
                <CardBlog/>
            </Col>
            <Col md="4" lg="4" sm="12">
                <CardBlog/>
            </Col>
            <Col md="4" lg="4" sm="12">
                <CardBlog/>
            </Col>
        </Row>
      </Container>
      <Container style={{marginBottom:"10px"}}>
      <Pagination1/>
      </Container>
    </div>
  )
}

export default BlogPage
