class Game {
  constructor() {
    this.view = new View();
    this.foodview = new FoodView(30, this.view);
    this.food = new Food(30, this.foodview);
    this.score = new Score(0, this.view);
    this.snake = new Snake(30, this, this.view, this.foodview);
    this.buttons = new Buttons(this);
    this.container = document.createElement("div2");
    document.body.appendChild(this.container);
    this.buttontoAdd();
    this.buttonSaveTheGame();
    this.itisgameover = false;
   
  }


  buttontoAdd() {
    this.buttonAdd = document.createElement("button");
    this.buttonAdd.textContent = "Add";
    this.container.appendChild(this.buttonAdd);
    this.buttonAdd.addEventListener("click", () => this.toAdd());
  }



  toAdd() {
    this.game = new Game();
    this.container.removeChild(this.buttonAdd);
   
  }
   
  







  buttonSaveTheGame() {
    this.buttonSave = document.createElement("button");
    this.buttonSave.textContent = "Save";
    this.container.appendChild(this.buttonSave);
    this.buttonSave.addEventListener("click", () => this.toSave());
  }



 


gameOver(){
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
    if(!this.itisgameover){
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