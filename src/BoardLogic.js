export default class BoardLogic {

    constructor(size) {
        // we place _ to mark it as private (only visual mark no enforcment)
        // ES7 has now support for private members.
        this._board = this.initBord(size);
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
     * Getter, eturn a copy of the game board 
     */
    get board() {
        return this._board.map(row => [...row]);
    }

    /**
     * moves the tile at the given (i,j) cordinates 
     * to the current empty space (only if legal)
     * @param {*} i row index
     * @param {*} j column index
     */
    move(i, j) {
        let moveValue = this._board[i][j];
        let emptyIndex = null;
        let friends = [{ i: i + 1, j }, { i: i - 1, j }, { i, j: j + 1 }, { i, j: j - 1 }];
        let isLegal = ({ i, j }) => (i < this._board.length && i >= 0 && j < this._board.length && j >= 0);

        friends.forEach(box => {
            if (isLegal(box) && (this._board[box.i][box.j] === 0))
                emptyIndex = box;
        });

        if (emptyIndex) {
            this._board[i][j] = 0;
            this._board[emptyIndex.i][emptyIndex.j] = moveValue;
        }
        return emptyIndex;
    }

    /**
     * Checks if board is in win configuration.
     */
    checkWin() {
        let size = this._board.length;
        let boxCount = size * size - 1;

        for (let i = 0; i < boxCount; ++i) {
            if (this._board[Math.floor(i / size)][i % size] !== (i + 1))
                return false;
        }
        return true;
    }

    /**
     * Scrambles the board randomly in a solvable way.
     */
    scramble() {
        const SIZE = this._board.length;
        const ITTER = 10 * SIZE * SIZE;
        let rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

        for (let i = 0; i < ITTER; i++) {
            let row = rand(0, SIZE);
            let col = rand(0, SIZE);
            this.move(row, col);
        }
        return this.board;
    }
}