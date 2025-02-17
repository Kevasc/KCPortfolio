import React from "react";
import "./IntroductionSection.css";

const IntroductionSection = () => {
  return (
    <div id="introduction-section" className="introduction-section">
      <div className="introduction-left-column">
        <div className="introduction-column-content">
          <p className="introduction-column-title">Kevas Jordan Cole</p>
          <p className="introduction-column-subtitle">Front End Developer</p>
          <p className="introduction-column-text">
            After a decade in hospitality, perfecting latte art, pouring great
            pints and creating memorable customer experiences, I’m now shifting
            into Front-End development. <br /> I’m excited to apply my skills to
            tech and create meaningful digital experiences.
          </p>
        </div>
      </div>
      <div className="introduction-right-column">
        <div className="picture-of-me">
          <a
            href="https://www.linkedin.com/in/kevasjordancole/"
            className="linkedin-link"
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

export default IntroductionSection;
