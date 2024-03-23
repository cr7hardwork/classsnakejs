
class Food {
    constructor(size, foodview) {
        this.size = size;
        this.foodview = foodview;

    }

    randomFood() {
        this.foodview.x = Math.floor((Math.random() * 17 + 1)) * this.size;
        this.foodview.y = Math.floor((Math.random() * 15 + 2)) * this.size;
    }



}