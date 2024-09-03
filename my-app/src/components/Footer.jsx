import React from "react";
import "./Footer.css";
import linkedinlogo from "../assets/linkedinlogo.png";
import githublogo from "../assets/githublogo.png";
import gmaillogo from "../assets/gmaillogo.png";
import kcbluelogo from "../assets/kcbluelogo.png";

const Footer = () => {
  return (
    <div id="contact-me" className="footer-container">
      <img className="alt-logo" src={kcbluelogo} alt="blue kc logo" />
      <div className="footer-text">
        <p>
          Kevas Cole
          <br />
          Front End Developer
          <br />
          Stone, Staffordshire
          <br />
          United Kingdom
        </p>
      </div>
      <div className="connect-subtitle"> Connect with me:</div>
      <div className="connect-container">
        <img
          className="footer-logos"
          src={linkedinlogo}
          alt="linkedin footer logo"
        />
        <img
          className="footer-logos"
          src={githublogo}
          alt="github footer logo"
        />
        <img className="footer-logos" src={gmaillogo} alt="gmail footer logo" />
      </div>
    </div>
  );
};

export default Footer;
