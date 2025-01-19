var reqMsg = "Website Welcome Message";
var msg = [];
var i = 0;
var x;

setInterval(function () {
  if (i < reqMsg.split("").length) {
    x = reqMsg[i];
    msg.push(x);
    document.write("<b>" + msg.join("") + "</b>");
    i++;
    msg = [];
  } else {
    window.close();
  }
}, 200);