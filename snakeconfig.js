class Buttons {
  constructor(game) {
    this.game = game;
    this.isGameStarted = false;
    this.start = null;
    this.container = document.createElement("div1");
    this.container.id = "mybuttons"
    this.container.width = 100;
    this.container.height = 50;
    this.theButtonsOfGame();
    document.body.appendChild(this.container);
  }

  theButtonsOfGame() {
    this.creatLabel();
    this.creatCheck();
    this.createStartButton();
    this.createPauseButton();
    this.createResetButton();
  }

  creatLabel() {
    this.label = document.createElement("label");
    this.label.htmlFor = "check";
    this.label.textContent = "Through the wall";
    this.container.appendChild(this.label);
  }

  creatCheck() {
    this.check = document.createElement("input");
    this.check.type = "checkbox";
    this.check.id = "check";
    this.container.appendChild(this.check);
  }

  createStartButton() {
    this.buttonStart = document.createElement("button");
    this.buttonStart.textContent = "Start";
    this.container.appendChild(this.buttonStart);
    this.buttonStart.addEventListener("click", () => this.theGameStart());
  }

  createResetButton() {
    this.buttonReset = document.createElement("button");
    this.buttonReset.textContent = "Reset";
    this.container.appendChild(this.buttonReset);
    this.buttonReset.addEventListener("click", () => this.theGameReset());
  }

  createPauseButton() {
    this.buttonPause = document.createElement("button");
    this.buttonPause.textContent = "Pause";
    this.container.appendChild(this.buttonPause);
    this.buttonPause.addEventListener("click", () => this.theGamePause());
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
    this.container.removeChild(this.buttonStart)
  }


};

