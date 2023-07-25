import { useState } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const [color, setColor] = useState(false);
  const ChangeColor = () => {
    if (window.scrollY >= 300) setColor(true);
    else setColor(false);
  };

  window.addEventListener("scroll", ChangeColor);

  return (
    <div className={color ? "navbar navbar-active" : "navbar"}>
      <ul className="nav-ul">
        <li>
          <a href="#about" className="nav-item">
            About me
          </a>
        </li>
        <li>
          <a href="#skills" className="nav-item">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-item">
            Projects
          </a>
        </li>
      </ul>
    </div>
  );
};
