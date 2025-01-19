let canvasElement = document.querySelector("#myCanvas");
let context = canvasElement.getContext("2d");

context.beginPath();
context.moveTo(0, 0);

let x = 0;
let y = 0;

let animation = setInterval(function () {
  x += 10;
  y += 10;
  context.lineTo(x, y);
  context.strokeStyle = 'red';
  context.lineWidth = 5;
  context.stroke();
  if (x >= 550) {
    clearInterval(animation);
    alert("Animation End");
  }
}, 100);