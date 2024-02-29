class View {
    constructor(game) {
        this.game = game;
        this.canvas = document.createElement("canvas");
        this.canvas.width = 608;
        this.canvas.height = 608;
        document.body.appendChild(this.canvas);
        this.context = this.canvas.getContext("2d");
        this.img = document.createElement("img");
        this.img.src = "https://htmlcolorcodes.com/assets/images/colors/bright-blue-color-solid-background-1920x1080.png"
    }


    drawBackGroundImg() {
        this.context.drawImage(this.img, 0, 0);
    }
}
