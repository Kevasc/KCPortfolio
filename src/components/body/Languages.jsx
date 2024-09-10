import React from "react";
import "./Languages.css";

const logos = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
    alt: "css logo",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
    alt: "html logo",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    alt: "javascript logo",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    alt: "react logo",
    link: "https://reactjs.org/",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    alt: "redux logo",
    link: "https://redux.js.org/",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg",
    alt: "react bootstrap logo",
    link: "https://react-bootstrap.github.io/",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg",
    alt: "git logo",
    link: "https://git-scm.com/",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
    alt: "material ui logo",
    link: "https://mui.com/",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    alt: "node logo",
    link: "https://nodejs.org/",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
    alt: "npm logo",
    link: "https://www.npmjs.com/",
  },
];

const Languages = () => {
  const logoArray = logos.map((logo, index) => (
    <div key={index} className="logo-container">
      <a href={logo.link} target="_blank" rel="noopener noreferrer">
        <img src={logo.src} alt={logo.alt} className="logo-image" />
      </a>
    </div>
  ));

  const firstLine = logoArray.slice(0, logoArray.length / 2);
  const secondLine = logoArray.slice(logoArray.length / 2);

  return (
    <div id="languages" className="language-container">
      <h1 className="languages-title">Languages and Frameworks</h1>
      <div className="language-image-container">
        <div className="languages-logos-only">{firstLine}</div>
        <div className="frameworks-logos-only">{secondLine}</div>
      </div>
    </div>
  );
};

export default Languages;
