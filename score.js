class Score {
    constructor(score, size) {
        this.score = score
        this.size = size



    }
    drawScore() {
        game.context.fillStyle = "black";
        game.context.font = "15px Arial";
        game.context.fillText("Score" + " " + this.score, game.canvas.width - 70, 20);
    };


    drawImg() {
        game.context.drawImage(this.img, 0, 0);
    }


};





