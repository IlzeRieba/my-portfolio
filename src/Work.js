import React from "react";
import Header from "./Header";
import "./Work.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Work() {
  return (
    <>
      {/* Header with dark text */}
      <Header darkText />

      <div id="work-section" className="workContainer">
        <Container>
          <Row className="pt-5 align-items-start">
            {/* LEFT COLUMN */}
            <Col md={6}>
              <h1 id="sessionsTitle" className="workTitle">
                SESSIONS
              </h1>
            </Col>

            {/* RIGHT COLUMN */}
            <Col md={6} className="rightCol">
              <div className="sectionBlock">
                <h2>How somatic therapy works</h2>
                <p>
                  Somatic therapy is a gentle, holistic approach that connects
                  the mind, body, and emotions. It’s a gradual process that
                  honours your body’s wisdom and moves at a pace that feels
                  right for you. Together, we’ll learn to tune into the body’s
                  sensations and explore the emotions and experiences it may
                  quietly hold. We’ll begin by establishing a sense of safety
                  within yourself while also getting to know how your nervous
                  system responds to stress, and how to support yourself in
                  those moments. As a sense of stability grows, we’ll gently
                  explore memories, emotions, and patterns from the past,
                  noticing how they may still shape your present. Alongside
                  healing old wounds, we’ll also create space for joy,
                  connection, and the unfolding of the person you’ve always been
                  beneath it all.
                  <br />
                  <br />
                  I’m a certified Trauma-Informed Somatic Counsellor trained in
                  parts work, bilateral processing, somatic processing, and
                  other integrative techniques, which we can bring into our work
                  depending on what feels most supportive for you. I offer a
                  space where you can come exactly as you are, with whatever you
                  may be carrying. The relationship we build and the trust we
                  create together are central to this work.
                </p>
              </div>

              <div className="sectionBlock">
                <h2>Online sessions</h2>
                <p>
                  We would begin with an initial free 30-minute consultation
                  call, where we can get to know each other and see if we’re a
                  good fit to work together. If we decide to move forward, we
                  can then schedule regular sessions. How often and when we meet
                  will depend on your availability and resources. I'm happy to
                  explore this during our consultation and find a rhythm that
                  feels right for you.
                  <br />
                  <br />
                  At the moment, I offer sessions online only - either via Zoom
                  or WhatsApp call, depending on what works best for you. Each
                  session lasts 60 minutes. I typically work on a long-term,
                  regular basis, as building a trusting relationship is central
                  to my approach. However, I’m also open to shorter-term therapy
                  if that’s what you’re seeking.
                </p>
              </div>

              <div className="sectionBlock">
                <h2>Price</h2>
                <p>
                  The standard rate for a 60-minute session is £60. However, I
                  offer a sliding scale. If you feel drawn to work together but
                  the full rate isn’t accessible to you, please don’t hesitate
                  to reach out - I’m happy to offer a discounted rate.
                  Similarly, if you're in a position to contribute a little
                  more, that’s also warmly welcomed.
                </p>

                <div className="ctaButtonWrapper">
                  <Link to="/contact">
                    <button className="workButton">get in touch</button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
