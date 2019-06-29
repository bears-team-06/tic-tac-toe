model = new TicTacToeModel();

function startGame() {
  addClickListenersToCells();
  displayScores(model.player1Score, model.player2Score);
}

startGame();

function cellTapped(event) {
  const gridNumber = event.target.id;
  const player = model.nextTurn;
  event.target.classList.add(player.playerSymbol);
  const gameStatus = model.aMoveMade(player, gridNumber);
  if (gameStatus != GameStatus.notEnded) {
    endGame(gameStatus);
  } else {
    $("#" + gridNumber).off('click', cellTapped);
  }
}

function endGame(gameStatus) {
  displayWinningMoves(model.winningMoves);
  displayGameResult(gameStatus);
  makeScreenUnTappable();
  model.updatePlayerScore(gameStatus);
  displayScores(model.player1Score, model.player2Score);
}

function displayWinningMoves(winningArray) {
  winningArray.forEach(gridNumber => $('#' + gridNumber).addClass('winning-moves'));
}

function makeScreenUnTappable() {
  $(".square").off('click', cellTapped);
}

function resetGame() {
  initializeView();
  model.initializeGameModel();
  startGame();
}

function addClickListenersToCells() {
  $(".square").on('click', cellTapped);
}

function displayScores(player1Score, player2Score) {
  $("#player1score").text(player1Score);
  $("#player2score").text(player2Score);
}

function displayGameResult(gameResult) {
  $('.gameResult h1').text(model.getGameResultString(gameResult));
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
