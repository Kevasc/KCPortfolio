import React from "react";
import "./BodyMiddleSection.css";
const BodyMiddleSection = () => {
  return (
    <div id="dough" className="middle-section">
      <div className="middle-left-column">
        <div className="middle-column-content">
          <p className="middle-column-title">
            We're in it for <br /> the dough.
          </p>
          <p className="middle-column-text">
            We believe if you’re going to do something then do it properly. So,
            we are committed to the authentic Neapolitan dough recipe and never
            compromise ingredients, methods or the time it takes to prove. As we
            say… perfect Neapolitan pizzas start with perfect dough. It’s been
            PROVEN.
          </p>
        </div>
      </div>
      <div className="middle-right-column">
        <div className="dough"></div>
      </div>
    </div>
  );
};
export default BodyMiddleSection;
