import { useState } from "react";
import "./index.css";
import htmlIcon from "../../assets/Skills/html.png";
import cssIcon from "../../assets/Skills/css.png";
import jsIcon from "../../assets/Skills/js.png";
import reactIcon from "../../assets/Skills/react.png";
import expressIcon from "../../assets/Skills/express.png";
import nodeIcon from "../../assets/Skills/node.png";
import mongoIcon from "../../assets/Skills/mongo.png";
import mysqlIcon from "../../assets/Skills/mysql.png";
import gitIcon from "../../assets/Skills/git.png";
import githubIcon from "../../assets/Skills/github.png";
import pythonIcon from "../../assets/Skills/python.webp";
import javaIcon from "../../assets/Skills/java.png";

function Experience() {
  const [skills, ] = useState([
    {
      iconURL: htmlIcon,
      title: "HTML5",
    },
    {
      iconURL: cssIcon,
      title: "CSS3",
    },
    {
      iconURL: jsIcon,
      title: "JS",
    },
    {
      iconURL: mongoIcon,
      title: "Mongo",
    },
    {
      iconURL: expressIcon,
      title: "Express",
    },
    {
      iconURL: reactIcon,
      title: "React",
    },
    {
      iconURL: nodeIcon,
      title: "Node",
    },
    {
      iconURL: pythonIcon,
      title: "Python",
    },
    {
      iconURL: javaIcon,
      title: "Java",
    },
    {
      iconURL: mysqlIcon,
      title: "MySql",
    },
    {
      iconURL: gitIcon,
      title: "Git",
    },
    {
      iconURL: githubIcon,
      title: "Github",
    }
  ]);

  return (
    <div className="experience">
      <div className="experience-container">
        <h1>Experience with</h1>
        <div className="experience-skills">
          {skills.map((skill, index) => (
            <div key={index} className="skills">
              <img src={skill.iconURL} alt={skill.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
