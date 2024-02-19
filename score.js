class Score {
    constructor(score, size, game) {

        this.score = score;
        this.size = size;
        this.game = game;
    }

    drawScore() {
        this.game.view.context.fillStyle = "black";
        this.game.view.context.font = "15px Arial";
        this.game.view.context.fillText("Score" + " " + this.score, this.game.view.canvas.width - 70, 20);
    }
}
