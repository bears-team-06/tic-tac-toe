//FIXME - Valyes not needed - player1moves, player2moves, winningCombinations
// FIXME

const GameStatus = {
  draw: 0,
  player1Won: 1,
  player2Won: 2,
  notEnded: -1
};

let game;
let series;

function initializeGameModel() {
  game = new Game(series.player1, series.player2);
}

function getScoreForPlayerP1() {
  return game.player1.playerScore;
}

function getScoreForPlayerP2() {
    return game.player2.playerScore;
}

function initializeSeries() {
  series = new Series();
  initializeGameModel();
}

function whoseTurnNext() {
  return game.isPlayer1Turn ? game.player1 : game.player2;
}

function aMoveMade(player, gridNumber) {
  return game.board.moveMade(player, gridNumber)
}

function getWinningArray() {
  return game.board.winningMoves;
}

function getGameResultString(gameResult) {
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

function updatePlayerScore(gameStatus) {
  switch (gameStatus) {
    case GameStatus.player1Won:
      game.player1.incrementScore();
      break;
    case GameStatus.player2Won:
        game.player2.incrementScore();
      break;
  }
}
