import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Animals from '../Animals/Animals.jsx';
import Plants from '../Plants/Plants.jsx';

import BottomNav from '../BottomNav/BottomNav';
import UpperNav from '../UpperNav/UpperNav';

function App() {
  return (
    <>
   
    <Router>
      <div className="App">
        <UpperNav/>         
        {/* route tag surrounds individual components */}
        <Route path="/" exact> 
        
        </Route>
        <Route path="/plants">
          <Plants />
        </Route>
        <Route path="/animals">
          <Animals />
        </Route>
      </div>
      <BottomNav/>
    </Router>
    </>
  );
}

export default App;
