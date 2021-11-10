import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

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

function Home() {
  return (
    <div>
      <header className="App-header">
        <h1>Christmas Lunch!</h1>
        <h2>Sloans</h2>
        <h2>December 16</h2>
        <h2>14.00</h2>
      </header>
    </div>
  );
}

function Choose() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Choose</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function Records() {
  return (
    <div style={{ padding: 20 }}>
      <h2>What did I choose?</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

export default App;