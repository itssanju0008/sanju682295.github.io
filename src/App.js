import Header from "./components/Header";
import Banner from "./components/Banner";
import Projects from "./components/Project";
import Calendery from "./components/Calender";
import Stats from "./components/stats";
import Contact from "./components/ContactMe";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Header />
     
      <Banner />
      <div
      style={{border:"1px solid red",marginTop:"30px",marginBottom:"30px"}}
      ></div>
      <Projects />
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
    </div>
  );
}

export default App;
