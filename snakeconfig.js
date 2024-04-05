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
    this.createStartButton();
    this.createPauseButton();
    this.createResetButton();
  }

  creatLabel() {
    this.label = document.createElement("label");
    this.label.htmlFor = "check";
    this.label.textContent = "Through the wall";
    this.view.add(this.label);
  }

  creatCheck() {
    this.check = document.createElement("input");
    this.check.type = "checkbox";
    this.check.id = "check";
    this.check.checked = "true"
    this.view.add(this.check);
  }

  createStartButton() {
    this.buttonStart = document.createElement("button");
    this.buttonStart.textContent = "Start";
    this.view.add(this.buttonStart);
    this.buttonStart.addEventListener("click", () => this.theGameStart());
  }

  createResetButton() {
    this.buttonReset = document.createElement("button");
    this.buttonReset.id = "reset"
    this.buttonReset.textContent = "Reset";
    this.buttonReset.style.visibility = "hidden"
    this.view.add(this.buttonReset);
    this.buttonReset.addEventListener("click", () => this.theGameReset());
  }

  theGameReset() {
    this.game.toResetGame();
    this.theGamePause();
    this.HideButtons();
  
  }


  createPauseButton() {
    this.buttonPause = document.createElement("button");
    this.buttonPause.id = "pause"
    this.buttonPause.style.visibility = "hidden";
    this.buttonPause.textContent = "Pause";
    this.view.add(this.buttonPause);
    this.buttonPause.addEventListener("click", () => this.theGamePause());
  }



  ShowButtons() {
    document.getElementById("reset").style.visibility = "visible"
    document.getElementById("save").style.visibility = "visible";
    document.getElementById("continue").style.visibility = "visible";
  }


  HideButtons(){
    document.getElementById("pause").style.visibility = "hidden";
    document.getElementById("reset").style.visibility = "hidden";
    document.getElementById("save").style.visibility = "hidden";

  }

  theGamePause() {
    clearInterval(this.start);
    this.isGameStarted = false;
    this.ShowButtons();
  }


  theGameStart() {
    if (!this.isGameStarted) {
      this.start = setInterval(this.game.theGameLogic.bind(this.game), 100);
      document.getElementById("pause").style.visibility = "visible";

    }
    this.isGameStarted = true;

  }




};