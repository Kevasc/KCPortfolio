import React from "react";
import "./ConfettiFormProject.css";

const ConfettiFormProject = () => {
  return (
    <div id="projects" className="confetti-section">
      <div className="confetti-right-column">
        <div className="confetti-text-container">
          <h1 className="confetti-column-title">
            <u>Confetti Form</u>
          </h1>
          <p className="confetti-column-text">
            Confetti Form is a fun project I built to showcase my skills in HTML
            form validation, combined with Bootstrap for styling.
            <br />
            If you enter a year ending in 0 or 5, a confetti animation will
            celebrate your choice. Otherwise, you'll receive an alert message!
            <br /> Deployed on {""}
            <a href="https://kevasc.github.io/confetti-form/">Github Pages</a>.
            <br />
            <br />
            <br />
            <u>
              <h2>Built With:</h2>
              <br />
            </u>
            HTML | CSS | JavaScript | Bootstrap for form styling
          </p>
        </div>
      </div>

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
    </div>
  );
};
export default ConfettiFormProject;
