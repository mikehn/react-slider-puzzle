import React, { Component } from 'react';

class Board extends Component {

    getRow(i) {
        return null// implement row here
    }

    render() {
        const SIZE = 3; 
    
        return (
            <div>
                replace below div's with auto generated divs 
                <div>0</div>
                <div>1</div>
                <div>2</div>
                hint: you can render an array that contains those elements
            </div>
        );
    }
}

export default Board;