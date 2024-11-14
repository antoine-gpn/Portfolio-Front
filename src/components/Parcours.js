import Experiences from "./Experiences";
import { useState } from "react";
import "../styles/Parcours.scss";

function Parcours({ isDarkMode }) {
  const [selectedExperience, updateSelectedExperience] = useState("cerfrance");
  return (
    <div id="parcours" className="experience-container">
      <div className="timeline-container">
        <div
          className={`${
            selectedExperience === "cerfrance" ? "selected-experience" : ""
          } experience-selector-bloc`}
          onClick={() => {
            updateSelectedExperience("cerfrance");
          }}
        >
          <h3>CERFRANCE</h3>
          <h3>Développeur Full-Stack</h3>
          <h3>Stage + Alternance 1 an</h3>
          <h3>2021-2022</h3>
        </div>

        <div
          className={`${
            selectedExperience === "insite" ? "selected-experience" : ""
          } experience-selector-bloc`}
          onClick={() => {
            updateSelectedExperience("insite");
          }}
        >
          <h3>AGENCE INSITE</h3>
          <h3>Développeur Back-End</h3>
          <h3>Alternance 1 an</h3>
          <h3>2022-2023</h3>
        </div>

        <div
          className={`${
            selectedExperience === "insitaction" ? "selected-experience" : ""
          } experience-selector-bloc`}
          onClick={() => {
            updateSelectedExperience("insitaction");
          }}
        >
          <h3>ALTAVIA INSITACTION</h3>
          <h3>Développeur Back-End</h3>
          <h3>Alternance 1 an</h3>
          <h3>2023-2024</h3>
        </div>
      </div>
      <Experiences
        isDarkMode={isDarkMode}
        selectedExperience={selectedExperience}
      />
    </div>
  );
}

export default Parcours;
