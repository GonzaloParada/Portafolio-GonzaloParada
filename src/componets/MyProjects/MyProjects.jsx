import { ProjectContainer } from "../ProjectContainer/ProjectContainer";
import { IMG_PROJETCS } from "../../Constants";
import "./MyProjects.css";

export const MyProjects = () => {
  return (
    <div className="myprojects-section">
      <h2 className="title">Projects</h2>
      <div className="projects-container">
        {IMG_PROJETCS.map((el) => (
          <ProjectContainer key={el.id} project={el} />
        ))}
      </div>
    </div>
  );
};
