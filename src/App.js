import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './timer5.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
            <Timer />
          
          
        </header>
      </div>
    );
  }
}

export default App;
