import React from "react";
import Header from "./Header";
import "./About.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function About() {
  return (
    <>
      {/* Header with dark text */}
      <Header darkText />

      <div id="about-me-section" className="aboutContainer">
        <Container>
          <Row className="pt-5 align-items-start">
            {/* LEFT COLUMN */}
            <Col md={6}>
              <h1 className="aboutTitle">ABOUT</h1>
            </Col>

            {/* RIGHT COLUMN */}
            <Col md={6}>
              <p>
                My name is Ilze Rieba. I’m a certified trauma-informed
                counsellor, offering a warm and supportive space. I work in a
                way that’s guided by you, with deep respect for your experiences
                and your pace. My own life has shaped how I show up. I try to
                create a space that feels calm, open, and accepting — a space
                where you can be yourself. I believe healing happens in safe
                connection, and that the relationship we build together matters
                most.
              </p>
              <img
                src="/profile.png"
                alt="Counsellor"
                className="img-fluid rounded my-4"
              />
              <p>
                I also bring training in yoga and body-based practices, which
                can gently support the work when it feels right. But mostly, I
                focus on listening, being present, and following your lead. I
                trained with the International School of Holistic Healing and am
                a certified Trauma-Informed Somatic Counsellor, accredited by
                the ACCPH.
              </p>

              <p>
                I also bring training in yoga and body-based practices, which
                can gently support the work when it feels right. But mostly, I
                focus on listening, being present, and following your lead. I
                trained with the International School of Holistic Healing and am
                a certified Trauma-Informed Somatic Counsellor, accredited by
                the ACCPH.
              </p>
              <div style={{ marginTop: "50px" }}>
                <Link to="/contact">
                  <button className="workButton">get in touch</button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
