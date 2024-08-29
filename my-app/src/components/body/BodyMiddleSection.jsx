import React from "react";
import "./BodyMiddleSection.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const BodyMiddleSection = () => {
  return (
    <div id="introduction-section" className="middle-section">
      <div className="middle-left-column">
        <div className="middle-column-content">
          <p className="middle-column-title">
            Kevas Cole <br /> Front End Developer
          </p>
          <p className="middle-column-text">
            After nearly a decade of refining my skills in the fast-paced world
            of hospitality, I am embarking on an exciting career switch into
            front-end technology. My attention to detail, strong communication
            abilities, and dedication to creating memorable experiences are now
            being channeled into crafting seamless, user-friendly web
            interfaces. Passionate about design and driven by a love for
            learning, I am ready to combine my hospitality background with my
            new technical expertise to create digital experiences that truly
            resonate with users.
          </p>
        </div>
      </div>
      <div className="middle-right-column">
        <a
          href="https://www.linkedin.com/in/kevasjordancole/"
          className="linkedin-link"
          target="blank"
        >
          <div className="picture-of-me">
            <LinkedInIcon color="primary" />
          </div>
        </a>
      </div>
    </div>
  );
};
export default BodyMiddleSection;
