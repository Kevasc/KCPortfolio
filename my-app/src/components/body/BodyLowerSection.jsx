import React from "react";
import "./BodyLowerSection.css";
const BodyLowerSection = () => {
  return (
    <div id="projects" className="lower-section">
      <div className="lower-left-column">
        <a
          href="https://github.com/Kevasc/confetti-form"
          className="confetti-screenshot"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={require("../../assets/confettiScreenshot.png")}
            alt="Confetti Screenshot"
            className="confetti-screenshot"
          />

          <div className="confetti-screenshot"></div>
        </a>
      </div>
      <div className="lower-right-column">
        <div className="lower-column-content">
          <h1 className="lower-column-title">Confetti Form</h1>
          <p className="lower-column-text">
            This project contains an HTML form that collects user information
            including first name, last name, email, and date of birth. When the
            form is submitted, it checks the last digit of the birth year and
            launches a confetti animation if the year ends in "5" or "0". If the
            year does not end in "5" or "0", it shows an alert message.
            <ul>
              <li>HTML</li>
              <li>CSS </li>
              <li>Javascript </li>
              <li>Bootstrap for form styling</li>
              <li>animation powered by canvas-confetti</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};
export default BodyLowerSection;
