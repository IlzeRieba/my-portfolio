import React from "react";

export default function Work() {
  return (
    <div className="WorkContainer mt-6">
      <div clasName="workHeading">
        <h4>selected work and skills</h4>
      </div>

      <hr className="WorkDivider" />
      <div className="selectedWorkContainer" id="my-work">
        <a
          href="https://frabjous-blancmange-32a015.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="projectDetails md:mt-5 me-5">
            <div className="row">
              <div className="col-md-9">
                <h5 className="projectName">Dictionary</h5>
                <p className="projectSkills">
                  React.js - CSS - HTML - JavaScript
                </p>
              </div>
              <div className="col-md-3 d-none d-md-block">
                <p className="projectYear"> '22 </p>
              </div>
            </div>
          </div>
        </a>
      </div>

      <hr className="WorkDivider" />
      <div className="selectedWorkContainer ">
        <a
          href="https://jade-pegasus-9e9ab7.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="projectDetails md:mt-5 me-5">
            <div className="row">
              <div className="col-md-9">
                <h5 className="projectName">Weather App</h5>
                <p className="projectSkills">
                  React.js - CSS - HTML - JavaScript
                </p>
              </div>
              <div className="col-md-3 d-none d-md-block">
                <p className="projectYear"> '22 </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <hr className="WorkDivider" />
      <div className="selectedWorkContainer">
        <a
          href="https://sparkly-pothos-39a070.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="projectDetails md:mt-5 me-5">
            <div className="row">
              <div className="col-md-9">
                <h5 className="projectName">Eliza's Portfolio</h5>
                <p className="projectSkills">CSS - HTML - JavaScript</p>
              </div>
              <div className="col-md-3 d-none d-md-block">
                <p className="projectYear "> '22 </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <hr className="WorkDivider" />
    </div>
  );
}