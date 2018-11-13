import React, { Component } from 'react';
import './App.css';
import Board from "./Board";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Slider Puzzle
          <Board/>
        </header>
      </div>
    );
  }
}

export default App;
