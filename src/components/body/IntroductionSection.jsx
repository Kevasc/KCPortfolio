import React from "react";
import "./IntroductionSection.css";

const IntroductionSection = () => {
  return (
    <div id="introduction-section" className="introduction-section">
      <div className="introduction-left-column">
        <div className="introduction-column-content">
          <p className="introduction-column-title">Kevas Cole</p>
          <p className="introduction-column-subtitle">Front End Developer</p>
          <p className="introduction-column-text">
            After nearly a decade of refining my skills in the fast-paced world
            of hospitality, I am embarking on an exciting career switch into
            front-end technology. <br />
            My attention to detail, strong communication abilities, and
            dedication to creating memorable experiences are now being channeled
            into crafting seamless, user-friendly web interfaces.
            <br /> Passionate about design and driven by a love for learning, I
            am ready to combine my hospitality background with my new technical
            expertise to create digital experiences that truly resonate with
            users.
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
