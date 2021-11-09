import React from 'react';
import './App.css';
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Christmas Lunch!</h1>
        <h2>Sloans</h2>
        <h2>December 16</h2>
        <h2>14.00</h2>
        <Link to="/Dashboard"> Choose food </Link>
      </header>
    </div>
  );
}

export default App;