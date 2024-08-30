import React from "react";
import "./ConfettiFormProject.css";

const ConfettiFormProject = () => {
  return (
    <div id="projects" className="confetti-section">
      <div className="confetti-left-column">
        <div className="confetti-screenshot">
          <a
            href="https://github.com/Kevasc/confetti-form"
            className="github-link"
            target="_blank"
            rel="noreferrer"
          >
            {""}
          </a>
        </div>
      </div>
      <div className="confetti-right-column">
        <div className="confetti-column-width">
          <h1 className="confetti-column-title">Confetti Form</h1>
          <p className="confetti-column-text">
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
    </div>
  );
};
export default ConfettiFormProject;
