import React from "react";



export default function Footer() {
  return (
    <div className="FooterContainer mt-7 mb-5 grow">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <h4 id="get-in-touch"> get in touch </h4>
          </div>
          <div class="col-lg-1">
            <p>
              <a
                href="https://github.com/IlzeRieba"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
          </div>
          <div class="col-lg-1">
            <p>
              <a
                href="https://uk.linkedin.com/in/ilze-rieba-58492521"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>
          <div class="col-1">
            <p>
              <a
                href="mailto:rieba.ilze@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}