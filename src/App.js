import HomePage from "./Components/HomePage.js";
import "./App.css";

import { Switch, Route, Link, useLocation } from "react-router-dom";
import {Element} from 'react-scroll'
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Veille from "./Components/Veille";
import Contact from "./Components/Contact";
import ProjectDetails from "./Components/ProjectDetails";
import BackOffice from "./Components/BackOffice.js";

function App() {
  let location = useLocation();

  return (
    <>
      {location.pathname !== "/" ? (
        <div className="nav-container">
          <Link to="/">
            <div className="home-link">Accueil</div>
          </Link>
          <Link to="/About">
            <div className="about-link">Qui suis-je?</div>
          </Link>
          <Link to="/Projects">
            <div className="projects-link">Projets</div>
          </Link>
          <Link to="/Skills">
            <div className="skills-link">Compétences</div>
          </Link>
          <Link to="/Veille">
            <div className="veille-link">Veille</div>
          </Link>
          <Link to="/Contact">
            <div className="contact-link">Contact</div>
          </Link>
        </div>
      ) : (
        ""
      )}

          <Switch
          location={location}
          >
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Projects">
              <Projects />
            </Route>
            <Route path="/Skills">
              <Skills />
            </Route>
            <Route path="/Veille">
              <Veille />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/Details">
              <ProjectDetails />
            </Route>
            <Route path='/Backoffice'>
              <BackOffice />
            </Route>
          </Switch>

    </>
  );
}

export default App;
