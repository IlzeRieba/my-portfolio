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
                My name is Ilze Rieba. I’m originally from Latvia, but I’ve been
                living abroad since I was 19. I spent my first ten years away in
                London, but in 2018 I left the city—it had become a lonely and
                intensely hard place to be. With little savings and no clear
                plan, I found myself in a small fisherman’s village in Portugal,
                where I stayed for the next four years. It was there that I
                realised how important it is for me to be close to
                nature—especially the ocean. I began surfing and found a way to
                work remotely so I could stay near the water. Water has always
                been deeply meaningful to me, and I’ve come to understand that
                simply being near it is essential for my wellbeing.
              </p>
              <p>
                Throughout my life, I’ve struggled with depression and the deep,
                lasting impact of trauma. I’ve been fortunate to walk the path
                of healing—sometimes supported by loved ones or caring
                strangers, and often entirely alone. I’ve never truly felt seen
                or heard; it’s a wound I still carry and continue to work with.
              </p>
              <img
                src="/profile.png"
                alt="Counsellor"
                className="img-fluid rounded my-4"
              />
              <p>
                Ocean Waves Therapy was born out of my love for water and my
                wish to offer a space where others, too, can feel seen, heard,
                and accepted—just as they are. Through my own lived experience
                and by nature, I am an attentive and empathetic listener. I
                offer a space where you can show up exactly as you are, with
                whatever you may be carrying.
              </p>

              <p>
                I trained as a Trauma-Informed Somatic Counsellor at the
                International School of Holistic Healing, accredited by the
                ACCPH. I’m also a certified Yoga Teacher. I bring together these
                tools and my personal experiences to create a warm, gentle, and
                welcoming space for our work together.
              </p>
              <p>
                When I’m not surfing, I work as Head of Operations and
                Fundraising for a wonderful charity, the Stuart Hall Foundation.
                I’m also developing a creative practice that weaves together
                illustration, design, and coding. 
                </p>
                <p>
                You can read more about my
                therapeutic approach <Link to="/work">here</Link>. If you’re interested in
                working with me, please don’t hesitate to reach out.
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
