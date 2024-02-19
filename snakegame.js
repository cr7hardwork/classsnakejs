class Game {
  constructor() {
  this.myClasses();
  this.buttontoadd();
  this.buttonClose();
  }


  myClasses(){
    this.food = new Food(30,this);
    this.score = new Score(0, 30,this);
    this.snake = new Snake(30,this);
    this.buttons = new Buttons(this);
    this.view =  new View(this);
  }


  buttontoadd(){
    this.buttonAdd = document.createElement("button");
    this.buttonAdd.id = "aper"
    this.buttonAdd.textContent = "Add";   
    document.body.appendChild(this.buttonAdd);
    this.buttonAdd.addEventListener("click", () => this.toadd());
  }

toadd(){
 this.game1 = new Game();
}

buttonClose(){
  this.buttonclose = document.createElement("button");
  this.buttonclose.textContent = "Close";   
  document.body.appendChild(this.buttonclose);
  this.buttonclose.addEventListener("click", () => this.toclose());
}

toclose(){

 this.toadd.remove();
}





  theGameLogic() {
    this.view.drawBackGroundImg();
    this.snake.allSnakeLogic();
    this.food.allAboutFood();
    this.score.drawScore();
    this.snake.snake.unshift(this.snake.shead);
    this.sheadUpdate();
    this.snake.upDate();
    this.foodEat();
    this.snakeDraw();
  }

  foodEat() {
    if (this.snake.snakeXdelta === this.food.x && this.snake.snakeYdelta === this.food.y) {
      this.food.randomfood();
      this.score.score++;
    } else {
      this.snake.snakepop();
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





const game = new Game();
