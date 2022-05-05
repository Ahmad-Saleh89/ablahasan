import React from 'react'
import { Container, Row, Col } from "react-bootstrap"

function BooksHero() {
  return (
    <section className="hero books-hero mb-5 d-flex align-items-end">
      <Container>
        <Row>
          <Col>
            <h1 className="fw-normal display-4 text-gray-blue mb-5 pb-md-2">BOOKS</h1>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default BooksHero