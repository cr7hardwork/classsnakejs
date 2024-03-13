
class Food {
    constructor(size,foodview) {
        this.size = size;
        this.foodview = foodview;

    }

    randomfood() {
        this.foodview.x = Math.floor((Math.random() * 17 + 1)) * this.size;
        this.foodview.y = Math.floor((Math.random() * 15 + 2)) * this.size;
    }



}