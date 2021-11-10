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
      <nav style={{ margin: 10 }}>
    <Link to="/" style={{ padding: 5 }}>
      Home
    </Link>
    <Link to="/choose" style={{ padding: 5 }}>
      Submit Food Choices
    </Link>
    <Link to="/records" style={{ padding: 5 }}>
      What did I choose?
    </Link>
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