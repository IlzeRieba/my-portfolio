import React from "react";


export default function Footer() {
  return (
    <div className="FooterContainer mt-6 mb-5 grow">
      <div class="container">
        <div class="row">
          <div class="col-3">
            <h3> Get in touch </h3>
          </div>
          <div class="col-2">
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
          <div class="col-2">
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
          <div class="col-2">
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