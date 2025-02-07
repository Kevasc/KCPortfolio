import React from "react";
import "./Languages.css";

<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
/>;

const logos = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    alt: "Typescript logo",
    link: "https://www.typescriptlang.org/",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    alt: "Javascript logo",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    alt: "React logo",
    link: "https://reactjs.org/",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    alt: "Redux logo",
    link: "https://redux.js.org/",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
    alt: "HTML logo",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
    alt: "CSS logo",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    alt: "Tailwind logo",
    link: "https://tailwindcss.com/",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
    alt: "Jest logo",
    link: "https://jestjs.io/",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    alt: "Next.js logo",
    link: "https://nextjs.org/",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    alt: "Vercel logo",
    link: "https://vercel.com/",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
    alt: "Material UI logo",
    link: "https://mui.com/",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    alt: "Node logo",
    link: "https://nodejs.org/",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
    alt: "NPM logo",
    link: "https://www.npmjs.com/",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    alt: "Visual Studio Code",
    link: "https://code.visualstudio.com/",
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
