class Game {
  constructor() {
    this.view = new View();
    this.foodview = new FoodView(30, this.view);
    this.food = new Food(30, this.foodview);
    this.score = new Score(0, this.view);
    this.snake = new Snake(30, this, this.view, this.foodview, this.score, this.food);
    this.buttons = new Buttons(this, this.view);
    this.SaveContinueButtons();
    this.db = null;
    this.creatIndexedDb();
  }


  SaveContinueButtons() {
    this.CreateaSaveButton();
    this.CreateaContinueButton();
  }


 

  CreateaSaveButton() {
    this.buttonSave = document.createElement("button");
    this.buttonSave.id = "save";
    this.buttonSave.textContent = "Save";
    this.buttonSave.style.visibility = "hidden";
    this.view.add(this.buttonSave);
    this.buttonSave.addEventListener("click", () => this.saveGame());
  }

  creatIndexedDb() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open("SnakeGameDB", 1);

      request.onerror = function (event) {
        console.error("IndexedDB error:", event.target.errorCode);
        reject(event.target.errorCode);
      };

      request.onsuccess = (event) => {
        this.db = event.target.result;
        console.log("IndexedDB initialized successfully");
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        const objectStore = db.createObjectStore("gameData", { keyPath: "id" });
        console.log("Object store created successfully");
      };
    });
  }

  saveGame() {
    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject("IndexedDB is not initialized.");
        return;
      }

      const transaction = this.db.transaction(["gameData"], "readwrite");
      const objectStore = transaction.objectStore("gameData");

      const gameData = {
        id: 1,
        score: this.score.score,
        snake: this.snake.snake
      };

      const request = objectStore.put(gameData);

      request.onerror = (event) => {
        console.error("Error saving game data to IndexedDB:", event.target.errorCode);
        reject(event.target.errorCode);
      };

      request.onsuccess = () => {
        console.log("Game data saved successfully");
        resolve();
      };
    });
  }

  

  CreateaContinueButton() {
    this.buttonContinue = document.createElement("button");
    this.buttonContinue.id = "continue";
    this.buttonContinue.textContent = "Continue";
   this.buttonContinue.style.visibility = "hidden";
    this.view.add(this.buttonContinue);
    this.buttonContinue.addEventListener("click", () => this.toContinue());
  }

  toContinue() {
    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject("IndexedDB is not initialized.");
        return;
      }

      const transaction = this.db.transaction(["gameData"], "readwrite");
      const objectStore = transaction.objectStore("gameData");
      const request = objectStore.get(1);

      request.onerror = (event) => {
        console.error("Error retrieving game data from IndexedDB:", event.target.errorCode);
        reject(event.target.errorCode);
      };

      request.onsuccess = (event) => {
        const gameData = event.target.result;
        if (gameData) {
          this.score.score = gameData.score;
          this.snake.snake = gameData.snake;
          this.buttons.theGameStart();
          console.log("Game data work successfully");
          resolve();
        } else {
          console.error("No saved game  found.");
          reject("No saved game  found.");
        }
      };
    });
  }
 


  toResetGame() {
    this.score.score = 0;
    this.snake.snake = [];
    this.snake.aHeadofSnake(30);
    this.snake.theSnakePosition();
    this.food.randomFood();
    this.view.clearCanvas();

  }

  itsOver() {
    clearInterval(this.buttons.start)
    this.view.theTextofCanvas();
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