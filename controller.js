function initializeGame() {
  initializeSeries();
  startGame();
}

initializeGame();

function startGame() {
  addClickListenersToCells();
  displayScores(getScoreForPlayerP1(), getScoreForPlayerP2());
}

function cellTapped(event) {
  const gridNumber = event.target.id;
  const player = whoseTurnNext();
  event.target.classList.add(player.playerSymbol);
  const gameStatus = aMoveMade(player, gridNumber);
  if (gameStatus != GameStatus.notEnded) {
    endGame(gameStatus);
  } else {
    $("#" + gridNumber).off('click', cellTapped);
  }
}

function endGame(gameStatus) {
  displayWinningMoves(getWinningArray());
  displayGameResult(gameStatus);
  makeScreenUnTappable();
  updatePlayerScore(gameStatus);
  displayScores(getScoreForPlayerP1(), getScoreForPlayerP2());
}

function displayWinningMoves(winningArray) {
  winningArray.forEach(gridNumber => $('#' + gridNumber).addClass('winning-moves'));
}

function makeScreenUnTappable() {
  $(".square").off('click', cellTapped);
}

function resetGame() {
  initializeView();
  initializeGameModel();
}

function addClickListenersToCells() {
  $(".square").on('click', cellTapped);
}

function displayScores(player1Score, player2Score) {
  $("#player1score").text(player1Score);
  $("#player2score").text(player2Score);
}

function displayGameResult(gameResult) {
  $('.gameResult h1').text(getGameResultString(gameResult));
  $('.gameResult').css("display", "block");
}

function initializeView() {
  clearBoard();
  resetResults();
}

function clearBoard() {
  $('.square').removeClass('zero cross winning-moves');
}

function resetResults() {
  $('.gameResult h1').text("");
  $(".gameResult").css("display", "none");
}
