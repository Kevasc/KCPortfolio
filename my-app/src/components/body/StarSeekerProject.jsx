import React from "react";
import "./StarSeekerProject.css";

const StarSeekerProject = () => {
  return (
    <div id="projects" className="starseeker-section">
      <div className="starseeker-left-column">
        <div className="starseeker-text-container">
          <h1 className="starseeker-column-title">Star Seeker</h1>
          <p className="starseeker-column-text">
            Star Seeker is a user-friendly application designed to help you
            explore the cosmos effortlessly. Whether you're planning
            interstellar journeys, calculating travel costs, or searching for
            the most affordable routes, Star Seeker provides the tools you need.
            The app features a sleek design and seamless functionality, making
            it your ideal companion for cosmic adventures.
            <br />
            <br></br>
            <h2>Built With:</h2>
            React | Redux | CSS | HTML
          </p>
        </div>
      </div>
      <div className="starseeker-right-column">
        <div className="starseeker-screenshot">
          <a
            href="https://github.com/Kevasc/star-seeker"
            className="github-link"
            target="_blank"
            rel="noreferrer"
          >
            {""}
          </a>
        </div>
      </div>
    </div>
  );
};
export default StarSeekerProject;
