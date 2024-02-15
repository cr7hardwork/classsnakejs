class Buttons {
  constructor(game) {
    this.game = game;
    this.isGameStarted = false;
    this.start = null;
    this.creatlabel();
    this.creatcheck();
    this.createStartButton();
    this.createPauseButton();
    this.createResetButton();
  }




  creatlabel() {
    this.label = document.createElement("label");
    this.label.htmlFor = "check";
    this.label.textContent = "Through the wall"
    document.body.appendChild(this.label)
  }


  creatcheck() {
    this.check = document.createElement("input");
    this.check.type = "checkbox";
    this.check.id = "check"
    document.body.appendChild(this.check)
  }


  createStartButton() {
    this.buttonStart = document.createElement("button");
    this.buttonStart.textContent = "Start";
    document.body.appendChild(this.buttonStart);
    this.buttonStart.addEventListener("click", () => this.theGameStart());
  }

  createResetButton() {
    this.buttonReset = document.createElement("button");
    this.buttonReset.textContent = "Reset";
    document.body.appendChild(this.buttonReset);
    this.buttonReset.addEventListener("click", () => this.theGameReset());
  }

  createPauseButton() {
    this.buttonPause = document.createElement("button");
    this.buttonPause.textContent = "Pause";
    document.body.appendChild(this.buttonPause);
    this.buttonPause.addEventListener("click", () => this.theGamePause());
  }



  theGameReset() {
    location.reload();
  }

  theGamePause() {
    clearInterval(this.start);
    this.isGameStarted = false;
  }


  theGameStart() {
    if (!this.isGameStarted) {
      this.start = setInterval(drawGame, 100);
    }
    this.isGameStarted = true;
  }






};


