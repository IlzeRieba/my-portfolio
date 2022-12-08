import React from "react";



export default function Footer() {
  return (
    <div className="FooterContainer mt-7 pb-5 ps-3">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h3 id="get-in-touch"> get in touch </h3>
          </div>
          <div class="col-2 pt-2">
            <a
              href="mailto:rieba.ilze@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              class="contactLink"
            >
              Email
            </a>
          </div>

          <div class="col-2 pt-2">
            <a
              href="https://github.com/IlzeRieba"
              target="_blank"
              rel="noopener noreferrer"
              class="contactLink"
              title="GitHub"
            >
              GitHub
            </a>
          </div>
          <div class="col-2 pt-2">
            <a
              href="https://uk.linkedin.com/in/ilze-rieba-58492521"
              target="_blank"
              rel="noopener noreferrer"
              class="contactLink"
              title="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}