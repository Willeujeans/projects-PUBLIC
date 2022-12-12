// JavaScript Document
let canvas = document.querySelector('canvas');
let c = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var posX = 0;
var posY = 0;
document.body.addEventListener("mousemove", () => {
  var e = window.event;
  posX = e.clientX;
  posY = e.clientY;
});


function ran(n, u) {
  return Math.random() * (u - n) + n;
}

function Circle(x, y, speed, radius) {
  this.x = x;
  this.y = y;
  this.dx = speed;
  this.dy = speed;
  this.radius = radius;
  this.collision =
    this.draw = () => {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fill();
      c.strokeStyle = 'hsl(30, 100%, 50%)';
      c.stroke();
    }
}
let objectArray = [];

function createCircles(x, y, speed, radius, amount) {
  for (let num = 0; num < amount; num++) {
    let guy = new Circle(ran(100, window.innerWidth - 100), ran(100, window.innerHeight - 100), ran(.1, speed), ran(25, 45));
    objectArray.push(guy);
  }
}

function movement() {
  for (let object of objectArray) {
    if (object.x + object.radius + object.dx > innerWidth || object.x - object.radius + object.dx < 0) {
      console.log("switchX");
      object.dx = object.dx * -1;
    }
    if (object.y + object.radius + object.dy > innerHeight || object.y - object.radius + object.dy < 0) {
      console.log("switchY");
      object.dy = object.dy * -1;
    }
    object.x += object.dx;
    object.y += object.dy;

    if (posX - object.x < 50 && posX - object.x > -50 && posY - object.y < 50 && posY - object.y > -50 && object.radius < 100) {
      object.radius += 1;
    } else if (object.radius > 45) {
      object.radius -= 1;
    }
    object.draw();
  }
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  movement();
}
createCircles(200, 200, 1, 30, 3);
animate();
