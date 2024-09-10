import React from "react";
import "./Footer.css";
import linkedinlogo from "../assets/linkedinlogo.png";
import githublogo from "../assets/githublogo.png";
import gmaillogo from "../assets/new.png";
import kcbluelogo from "../assets/kcbluelogo.png";

const Footer = () => {
  return (
    <div id="contact-me" className="footer-container">
      <img className="alt-logo" src={kcbluelogo} alt="blue kc logo" />

      <div className="connect-subtitle">
        Connect with me:
        <div className="connect-container">
          <a
            href="https://www.linkedin.com/in/kevascole/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer-logos"
              src={linkedinlogo}
              alt="linkedin footer logo"
            />
          </a>
          <a href="https://github.com/Kevasc" target="_blank" rel="noreferrer">
            <img
              className="footer-logos"
              src={githublogo}
              alt="github footer logo"
            />
          </a>
          <a href="mailto:colekevas@gmail.com" target="_blank" rel="noreferrer">
            <img
              className="footer-logos"
              src={gmaillogo}
              alt="Gmail footer logo"
            />
          </a>
        </div>
      </div>
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
    </div>
  );
};

export default Footer;
