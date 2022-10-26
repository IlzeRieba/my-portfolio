import React from "react";

export default function Work() {
  return (
    <div className="WorkContainer mt-7">
      <div clasName="workHeading">
        <h4 id="my-work">selected work and skills</h4>
      </div>

      <hr />
      <div className="selectedWorkContainer">
        <a
          href="https://frabjous-blancmange-32a015.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="projectDetails mt-5">
            <div className="container">
              <div className="row">
                <div className="col-9">
                  <h5 className="projectName">Dictionary</h5>
                  <p className="projectSkills">
                    React.js - CSS - HTML - JavaScript
                  </p>
                </div>
                <div className="col-3">
                  <p className="projectYear"> '22 </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

      <hr />
      <div className="selectedWorkContainer">
        <a
          href="https://jade-pegasus-9e9ab7.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="projectDetails mt-5">
            <div className="container">
              <div className="row">
                <div className="col-9">
                  <h5 className="projectName">Weather App</h5>
                  <p className="projectSkills">
                    React.js - CSS - HTML - JavaScript
                  </p>
                </div>
                <div className="col-3">
                  <p className="projectYear"> '22 </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <hr />
      <div className="selectedWorkContainer">
        <a
          href="https://sparkly-pothos-39a070.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="projectDetails mt-5">
            <div className="container">
              <div className="row">
                <div className="col-9">
                  <h5 className="projectName">Eliza Beri's Portfolio</h5>
                  <p className="projectSkills">CSS - HTML - JavaScript</p>
                </div>
                <div className="col-3">
                  <p className="projectYear"> '22 </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <hr />
    </div>
  );
}