import React from "react";
import "./StarSeekerProject.css";

const StarSeekerProject = () => {
  return (
    <div id="projects" className="starseeker-section">
      <div className="starseeker-right-column">
        <div className="starseeker-text-container">
          <h1 className="starseeker-column-title">Starseeker Form</h1>
          <p className="starseeker-column-text">
            This project contains an HTML form that collects user information
            including first name, last name, email, and date of birth. When the
            form is submitted, it checks the last digit of the birth year and
            launches a confetti animation if the year ends in "5" or "0". If the
            year does not end in "5" or "0", it shows an alert message.
            <br />
            <br></br>
            <h2>Built With:</h2>
            HTML | CSS | Javascript | Bootstrap for form styling
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
