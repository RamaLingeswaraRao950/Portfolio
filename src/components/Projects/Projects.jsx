import { useState, useEffect } from "react";
import "./index.css";
import shopPlusPlus from "../../assets/Projects/ShopPlusPlus.png";
import Energy from "../../assets/Projects/Energy.png";
import Identity from "../../assets/Projects/Identity.png";
import { MdArrowOutward } from "react-icons/md";

function Projects() {
  const [isNarrow, setIsNarrow] = useState(false);

  const projects = [
    {
      thumbnail: shopPlusPlus,
      url: "https://ram-shopplusplus.netlify.app/",
      description:
        "Developed a MERN stack online bookstore with seamless navigation, interactive browsing, and an engaging shopping experience for book enthusiasts.",
      
      skills: ["Front-end : HTML, CSS, JavaScript,React.js",
        "Back-end : Express.js, Node.js",
        "Integration : Axios, CORS",
        "Database : MongoDB, mongoose"],
      title: "ShopPlusPlus",
    },
    {
      thumbnail: Energy,
      url: "https://github.com/RamaLingeswaraRao950/Infosys_Energy_Consumption_and_Prediction",
      description:
        "Developed a predictive model using Python to forecast energy consumption, leveraging machine learning for efficient resource management and informed decision-making. ",
      skills: [ "Front-end : HTML, CSS, JavaScript",
        "Back-end : Python, Data Analysis",
        "Advanced-tech : Machine Learning, Artificial Intelligence"],
      title: "Energy Consumption And Prediction",
    },
    {
      thumbnail: Identity,
      url: "https://github.com/RamaLingeswaraRao950/Identity-Based-Privacy-Preserving-Remote-Data-Integrity-Checking-With-Designated-Verifier",
      description:
        "To design a comprehensive solution that combines user registration, secure key generation, and integrity verification, enhancing the trustworthiness of cloud storage systems.",
      skills: [ "Front-end : HTML, CSS, JavaScript",
        "Back-end : Java",
        "Database : MySQL"],
      title: "Identity Based Privacy Preserving Remote Data Integrity Checking With A Designated Verifier",
    },
  ];

  useEffect(() => {
    const mediaWatcher = window.matchMedia("(max-width: 769px)");
    setIsNarrow(mediaWatcher.matches); // Initialize isNarrow with the initial match value

    const mediaWatcherHandler = (e) => setIsNarrow(e.matches);
    mediaWatcher.addEventListener("change", mediaWatcherHandler);

    return () => mediaWatcher.removeEventListener("change", mediaWatcherHandler);
  }, []);

  return (
    <div className="projects">
      <div className="projects-container">
        <h1>Projects</h1>

        <div className="projects-data">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <div
                className="project-img-details"
                style={{
                  flexDirection: index % 2 === 0 || isNarrow ? "" : "row-reverse",
                }}
              >
                <img
                  src={project.thumbnail}
                  alt="thumbnail"
                  style={{
                    borderTopRightRadius: index % 2 !== 0 ? "15px" : "",
                    borderTopLeftRadius: index % 2 === 0 || isNarrow ? "15px" : "0px",
                  }}
                />
                <div className="project-description">
                  <p>{project.description}</p>
                  <ul className="project-skills">
                    {project.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <div className="project-details">
                  <div>
                    <span>Click here to visit</span>
                    <p>{project.title}</p>
                  </div>
                  <MdArrowOutward />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;