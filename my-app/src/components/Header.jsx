import React from "react";
import "./Header.css";
import logo from "../assets/kevaslogo.png";
const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="heading">
      <img className="logo" src={logo} alt="logo" />
      <div className="header-button-container">
        <div className="header-button" onClick={() => scrollToSection("dough")}>
          <p>ABOUT ME</p>
        </div>

        <div
          className="header-button"
          onClick={() => scrollToSection("order-online")}
        >
          <p>MY PROJECTS</p>
        </div>
        <div
          className="header-button"
          onClick={() => scrollToSection("book-table")}
        >
          <p>GET IN TOUCH</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
