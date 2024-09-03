import React from "react";
import "./Header.css";
import logo from "../assets/kcbluelogo.png";
const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="heading">
      <img className="logo" src={logo} alt="logo" />
      <div className="header-button-container">
        <div
          className="header-button"
          onClick={() => scrollToSection("introduction-section")}
        >
          <p>ABOUT ME</p>
        </div>

        <div
          className="header-button"
          onClick={() => scrollToSection("projects")}
        >
          <p>FEATURED PROJECTS</p>
        </div>
        <div
          className="header-button"
          onClick={() => scrollToSection("languages")}
        >
          <p>LANGUAGES & FRAMEWORKS</p>
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
