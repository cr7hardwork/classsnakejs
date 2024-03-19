class Game {
  constructor() {
    this.view = new View();
    this.foodview = new FoodView(30, this.view);
    this.food = new Food(30, this.foodview);
    this.score = new Score(0, this.view);
    this.snake = new Snake(30, this, this.view, this.foodview, this.score, this.food);
    this.buttons = new Buttons(this, this.view);
    this.buttonSaveTheGame();
    this.buttonToContinue();
    this.itisgameover = false;

  }






  buttonSaveTheGame() {
    this.buttonSave = document.createElement("button");
    this.buttonSave.textContent = "Save";
    this.view.Add(this.buttonSave);
    this.buttonSave.addEventListener("click", () => this.toSave());
  }



  toSave(){
    localStorage.setItem("game",JSON.stringify(this.score.score));
  
  }

  buttonToContinue() {
    this.buttonContinue = document.createElement("button");
    this.buttonContinue.textContent = "Continue";
    this.view.Add(this.buttonContinue);
    this.buttonContinue.addEventListener("click", () => this.toContinue());
  }


  toContinue(){
   let z =  localStorage.getItem("game");
   console.log(z);
  }


  gameOver() {
    this.itisgameover = true;


  }




  checkIfSnakeHitsOrGoInside() {
    const chbox = document.getElementById("check");
    if (chbox.checked) {
      this.snake.insidThewall();
    } else {
      this.snake.whenSnakehits();
    }
  }

  snakeDraw() {
    this.snake.snakeDraw();
  }


  theGameLogic() {
    if (!this.itisgameover) {
      this.view.drawBackGroundImg();
      this.snake.allSnakeLogic();
      this.foodview.drawFood();
      this.score.drawScore();
      this.snake.foodEat();
      this.snakeDraw();
      this.checkIfSnakeHitsOrGoInside();
    }



  };

};




const game = new Game();