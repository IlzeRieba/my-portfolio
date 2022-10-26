import React from "react";

export default function Header() {
    return (
      <div className="navBarContainer">
        <nav class="navbar navbar-expand-lg navbar-light mt-5">
          <a class="navbar-brand" href="https://www.ilzerieba.com">
            Ilze Rieba
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link " href="#about-me-section">
                  about
                  <span class="sr-only"></span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#my-work">
                  my work
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#get-in-touch">
                  contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
}