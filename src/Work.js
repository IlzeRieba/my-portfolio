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
                <h2>Online Sessions</h2>
                <p>
                  Before we begin, I offer a free 30-minute consultation so we
                  can get to know each other and see if it feels like a good
                  fit.
                </p>
              </div>

              <div style={{ marginBottom: "50px" }}>
                <h2>What to Expect</h2>
                <p>
                  In-person sessions are held in a calm and private space,
                  designed to help you feel at ease as we work together.
                  In-person sessions are held in a calm and private space,
                  designed to help you feel at ease as we work together.In-person sessions are held in a calm and private space,
                  designed to help you feel at ease as we work together.
                </p>
              </div>

              <div style={{ marginBottom: "50px" }}>
                <h2>My approach</h2>
                <p>
                  In-person sessions are held in a calm and private space,
                  designed to help you feel at ease as we work
                  together.In-person sessions are held in a calm and private
                  space, designed to help you feel at ease as we work
                  together.In-person sessions are held in a calm and private
                  space, designed to help you feel at ease as we work
                  together.In-person sessions are held in a calm and private
                  space, designed to help you feel at ease as we work together.
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
