import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Animals from '../Animals/Animals.jsx';
import Plants from '../Plants/Plants.jsx';
import Home from '../Home/Home.jsx';
import AnimalDetail from '../AnimalDetail/AnimalDetail';

function App() {
  return (
    // <Router> tag surrounds entire return
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/plants">Plants</Link>
          </li>
          <li>
            <Link to="/animals">Animals</Link>
          </li>
        </ul>
        
        <h1>SPAs!</h1>
        {/* route tag surrounds individual components */}
        <Route path="/" exact> 
          <Home />
        </Route>
        <Route path="/plants">
          <Plants />
        </Route>
        <Route path="/animals" exact>
          <Animals />
        </Route>
        <Route path="/animals/:id">
          <AnimalDetail />
        </Route>
      </div>
    </Router>
  );
}

export default App;
