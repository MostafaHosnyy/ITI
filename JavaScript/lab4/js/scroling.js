var scr = setInterval(function () {
    scrollBy(0, 25);
  }, 300);
  
  setTimeout(function () {
    clearInterval(scr);
    window.close();
  }, 10000);