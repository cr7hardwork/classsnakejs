class Score {
    constructor(score, view) {

        this.score = score;
        this.view = view;
    }

    drawScore() {
        this.view.context.fillStyle = "black";
        this.view.context.font = "15px Arial";
        this.view.context.fillText("Score" + " " + this.score, this.view.canvas.width - 70, 20);
    }

}