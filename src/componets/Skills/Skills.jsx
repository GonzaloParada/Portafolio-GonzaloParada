import { IMG_SKILLS_ROUTES } from "../../constants";
import "./skills.css";

export const Skills = () => {
  return (
    <div className="skills-section">
      <h2 className="title">Skills</h2>
      <div className="container-skills-img">
        {IMG_SKILLS_ROUTES.map((image) => (
          <div className="div-skills-icons" key={image}>
            <img className="skills-icons" src={image} alt={image} />
          </div>
        ))}
      </div>
    </div>
  );
};
