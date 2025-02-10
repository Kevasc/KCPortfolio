import React from "react";
import "./StarSeekerProject.css";

const StarSeekerProject = () => {
  return (
    <div id="projects" className="starseeker-section">
      <div className="starseeker-right-column">
        <div className="starseeker-text-container">
          <h1 className="starseeker-column-title">Star Seeker</h1>
          <p className="starseeker-column-text">
            Star Seeker is a React-based web app that interacts with REST API to
            deliver a seamless and informative experience for space travellers.
            Calculate the cost of your interstellar journey, discover efficient
            routes through a network of gates, and browse through detailed gate
            information.
            <br /> Deployed on Vercel.
            <br />
            <br />
            <br />
            <u>
              <h2>Built With:</h2>
              <br />
            </u>
            React | JavaScript | Redux | REST API | HTML | CSS | Material UI
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
