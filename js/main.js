var canvas, ctx;

window.onload = function() {
  startTime = new Date().getTime();
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  initBoard();

  $(document).keydown(function(event) {event.stopPropagation();
    switch(event.which) {
      case 37:
        if (canMoveLeft())
          moveLeft();
        break;
      case 38:
        if (canMoveUp())
          moveUp();
        break;
      case 39:
        if (canMoveRight())
          moveRight();
        break; 
      case 40:
        if (canMoveDown())
          moveDown();
        break;
      default:
        break;     
    }
    return false;
  });

  setInterval(updateTimer, 1000/40);
  setInterval(updateBall, 50);
}