/* eslint-disable react/prop-types */
import "./Button.css";

export const Button = ({ type, name, url }) => {
  return (
    <button className={type === 1 ? "btn-primary" : "btn-secondary"}>
      <a href={url} target="_blank" rel="noreferrer">
        {name}
      </a>
    </button>
  );
};
