var canvas, ctx;
var t1, t2;
var doit;

window.onload = function() {
  doit = false;
  startTime = new Date().getTime();
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  initBoard();

  $(document).keydown(function(event) {
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
        return;
    }
    if (!canMove()) {
      clearInterval(t1);
      clearInterval(t2);
      var t = confirm("Game Over\nAnother shoot");
      if (t)
        location.assign(location.href);
    }
    if (!doit && getMax() == 2048) {
      doit = false;
      var t = confirm("Good job, cost time "+
                       m1+m2+":"+s1+s2+
                       "\nAnother shoot(Y) or challenge(N)");
      if (t)
        location.assign(location.href);
    }
    return false;
  });

  t1 = setInterval(updateTimer, 1000/40);
  t2 = setInterval(updateBall, 50);
}