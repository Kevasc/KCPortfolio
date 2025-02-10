import React from "react";
import "./ChristmasCocktails.css";

const ChristmasCocktailsProject = () => {
  return (
    <div id="projects" className="cocktails-section">
      <div className="cocktails-right-column">
        <div className="cocktails-text-container">
          <h1 className="cocktails-column-title">Christmas Cocktails</h1>
          <p className="cocktails-column-text">
            A mobile first, scaleable festive cocktail menu built for a seasonal
            event, easily accessible via a QR code.
            <br />
            Deployed on Vercel
            <br />
            <br />
            <br />
            <u>
              <h2>Built With:</h2>
              <br />
            </u>
            JavaScript | React | Tailwind
          </p>
        </div>
      </div>

      <div className="cocktails-left-column">
        <a
          href="https://github.com/Kevasc/christmas-cocktails"
          className="cocktails-github-link"
          target="_blank"
          rel="noreferrer"
        >
          <div className="cocktails-github-logo" />
        </a>
      </div>
    </div>
  );
};
export default ChristmasCocktailsProject;
