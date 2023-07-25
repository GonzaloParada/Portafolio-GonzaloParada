import React from "react";
import { Button } from "../Button/Button";
import "./ProjectContainer.css";

export const ProjectContainer = ({ project }) => {
  const { name, img, description, url, urlcode } = project;
  return (
    <div className="container-project">
      <div className="container-description-project">
        <h2 className="project-name">{name}</h2>
        <p className="project-description">{description}</p>
        <div className="container-btn">
          <Button type={2} name={"View code"} url={urlcode} />
          <Button type={1} name={"Visit site"} url={url} />
        </div>
      </div>
      <div className="div-img-project">
        <div className="text-img">
          <Button type={1} name={"Visit site"} url={url} />
        </div>
        <img className="img-project" src={img} alt={name} />
      </div>
    </div>
  );
};
