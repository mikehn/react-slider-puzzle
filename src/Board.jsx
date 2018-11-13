import React, { Component } from 'react';

class Board extends Component {

    constructor(props) {
        super(props);
        const SIZE = props.size || 3;
        this.state = {
            board: this.initBord(SIZE)
        }
    }

    initBord(size) {
        let board = [];
        let cellNum=0;
        for (let i = 0; i < size; i++) {
            let row = [];
            for (let j = 0; j < size; j++) {
                row.push(cellNum++);
            }
            board.push(row);
        }
        return board;
    }

    getRow(rowData) {
        return <div>{rowData}</div>
    }

    render() {

        let rows = this.state.board.map(this.getRow);

        return (
            <div>
                {rows}
            </div>
        );
    }
}

export default Board;