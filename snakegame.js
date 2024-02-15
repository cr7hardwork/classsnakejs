class Game {
  constructor() {
    this.food = new Food(30);
    this.score = new Score(0, 30);
    this.snake = new Snake(30);
    this.buttons = new Buttons(this);
    this.canvas = document.createElement("canvas");
    this.canvas.width = 608;
    this.canvas.height = 608;
    document.body.appendChild(this.canvas);
    this.context = this.canvas.getContext("2d");
    this.img = document.createElement("img");
    this.img.src = "https://htmlcolorcodes.com/assets/images/colors/bright-blue-color-solid-background-1920x1080.png";
  }

  drawBackGroundImg() {
    this.context.drawImage(this.img, 0, 0);
  }

  theGameLogic() {
    this.drawBackGroundImg();
    this.snake.allSnakeLogic(game);
    this.food.allAboutFood(game);
    this.score.drawScore(game);
    this.snake.snake.unshift(this.snake.shead);
    this.sheadUpdate();
    this.snake.upDate();
    this.foodEat();
    this.snakeDraw();
  }

  foodEat() {
    if (this.snake.snakeXdelta === this.food.x && this.snake.snakeYdelta === this.food.y) {
      this.food.randomfood(game);
      this.score.score++;
    } else {
      this.snake.snake.pop();
    }
  }

  sheadUpdate() {
    this.snake.shead = {
      x: this.snake.snakeXdelta,
      y: this.snake.snakeYdelta
    };
  }

  snakeDraw() {
    this.snake.snakeDraw();
  }
}

function drawGame() {
  game.theGameLogic();
}



const game = new Game();
