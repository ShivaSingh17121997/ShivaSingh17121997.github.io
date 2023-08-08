import React from "react";
import { styles } from "../styles";

const skill = [
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    title: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
    title: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    title: "Javascript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    title: "React",
    link: "https://react.dev",
  },
  {
    icon: "https://cdn.worldvectorlogo.com/logos/redux.svg",
    title: "Redux",
    link: "https://redux.js.org/",
  },
  {
    icon: "https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png",
    title: "Typescript",
    link: "https://www.typescriptlang.org/",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
    title: "Mongo DB",
    link: "https://www.mongodb.com/",
  },
  {
    icon: "https://www.pixelbird.com.au/wp-content/uploads/2020/02/nodejs-image.png",
    title: "Node.js",
    link: "https://nodejs.org/en",
  },
  {
    icon: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
    title: "Express",
    link: "https://expressjs.com/",
  },
  {
    icon: "https://dgdeepon.github.io/static/media/chakra-ui_title2-400x400-removebg-preview.fc0f93596462cd01a157.png",
    title: "Chakra UI",
    link: "https://chakra-ui.com/",
  },
];

export default function Skills() {
  return (
    <div className="bg-gray-900 py-10 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={styles.sectionHeadText}>
          Skills
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8">
          {skill.map(({ icon, title, link }) => {
            return (
              <div
                key={Math.random()}
                className="p-8 bg-gray-800 rounded shadow-lg"
              >
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <img
                    className="skills-card-img mx-auto w-20 md:w-45 sm:w-30 transition-transform duration-100 ease-in-out transform hover:scale-110 rounded"
                    src={icon}
                    alt={title}
                  />
                </a>
                <div className="text-center text-white text-lg md:text-xl mt-4">
                  {title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
