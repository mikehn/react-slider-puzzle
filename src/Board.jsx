import React, { Component } from 'react';
import Box from "./Box";
import BoardLogic from "./BoardLogic";
class Board extends Component {

    constructor(props) {
        super(props);
        const SIZE = props.size || 3;
        this.boardLogic = new BoardLogic(SIZE);
        // Note: you should avoid placing view elements in state,
        //       state elements should only be changed by state functions
        this.state = {
            board: this.boardLogic.scramble(),
            moves: 0,
            isWin: false,
        }
    }

    //note declaring class function as an arrow function gives us automatic 'this' binding.
    move = (i, j) => {
        if (this.boardLogic.checkWin())
            return;
        let emptyIndex = this.boardLogic.move(i, j);
        if (emptyIndex) {
            this.setState((prevState) => ({
                board: this.boardLogic.board,
                moves: prevState.moves + 1,
                isWin: this.boardLogic.checkWin(),
            }));
        }
    }

    /**
     * returns a single slider row given the row data
     * @param {Object} rowData row data
     * @param {Number} i row number
     */
    getRow = (rowData, i) => {
        return (
            <div key={i} className="slider-row">
                {rowData.map((bNum, idx) => <Box key={bNum} boxNumber={bNum} onClick={() => this.move(i, idx)} />)}
            </div>
        );
    }

    render() {
        let rows = this.state.board.map(this.getRow);
        let message = (this.state.isWin ? "Winner !!! " : "Total ") + `Moves: ${this.state.moves}`;
        return (
            <div className="slider-board">
                {rows}
                <span className="slider-msg">
                    {message}
                </span>
                <div className="btn-new-game">
                    <button onClick={() => this.setState({ board: this.boardLogic.scramble() })}>New Game</button>
                </div>
            </div>
        );
    }
}

export default Board;