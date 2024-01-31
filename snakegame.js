class Game {
  constructor(start) {
    this.canvas = document.querySelector("canvas");
    this.context = this.canvas.getContext("2d");
    this.snake = new Snake(30);
    this.food = new Food(30);
    this.score = new Score(0, 30);
    this.buttons = new Buttons();
    this.img = document.createElement("img");
    this.img.src = "https://htmlcolorcodes.com/assets/images/colors/bright-blue-color-solid-background-1920x1080.png";
    this.start = start;
  };


  drawBackGroundImg() {
    this.context.drawImage(this.img, 0, 0);
  }


  theGameLogic() {
    this.drawBackGroundImg();
    this.snake.allSnakeLogic();
    this.food.allAboutFood();
    this.score.drawScore();
    this.snake.mySnakeMove();
    this.snake.snake.unshift(this.snake.shead)
    this.#sheadUpdate();
    this.snake.upDate();

  }


  #sheadUpdate() {
    this.snake.shead = {
      x: this.snakeXdelta,
      y: this.snakeYdelta
    }
  }


  snakeDraw() {
    this.snake.snakeDraw()
  };




};

function drawGame() {
  game.theGameLogic();
  game.snakeDraw();

};




const game = new Game();






