import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import projects from "../projects";
import Project from "./Project";
import "../styles/ProjectList.scss";

function ProjectList({ isDarkMode }) {
  return (
    <div className={`${isDarkMode && "dark-mode"}`} id="projets">
      <h1 className="lined-title">MES PROJETS</h1>
      <div>
        <h3>
          Cet espace répertorie différents projets que j'ai pu réaliser ces
          dernières années. <br />
          D'autres projets sont disponibles sur mon GitHub perso ici :{" "}
          <a href="https://github.com/antoine-gpn" target="_blank">
            antoine-gpn
          </a>
          {"  "}
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          <br />
          <br /> N'hésite pas à cliquer sur un projet pour en savoir plus.
        </h3>
        <br />
        <div className="project-list">
          {projects.map((project) => (
            <Project project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
