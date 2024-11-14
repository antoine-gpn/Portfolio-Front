import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  //faSun,
  //faMoon,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Header.scss";

function Header() {
  return (
    <header className="App-header" id="header">
      <div className="header-text">
        <h1 className="name">Antoine Grappin </h1>
        <h3 className="fullstack">Développeur Full-Stack</h3>
        <nav>
          <a href="#quiSuisJe">PROFIL</a>
          <a href="#competences">COMPÉTENCES</a>
          <a href="#projets">PROJETS</a>
          <a href="#contact">CONTACT</a>
        </nav>
        <a href="#quiSuisJe">
          <button className="button-down">
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </a>
      </div>
    </header>
  );
}

export default Header;
