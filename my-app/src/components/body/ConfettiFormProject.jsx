import React from "react";
import "./ConfettiFormProject.css";

const ConfettiFormProject = () => {
  return (
    <div id="projects" className="confetti-section">
      <div className="confetti-left-column">
        <a
          href="https://github.com/Kevasc/confetti-form"
          className="confetti-github-link"
          target="_blank"
          rel="noreferrer"
        >
          <div className="confetti-github-logo" />
        </a>
      </div>

      <div className="confetti-right-column">
        <div className="confetti-text-container">
          <h1 className="confetti-column-title">Confetti Form</h1>
          <p className="confetti-column-text">
            This project contains an HTML form that collects user information
            including first name, last name, email, and date of birth. When the
            form is submitted, it checks the last digit of the birth year and
            launches a confetti animation if the year ends in "5" or "0". If the
            year does not end in "5" or "0", it shows an alert message.
            <br />
            <br></br>
            <u>
              <h2>Built With:</h2>
            </u>
            HTML | CSS | Javascript | Bootstrap for form styling
          </p>
        </div>
      </div>
    </div>
  );
};
export default ConfettiFormProject;
