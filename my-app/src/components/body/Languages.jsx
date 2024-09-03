import React from "react";
import "./Languages.css";

const logos = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
    alt: "css logo",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
    alt: "html logo",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    alt: "javascript logo",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    alt: "react logo",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    alt: "redux logo",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg",
    alt: "react bootstrap logo",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg",
    alt: "git logo",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
    alt: "material ui logo",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    alt: "node logo",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
    alt: "npm logo",
  },
];

const Languages = () => {
  return (
    <div className="language-container">
      <div className="language-image-container">
        {logos.map((logo, index) => (
          <div className="languages-logos" key={index}>
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
