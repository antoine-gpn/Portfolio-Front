import picture from "../assets/picture.jpg";
import Parcours from "./Parcours";
import profil from "../texts/profil";
import "../styles/Profil.scss";

function Profil({ isDarkMode }) {
  return (
    <div className={`${isDarkMode && "dark-mode"}`} id="quiSuisJe">
      <div className=" auto-profil">
        <h1 className="lined-title">QUI-SUIS-JE ?</h1>
        <div className="flex-container">
          <div>
            <img className="picture" src={picture} alt="CV" />
          </div>
          <div className="bloc-profil">
            <p dangerouslySetInnerHTML={{ __html: profil }} />
          </div>
        </div>
        <Parcours isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

export default Profil;
