import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="order-online" className="footer-container">
      <div id="book-table" className="top-footer">
        <div className="alt-logo"></div>
        <div className="footer-text">
          <p>
            PROVEN Pizzeria <br />
            56 Newcastle Road,
            <br />
            Stone, Staffordshire.
            <br />
            ST15 8LB
            <br />
            T: 01785 817 007
            <br />
            <br />
            dough@provenpizzeria.co.uk
          </p>
        </div>
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
