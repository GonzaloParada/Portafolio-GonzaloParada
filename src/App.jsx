import { AboutMe } from "./componets/AboutMe/AboutMe";
import { Line } from "./componets/Line/Line";
import { MyProjects } from "./componets/MyProjects/MyProjects";
import { Navbar } from "./componets/Navbar/Navbar";
import { Skills } from "./componets/Skills/Skills";

function App() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Line idName={"skills"} />
      <Skills />
      <Line idName={"projects"} />
      <MyProjects />
    </>
  );
}

export default App;
