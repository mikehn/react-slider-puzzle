import React, { Component } from 'react';
import Box from "./Box";
import "./Board.css";
class Board extends Component {

    constructor(props) {
        super(props);
        const SIZE = props.size || 3;
        // Note: you should avoid placing view elements in state,
        //       state elements should only be changed by state functions
        this.state = {
            board: this.initBord(SIZE),
            moves: 0,
            isWin: false,
        }
    }

    /**
     * Gets a new board of the given size
     * @param {Number} size amount of Boxes per row
     */
    initBord(size) {
        let board = [];
        let cellNum = 0;
        for (let i = 0; i < size; i++) {
            let row = [];
            for (let j = 0; j < size; j++) {
                row.push(cellNum++);
            }
            board.push(row);
        }
        return board;
    }

    //note declaring class function as an arrow function gives us automatic 'this' binding.
    move = (i, j) => {
        let { board } = this.state;
        let moveValue = board[i][j];
        let emptyIndex = null;
        let friends = [{ i: i + 1, j }, { i: i - 1, j }, { i, j: j + 1 }, { i, j: j - 1 }];
        let isLegal = ({ i, j }) => (i < board.length && i >= 0 && j < board.length && j >= 0);

        friends.forEach(box => {
            if (isLegal(box) && (board[box.i][box.j] === 0))
                emptyIndex = box;
        });
        //Create a copy of board as it is good practice to keep state immutable
        let boardCopy = board.map(row => [...row]);
        if (emptyIndex) {
            boardCopy[i][j] = 0;
            boardCopy[emptyIndex.i][emptyIndex.j] = moveValue;
            let isWin = this.checkWin(boardCopy);
            this.setState((prevState) => ({
                board: boardCopy,
                moves: prevState.moves + 1,
                isWin,
            }));
        }
        return emptyIndex;
    }

    checkWin(board) {
        let size = board.length;
        let boxCount = size * size - 1;

        for (let i = 0; i < boxCount; ++i) {
            if (board[Math.floor(i / size)][i % size] != (i + 1))
                return false;
        }
        return true;
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
        return (
            <div className="slider-board">
                {rows}
                <span className="slider-msg">
                    {this.state.isWin ? "Winner !!!" : `Total Moves: ${this.state.moves}`}
                </span>
            </div>
        );
    }
}

export default Board;