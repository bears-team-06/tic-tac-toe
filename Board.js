class Board {

    boardCells;
    winningMoves;
    numberOfMoves;

    constructor() {
        this.boardCells = new Array();
        const rows = 3;
        for (let i = 0; i < rows; i++)
            this.boardCells[i] = new Array(0, 0, 0);
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
            return player.playerMark === PlayerMark[1] ? GameStatus.player1Won : GameStatus.player2Won;
        } else {
            if(this.moveMade < 8) {
                return GameStatus.draw;
            } else {
                return GameStatus.notEnded;
            }
        }
    }

    _hasPlayerWonAfterMove({row, column}, playerMark) {
        let hasWonInRow = true;
        let hasWonInColumn = true;
        let shouldCheckDiagonally = column === row;
        let hasWonInDiagonal = shouldCheckDiagonally;
        let shouldCheckCrossDiagonally = column + row === 2;
        let hasWonInCrossDiagonal = shouldCheckCrossDiagonally;
        for(let counter = 0; counter < 3; counter++) {
            if(this.boardCells[row][counter] !== playerMark){
                hasWonInRow = false;
            }
            if(this.boardCells[counter][column] !== playerMark) {
                hasWonInColumn = false;
            }
            if(shouldCheckDiagonally && this.boardCells[counter][counter] !== playerMark) {
                hasWonInDiagonal = false;
            }
            if(shouldCheckCrossDiagonally && this.boardCells[counter][2-counter] !== playerMark) {
                hasWonInCrossDiagonal = false;
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
        } else if(hasWonInCrossDiagonal){
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
