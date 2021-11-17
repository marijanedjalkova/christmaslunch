import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Choose from './components/Choose'
import Home from './components/Home'
import Records from './components/Records'

function App() {
  return (
    <div className="App">
      <Router>
        <nav class="row">
          <Link to="/" class="col-sm-4">Event Info</Link>
          <Link to="/choose" class="col-sm-4">Submit Food Choices</Link>
          <Link to="/records" class="col-sm-4">What did I choose?</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/choose" element={<Choose />} />
          <Route path="/records" element={<Records />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;