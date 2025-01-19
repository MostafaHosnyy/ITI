// task 1
var win,
  flag = 0;
function openWin(){
    win = open("child.html", "_blank", "width=300, height=300");
        setInterval(function () {
          win.focus();
          if (win.screenX >= 590 || win.screenY >= 530) {
            flag = 1;
          }
          if (win.screenY == 0) {
            flag = 0;
          }
          if (flag) {
            win.moveBy(-180, -180);
          } else {
            win.moveBy(180, 180);
          }
        }, 500);
}
function closeWin() {
  win.close();
}


// task 2
function typingWin() {
    var win = open("typingMessage.html", "_blank", "width=550, height=250");
    win.focus();
}


// task3
  function scrollWin() {
    var win = open("scroling.html", "", "width = 550, height = 200");
    win.focus();
  }