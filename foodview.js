class FoodView {
    constructor( size,view) {
        this.view = view;
        this.x = Math.floor((Math.random() * 17 + 1)) * size;
        this.y = Math.floor((Math.random() * 15 + 2)) * size;

        this.img = document.createElement("img");
        this.img.src = "https://cdn3.iconfinder.com/data/icons/balls-icons/512/cricket-256.png";

    }
    drawFood() {

        this.view.context.drawImage(this.img, this.x, this.y, 20, 20);
    }

};