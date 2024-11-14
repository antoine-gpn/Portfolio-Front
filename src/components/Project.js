import { Link } from "react-router-dom";
import "../styles/Project.scss";

function Project({ project }) {
  return (
    <div className="project">
      <Link to={`/project/${project.tag}`}>
        <div class="image-container">
          <img src={project.image} className="project-img" />
          <div class="overlay">
            <h3>Voir plus</h3>
          </div>
        </div>
      </Link>
      <div className="project-title">
        <h3>{project.name}</h3>
        <div className="technos">
          {project.technos.map((techno) => (
            <span className="techno">{techno} </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
