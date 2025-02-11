import React from "react";
import "./Header.css";

const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="heading">
      <div className="header-button-container">
        <div
          className="header-button"
          onClick={() => scrollToSection("introduction-section")}
        >
          <p>ABOUT ME</p>
        </div>
        <div
          className="header-button"
          onClick={() => scrollToSection("languages")}
        >
          <p>LANGUAGES & FRAMEWORKS</p>
        </div>
        <div
          className="header-button"
          onClick={() => scrollToSection("projects")}
        >
          <p>FEATURED PROJECTS</p>
        </div>
        <div className="header-button-cv">
          <a
            href="https://flowcv.com/resume/gpsqsg23bb"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "black",
              transition: "color 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#5f6bba")}
            onMouseLeave={(e) => (e.target.style.color = "black")}
          >
            <p>VIEW MY CV</p>
          </a>
        </div>

        <div
          className="header-button"
          onClick={() => scrollToSection("contact-me")}
        >
          <p>GET IN TOUCH</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
