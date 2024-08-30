import React from "react";
import "./StarSeekerProject.css";

const StarSeekerProject = () => {
  return (
    <div id="projects" className="starseeker-section">
      <div className="starseeker-right-column">
        <div className="starseeker-text-container">
          <h1 className="starseeker-column-title">Star Seeker Form</h1>
          <p className="starseeker-column-text">
            Star Seeker is a user-friendly application designed to help you
            explore the cosmos effortlessly. Whether you're planning
            interstellar journeys, calculating travel costs, or searching for
            the most affordable routes, Star Seeker provides the tools you need.
            The app features a sleek design and seamless functionality, making
            it your ideal companion for cosmic adventures. The project is
            currently under active development, with a react native mobile app
            under construction also.
            <br />
            <br></br>
            <h2>Built With:</h2>
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
