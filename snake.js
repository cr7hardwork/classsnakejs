

class Snake {
    snake = [];
    shead = {
        x: this.snakeXdelta,
        y: this.snakeYdelta

    }

    dir = "right";
    constructor(size, game, view, foodview,score,food) {
        this.view = view;
        this.game = game;
        this.foodview = foodview;
        this.score = score;
        this.food = food;
        this.size = size;
        this.snake[0] = {
            x: 9 * size,
            y: 10 * size,
        }
        this.snakeXdelta = this.snake[0].x;
        this.snakeYdelta = this.snake[0].y;
    };






    context() {
        this.view.context.fillStyle = "white";
        this.view.context.font = "60px Verdana";
        this.view.context.fillText("Game over", 120, 300);
    }


    foodEat() {
        if (this.snakeXdelta === this.foodview.x && this.snakeYdelta === this.foodview.y) {
            this.food.randomFood();
            this.score.score++;
        } else {
            this.snake.pop();
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
                this.view.context.fillRect(this.snake[i].x, this.snake[i].y, 20, 20))
        }
    };


    theUpdateOfsneakHead() {
        this.snake.unshift(this.shead);

    }



    sheadUpdate() {
        this.shead = {
            x: this.snake.snakeXdelta,
            y: this.snake.snakeYdelta
        };
    }





    insidThewall() {
        if (this.snakeXdelta < 0) {
            this.snakeXdelta = this.view.canvas.width - this.size;
        }
        else if (this.snakeXdelta >= this.view.canvas.width) {
            this.snakeXdelta = 0;
        }
        else if (this.snakeYdelta < 0) {
            this.snakeYdelta = this.view.canvas.height - this.size;
        }
        else if (this.snakeYdelta >= this.view.canvas.height) {
            this.snakeYdelta = 0;
        }
    }


    eatTail() {
        for (let i = 1; i < this.snake.length; i++) {
            if (this.snakeXdelta === this.snake[i].x && this.snakeYdelta === this.snake[i].y) {
              this.game.gameOver();
                this.context();
            }
        }
    }

    whenSnakehits() {
        if (this.snakeXdelta < this.size || this.snakeXdelta > this.size * 18 ||
            this.snakeYdelta < this.size || this.snakeYdelta > this.size * 18) {
          this.game.gameOver()
            this.context();
        }
    }







    allSnakeLogic() {

        this.eatTail();
        this.directionChange(this.dir);
        this.mySnakeMove();
        this.theUpdateOfsneakHead();
        this.sheadUpdate();
        this.upDate();
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



