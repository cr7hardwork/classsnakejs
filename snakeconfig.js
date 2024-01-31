class Buttons {
  constructor() {
    this.myReset();
    this.myPause();
    this.myStart();
    this.isGameStarted = false;
    
  }

  myReset() {
    this.buttonReset = document.getElementById("theGameReset");
    this.buttonReset.addEventListener("click", () => this.theGameReset())
  }


  theGameReset() {
    location.reload();
  }

  myPause() {
    this.buttonPause = document.getElementById("theGamePause");
    this.buttonPause.addEventListener("click", () => this.theGamePause())

  }


  theGamePause() {
    clearInterval(game.start);
    this.isGameStarted = false;
  }

  myStart() {
    this.buttonStart = document.getElementById("theGameStart");
    this.buttonStart.addEventListener("click", () => this.theGameStart())

  }


  theGameStart() {
    if (!this.isGameStarted) {
      game.start = setInterval(drawGame, 100);
    }
    this.isGameStarted = true;
  }

};











