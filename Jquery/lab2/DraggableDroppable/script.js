$("#item").draggable();

$("#blackhole").droppable({
  drop: function () {
    $("#item").hide("explode");
  },
});