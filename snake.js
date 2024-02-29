

class Snake {
    snake = [];
    shead = {
        x: this.snakeXdelta,
        y: this.snakeYdelta

    }

    dir = "right";
    constructor(size, game) {
        this.game = game;
        this.snake[0] = {
            x: 9 * size,
            y: 10 * size,
        }



        this.snakeXdelta = this.snake[0].x;
        this.snakeYdelta = this.snake[0].y;

        this.size = size;



    };






    context() {
        this.game.view.context.fillStyle = "white";
        this.game.view.context.font = "60px Verdana";
        this.game.view.context.fillText("Game over", 120, 300);
    }


    foodEat() {
        if (this.snakeXdelta === this.game.food.x && this.snakeYdelta === this.game.food.y) {
            this.game.food.randomfood();
            this.game.score.score++;
        } else {
            this.snakepop();
        }
    }

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
            (this.game.view.context.fillStyle = i === 0 ? "black" : "red",
                this.game.view.context.fillRect(this.snake[i].x, this.snake[i].y, 20, 20))
        }
    };

    snakepop() {
        this.snake.pop();

    }


    theUpdateOfsneakHead() {
        this.snake.unshift(this.shead);

    }



    sheadUpdate() {
        this.shead = {
            x: this.snake.snakeXdelta,
            y: this.snake.snakeYdelta
        };
    }





    #insidThewall() {
        if (this.snakeXdelta < 0) {
            this.snakeXdelta = this.game.view.canvas.width - this.size;
        }
        else if (this.snakeXdelta >= this.game.view.canvas.width) {
            this.snakeXdelta = 0;
        }
        else if (this.snakeYdelta < 0) {
            this.snakeYdelta = this.game.view.canvas.height - this.size;
        }
        else if (this.snakeYdelta >= this.game.view.canvas.height) {
            this.snakeYdelta = 0;
        }
    }


    #eatTail() {
        for (let i = 1; i < this.snake.length; i++) {
            if (this.snakeXdelta === this.snake[i].x && this.snakeYdelta === this.snake[i].y) {
                clearInterval(this.game.buttons.start);
                this.context();
            }
        }
    }

    #whenSnakehits() {
        if (this.snakeXdelta < this.size || this.snakeXdelta > this.size * 18 ||
            this.snakeYdelta < this.size || this.snakeYdelta > this.size * 18) {
            clearInterval(this.game.buttons.start);
            this.context();
        }
    }




    #checkBoxoptions() {
        const chbox = document.getElementById("check")
        const box = setInterval(() => {
            if (chbox.checked) {
                this.game.snake.#insidThewall()
            }
            else {
                this.game.snake.#whenSnakehits();

            }
        });


    };
    ;



    allSnakeLogic() {
        this.#checkBoxoptions();
        this.#eatTail();
        this.directionChange(this.dir);
        this.mySnakeMove();
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



