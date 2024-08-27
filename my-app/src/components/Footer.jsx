import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="order-online" className="footer-container">
      <div id="book-table" className="top-footer">
        <div className="alt-logo"></div>
        <div className="footer-text">in here i can put contact info ?</div>
        <div className="follow"> Follow us.</div>
        <div className="footer-buttons">
          <div className="footer-button">
            <p>Book a table</p>
          </div>
          <div className="footer-button">
            <p>Order online</p>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <p>PROVEN Pizzeria © Copyright 2024 | Privacy Policy | Kevas Cole ☆</p>
      </div>
    </div>
  );
};

export default Footer;
