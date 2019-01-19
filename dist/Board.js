function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from "./Box";
import BoardLogic from "./BoardLogic";
import "./App.css";

class Board extends Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "initialGameState", () => {
      this.boardLogic = new BoardLogic(this.props.data || this.props.size);
      return {
        board: this.props.data ? this.boardLogic.matrix : this.boardLogic.scramble(),
        moves: 0,
        isWin: this.boardLogic.checkWin()
      };
    });

    _defineProperty(this, "move", (i, j) => {
      if (this.state.isWin) return;

      if (this.boardLogic.move(i, j)) {
        this.props.onMove(i, j);
        this.setState(prevState => ({
          board: this.boardLogic.matrix,
          moves: prevState.moves + 1,
          isWin: this.boardLogic.checkWin()
        }));
      }
    });

    _defineProperty(this, "getRow", (rowData, j) => {
      return React.createElement("div", {
        key: j
      }, rowData.map((bNum, i) => React.createElement(Box, {
        key: bNum,
        boxNumber: bNum,
        onClick: () => this.move(i, j)
      })));
    });

    _defineProperty(this, "newGame", () => {
      this.setState(this.initialGameState());
    });

    this.state = this.initialGameState();
  }

  render() {
    let rows = this.state.board.map(this.getRow);
    let message = (this.state.isWin ? "Winner !!! " : "Total ") + `Moves: ${this.state.moves}`;
    return React.createElement("div", {
      className: "slider-board"
    }, rows, React.createElement("span", {
      className: "slider-msg"
    }, message), React.createElement("div", {
      className: "btn-new-game"
    }, React.createElement("button", {
      onClick: this.newGame
    }, "New Game")));
  }

}

_defineProperty(Board, "defaultProps", {
  size: 3,
  onMove: (i, j) => {}
});

Board.propTypes = {
  data: PropTypes.array,
  size: PropTypes.number,
  onMove: PropTypes.func
};
export default Board;