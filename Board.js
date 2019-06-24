class Board {

    boardCells;
    winningMoves;
    numberOfMoves;

    constructor() {
        this.boardCells = new Array(3).fill(new Array(3).fill(0));
        this.winningMoves = null;
        this.numberOfMoves = 0;
    }

    moveMade(player, cellID) {
        this.numberOfMoves++;
        let {row, column} = this._getCellPositionInRowAndColumn(cellID);
        this.boardCells[row][column] = player.playerMark;
        if(this.numberOfMoves < 4) {
            return GameStatus.notEnded;
        }
        let didCurrentPlayerWin = this._hasPlayerWonAfterMove({row, column}, player.playerMark);
        if(didCurrentPlayerWin) {
            return player.playerMark === PlayerMark["1"] ? GameStatus.player1Won : GameStatus.player2Won;
        } else {
            if(this.moveMade < 8) {
                return GameStatus.draw;
            } else {
                return GameStatus.notEnded;
            }
        }
    }

    _hasPlayerWonAfterMove({row, column}, playerMark) {
        let hasWonInRow = false;
        let hasWonInColumn = false;
        let hasWonInDiagonal = false;
        let hasWonInCrossDiagonal = false;
        let shouldCheckDiagonally = column === row;
        let shouldCheckCrossDiagonally = column + row === 2;
        for(let counter = 0; counter < 3; counter++) {
            hasWonInRow = this.boardCells[counter][column] === playerMark;
            hasWonInColumn = this.boardCells[row][counter] === playerMark;
            if(shouldCheckDiagonally) {
                hasWonInDiagonal = this.boardCells[counter][counter] === playerMark;
            }
            if(shouldCheckCrossDiagonally) {
                hasWonInCrossDiagonal = this.boardCells[counter][2-counter] === playerMark;
            }
        }
        if (hasWonInRow) {
            this.winningMoves = [0,1,2].map(rowNumber => this._getCellIDFrom(rowNumber, column));
            return true;
        } else if(hasWonInColumn) {
            this.winningMoves = [0,1,2].map(columnNumber => this._getCellIDFrom(row, columnNumber));
            return true;
        } else if (hasWonInDiagonal) {
            this.winningMoves = [0, 4, 8];
            return true;
        } else {
            this.winningMoves = [2, 4, 6];
            return true;
        }
        return false;
    }

    _getCellPositionInRowAndColumn(cellID) {
        let row = parseInt(cellID / 3);
        let column = cellID - row * 3;
        return {
            row,
            column
        }
    }

    _getCellIDFrom(row, column) {

    }
}
