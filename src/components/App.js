import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
//import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import "../styles/App.scss";

import { useState, useEffect } from "react";
import Header from "./Header";
import Profil from "./Profil";
import Competences from "./Competences";
import ProjectList from "./ProjectList";
import Contact from "./Contact";

function App() {
  const [showSlide, updateShowSlide] = useState(false);
  const [isDarkMode, setDarkMode] = useState(true);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        updateShowSlide(true);
      } else {
        updateShowSlide(false);
      }
    });
  }, []);

  useEffect(() => {
    if (location.hash === "#projets") {
      const element = document.getElementById("projets");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="App">
      {showSlide && (
        <div>
          <a href="#header">
            <button className="upSlide">
              <FontAwesomeIcon icon={faChevronUp} />
            </button>
          </a>
        </div>
      )}

      <Header isDarkMode={isDarkMode} />
      <Profil isDarkMode={isDarkMode} />
      <Competences isDarkMode={isDarkMode} />
      <ProjectList isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
