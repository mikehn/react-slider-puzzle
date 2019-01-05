import React, { Component } from 'react';
//import Board from "./Slider/Board";
import Slider from "./Slider";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Slider Puzzle
          <Slider size={2}/>
        </header>
      </div>
    );
  }
}

export default App;
