class Buttons {
  constructor(game, view) {
    this.game = game;
    this.view = view;
    this.isGameStarted = false;
    this.start = null;
    this.theButtonsOfGame();
  }

  theButtonsOfGame() {
    this.creatLabel();
    this.creatCheck();
    this.createStartButton(this.view);
    this.createPauseButton();
    this.createResetButton();
  }

  creatLabel() {
    this.label = document.createElement("label");
    this.label.htmlFor = "check";
    this.label.textContent = "Through the wall";
    this.view.Add(this.label);
  }

  creatCheck() {
    this.check = document.createElement("input");
    this.check.type = "checkbox";
    this.check.id = "check";
    this.view.Add(this.check);
  }

  createStartButton() {
    this.buttonStart = document.createElement("button");
    this.buttonStart.textContent = "Start";
    this.view.Add(this.buttonStart);
    this.buttonStart.addEventListener("click", () => this.theGameStart());
  }

  createResetButton() {
    this.buttonReset = document.createElement("button");
    this.buttonReset.textContent = "Reset";
    this.view.Add(this.buttonReset);
    this.buttonReset.addEventListener("click", () => this.theGameReset());
  }

  createPauseButton() {
    this.buttonPause = document.createElement("button");
    this.buttonPause.textContent = "Pause";
    this.view.Add(this.buttonPause);
    this.buttonPause.addEventListener("click", () => this.theGamePause());
  }


  theGameReset() {
    this.view.drawBackGroundImg();
    this.game.score.score = 0;
    this.game.snake.snake = [];
    this.game.snake.creatingTheHeadOfSnake(30);
    this.game.snake.whereIstheSnake();
    this.theGameStart();
  }


  theGamePause() {
    clearInterval(this.start);
    this.isGameStarted = false;
  }


  theGameStart() {
    if (!this.isGameStarted) {
      this.start = setInterval(this.game.theGameLogic.bind(this.game), 100);
    }
    this.isGameStarted = true;
  }


};

