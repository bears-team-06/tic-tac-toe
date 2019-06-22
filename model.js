let player1Moves;
let player2Moves;
const winningCombinations = [
  ["0", "3", "6"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["0", "1", "2"],
  ["3", "4", "5"],
  ["6", "7", "8"],
  ["0", "4", "8"],
  ["6", "4", "2"]
];
let player1Score = 0;
let player2Score = 0;
let moves = [];
const players = {
  player1: 1,
  player2: 2
}

const GameStatus = {
  draw: 0,
  player1: 1,
  player2: 2,
  notEnded: -1
};

let winningArray;

function initializeGameModel() {
  moves = [];
  player1Moves = [];
  player2Moves = [];
  winningArray = [];
}

function getScoreForPlayerP1() {
  return player1Score;
}

function getScoreForPlayerP2() {
  return player2Score;
}

function initializeSeries() {
  initializeGameModel()
}

function whoseTurnNext() {
  return moves.length % 2 == 0 ? players.player1 : players.player2;
}

function aMoveMade(player, gridNumber) {
  moves.push(gridNumber);
  if (player == 1) {
    player1Moves.push(gridNumber);

  } else {
    player2Moves.push(gridNumber);
  }

}

function getGameResultStatus(player) {
  if (moves.length > 4) {
    const hasAnybodyWon = player == players.player1 ? areWinningMoves(player1Moves) : areWinningMoves(player2Moves);
    if (hasAnybodyWon) {
      return player == players.player1 ? GameStatus.player1 : players.player2;
    } else if (moves.length == 9) {
      return GameStatus.draw;
    }
  }
  return GameStatus.notEnded;
}

// input moves = ["1", "2", "3"]
// output bool
function areWinningMoves(moves) {
  const isWinningMoveInUserMoves = winingMove => moves.includes(winingMove)
  const isMoveInCurrentWinningCombination = winningCombination => winningCombination.every(isWinningMoveInUserMoves)
  const winningMoves = winningCombinations.find(isMoveInCurrentWinningCombination);

  if (!!winningMoves) {
    winningArray = winningMoves;
  }
  return !!winningMoves;
}

function getGameResultString(gameResult) {
  let gameResultString;
  switch (gameResult) {
    case GameStatus.player1:
      gameResultString = "Player 1 Won!!!";
      break;
    case GameStatus.player2:
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
    case GameStatus.player1:
      player1Score += 1;
      break;
    case GameStatus.player2:
      player2Score += 1;
      break;
  }
}

function getWinningArray() {
  return winningArray;
}
