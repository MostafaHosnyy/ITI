// Hiding Elements
function hideElements() {
    $(".main-container > div").filter(":eq(1),:eq(2),:eq(3),:eq(4)").hide();
  }

  hideElements();

  let counter = 1;
  // Right
  $(".right").click(function () {
    counter++;
    if (counter <= 8) {
      $(".image").attr("src", "./img/" + counter + ".jpg");
    } else {
      counter = 1;
      $(".image").attr("src", "./img/" + counter + ".jpg");
    }
  });
  // Left
  $(".left").click(function () {
    counter--;
    if (counter > 0) {
      $(".image").attr("src", "./img/" + counter + ".jpg");
    } else {
      counter = 8;
      $(".image").attr("src", "./img/" + counter + ".jpg");
    }
  });
  
  // Services Slide Down
  $(".ser").click(function () {
    $("#services").slideDown(1000);
  });
  
  
  // Navbar Handling
  $("li").click(function (e) {
    if (e.target.innerText == "About") {
      hideElements();
      $("#about").show();
    } else if (e.target.innerText == "Gallary") {
      hideElements();
      $("#gallery").show();
    } else if (e.target.innerText == "Services") {
      hideElements();
      $("#services").show();
    } else {
      hideElements();
      $("#complain").show();
    }
  });