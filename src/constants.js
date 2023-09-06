import css from "../public/assets/Icons/css-icon.png";
import csharp from "../public/assets/Icons/csharp-icon.png";
import html from "../public/assets/Icons/html-icon.png";
import javascript from "../public/assets/Icons/javascript-icon.png";
import react from "../public/assets/Icons/react-icon.png";
import typescipt from "../public/assets/Icons/typescript-icon.png";
import mongo from "../public/assets/Icons/mongo-icon.png";
import sqlserver from "../public/assets/Icons/sqlserver-icon.png";
import angular from "../public/assets/Icons/angular-icon.png";
import mysql from "../public/assets/Icons/mysql-icon.png";
import net from "../public/assets/Icons/net-icon.png";
import vue from "../public/assets/Icons/vue-icon.png";
import redux from "../public/assets/Icons/redux-icon.png";
import python from "../public/assets/Icons/python-icon.png";
import urban from "../public/assets/ProjectsImages/urban-img.png";
import weatherapp from "../public/assets/ProjectsImages/weatherapp-img.png";
import hanged from "../public/assets/ProjectsImages/hanged-img.png";
import dolarapp from "../public/assets/ProjectsImages/dolarApp-img.png";
import CV from "../public/assets/CV.pdf";

export const IMG_SKILLS_ROUTES = [
  html,
  css,
  javascript,
  typescipt,
  react,
  angular,
  csharp,
  net,
  mongo,
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
    description:
      "Welcome to Urban - Ecommerce for trendy urban clothing! powered by React and Firebase, offers real-time shopping cart updates using useContext. Discover the latest streetwear, enjoy a secure checkout, and get personalized recommendations. Join us now and embrace urban fashion with ease!",
  },
  {
    id: 2,
    url: "https://weather-app-react-flame.vercel.app/",
    urlcode: "https://github.com/GonzaloParada/WeatherApp-React",
    name: "Weather App",
    img: weatherapp,
    description:
      "Introducing WeatherApp - a React weather app powered by WeatherAPI.com. Sleek Material UI design with dark mode feature for easy viewing. Get real-time weather updates and detailed forecasts for any city worldwide. Stay prepared with WeatherNow!",
  },
  {
    id: 3,
    url: "https://dolar-app-one.vercel.app/",
    urlcode: "https://github.com/GonzaloParada/DolarApp",
    name: "Dollar Value Visualization Application",
    img: dolarapp,
    description:
      "Blue and Official Dollar Value Visualization Application, developed using React and Vite. I utilized the BlueLytics API to fetch data for the application. Additionally, to provide an impactful visual experience, I implemented interactive charts using the Chart.js library.",
  },
  {
    id: 4,
    url: "https://gonzaloparada.github.io/Juego-Ahorcado-Alura-ONE/",
    urlcode: "https://github.com/GonzaloParada/Juego-Ahorcado-Alura-ONE",
    name: "Hanged game",
    img: hanged,
    description:
      "Introducing 'Hangman Challenge' - An Alura Latam - Oracle ONE creation! Play the classic word-guessing game with HTML, CSS, and JavaScript. Guess the word to save the stick figure. Enjoy the challenge!",
  },
];

export const URL_LK = "https://www.linkedin.com/in/gonzalo-parada/";

export const RESUME = CV;
