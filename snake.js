
class Snake {

    constructor(size) {
        this.snake = [];
        this.snake[0] = {
            x: 9 * size,
            y: 10 * size,
        }

        this.snakeXdelta = this.snake[0].x;
        this.snakeYdelta = this.snake[0].y;

        this.size = 30;
        this.shead = {
            x: this.snakeXdelta,
            y: this.snakeYdelta

        };

        this.dir = "left";

    };







    goRight() {
        this.snakeXdelta += this.size;
    }

    goLeft() {
        this.snakeXdelta -= this.size;
    }

    goUp() {
        this.snakeYdelta -= this.size;
    }

    goDown() {
        this.snakeYdelta += this.size;
    }


    upDate() {
        this.snake[0].x = this.snakeXdelta;
        this.snake[0].y = this.snakeYdelta;
    };

    snakeDraw() {
        for (let i = 0; i < this.snake.length; i++) {
            (game.context.fillStyle = i === 0 ? "black" : "red",
                game.context.fillRect(this.snake[i].x, this.snake[i].y, 20, 20))
        }
    };

    #insidThewall() {
        if (this.snakeXdelta < 0) {
            this.snakeXdelta = game.canvas.width - this.size;
        }
        else if (this.snakeXdelta >= game.canvas.width) {
            this.snakeXdelta = 0;
        }
        else if (this.snakeYdelta < 0) {
            this.snakeYdelta = game.canvas.height - this.size;
        }
        else if (this.snakeYdelta >= game.canvas.height) {
            this.snakeYdelta = 0;
        }
    }


    #whenSnakehits() {
        if (this.snakeXdelta < this.size || this.snakeXdelta > this.size * 18 ||
            this.snakeYdelta < this.size || this.snakeYdelta > this.size * 18) {
            clearInterval(game.start);
            game.context.fillStyle = "white",
                game.context.font = "60px Verdana",
                game.context.fillText("Game over", 120, 300);
        }
    }



    #eatTail() {
        for (let i = 1; i < this.snake.length; i++) {
            if (this.snakeXdelta === this.snake[i].x && this.snakeYdelta === this.snake[i].y) {
                clearInterval(game.start);
                game.context.fillStyle = "white";
                game.context.font = "60px Verdana";
                game.context.fillText("Game over", 120, 300);
            }
        }
    }




    #checkBoxoptions() {
        const chbox = document.getElementById("myCheck")
        const box = setInterval(optionwithcheckbox);
        function optionwithcheckbox() {
            if (chbox.checked) {
                game.snake.#insidThewall()
            }
            else {
                game.snake.#whenSnakehits();

            }
        };
    };



    allSnakeLogic() {
        this.#checkBoxoptions();
        this.#eatTail();
        this.directionChange(this.dir);
    }



    mySnakeMove() {
        document.addEventListener("keydown", this.direction.bind(this));
    }


    direction(event) {
        if (event.keyCode === 37 && this.dir !== "right")
            this.dir = "left";
        else if (event.keyCode === 38 && this.dir !== "down")
            this.dir = "up";
        else if (event.keyCode === 39 && this.dir !== "left")
            this.dir = "right";
        else if (event.keyCode === 40 && this.dir !== "up")
            this.dir = "down";
    }



    directionChange(dir) {
        if (dir === "left") this.goLeft();
        if (dir === "right") this.goRight();
        if (dir === "up") this.goUp();
        if (dir === "down") this.goDown();
    }



};


















