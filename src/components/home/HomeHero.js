import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

function HomeHero() {
  return (
    <Container className="mt-4">
      <Row>
        <Col lg={6}>
          <div className="mb-4">
            <h1 className="display-3 mb-4 text-gray-blue">Dr. Abla Hasan</h1>
            <h2 className="display-6 mb-4 text">
              Professor of Practice of Arabic Language and Culture{" "}
            </h2>
            <h3 className="h2 fw-light text">
              - University of Nebraska-Lincoln
            </h3>
          </div>
        </Col>
        <Col lg={6}>
          <div className="text-center">
            <StaticImage
              src="../../images/personal/abla-hasan-02.jpg"
              width={500}
              quality={95}
              formats={["auto", "webp"]}
              alt="Dr. Abla Hasan Home Page"
              style={{ marginBottom: `1.45rem` }}
              className="shadow-sm rounded"
            />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default HomeHero
