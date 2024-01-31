
class Food {
    constructor(size) {
        this.x = Math.floor((Math.random() * 17 + 1)) * size
        this.y = Math.floor((Math.random() * 15 + 2)) * size


        this.img = document.createElement("img");
        this.img.src = "https://cdn3.iconfinder.com/data/icons/balls-icons/512/cricket-256.png";

    }
    draw() {

        game.context.drawImage(this.img, this.x, this.y, 20, 20);
    }

    #foodEat() {
        if (game.snake.snakeXdelta === this.x && game.snake.snakeYdelta === this.y) {
            this.x = Math.floor((Math.random() * 17 + 1)) * game.score.size;
            this.y = Math.floor((Math.random() * 15 + 2)) * game.score.size;
            game.score.score++;
        } else {
            game.snake.snake.pop();
        }
    }


  allAboutFood(){
   this.draw();
   this.#foodEat();
  }

}

