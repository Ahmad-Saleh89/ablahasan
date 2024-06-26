import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col, Carousel } from "react-bootstrap"

const AmazonBtn = ({ link }) => {
  return (
    <div>
      <a href={link} target="_blank" rel="noreferrer">
        <StaticImage
          src="../../images/books/amazon-btn.png"
          width={200}
          quality={95}
          formats={["auto", "webp"]}
          alt="Buy from Amazon"
          style={{ marginBottom: `1.45rem` }}
          className="shadow-sm rounded"
        />
      </a>
    </div>
  )
}

function Books() {
  return (
    <>
      <Container>
        {/* Book 1: The Qur’anic Dilemma (Routledge Studies in Islam and Human Rights) */}
        <Row className="pt-4">
          <Col md={6} lg={5}>
            <figure className="text-center mt-4 mt-sm-0">
              <StaticImage
                src="../../images/books/The-Quranic-Dilemma.jpg"
                width={300}
                quality={95}
                formats={["auto", "webp"]}
                alt="The Qur’anic Dilemma"
                style={{ marginBottom: `1.45rem` }}
                className="shadow-sm rounded"
              />
            </figure>
          </Col>
          <Col md={6} lg={7}>
            <div>
              <h4 className="h2">The Qur’anic Dilemma</h4>
              <h4 className="fw-normal mb-4">
                A Hermeneutical Investigation of Al-Khidr
              </h4>
              <p className="text">By Abla Hasan</p>
              <p>Publisher: Routledge; 1st edition (December 9, 2022)</p>
              <p>Routledge Studies in Islam and Human Rights</p>
              <p>Language: English</p>
              <p>Hardcover: 114 pages</p>
              <p>ISBN-10: 1032384301</p>
              <p>ISBN-13: 978-1032384306</p>
              <AmazonBtn link="https://www.amazon.com/Quranic-Dilemma-Routledge-Studies-Rights/dp/1032384301" />
            </div>
          </Col>
        </Row>
        <Row>
          <h5 className="text-center mt-4 h2 fw-light">Book Description</h5>
          <Col>
            <p className="text">
              <i>
                This book focuses on reconnecting with the lost rich
                humanitarian content of the Qur’an through a hermeneutical
                investigation of al-Khidr’s story. Through an active engagement
                with primary and secondary sources, the book provides a new
                analytic reading of this puzzling Qur’anic story. By
                reinvestigating the largely overlooked pluralistic message in
                the Qur’an, the book debunks an Islamic fundamentalism, which
                often uses the text as a justification for ill-informed choices
                that can be easily seen to drag the Qur’anic text in unexpected
                directions. It introduces current academic controversies over
                proper addressing of critical issues in Islamic heritage and
                goes beyond mystic romanticization to clarify blind spots in
                reading al-Khidr’s story. Through rethinking al-Khidr’s story,
                the book addresses the exegetical classical and modern attempts
                to reconcile the Qur’anic unconditional endorsement of the right
                to life for everyone regardless of their faith, with the
                perplexing reference to infidelity as a justification for
                killing found in chapter 18. The Qur’nic Dilemma will be of
                interest to all scholars of Islamic Studies or those interested
                in Qur’anic interpretation, Muslim ethics, or comparative
                theology.
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <h5 className="text-center mt-4 h2 fw-light">Book Reviews</h5>
          <Carousel
            fade
            className="book-reviews border py-5 mt-3 rounded shadow-sm"
          >
            <Carousel.Item>
              <Row className="justify-content-center flex-sm-row-reverse">
                <Col md={6} lg={8}>
                  <div className="d-flex flex-column justify-content-center h-100">
                    <blockquote className="text">
                      "Hasan’s work advances the conversation in important ways
                      by considering the historical, textual, linguistic, and
                      literary aspects of the story of Prophet Khidr from within
                      the ethical frame of view. This book addresses the
                      "dilemma" posed by the Khidr narrative in the Qur’an
                      concerning some of the key theological themes: taking of
                      life, religious other, pluralism, human and divine powers,
                      etc. Hasan examines the issues at hand at the granular
                      level; something that is missing in many other works on
                      the subject, and in that makes a significant contribution
                      to Qur’anic studies, ethics, and to religious studies more
                      broadly."
                    </blockquote>
                  </div>
                </Col>
                <Col md={4} lg={2}>
                  <figure className="text-center mt-4 mt-sm-0">
                    <StaticImage
                      src="../../images/books/Irfan-Omar.png"
                      width={150}
                      quality={95}
                      formats={["auto", "webp"]}
                      alt="Dr. Irfan A. Omar"
                      className="rounded-circle mb-3"
                    />
                    <figcaption>Dr. Irfan A. Omar</figcaption>
                    <figcaption>
                      <small>Marquette University, Milwaukee, USA</small>
                    </figcaption>
                  </figure>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="justify-content-center flex-sm-row-reverse">
                <Col md={6} lg={8}>
                  <div className="d-flex flex-column justify-content-center h-100">
                    <blockquote className="text">
                      "The Qur’anic Dilemma is a beautifully written,
                      fascinating and brave book that takes the reader on a
                      journey into one of the most controversial and wicked
                      questions of Islam: How to reconcile the Qur’anic message
                      of social justice and humanity with elements that seem to
                      portray infidelity as a justification for killing? Through
                      her analysis of the controversial (and often
                      misunderstood) Qur’anic story about al-Khidr, Abla Hasan
                      convincingly finds the solution to this dilemma in the
                      Qur’an itself – a solution that centers the Qur’an’s
                      deeply humanitarian message and challenges purposively
                      politicising interpretations of both militant Islamists as
                      well as Islamophobes from around the world. This book is
                      highly engaging and deserves a broad readership, within
                      and beyond Islamic Studies, within and beyond academia,
                      and everyone interested in religious pluralism and
                      co-existence."
                    </blockquote>
                  </div>
                </Col>
                <Col md={4} lg={2}>
                  <figure className="text-center mt-4 mt-sm-0">
                    <StaticImage
                      src="../../images/books/Mario-Peucker.png"
                      width={150}
                      quality={95}
                      formats={["auto", "webp"]}
                      alt="Dr. Mario Peucker"
                      className="rounded-circle mb-3"
                    />
                    <figcaption>Dr. Mario Peucker</figcaption>
                    <figcaption>
                      <small>Victoria University, Melbourne</small>
                    </figcaption>
                    <figcaption>
                      <small>
                        Author of Muslim Citizenship in Liberal Democracies
                      </small>
                    </figcaption>
                  </figure>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="justify-content-center flex-sm-row-reverse">
                <Col md={6} lg={8}>
                  <div className="d-flex flex-column justify-content-center h-100">
                    <blockquote className="text mb-0">
                      "With close textual analysis, Dr. Hasan demolishes claims
                      by those who distort the Qur’an to argue that Islam is the
                      sole legitimate faith and to justify brutality toward
                      non-followers. She ably explains the enigmatic tale of
                      al-Khidr, a mysterious figure whose killing of a young boy
                      is cited by terrorists to rationalize murdering so-called
                      infidels. Contradicting that distortion, Dr. Hasan instead
                      eloquently demonstrates how the power of life and death in
                      matters of faith resides in the hands of the Divine alone.
                      She also draws fascinating parallels to the Biblical story
                      in which Divine intercession spares Abraham’s son, despite
                      a commanded sacrifice. Her work is an insightful
                      contribution both theologically and politically, drawing
                      on the text to advance the ideals of tolerance, compassion
                      and understanding."
                    </blockquote>
                  </div>
                </Col>
                <Col md={4} lg={2}>
                  <figure className="text-center mt-4 mt-sm-0">
                    <StaticImage
                      src="../../images/books/Joseph-Weber.jpg"
                      width={150}
                      quality={95}
                      formats={["auto", "webp"]}
                      alt="Dr. Joseph Weber"
                      className="rounded-circle mb-3"
                    />
                    <figcaption>Dr. Joseph Weber</figcaption>
                    <figcaption>
                      <small>
                        University of Nebraska-Lincoln, Nebraska, USA
                      </small>
                    </figcaption>
                  </figure>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Row>
        {/* Book 2: On Pain and Suffering. A Qur’anic Perspectiven */}
        <Row className="pt-4 mt-5">
          <Col md={6} lg={5}>
            <figure className="text-center mt-4 mt-sm-0">
              <StaticImage
                src="../../images/books/on-pain-and-suffering.jpg"
                width={300}
                quality={95}
                formats={["auto", "webp"]}
                alt="On Pain and Suffering. A Qur’anic Perspective"
                style={{ marginBottom: `1.45rem` }}
                className="shadow-sm rounded"
              />
            </figure>
          </Col>
          <Col md={6} lg={7}>
            <div>
              <h4 className="h2">On Pain and Suffering</h4>
              <h4 className="fw-normal mb-4">A Qur’anic Perspective</h4>
              <p className="text">By Abla Hasan</p>
              <p>Publisher: Lexington Books</p>
              <p>Lexington Studies in Classical and Modern Islamic Thought</p>
              <p>Hardback: February 2022</p>
              <p>ISBN: 9781793650054</p>
              <AmazonBtn link="https://www.amazon.com/Pain-Suffering-Perspective-Lexington-Classical/dp/1793650055" />
            </div>
          </Col>
        </Row>
        <Row>
          <h5 className="text-center mt-4 h2 fw-light">Book Description</h5>
          <Col>
            <p className="text">
              <i>
                Driven by a detailed hermeneutical investigation of the Qur'anic
                story of creation, this book questions the hybrid
                Biblical/Qur'anic narrative that gradually erased the lines that
                define the authentic Qur'anic account. Abla Hasan argues that
                humanity's divine status is the bedrock from which to
                investigate the meaning of human religiosity and address the
                problem of pain and suffering. The detailed analysis in this
                book answers many linguistic and logical pending questions in
                the Qur'an and is a serious departure from popular Muslim
                narratives that seek to alleviate our pain and suffering.
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <h5 className="text-center mt-4 h2 fw-light">Book Reviews</h5>
          <Carousel
            fade
            className="book-reviews border py-5 mt-3 rounded shadow-sm"
          >
            <Carousel.Item>
              <Row className="justify-content-center flex-sm-row-reverse">
                <Col md={6} lg={8}>
                  <div className="d-flex flex-column justify-content-center h-100">
                    <blockquote className="text">
                      "It may be little comfort to think that life is hard
                      because God made it that way, couldn’t God have made it
                      easy instead? These and other similar questions are dealt
                      with at length in this rich, complex book in which
                      Professor Hasan walks the reader through some of the most
                      vexing problems facing religious adherents today: what is
                      the origin of Evil? Why do we suffer? What awaits us at
                      the end of time? And while this book is focused on the
                      Qur’anic message, all will benefit from reading it. After
                      all, pain and suffering are universal phenomena"
                    </blockquote>
                    <blockquote className="text mb-0">
                      "It would be reasonable to ask how the Qur’an, a book
                      understood to have been revealed in Arabia over 1,400
                      years ago, could help us make sense of these issues. But
                      in four beautifully organized chapters, Hasan finds
                      Qur’anic insights on such subjects as the horrors of the
                      Holocaust and the suffering of animals. While her
                      conclusions will not be accepted by all, her arguments and
                      careful explication of the text demand attention. Readers
                      will come away with a new appreciation for the inimitable
                      qualities of the Qur’an, the book that serves as her
                      constant conversation partner"
                    </blockquote>
                  </div>
                </Col>
                <Col md={4} lg={2}>
                  <figure className="text-center mt-4 mt-sm-0">
                    <StaticImage
                      src="../../images/books/Jonathan-Brockopp.jpg"
                      width={150}
                      quality={95}
                      formats={["auto", "webp"]}
                      alt="Dr. Jonathan Brockopp"
                      className="rounded-circle mb-3"
                    />
                    <figcaption>Dr. Jonathan E. Brockopp</figcaption>
                    <figcaption>
                      <small>Pennsylvania State University</small>
                    </figcaption>
                  </figure>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="justify-content-center flex-sm-row-reverse">
                <Col md={6} lg={8}>
                  <div className="d-flex flex-column justify-content-center h-100">
                    <blockquote className="text">
                      "On Pain and Suffering: A Qur'anic Perspective presents a
                      new departure in the literature of Islamic exegesis,
                      Islamic theology, and Islamic thought at large, especially
                      regarding the moment of creation of Adam, and the
                      questions of natural (divine) and human (moral) evil."
                    </blockquote>
                    <blockquote className="text">
                      "Abla Hasan, the theologian-scholar, interprets the
                      Qur'an-by-the-Qur'an and leaves aside classical mainstream
                      interpretations regarding these questions: Why is there
                      evil on Earth? How to theologically respond to it? How is
                      that explanation faithful to the overall Qur'anic message
                      of human vicegerency, and responsibility, on Earth?"
                    </blockquote>
                    <blockquote className="text mb-0">
                      "This book reflects the quest of the modern Muslim
                      intellect to make a more rational connection between human
                      moral responsibilities and the Qur'anic formative stories.
                      For its high relevance, it will certainly be read and
                      discussed widely, beyond exegeses' circles!"
                    </blockquote>
                  </div>
                </Col>
                <Col md={4} lg={2}>
                  <figure className="text-center mt-4 mt-sm-0">
                    <StaticImage
                      src="../../images/books/Dr.Mohammed-Hashas.png"
                      width={150}
                      quality={95}
                      formats={["auto", "webp"]}
                      alt="Dr. Mohammed Hashas"
                      className="rounded-circle mb-3"
                    />
                    <figcaption>Dr. Mohammed Hashas</figcaption>
                    <figcaption>
                      <small>Luiss University of Rome</small>
                    </figcaption>
                  </figure>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="justify-content-center flex-sm-row-reverse">
                <Col md={6} lg={8}>
                  <div className="d-flex flex-column justify-content-center h-100">
                    <blockquote className="text mb-0">
                      "This book is a serious approach to interpreting key
                      verses in the Qur’an, as opposed to the classical “he
                      said, she said” traditions. Any serious scholarship to
                      understand religious scriptures must have three
                      components: scientific rigor, focus on the scripture
                      itself, and a heavy dose of courage irrespective of
                      whether one agrees with her arguments, Dr. Hasan has
                      adhered to these three important principles, thus
                      presenting logical arguments to support her theses. Dr.
                      Hasan’s approach will have a profound impact on
                      interpreting other parts of the Qur’an. Her scholarship
                      will most likely accelerate the ever-growing movement to
                      reconsider traditional Qur’an exegeses."
                    </blockquote>
                  </div>
                </Col>
                <Col md={4} lg={2}>
                  <figure className="text-center mt-4 mt-sm-0">
                    <StaticImage
                      src="../../images/books/omar-ramahi.webp"
                      width={150}
                      quality={95}
                      formats={["auto", "webp"]}
                      alt="Dr. Omar Ramahi"
                      className="rounded-circle mb-3"
                    />
                    <figcaption>Dr. Omar Ramahi</figcaption>
                    <figcaption>
                      <small>University of Waterloo</small>
                    </figcaption>
                  </figure>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="justify-content-center flex-sm-row-reverse">
                <Col md={6} lg={8}>
                  <div className="d-flex flex-column justify-content-center h-100">
                    <blockquote className="text">
                      "Dr. Hasan’s book is a welcome and novel contribution to
                      the literature on the ethical principles of the Qur’an and
                      modern Qur’anic exegesis. Relying on a fresh
                      interpretation of the verses of the Qur’an that focuses on
                      the actual words of the scripture, she shows how
                      traditional interpretations of the Qur’an in classical
                      Islamic jurisprudence fall short and often do not make
                      sense either in light of the text or logically. More
                      importantly, she expounds on the profound implications of
                      her new interpretation for the lives of human beings
                      today."
                    </blockquote>
                    <blockquote className="text">
                      "In particular, Dr. Hasan deftly grapples with timeless
                      problems such as the meaning of life, the moral reasons
                      that God has created us to endure tests and difficulties,
                      the role of human free will, and the true character of
                      evil."
                    </blockquote>
                    <blockquote className="text mb-0">
                      "In her rigorous and wide-ranging analysis of all these
                      problems she articulates a Qur’anic-based conception of
                      humans as agents of God on earth who, in order to fulfill
                      their divinely-ordained responsibilities, must constantly
                      be tested. Her prose is eloquent and her reasoning
                      persuasive, benefiting from extensive research. This is a
                      book that should be read by everyone interested in the
                      contemporary relevance of the Qur’an for important ethical
                      questions facing humanity today."
                    </blockquote>
                  </div>
                </Col>
                <Col md={4} lg={2}>
                  <figure className="text-center mt-4 mt-sm-0">
                    <StaticImage
                      src="../../images/books/Brian_Lepard.jpg"
                      width={150}
                      quality={95}
                      formats={["auto", "webp"]}
                      alt="Prof. Brian D. Lepard"
                      className="rounded-circle mb-3"
                    />
                    <figcaption>Prof. Brian D. Lepard</figcaption>
                    <figcaption>
                      <small>University of Nebraska</small>
                    </figcaption>
                  </figure>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="justify-content-center flex-sm-row-reverse">
                <Col md={6} lg={8}>
                  <div className="d-flex flex-column justify-content-center h-100">
                    <blockquote className="text mb-0">
                      "Fresh, original, and thought-provoking, Abla Hasan’s On
                      Pain and Suffering makes an important contribution to
                      scholarship in the field. Well written and intelligently
                      argued, this Qur'an-centered study stimulates the mind,
                      consoles the heart, and soothes the soul."
                    </blockquote>
                  </div>
                </Col>
                <Col md={4} lg={2}>
                  <figure className="text-center mt-4 mt-sm-0">
                    <StaticImage
                      src="../../images/books/john_andrew_morrow.jpg"
                      width={150}
                      quality={95}
                      formats={["auto", "webp"]}
                      alt="Dr. John Andrew Morrow"
                      className="rounded-circle mb-3"
                    />
                    <figcaption>Dr. John Andrew Morrow</figcaption>
                    <figcaption>
                      <small>
                        Author of The Most Controversial Qur’anic Verse: Why
                        4:34 Does Not Promote Violence Against Women
                      </small>
                    </figcaption>
                  </figure>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Row>
        {/* Book 3: Decoding the Egalitarianism of the Qur'an */}
        <Row className="pt-4 mt-5">
          <Col md={6} lg={5}>
            <figure className="text-center mt-4 mt-sm-0">
              <StaticImage
                src="../../images/books/decoding-the-egalitatarianism.jpg"
                width={300}
                quality={95}
                formats={["auto", "webp"]}
                alt="Decoding the Egalitarianism of the Qur'an"
                style={{ marginBottom: `1.45rem` }}
                className="shadow-sm rounded"
              />
            </figure>
          </Col>
          <Col md={6} lg={7}>
            <div>
              <h4 className="h2">Decoding the Egalitarianism of the Qur'an</h4>
              <h4 className="fw-normal mb-4">
                Retrieving Lost Voices on Gender
              </h4>
              <p className="text">By Abla Hasan</p>
              <p>Publisher: Lexington Books</p>
              <p>Lexington Studies in Classical and Modern Islamic Thought</p>
              <p>Hardback: October 2019</p>
              <p>Paperback: November 2021</p>
              <p>ISBN-10 : 1793609896</p>
              <p>ISBN-13 : 978-1793609892</p>
              <AmazonBtn link="https://www.amazon.com/Decoding-Egalitarianism-Quran-Retrieving-Lexington/dp/1793609896" />
            </div>
          </Col>
        </Row>
        <Row>
          <h5 className="text-center mt-4 h2 fw-light">Book Description</h5>
          <Col>
            <p className="text mt-3">
              <i>
                This volume challenges a long history of normalizing patriarchal
                approaches to the Qur’an and calls for a questioning of the
                interpretive credibility of many inherited Qur’anic
                commentaries. The author presents a fresh reading of the sacred
                text and Islamic teaching traditions as the rediscovery of a
                lost humanitarian and gender-egalitarian textual richness that
                has been poorly and loosely handled for centuries. The book
                stresses the importance of reviewing the interpretive linguistic
                choices that jurists and exegetes over the last fourteen
                centuries have adopted to semantically reshape the Qur’anic
                text. The vigilant reading the author provides of carefully
                chosen texts and commentaries suggests that many interpretive
                approaches to the Qur’an are dominated by sociopolitical factors
                alien to the intrinsic values of the text itself. More
                importantly, inconsistencies across putatively sound books of
                tafsīr indicate that the Qur’anic text often suffers from
                historical and systematic drainage of its humanitarianism,
                gender-egalitarianism, and religious pluralism.
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <h5 className="text-center mt-4 h2 fw-light">Book Reviews</h5>
          <Carousel
            fade
            className="book-reviews border py-5 mt-3 rounded shadow-sm"
          >
            <Carousel.Item>
              <Row className="justify-content-center flex-sm-row-reverse">
                <Col md={6} lg={8}>
                  <div className="d-flex flex-column justify-content-center h-100">
                    <blockquote className="text">
                      "As of now, this work represents the most substantial new
                      contribution to the ongoing discussion about Islam and
                      gender. Women’s and gender studies, Qur’anic studies,
                      religion and gender, and tafsir studies are only a few of
                      the fields that will benefit from this book. As such, it
                      will be especially helpful in college and university-level
                      seminars on gender and religion."
                    </blockquote>
                  </div>
                </Col>
                <Col md={4} lg={2}>
                  <figure className="text-center mt-4 mt-sm-0">
                    <StaticImage
                      src="../../images/books/Muhammad-Misbah.jpeg"
                      width={150}
                      quality={95}
                      formats={["auto", "webp"]}
                      alt="Dr. Edward Becker"
                      className="rounded-circle mb-3"
                    />
                    <figcaption>Muhammad Misbah</figcaption>
                    {/* <figcaption><small>Institut Agama Islam Negeri Kudus</small></figcaption> */}
                  </figure>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="justify-content-center flex-sm-row-reverse">
                <Col md={6} lg={8}>
                  <div className="d-flex flex-column justify-content-center h-100">
                    <blockquote className="text">
                      "Islam and Its holy book, the Qur’an, have traditionally
                      been interpreted as being at odds with the egalitarian
                      ideals of feminism. This book argues that, to the
                      contrary, The Qur’an affirms the equal rights and equal
                      values of men and women."
                    </blockquote>
                  </div>
                </Col>
                <Col md={4} lg={2}>
                  <figure className="text-center mt-4 mt-sm-0">
                    <StaticImage
                      src="../../images/books/Edward-Becker.webp"
                      width={150}
                      quality={95}
                      formats={["auto", "webp"]}
                      alt="Dr. Edward Becker"
                      className="rounded-circle mb-3"
                    />
                    <figcaption>Dr. Edward Becker</figcaption>
                    <figcaption>
                      <small>University of Nebraska</small>
                    </figcaption>
                  </figure>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="justify-content-center flex-sm-row-reverse">
                <Col md={6} lg={8}>
                  <div className="d-flex flex-column justify-content-center h-100">
                    <blockquote className="text">
                      "Hasan, while respecting the sacred nature of the Qur'an,
                      uses her background in linguistic philosophy to provide a
                      much-needed corrective to centuries of
                      (mis)interpretation. The result is a Muslim feminist
                      reading of the Qur'an from inside the tradition."
                    </blockquote>
                  </div>
                </Col>
                <Col md={4} lg={2}>
                  <figure className="text-center mt-4 mt-sm-0">
                    <StaticImage
                      src="../../images/books/sidnie-white-crawford.jpg"
                      width={150}
                      quality={95}
                      formats={["auto", "webp"]}
                      alt="Dr. Sidnie White Crawford"
                      className="rounded-circle mb-3"
                    />
                    <figcaption>Dr. Sidnie White Crawford</figcaption>
                    <figcaption>
                      <small>Princeton Theological Seminary</small>
                    </figcaption>
                  </figure>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="justify-content-center flex-sm-row-reverse">
                <Col md={6} lg={8}>
                  <div className="d-flex flex-column justify-content-center h-100">
                    <blockquote className="text mb-0">
                      "This book helps us to better understand the Qur’an by
                      illuminating the gender egalitarianism of the text. It is
                      useful both for scholars who seek new ways to examine an
                      ancient scripture, and for believers who need new
                      theological resources for their faith."
                    </blockquote>
                  </div>
                </Col>
                <Col md={4} lg={2}>
                  <figure className="text-center mt-4 mt-sm-0">
                    <StaticImage
                      src="../../images/books/Amir_Hussain.jpg"
                      width={150}
                      quality={95}
                      formats={["auto", "webp"]}
                      alt="Dr. Amir Hussain"
                      className="rounded-circle mb-3"
                    />
                    <figcaption>Dr. Amir Hussain</figcaption>
                    <figcaption>
                      <small>Professor of Theological Studies</small>
                    </figcaption>
                    <figcaption>
                      <small>Loyola Marymount University</small>
                    </figcaption>
                  </figure>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="justify-content-center flex-sm-row-reverse">
                <Col md={6} lg={8}>
                  <div className="d-flex flex-column justify-content-center h-100">
                    <blockquote className="text mb-0">
                      "Abla Hasan’s Decoding the Egalitarianism of the Qur’an is
                      the book many readers have been waiting for. Hasan, a
                      Syrian feminist specializing in the linguistics of the
                      Qur’an as well as Women's Studies, succeeds in the task of
                      arguing in an engaging and passionate way for the Qur’an’s
                      egalitarian message."
                    </blockquote>
                  </div>
                </Col>
                <Col md={4} lg={2}>
                  <figure className="text-center mt-4 mt-sm-0">
                    <StaticImage
                      src="../../images/books/Jawid_Mojaddedi.jpg"
                      width={150}
                      quality={95}
                      formats={["auto", "webp"]}
                      alt="Dr. Jawid Mojaddedi"
                      className="rounded-circle mb-3"
                    />
                    <figcaption>Dr. Jawid Mojaddedi</figcaption>
                    <figcaption>
                      <small>Professor of Religion</small>
                    </figcaption>
                    <figcaption>
                      <small>Rutgers University</small>
                    </figcaption>
                  </figure>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="justify-content-center flex-sm-row-reverse">
                <Col md={6} lg={8}>
                  <div className="d-flex flex-column justify-content-center h-100">
                    <blockquote className="text mb-0">
                      "In Decoding the Egalitarianism of the Qur’an, Hasan aims
                      to provide new interpretations of qur’anic verses related
                      to gender and family—or, at least verses believed by
                      others to be about the family—through a Qur’an-only
                      approach. She shows that it is possible, meaningful, and
                      necessary to read the Qur’an outside of any external
                      sources such as hadiths, fiqh or Islamic jurisprudence,
                      tafsir, and other traditional ways through which the
                      Qur’an has historically been read. This allows her to
                      offer new interpretations of many verses, such as those
                      related to polygyny, the hijab, child marriage, the claim
                      that men have a degree of superiority over women, and
                      verse 4:34, which is traditionally believed to grant
                      husbands the right to physically discipline their wives.
                      Using her background in the linguistics of the Qur’an, she
                      analyzes the textual context of each verse in question as
                      well as in specific key terms to highlight what she argues
                      are the original, intended meanings of these verses. "
                    </blockquote>
                  </div>
                </Col>
                <Col md={4} lg={2}>
                  <figure className="text-center mt-4 mt-sm-0">
                    <StaticImage
                      src="../../images/books/Shehnaz_Haqqani.jpg"
                      width={150}
                      quality={95}
                      formats={["auto", "webp"]}
                      alt="Dr. Shehnaz Haqqani"
                      className="rounded-circle mb-3"
                    />
                    <figcaption>Dr. Shehnaz Haqqani</figcaption>
                    <figcaption>
                      <small>Mercer University</small>
                    </figcaption>
                  </figure>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </>
  )
}

export default Books
