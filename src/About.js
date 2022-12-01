import React from "react";

export default function About() {
  return (
    <div className="AboutContainer mt-6">
      <div class="container">
        <div class="row">
          <div class="col-lg-6"></div>
          <div class="col-lg-6">
            <h3 id="about-me-section">About me </h3>
            <div class="mt-4">
              <p className="aboutMeText">
                I learned to code with&nbsp;
                <a
                  href="https://www.shecodes.io/graduates/14434-ilze-rieba"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="textLink"
                >
                  SheCodes
                </a>
                &nbsp;( HTML, CSS, JavaScript, React.js). I continue learning as
                Junior Front-End Developement Intern at&nbsp;
                <a
                  href="https://www.coworksurf.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="textLink"
                >
                  Coworksurf
                </a>
                . I love to design and create websites and work on coding
                projects with the{" "}
                <a
                  href="https://theproudbanana.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="textLink"
                >
                  Proud Banana
                </a>
                .
              </p>
              <p className="aboutMeText">
                When I don’t code, I am learning illustration and digital
                animation, surf, draw, read books, play beach volleyball,
                practice yoga and work as a part-time Fundraising and Operations
                Manager at the &nbsp;
                <a
                  href="https://www.stuarthallfoundation.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="textLink"
                >
                  Stuart Hall Foundation.
                </a>
              </p>

              <p className="aboutMeText">
                I have 15+ years of experience setting up and running
                operational processes in small organisations, delivering complex
                projects and managing events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
