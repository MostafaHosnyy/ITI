var current = document.querySelectorAll("img");
var i = 0;
var slider;

function slideShow() {
  slider = setInterval(function () {
    current[i].src = "./img/marble1.jpg";
    if (i < 4) {
      i++;
    } else {
      i = 0;
    }
    current[i].src = "./img/marble3.jpg";
  }, 1000);
}
slideShow();

function stopSlide() {
  clearInterval(slider);
}