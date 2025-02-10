import React from "react";
import "./ProvenPizza.css";

const ProvenPizzaProject = () => {
  return (
    <div id="projects" className="proven-section">
      <div className="proven-right-column">
        <div className="proven-text-container">
          <h1 className="proven-column-title">Proven Pizza </h1>
          <p className="proven-column-text">
            A single page application replicating the website of artisan pizza
            restaurant, Proven Pizzaria. <br /> Deployed on Vercel
            <br />
            <br />
            <br />
            <u>
              <h2>Built With:</h2>
              <br />
            </u>
            React | Redux | HTML | CSS
          </p>
        </div>
      </div>
      <div className="proven-left-column">
        <a
          href="https://github.com/Kevasc/ProvenPizza"
          className="proven-github-link"
          target="_blank"
          rel="noreferrer"
        >
          <div className="proven-github-logo" />
        </a>
      </div>
    </div>
  );
};
export default ProvenPizzaProject;
