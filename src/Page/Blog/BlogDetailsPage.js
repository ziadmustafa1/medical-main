import React from 'react'
import Contact1 from '../../companats/Contact/Contact1'
import { Col, Container, Row } from 'react-bootstrap'
import BlogDetails1 from '../../companats/Blog/BlogDetails1'
import BlogDetails2 from '../../companats/Blog/BlogDetails2'

const BlogDetailsPage = () => {
  return (
    <div>
    <div className='bah'>
      <Contact1 Contact="Blog Details" ContactUs="Blog Details"/>
    </div>
    <Container>
        <Row>
            <Col md="8" sm="12" lg="8">
                <BlogDetails1 />
            </Col>
            <Col md="4" sm="12" lg="4">
              <BlogDetails2 />
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default BlogDetailsPage
