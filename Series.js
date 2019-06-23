class Series {
    player1;
    player2;
    constructor(player1 = new Player(PlayerSymbol.cross, Math.random(), 0, PlayerMark["1"]),
                player2 = new Player(PlayerSymbol.zero, Math.random(), 0, PlayerMark["2"])) {
        this.player1 = player1;
        this.player2 = player2;
    }
}
