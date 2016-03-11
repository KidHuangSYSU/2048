

window.onload = function() {
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
    
  });
}