import css from "../public/assets/icons/css-icon.png";
import csharp from "../public/assets/icons/csharp-icon.png";
import html from "../public/assets/icons/html-icon.png";
import java from "../public/assets/icons/java-icon.png";
import javascript from "../public/assets/icons/javascript-icon.png";
import react from "../public/assets/icons/react-icon.png";
import typescipt from "../public/assets/icons/typescript-icon.png";
import mongo from "../public/assets/icons/mongo-icon.png";
import node from "../public/assets/icons/node-icon.png";
import sqlserver from "../public/assets/icons/sqlserver-icon.png";
import mysql from "../public/assets/icons/mysql-icon.png";
import vue from "../public/assets/icons/vue-icon.png";
import redux from "../public/assets/icons/redux-icon.png";
import python from "../public/assets/icons/python-icon.png";
import urban from "../public/assets/ProjectsImages/urban-img.png";
import weatherapp from "../public/assets/ProjectsImages/weatherapp-img.png";
import hanged from "../public/assets/ProjectsImages/hanged-img.png";
import CV from "../public/assets/CV.pdf";

export const IMG_SKILLS_ROUTES = [
  html,
  css,
  javascript,
  typescipt,
  react,
  java,
  csharp,
  mongo,
  node,
  sqlserver,
  mysql,
  vue,
  redux,
  python,
];

export const IMG_PROJETCS = [
  {
    id: 1,
    name: "Urban",
    url: "https://react-ecommerce-urban.vercel.app/",
    urlcode: "https://github.com/GonzaloParada/react-ecommerce-urban",
    img: urban,
    description: "Ecommerce con React y como base de datos firebase",
  },
  {
    id: 2,
    url: "https://weather-app-react-flame.vercel.app/",
    urlcode: "https://github.com/GonzaloParada/WeatherApp-React",
    name: "Weather App",
    img: weatherapp,
    description:
      "Aplicación de clima con React utilizando la API Powered by: WeatherAPI.com. Se utilizó la biblioteca de Material UI para los componentes de interfaz de usuario en la aplicación. La aplicación cuenta con dark mode como feature.",
  },
  {
    id: 3,
    url: "https://gonzaloparada.github.io/Juego-Ahorcado-Alura-ONE/",
    urlcode: "https://github.com/GonzaloParada/Juego-Ahorcado-Alura-ONE",
    name: "Hanged game",
    img: hanged,
    description:
      "Juego del ahorcado realizado para el Challange de Alura Latam - Oracle ONE. Realizado con HTML, CSS y JavaScript",
  },
];

export const URL_LK = "https://www.linkedin.com/in/gonzalo-parada/";

export const RESUME = CV;
