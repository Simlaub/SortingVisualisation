class Bar {
  constructor(i, value) {
    this.x = canvas.width/array.length*i;
    this.y = canvas.height;
    this.width = canvas.width/array.length;
    this.value = value;
    this.i = i;
  }

  draw() {
    ctx.fillStyle = "rgb(0,"+this.value+",200)";
    ctx.strokeStyle = "#2b2b2b";

    ctx.fillRect(this.x, this.y, this.width, -this.value);
    if (this.width > 5) {
      ctx.strokeRect(this.x, this.y, this.width, -this.value)
    }

  }
}
