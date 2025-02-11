import React from "react";
import "./BeautyDecoder.css";

const BeautyDecoderProject = () => {
  return (
    <div>
      <h1 className="featured-projects-title">Featured Projects</h1>
      <div id="projects" className="beauty-section">
        <div className="beauty-right-column">
          <div className="beauty-text-container">
            <h1 className="beauty-column-title">
              <u>Beauty Decoder</u>
            </h1>
            <p className="beauty-column-text">
              Beauty Decoder tells you exactly what’s in your makeup, instantly
              check for ingredients like alcohol, gluten, or silicones, all in
              one place.
              <br />
              Deployed on {""}
              <a href="https://beauty-decoder.vercel.app/">Vercel</a>.
              <br />
              <br />
              <br />
              <u>
                <h2>Built With:</h2>
                <br />
              </u>
              Next.js | TypeScript | React | Redux | Tailwind CSS | REST API |
              Jest
            </p>
          </div>
        </div>
        <div className="beauty-left-column">
          <a
            href="https://github.com/Kevasc/beauty-decoder"
            className="beauty-github-link"
            target="_blank"
            rel="noreferrer"
          >
            <div className="beauty-github-logo" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default BeautyDecoderProject;
