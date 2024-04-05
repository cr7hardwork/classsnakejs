class Game {
  constructor() {
    this.view = new View();
    this.foodview = new FoodView(30, this.view);
    this.food = new Food(30, this.foodview);
    this.score = new Score(0, this.view);
    this.snake = new Snake(30, this, this.view, this.foodview, this.score, this.food);
    this.buttons = new Buttons(this, this.view);
    this.CreateaSaveButton();
    this.CreateaContinueButton();
  }

  toResetGame() {
    this.score.score = 0;
    this.snake.snake = [];
    this.snake.aHeadofSnake(30);
    this.snake.theSnakePosition();
    this.food.randomFood();
    this.view.clearCanvas();


  }

  CreateaSaveButton() {
    this.buttonSave = document.createElement("button");
    this.buttonSave.id = "save";
    this.buttonSave.textContent = "Save";
    this.buttonSave.style.visibility = "hidden";
    this.view.add(this.buttonSave);
    this.buttonSave.addEventListener("click", () => this.saveGame());
  }

  CreateaContinueButton() {
    this.buttonContinue = document.createElement("button");
    this.buttonContinue.id = "continue";
    this.buttonContinue.textContent = "Continue";
    this.buttonContinue.style.visibility = "hidden";
    this.view.add(this.buttonContinue);
    this.buttonContinue.addEventListener("click", () => this.toContinue());
  }

  saveGame() {
    localStorage.setItem("gameScore", JSON.stringify(this.score.score));
    localStorage.setItem("snake", JSON.stringify(this.snake.snake));
  }

  toContinue() {
    const gameScore = JSON.parse(localStorage.getItem("gameScore"));
    const snake = JSON.parse(localStorage.getItem("snake"));

    if (gameScore && snake) {
      this.score.score = gameScore;
      this.snake.snake = snake;
      this.buttons.theGameStart();
    } else {
      console.error("No saved game data found.");
    }
  }



  itsOver() {
    clearInterval(this.buttons.start)
    this.view.theTextofCanvas();
  }


  checkIfSnakeHitsOrGoInside() {
    const chbox = document.getElementById("check");
    if (chbox.checked) {
      this.snake.myInsideTheWall();
    } else {
      this.snake.myWhenSnakeHits();
    }
  }

  snakeDraw() {
    this.snake.snakeDraw();
  }


  theGameLogic() {
    this.view.drawBackGroundImg();
    this.snake.allSnakeLogic();
    this.foodview.drawFood();
    this.score.drawScore();
    this.snake.foodEat();
    this.snakeDraw();
    this.checkIfSnakeHitsOrGoInside();

  }


};

const game = new Game();