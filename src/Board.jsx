import React, { Component } from 'react';

class Board extends Component {

    getRow(i) {
        return <div>{i}</div>
    }

    render() {
        const SIZE = 3;
        let rows = [];
        for (let i = 0; i < SIZE; i++)
            rows.push(this.getRow(i));

        return (
            <div>
                {rows}
            </div>
        );
    }
}

export default Board;