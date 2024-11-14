import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cv from "../assets/CV.jpg";
import spring from "../assets/spring.png";
import { useState } from "react";
import "../styles/Competences.scss";

import {
  faHtml5,
  faCss3Alt,
  faJs,
  faPhp,
  faJava,
  faPython,
  faReact,
  faAngular,
  faSquareGit,
  faSymfony,
  faFigma,
  faJira,
  faDocker,
  faTrello,
} from "@fortawesome/free-brands-svg-icons";

function Competences() {
  const [zoomPosition, setZoomPosition] = useState({
    x: 0,
    y: 0,
    visible: false,
  });

  // Fonction pour suivre la position de la souris
  const handleMouseMove = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    setZoomPosition({ x: offsetX, y: offsetY, visible: true });
  };

  // Masquer le zoom lorsque la souris quitte l'image
  const handleMouseLeave = () => {
    setZoomPosition({ ...zoomPosition, visible: false });
  };

  return (
    <div className="competences dark-mode " id="competences">
      <h1 className="lined-title">MES COMPÉTENCES</h1>
      <div className="competences-block">
        <div className="competences-left">
          <div className="techno-bloc">
            <h2 className="techno-titles">Technologies Back-End</h2>
            <div className="techno-line">
              <div>
                <FontAwesomeIcon icon={faPhp} />
                <h1 className="techno-name">PHP</h1>
              </div>
              <div>
                <FontAwesomeIcon icon={faJava} />
                <h1 className="techno-name">Java</h1>
              </div>
              <div>
                <FontAwesomeIcon icon={faPython} />
                <h1 className="techno-name">Python</h1>
              </div>
              <div>
                <FontAwesomeIcon icon={faSymfony} />
                <h1 className="techno-name">Symfony</h1>
              </div>
              <div>
                <img src={spring} className="spring-img" />
                <h1 className="techno-name">Spring</h1>
              </div>
            </div>
          </div>
          <div className="techno-bloc">
            <h2 className="techno-titles">Technologies Front-End</h2>
            <div className="techno-line">
              <div>
                <FontAwesomeIcon icon={faHtml5} />
                <h1 className="techno-name">HTML</h1>
              </div>
              <div>
                <FontAwesomeIcon icon={faCss3Alt} />
                <h1 className="techno-name">CSS</h1>
              </div>
              <div>
                <FontAwesomeIcon icon={faJs} />
                <h1 className="techno-name">Javascript</h1>
              </div>
              <div>
                <FontAwesomeIcon icon={faReact} />
                <h1 className="techno-name">React</h1>
              </div>
              <div>
                <FontAwesomeIcon icon={faAngular} />
                <h1 className="techno-name">Angular</h1>
              </div>
            </div>
          </div>
          <div className="techno-bloc">
            <h2 className="techno-titles">Outils de développement</h2>
            <div className="techno-line">
              <div>
                <FontAwesomeIcon icon={faSquareGit} />
                <h1 className="techno-name">Git</h1>
              </div>
              <div>
                <FontAwesomeIcon icon={faDocker} />
                <h1 className="techno-name">Docker</h1>
              </div>
              <div>
                <FontAwesomeIcon icon={faFigma} />
                <h1 className="techno-name">Figma</h1>
              </div>
              <div>
                <FontAwesomeIcon icon={faJira} />
                <h1 className="techno-name">Jira</h1>
              </div>
              <div>
                <FontAwesomeIcon icon={faTrello} />
                <h1 className="techno-name">Trello</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="cv-bloc">
          <div className="cv-div">
            <img
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="cv-image"
              src={cv}
              alt="CV"
            />

            {zoomPosition.visible && (
              <div
                className="zoom-loupe"
                style={{
                  top: `${zoomPosition.y - 75}px`,
                  left: `${zoomPosition.x - 75}px`,
                  backgroundPosition: `${-zoomPosition.x * 2}px ${
                    -zoomPosition.y * 2
                  }px`,
                }}
              />
            )}
          </div>
          <a href="/CV_Antoine_Grappin.pdf" download="CV_Antoine_Grappin.pdf">
            <button className="btn-download">Télécharger le CV</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Competences;
