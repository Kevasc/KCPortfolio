import React from "react";
// import logo from "./logo.png";
import "./Header.css";

const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="heading">
      {/* <img className="logo-img" src={logo} alt="logo" /> */}
      <div className="header-button-container">
        <div className="header-button" onClick={() => scrollToSection("dough")}>
          <p>OUR NEAPOLITAN DOUGH</p>
        </div>
        <div className="header-button" onClick={() => scrollToSection("menu")}>
          <p>WOOD FIRED PIZZA MENU</p>
        </div>
        <div
          className="header-button"
          onClick={() => scrollToSection("find-us")}
        >
          <p>FIND US</p>
        </div>
        <div
          className="header-button"
          onClick={() => scrollToSection("order-online")}
        >
          <p>ORDER ONLINE</p>
        </div>
        <div
          className="header-button"
          onClick={() => scrollToSection("book-table")}
        >
          <p>BOOK A TABLE</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
