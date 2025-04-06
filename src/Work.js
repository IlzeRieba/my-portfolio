import React from "react";
import Header from "./Header";
import "./Work.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Work() {
  return (
    <>
      <Header darkText />

      <div
        id="work-section"
        style={{
          backgroundColor: "#fff",
          minHeight: "100vh",
        }}
      >
        <Container fluid className="p-0">
          <Row className="g-0" style={{ minHeight: "100vh" }}>
            {/* LEFT COLUMN */}
            <Col
              md={5}
              style={{
                backgroundColor: "white",
                paddingTop: "190px",
                paddingLeft: "60px",
              }}
            >
              <h1 className="workHeading">SESSIONS</h1>
            </Col>

            {/* RIGHT COLUMN */}
            <Col
              md={7}
              style={{
                backgroundColor: "white",
                paddingTop: "190px",
                paddingRight: "60px",
                paddingLeft: "60px",
                paddingBottom: "60px",
              }}
            >
              <div style={{ marginBottom: "50px" }}>
                <h2>My approach</h2>
                <p>
                  I am a certified Trauma-Informed Somatic Counsellor. I offer a space
                  where you can show up exactly as you are, with whatever you
                  may be carrying. The pace and shape of our sessions will
                  depend on you and where you’re at in your journey. We may
                  explore somatic practices if that feels comfortable for you,
                  or create space for more traditional talking therapy. I’m also
                  trained in parts work, bilateral processing, somatic
                  processing, and other integrative techniques, which we may
                  bring in depending on what feels supportive for you. Our
                  relationship and the trust we build together are central to my
                  therapeutic approach. I usually work on a long-term, regular
                  basis, though we can always discuss what feels right for you.
                </p>
              </div>

              <div style={{ marginBottom: "50px" }}>
                <h2>What to expect</h2>
                <p>
                  We would begin with an initial 30-minute consultation call,
                  where we can get to know each other and see if we’re a good
                  fit to work together. If we decide to move forward, we can
                  then schedule regular sessions. How often and when we meet
                  will depend on your availability and resources. I'm happy to
                  explore this during our consultation and find a rhythm that
                  feels right for you.{" "}
                </p>
              </div>

              <div style={{ marginBottom: "50px" }}>
                <h2>Online sessions</h2>
                <p>
                  At the moment, I offer sessions online only — either via Zoom
                  or WhatsApp call, depending on what works best for you. Each
                  session lasts 60 minutes. I typically work on a long-term,
                  regular basis, as building a trusting relationship is central
                  to my approach. However, I’m also open to shorter-term therapy
                  if that’s what you’re seeking.
                </p>
              </div>

              <div style={{ marginBottom: "50px" }}>
                <h2>Price</h2>
                <p>
                  The standard rate for a 60-minute session is £60. However, I
                  offer a sliding scale. If you feel drawn to work together but
                  the full rate isn’t accessible to you, please don’t hesitate
                  to reach out — I’m happy to offer a discounted rate.
                  Similarly, if you're in a position to contribute a little
                  more, that’s also warmly welcomed.{" "}
                </p>

                <div style={{ marginTop: "50px" }}>
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
