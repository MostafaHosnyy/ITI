var pic = document.querySelector("img");
var i = 1;
var interval;
console.log(pic.src);

function nextPic() {
  clearInterval(interval);
  i++;
  interval = setInterval(function () {
    pic.src = "./img/" + i + ".jpg";
    i++;
    if (i > 6) {
      i = 5;
      clearInterval(interval);
    }
  }, 2000);
}

function prePic() {
  clearInterval(interval);
  i--;
  interval = setInterval(function () {
    if (i > 0) {
      pic.src = "./img/" + i + ".jpg";
      i--;
    } else {
      i = 1;
      clearInterval(interval);
    }
  }, 2000);
}

function stopShow() {
  clearInterval(interval);
}

function slideShow() {
  i = 1;
  interval = setInterval(function () {
    if (i <= 6) {
      pic.src = "./img/" + i + ".jpg";
      i++;
    } else {
      i = 1;
    }
  }, 2000);
}