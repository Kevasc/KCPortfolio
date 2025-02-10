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
