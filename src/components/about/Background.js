import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import Underline from "../shared/Underline"
import DownloadCV from "../shared/DownloadCV"
import ArabicCV from "../shared/ArabicCV"

function Background() {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <div className="mb-4">
            <h2 className="mb-0 display-5 text-gray-blue">BACKGROUND</h2>
            <Underline />
            <p className="lh-lg fs-20 text">
              PhD in Philosophy of Language from the University of
              Nebraska-Lincoln, 2013; MA in Philosophy as a Fulbright grantee
              from the University of Nebraska-Lincoln in 2009. Dr. Hasan
              obtained her BA in Philosophy from Damascus University/Syria in
              2000, followed by a Diploma of High Studies from Damascus
              University in 2001. She is a native speaker of Arabic. She teaches
              Arabic language and culture at UNL and she is the Program's
              Founder and Coordinator. Her teaching and research focus on
              Qur'anic Studies, Qur’anic Hermeneutics, Islamic feminism, and
              Arabic studies. She has published with Brill, Analize, Ar-Raniry,
              JIL, Disputatio, Al-Manarah, E-logos and other peer- review
              international journals. She is the author of: Decoding the
              Egalitarianism of the Qur'an: Retrieving Lost Voices on Gender
              (Lexington: 2019), the author of On Pain and Suffering: a Qur’anic
              Perspective (Lexington: 2022), and the author of The Qur’anic
              Dilemma: A Hermeneutical Investigation of al-Khidr (Routledge:
              2022).{" "}
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div className="text-center mt-md-5">
            <StaticImage
              src="../../images/personal/abla-hasan-01.webp"
              width={550}
              quality={95}
              formats={["auto", "webp"]}
              alt="Dr. Abla Hasan Lecture"
              style={{ marginBottom: `1.45rem` }}
              className="shadow-sm rounded mt-md-5"
            />
          </div>
          <div className="d-flex flex-column flex-lg-row justify-content-around text-center mb-3">
            <DownloadCV color="dark" />
            <ArabicCV color="dark" />
          </div>
        </Col>
      </Row>
      <Row>
        <p className="lh-lg fs-20 text">
          Abla Hasan is the recipient of the College of Arts and Sciences
          Engagement Award for 2021, the recipient of the College of Arts and
          Sciences Distinguished Teaching Award for 2022, the recipient of the
          2023 Rev. Dr. Michael Combs Award for Scholars of Equality and
          Justice, and the recipient of UNL's first annual Women’s and Gender
          Justice Award 2023.
        </p>
        <p className="lh-lg fs-20 text">
          A teacher, a researcher and a public speaker. In addition to teaching
          for Nebraska University, Hasan’s course “Women in the Qur’an” was
          offered to Maryland University, Rutgers University, Penn State
          University (Though DISC) and to Nizwa University in Oman (through
          Nebraska’s Global Virtual Project). Dr. Hasan’s scholar engagement
          includes numerous national and international paper presentations
          including 50 invited talks and more than 40 media interviews and
          citations.{" "}
        </p>
      </Row>
    </Container>
  )
}

export default Background
