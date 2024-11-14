import projects from "../projects.js";
import { useParams } from "react-router";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTurnDown,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/ProjectPage.scss";

function ProjectPage() {
  const params = useParams();
  const project = projects.find((p) => p.tag === params.tag);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Link to="/">
        <button className="return-btn">
          <FontAwesomeIcon icon={faArrowTurnDown} />
        </button>
      </Link>
      <div className="full-project-container">
        <div className="project-bloc-full">
          <div className="img-project-full-bloc">
            <img src={project.image} className="img-project-full" />
          </div>
          <div className="bloc-info-project">
            <h1>{project.name}</h1>
            {project.technos.map((techno) => (
              <span className="techno-full techno">{techno} </span>
            ))}
            <div className="links">
              {project.links.map((link) => (
                <a className="project-link" href={link.url}>
                  {link.text}{" "}
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              ))}
            </div>
            {project.text && project.text}
          </div>
          <br />
        </div>
        <div className="project-desc">
          <p>
            {project.description &&
              project.description.split("\n").map((line) => (
                <React.Fragment>
                  {line}
                  <br />
                </React.Fragment>
              ))}
          </p>
        </div>
        <div className="annexe-container">
          {project.annexes &&
            project.annexes.map((annexe) => (
              <div>
                <img className="annexe" alt="annexe" src={annexe} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
