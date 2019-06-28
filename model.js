const GameStatus = {
    draw: 0,
    player1Won: 1,
    player2Won: 2,
    notEnded: -1
};


class TicTacToeModel {
    game;
    series;

    constructor() {
        this.series = new Series();
        this.initializeGameModel();
    }

    initializeGameModel() {
        this.game = new Game(this.series.player1, this.series.player2);
    }

    get player1Score() {
        return this.game.player1.playerScore;
    }

    get player2Score() {
        return this.game.player2.playerScore;
    }

    get nextTurn() {
        return this.game.isPlayer1Turn ? this.game.player1 : this.game.player2;
    }

    aMoveMade = (player, gridNumber) => {
        return this.game.board.moveMade(player, gridNumber)
    }

    get winningMoves() {
        return this.game.board.winningMoves;
    }

    getGameResultString = (gameResult) => {
        let gameResultString;
        switch (gameResult) {
            case GameStatus.player1Won:
                gameResultString = "Player 1 Won!!!";
                break;
            case GameStatus.player2Won:
                gameResultString = "Player 2 Won!!!";
                break;
            case GameStatus.draw:
                gameResultString = "Game Draw";
                break;
        }
        return gameResultString;
    }

    updatePlayerScore = (gameStatus) => {
        switch (gameStatus) {
            case GameStatus.player1Won:
                this.game.player1.incrementScore();
                break;
            case GameStatus.player2Won:
                this.game.player2.incrementScore();
                break;
        }
    }
}
