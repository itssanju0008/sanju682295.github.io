import Banner from "./components/Banner";
import Calendery from "./components/Calender";
import Stats from "./components/stats";
import Contact from "./components/ContactMe";
import Skills from "./components/Skills";
import Project from "./components/projects";
import { Nav } from "./components/nav";
function App() {
  return (
    <div>
      <Banner />
      <div
      style={{border:"1px solid red",marginTop:"30px",marginBottom:"30px"}}
      ></div>
      <Project />
      <div
      style={{border:"1px solid red",marginTop:"30px",marginBottom:"30px"}}
      ></div>
      <Calendery />
      <Stats/>
      <div
      style={{border:"1px solid red",marginTop:"30px",marginBottom:"30px"}}
      ></div>
      <Skills/>
      <div
      style={{border:"1px solid red",marginTop:"30px",marginBottom:"30px"}}
      ></div>
      <Contact/>
      <Nav/>
    </div>
  );
}

export default App;
