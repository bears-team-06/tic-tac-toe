const PlayerSymbol = {
    cross: "cross",
    zero: "zero"
};

const PlayerMark = {
    1: -1,
    2: 1
};

class Player {
    playerMark; // this can either be 1 or -1
    playerID; // may be use math.random here
    playerScore; // 0 to start with
    playerSymbol; // cross or zero

    constructor(playerSymbol, playerID = Math.random(), playerScore = 0, playerMark) {
        this.playerSymbol = playerSymbol;
        this.playerID = playerID;
        this.playerScore = playerScore;
        this.playerMark = playerMark;
    }

    incrementScore() {
        this.playerScore++;
    }
}
