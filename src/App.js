import React from "react";
import './App.css';
import About from "./Components/About";
import Nav from './Components/Nav'
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Home from './Components/Home'
import Resume from "./Components/Resume";

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'


function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/portfolio'>
            <Projects />
          </Route>
          <Route path='/resume'>
            <Resume />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}



export default App;
