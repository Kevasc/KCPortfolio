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
            Confetti Form is a fun little project I completed to showcase my
            skills using HTML form validation and with Bootstrap for styling.{" "}
            <br />
            It will show a confetti animation, made with javascript, if the year
            you input ends in a 0 or 5, or an alert message. <br />
            This project is hosted{" "}
            <a href="https://kevasc.github.io/confetti-form/">here</a>.
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
