import React from "react";
import Header from "./Header";
import "./Contact.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Contact() {
  return (
    <>
      <Header darkText className="contact-header" id="contact-header" />

      <div
        id="contact-section"
        style={{
          backgroundImage: `url('/water33.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
        className="contactBackground"
      >
        <Container fluid className="p-0">
          <Row className="g-0 contactRow">
            {/* LEFT COLUMN with heading */}
            <Col md={6}>
              <div className="leftColumn">
                <h1 className="contactTitle">CONTACT</h1>
              </div>
            </Col>

            {/* RIGHT COLUMN with translucent white overlay */}
            <Col md={6} className="rightOverlay">
              <div className="contactIntro">
                <p>
                  Feel free to reach out if you have any questions or would like
                  to arrange your free 30-minute consultation.
                </p>
              </div>

              <div className="contactInfo">
                {/* Email Contact */}
                <div className="contactItem">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#002A3C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a href="mailto:rieba.ilze@gmail.com">rieba.ilze@gmail.com</a>
                </div>

                {/* WhatsApp Contact */}
                <div className="contactItem">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#002A3C"
                  >
                    <path d="M12.04 2.003c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.47 3.47 1.36 4.97l-1.44 5.28 5.4-1.42c1.44.79 3.07 1.2 4.64 1.2h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.05-5.17-2.93-7.05s-4.39-2.98-7.05-2.98zm.01 18.06c-1.34 0-2.66-.35-3.83-1.02l-.27-.15-3.21.84.86-3.12-.17-.29c-.83-1.4-1.28-3.01-1.28-4.65 0-4.9 3.98-8.88 8.88-8.88 2.37 0 4.59.92 6.27 2.59 1.68 1.67 2.61 3.89 2.61 6.26 0 4.9-3.98 8.88-8.88 8.88zm4.7-6.61c-.26-.13-1.52-.75-1.75-.84-.23-.09-.4-.13-.57.13-.17.26-.66.84-.81 1.01-.15.17-.3.2-.56.07-.26-.13-1.08-.4-2.05-1.28-.76-.67-1.28-1.5-1.43-1.75-.15-.26-.02-.4.11-.53.11-.11.26-.3.39-.44.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.07-.13-.57-1.38-.79-1.89-.21-.5-.42-.43-.57-.44-.15 0-.32-.01-.5-.01s-.45.06-.68.32c-.23.26-.89.87-.89 2.13s.91 2.47 1.04 2.64c.13.17 1.78 2.72 4.33 3.82.6.26 1.07.41 1.44.52.6.19 1.15.17 1.59.1.48-.07 1.52-.62 1.73-1.21.21-.6.21-1.12.15-1.21-.07-.09-.23-.15-.49-.28z" />
                  </svg>
                  <a
                    href="https://wa.me/447508357690"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Me
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
