class Game {
    board;
    player1;
    player2;
    switch = true;

    constructor(player1, player2) {
        this.board = new Board();
        this.player1 = player1;
        this.player2 = player2;
    }

    get isPlayer1Turn() {
        this.switch = !this.switch;
        return this.switch;
    }
}
