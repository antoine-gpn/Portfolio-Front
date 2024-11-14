import cerfrance from "../assets/cerfrance.png";
import insite from "../assets/insite.png";
import insitaction from "../assets/insitaction.png";
import cerfranceTxt from "../texts/cerfrance";
import insiteTxt from "../texts/insite";
import insitactionTxt from "../texts/insitaction";
import "../styles/Experiences.scss";

function Experiences({ isDarkMode, selectedExperience }) {
  return (
    <div className="experience-bloc">
      <div className="exp-img-bloc">
        <img
          src={
            (selectedExperience === "cerfrance" && cerfrance) ||
            (selectedExperience === "insite" && insite) ||
            (selectedExperience === "insitaction" && insitaction)
          }
        />
      </div>
      <div className="experience-text-bloc">
        {selectedExperience === "cerfrance" && (
          <p
            className="experience-paragraph"
            dangerouslySetInnerHTML={{ __html: cerfranceTxt }}
          ></p>
        )}
        {selectedExperience === "insite" && (
          <p
            className="experience-paragraph"
            dangerouslySetInnerHTML={{ __html: insiteTxt }}
          ></p>
        )}
        {selectedExperience === "insitaction" && (
          <p
            className="experience-paragraph"
            dangerouslySetInnerHTML={{ __html: insitactionTxt }}
          ></p>
        )}
      </div>
    </div>
  );
}

export default Experiences;
