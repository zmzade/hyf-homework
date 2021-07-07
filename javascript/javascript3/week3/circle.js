const canvas = document.getElementById("myCanvas");
canvas.style.background = "#ff8";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(100, 75, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "blue";
ctx.fill();
//----------------------------------------------------------------
class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillCollor = fillColor;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
    ctx.stroke();
    ctx.fillStyle = this.fillCollor;
    ctx.fill();
  }
}
//-------------------------------------------------------------------------

function getRndColor() {
  const r = (255 * Math.random()) | 0,
    g = (255 * Math.random()) | 0,
    b = (255 * Math.random()) | 0;
  return "rgb(" + r + "," + g + "," + b + ")";
}

function createRandCircle(e) {
  // let rand_x = Math.floor(Math.random() * window.innerWidth);
  //let rand_y = Math.floor(Math.random() * window.innerHeight);

  let mouseX = e.x;
  let mouseY = e.y;

  let mouse_x = mouseX + Math.floor(Math.random() * 20);
  let mouse_y = mouseY + Math.floor(Math.random() * 20);

  let rand_r = Math.floor(Math.random() * 50);

  let myCircle = new Circle(
    mouseX,
    mouseY,
    rand_r,
    0,
    2 * Math.PI,
    getRndColor()
  );
  myCircle.draw(ctx);
}

function delay(e) {
  setInterval(() => {
    createRandCircle(e);
  }, 1000);
}

document.addEventListener("mousemove", delay);
