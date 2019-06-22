# Tic-Tac-Toe
## Tools Used
Javascript, Jquery, Bootsrap, HTML and CSS
## VARIABLE, OBJECTS AND CONSTANT IN TIC TAC TOE GAME

### moves
It is an array that stores the id of cells that are clicked by player-1 and player-2 which in turn are moves played by player1 and
player-2.Starting value is empty array.

### player1Moves
It is an array that stores the id of cells that are clicked by player-1 which in turn are moves played by player1.Starting value is empty array.

### player2Moves
It is an array that stores the id of cells that are clicked by player-2 which in turn are moves played player-2.Starting value is empty array.

### winningArray 
It is an array that stores the array of winning moves.

### winningCombinations 
It is constant array in which winning combinations are nested.

### player1scores 
number variable which stores total number of win by player-1.

### player2scores 
number variable which stores total number of win by player-2.

### players 
It is an object  contains two properties player1 and player2 2 whose keys are 1 and 2 respectively.

### gameStatus 
it is an object that contains for property draw, player1, player2, and not notEnded whose keys are 0, 1, 2, -1 respectively.

## FUNCTIONS IN TIC TAC TOE GAME

### intializeGame()
initializes game by calling intialilizeSeries() and startGame().

### initializeSeries() 
It calls initializeGameModel() which inturn set all the varialble like moves ,player1Moves,player2Moves,winningArray to their starting value.

### startGame()
It calls addClickListenersToCells() and displayScores(getScoreForPlayerP1(), getScoreForPlayerP2()).

### addClickListenersToCells()
It adds event listener to cells which listen for any clicks and calls celltapped() if any cell is clicked.
displayScores(getScoreForPlayerP1(), getScoreForPlayerP2())- display the score of player1 and player2 return from getScoreForPlayerP1() and getScoreForPlayerP2() and display it in the result in html.

### cellTapped()
It get the id of the cell from event.target.id and stores it in gridNumber add "X" or "0"to cell by adding cross or zero class to gridNumber respectively .check for whose turn from whoseTurn() and store it in constant player.It calls a moveIsMade() and get game status by calling  getGameResultStatus(player) and stores it in gameStatus and checks if game is ended or not and if not it finally removes edven listener from cell clicked.

### whoseTurn()
It return player-1 key or player-2 key that is 1 or 2 respectively from the object players .

### aMoveIsMade() 
It take player whose turn is and gridnumber as input and pushes gridNumber in moves and player1Moves or player2moves depending on whose turn is.

### getGameResultStatus(player)
Its checks if any player has won by usinr isWinningMoves() and if not checks for if game is draw ie if moves array length is 9 or not and if of constions are satisfy it returns keys of draw ,player-1 or player-2 of object GameStatus and if both constions are not satisfy it returns key of notEnded from GameStatus object.

### isWinningMove() 
It compares the moves stored in player1moves and player2moves on basis of whose turn is with the winningCombinations and if winningComabination in winningCombinations contains in player's moves it stores moves in winningMoves and returns true.

### endGame() 
if game is ended ie gameStatus is 0, 1 or 2 it calls displayWinningMoves(getWinningArray()), displayGameResult(gameStatus), makeScreenUnTappable(), updatePlayerScore(gameStatus), displayScores(getScoreForPlayerP1(), getScoreForPlayerP2()) simontaneuosly.

### displayWinningMoves(getWinningArray()) 
it displayes winning moves by adding class winning-move to all the cell's in stores in winningMoves.

### getWinningArray() 
It returns winningMoves.

### displayGameResult(gameStatus) 
It changes the inner text of gameResult on basis of gameStatus.

### makeScreenUnTappable()
It removes event listener from all the cells so that no further click is recorded.

### updatePlayerScore(gameStatus) 
It updates player1score an player2score on basis of gameStatus.

 ### displayScores(getScoreForPlayerP1(), getScoreForPlayerP2())
 It changes player1and player2 score which is seen on ghe screen.

 ### resetGame()
 if replay button is clicked ,this functioon is called which clears all the board , gameResult, player1moves,player2moves,moves and winningMoves emptyarray
