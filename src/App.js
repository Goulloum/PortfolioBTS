import HomePage from './Components/HomePage.js';
import './App.css';

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Veille from './Components/Veille';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
        {}
        <Switch>
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
        </Switch>

    </Router>
  );
}

export default App;
