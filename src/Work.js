import React, { useState } from "react";
import Header from "./Header";
import "./Work.css";
import { Container, Row, Col, Collapse, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Work() {
  const [counsellingOpen, setCounsellingOpen] = useState(false);
  const [surfOpen, setSurfOpen] = useState(false);

  return (
    <>
      <Header darkText />

      <div id="work-section" className="workContainer">
        {/* === Approach Section === */}
        <div id="approachSection" className="sectionWrapper approachSection">
          <Container>
            <Row className="pt-5 align-items-start">
              <Col md={6}>
                <h1 id="sessionsTitle" className="workTitle">
                  WHAT I OFFER
                </h1>
              </Col>
              <Col md={6} className="rightCol">
                <div className="sectionBlock">
                  <p>
                    I offer a holistic, trauma-informed approach to wellbeing.
                    As a certified Trauma-Informed Somatic Counsellor and
                    trained Surf Therapy Facilitator, I provide online
                    counselling sessions as well as one-to-one or group surf
                    therapy sessions. All my work is rooted in a
                    trauma-informed, holistic approach that connects mind, body,
                    and emotions. The process is gradual, honouring your body’s
                    wisdom and moving at a pace that feels right for you.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* 1-1 COUNSELLING SECTION */}
        <div id="counsellingSection" className="sectionWrapper">
          <Container>
            <Row className="pt-0 align-items-start">
              <Col md={6}>
                <h3 className="workTitle">1-1 COUNSELLING</h3>
              </Col>
              <Col md={6}>
                <div
                  className="sectionBlock counsellingDropdown"
                  id="previewText"
                >
                  <p>
                    I offer trauma-informed somatic counselling that combines
                    traditional talking therapy with body-based techniques.
                    Together, we’ll explore thoughts, emotions, and physical
                    sensations, helping you process past experiences, build
                    self-compassion, and reconnect with joy and connection.
                    Sessions are online, flexible, and tailored to your pace,
                    with tools and guidance to support lasting wellbeing.
                  </p>

                  <Collapse in={counsellingOpen}>
                    <div className="dropdownContent darkBg">
                      <h2>How somatic counselling works</h2>
                      <p>
                        Somatic counselling combines traditional talking therapy
                        with an exploration of the body’s sensations and the
                        emotions it may quietly hold. Our bodies often store
                        memories of painful experiences, sometimes without us
                        realising it, and can react to external triggers. In our
                        sessions, you’ll learn tools to tune into these
                        sensations and better understand how your nervous system
                        responds. By noticing what arises and meeting it with
                        curiosity and care, you create space to process what
                        once felt stuck, fostering self-compassion and
                        acceptance. Alongside healing, we make space for joy,
                        connection, and the unfolding of your authentic self.
                      </p>

                      <h2>My speciality</h2>
                      <p>
                        I trained at the International School of Holistic
                        Healing, drawing on trauma-informed approaches such as:
                        <ul>
                          <li>
                            Parts work (inspired by Internal Family Systems)
                          </li>
                          <li>Somatic processing </li>
                          <li>
                            Bilateral stimulation techniques informed by EMDR
                            principles
                          </li>
                        </ul>
                        I’m also a certified yoga teacher and have completed an
                        8-week Mindfulness-Based Stress Reduction (MBSR) course.
                        <br />I integrate these tools — along with my own lived
                        experience — to provide therapy that is gentle, attuned,
                        and collaborative. The trust we build together is
                        central to this work.
                      </p>

                      <h2>Online Sessions</h2>
                      <p>
                        We start with a free 30-minute consultation to see if
                        we’re a good fit. If we decide to move forward, we can
                        schedule regular sessions tailored to your availability
                        and needs. Currently, I offer 60-minute sessions online
                        via Zoom or WhatsApp. I usually work on a long-term
                        basis, but shorter-term therapy is also available.
                      </p>

                      <h2>Pricing</h2>
                      <p>
                        The standard rate is £60 per 60-minute session. I offer
                        a sliding scale: if the full rate isn’t accessible,
                        please reach out - I’m happy to offer a discounted rate.
                        If you can contribute more, that’s warmly welcomed.
                      </p>
                    </div>
                  </Collapse>
                  <div className="buttonWrapper">
                    {/* Existing Read More / Show Less Button */}
                    <Button
                      onClick={() => setCounsellingOpen(!counsellingOpen)}
                      aria-controls="counsellingDropdown"
                      aria-expanded={counsellingOpen}
                      id="counsellingButton"
                      className="dropdownButton"
                    >
                      {counsellingOpen ? "Show less" : "Read more"}
                    </Button>

                    {/* New Schedule a Session Button linking to contact page */}
                    <Link to="/contact">
                      <Button id="scheduleButton">Book a Session</Button>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* === Surf Therapy Section === */}
        <div id="surfSection" className="sectionWrapper surfSection">
          <Container>
            <Row className="pt-5 align-items-start">
              <Col md={6}>
                <h3 className="workTitle">SURF THERAPY</h3>
              </Col>
              <Col md={6}>
                <div className="sectionBlock surfDropdown">
                  <p>
                    Water offers healing - being in it, near it, and hearing it.
                    Surf therapy is a process of healing through surfing,
                    community, and connection with the ocean. It helps you
                    reclaim your power and reconnect with your body, nature, and
                    community. I offer one-to-one or group sessions, suitable
                    for beginners or those with some experience. Each session is
                    tailored to your needs, with a trauma-informed approach that
                    honours your pace and comfort.
                  </p>

                  <Collapse in={surfOpen}>
                    <div className="dropdownContent lightBg">
                      <h2 className="surfSectionH2">What is Surf Therapy?</h2>
                      <p>
                        I am trained in the Groundswell Institute Surf Therapy
                        Programme, which draws on decades of clinical
                        experience, lived wisdom, and global research. Through
                        movement and play in the ocean, mindful awareness,
                        connection with nature, and community, surf therapy
                        helps you explore emotions, build resilience, and
                        experience joy in the present moment.
                      </p>

                      <h2 className="surfSectionH2">How it works</h2>
                      <p className="surfSectionp">
                        Surf therapy can benefit anyone experiencing stress,
                        trauma, or a desire to deepen their connection with self
                        and nature. Sessions start with grounding and reflection
                        on land, moving into the water only if it feels safe and
                        comfortable.
                        <br />
                        <br />
                        <ul>
                          <li>
                            <strong>1-1 and group sessions</strong>: I offer
                            both 1-to-1 sessions, tailored specifically to your
                            pace, and group sessions, either as standalone
                            experiences or as part of an 8-week course.
                          </li>
                          <li>
                            {" "}
                            <strong>Surf therapy vs surf coaching</strong>:
                            There is no pressure to perform or improve
                            technique; the focus is on connecting with the ocean
                            in a way that feels comfortable for you.{" "}
                          </li>
                          <li>
                            <strong> Experience required</strong>: No prior
                            surfing experience is necessary. If you already
                            surf, sessions can complement your practice and meet
                            your needs.
                          </li>
                        </ul>
                      </p>

                      <h2 className="surfSectionH2">Booking & Location</h2>
                      <p className="surfSectionp">
                        Sessions can be arranged individually or in small
                        groups. I am available in Portugal (Lisbon, Ericeira,
                        Peniche), and occasionally in Bali and the UK.
                      </p>
                      <h2 className="surfSectionH2">
                        Community Programmes and Grief Circles
                      </h2>
                      <p className="surfSectionp">
                        I also run free 8-week community sessions and individua
                        grief circles, with weekly 1.5-hour sessions. Upcoming
                        circles are advertised on my Instagram or by contacting
                        me directly.
                      </p>
                    </div>
                  </Collapse>

                  <div className="buttonWrapper">
                    <Button
                      onClick={() => setSurfOpen(!surfOpen)}
                      aria-controls="surfDropdown"
                      aria-expanded={surfOpen}
                      id="surftherapyButton"
                    >
                      {surfOpen ? "Show less" : "Read more"}
                    </Button>

                    <Button id="scheduleSurfButton" as={Link} to="/contact">
                      Book a Session
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
