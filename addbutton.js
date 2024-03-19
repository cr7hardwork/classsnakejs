class Addbutton {
    constructor() {
        this.createPauseButton();
    }

    createPauseButton() {
        this.theButtonAdd = document.createElement("button");
        this.theButtonAdd.textContent = "Add";
        this.theButtonAdd.id = "addbutton"
        document.body.appendChild(this.theButtonAdd);
        this.theButtonAdd.addEventListener("click", () => this.theButtonadd());
    }


    theButtonadd() {
        this.game = new Game();
    }
}


const buttonAdd = new Addbutton();