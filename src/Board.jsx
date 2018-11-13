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
            board: this.initBord(SIZE)
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

    /**
     * returns a single slider row given the row data
     * @param {Object} rowData row data
     * @param {Number} i row number
     */
    getRow(rowData, i) {
        return (
            <div key={i} className="slider-row">
                {rowData.map(bNum => <Box key={bNum} boxNumber={bNum} />)}
            </div>
        );
    }

    render() {
        let rows = this.state.board.map(this.getRow);
        return (
            <div className="slider-board">
                {rows}
            </div>
        );
    }
}

export default Board;