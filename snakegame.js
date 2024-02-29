class Game {
  constructor() {
    this.myClasses();
    this.buttontoadd();
  }


  myClasses() {
    this.food = new Food(30, this);
    this.score = new Score(0, 30, this);
    this.snake = new Snake(30, this);
    this.buttons = new Buttons(this);
    this.view = new View(this);
  }


  buttontoadd() {
    this.buttonAdd = document.createElement("button");
    this.buttonAdd.textContent = "Add";
    document.body.appendChild(this.buttonAdd);
    this.buttonAdd.addEventListener("click", () => this.toadd());
  }

  toadd() {
    this.game1 = new Game();
  }



  theGameLogic() {
    this.view.drawBackGroundImg();
    this.snake.allSnakeLogic();
    this.food.allAboutFood();
    this.score.drawScore();
    this.snake.theUpdateOfsneakHead();
    this.snake.sheadUpdate();
    this.snake.upDate();
    this.snake.foodEat();
    this.snakeDraw();
  }





  snakeDraw() {
    this.snake.snakeDraw();
  }
}




const game = new Game();
