class View {
  constructor() {
    this.canvasAndcontainerCreat();
    this.img = document.createElement("img");
    this.img.src = "https://htmlcolorcodes.com/assets/images/colors/bright-blue-color-solid-background-1920x1080.png";


  }

  canvasAndcontainerCreat() {
    this.canvas = document.createElement("canvas");
    this.container = document.createElement("div");
    this.canvas.width = 608;
    this.canvas.height = 608;
    this.container.style.width = "608px";
    this.container.style.height = "608px";
    this.container.appendChild(this.canvas);
    document.body.appendChild(this.container);
    this.context = this.canvas.getContext("2d");
  }

  drawBackGroundImg() {
    this.context.drawImage(this.img, 0, 0);
  }



  Add(HtmElement) {
    this.container.appendChild(HtmElement);
  }


}
