import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import "../styles/Contact.scss";

function Contact() {
  const [emailSent, updateEmailSent] = useState(false);
  const [showError, setError] = useState(false);
  const [fields, updateFields] = useState({
    name: "",
    mail: "",
    obj: "",
    msg: "",
    check: false,
  });

  function sendEmail() {
    let formValid = true;
    Object.entries(fields).forEach((field) => {
      if (field[1] === "" || field[1] === false) {
        formValid = false;
        setError(true);
      }
    });
    if (formValid) {
      updateEmailSent(true);
      setError(false);
    }
  }

  return (
    <div className="dark-mode" id="contact">
      <h1 className="lined-title">ME CONTACTER</h1>

      <div className="contact-bloc">
        <form>
          <div className="form-line">
            <fieldset>
              <legend>Nom/Prénom *&nbsp;</legend>
              <input
                type="text"
                className="input"
                value={fields.name}
                onChange={(e) => {
                  updateFields({ ...fields, name: e.target.value });
                }}
              />
            </fieldset>
            <fieldset>
              <legend>Adresse mail *&nbsp;</legend>
              <input
                type="text"
                className="input"
                value={fields.mail}
                onChange={(e) => {
                  updateFields({ ...fields, mail: e.target.value });
                }}
              />
            </fieldset>
          </div>

          <fieldset className="fieldset-large">
            <legend>Objet *&nbsp;</legend>
            <input
              type="text"
              className="input"
              value={fields.obj}
              onChange={(e) => {
                updateFields({ ...fields, obj: e.target.value });
              }}
            />
          </fieldset>
          <fieldset className="fieldset-large message">
            <legend>Message *&nbsp;</legend>
            <textarea
              className="input"
              value={fields.msg}
              onChange={(e) => {
                updateFields({ ...fields, msg: e.target.value });
              }}
            />
          </fieldset>
          <div className="bloc-checkbox">
            <div>
              <input
                type="checkbox"
                id="customCheckbox"
                value={fields.check}
                onChange={(e) => {
                  updateFields({ ...fields, check: e.target.value });
                }}
              />
              <label for="customCheckbox"></label>
            </div>
            <p className="disclaimer">
              En soumettant ce formulaire, j'accepte que mes données
              personnelles soient utilisées pour me recontacter. Aucun autre
              traitement ne sera effectué avec mes informations.*
            </p>
          </div>
          {showError && (
            <p className="form-error">
              Veuillez remplir tous les champs correctement
            </p>
          )}
          <button
            className="submit"
            type="button"
            onClick={() => {
              sendEmail();
            }}
          >
            Envoyer
          </button>
          {emailSent && (
            <h4 className="message-envoye">Le message a bien été envoyé</h4>
          )}
        </form>
        <div className="coordos">
          <br />
          <br />
          <br />
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> agrappin1@gmail.com
          </p>

          <p>
            <FontAwesomeIcon icon={faPhone} /> 06.29.02.07.35
          </p>

          <p>
            <FontAwesomeIcon icon={faLocationDot} /> 59000 Lille
          </p>
          <br />
          <br />
          <br />
          <p>
            <FontAwesomeIcon icon={faLinkedin} /> antoine-grappin
          </p>
          <p>
            <FontAwesomeIcon icon={faGithub} /> antoine-gpn
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
