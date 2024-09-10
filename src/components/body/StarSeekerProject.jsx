import React from "react";
import "./StarSeekerProject.css";

const StarSeekerProject = () => {
  return (
    <div id="projects" className="starseeker-section">
      <div className="starseeker-right-column">
        <div className="starseeker-text-container">
          <h1 className="starseeker-column-title">Star Seeker </h1>
          <p className="starseeker-column-text">
            Star Seeker is a sleek space travel website I made to showcase my
            skills using APIS, built with React with Redux as storage. <br />
            This project is currently under active development, with a react
            native mobile app under construction also.
            <br />
            <br></br>
            <u>
              <h2>Built With:</h2>
            </u>
            React | Redux | HTML | CSS
          </p>
        </div>
      </div>
      <div className="starseeker-left-column">
        <a
          href="https://github.com/Kevasc/star-seeker"
          className="starseeker-github-link"
          target="_blank"
          rel="noreferrer"
        >
          <div className="starseeker-github-logo" />
        </a>
      </div>
    </div>
  );
};
export default StarSeekerProject;
