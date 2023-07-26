/* eslint-disable react/no-unescaped-entities */
import myPhoto from "../../../public/assets/PhotoPortapolio.jpg";
import "./AboutMe.css";
import { Button } from "../Button/Button";
import { URL_LK, RESUME } from "../../Constants";

export const AboutMe = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-container">
        <div className="about-left">
          <h2 className="subtitle">Hi, my name is</h2>
          <h1 className="title-name">Gonzalo Parada</h1>
          <h2 className="subtitle-2">Developer</h2>
          <p>Code, Create, Innovate: A Developer's Path to Success</p>
          <p>
            Developer and second-year student pursuing a degree in Computer
            systems engineering
          </p>
          <div className="container-btn">
            <button className={"btn-primary"}>
              <a href={RESUME} download="RESUME">
                Resume
              </a>
            </button>
            <Button type={2} name={"Contact me"} url={URL_LK} />
          </div>
        </div>
        <div>
          <img className="profile-pic" src={myPhoto} alt="Fhoto Portafolio" />
        </div>
      </div>
    </div>
  );
};
