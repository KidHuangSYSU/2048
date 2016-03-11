function canMove() {
  return canMoveLeft() ||
         canMoveRight() ||
         canMoveUp() ||
         canMoveDown();
}

function canMoveLeft() {
  for (var i = 0; i < 4; ++i) {
  	for (var j = 1; j < 4; ++j) {
  	  if (number[i][j] == 0)
  	  	continue;
  	  if (number[i][j-1] == 0)
  	    return true;
  	  if (number[i][j-1] == number[i][j])
  	    return true;
  	}
  }
  return false;
}

function canMoveRight() {
  for (var i = 0; i < 4; ++i) {
  	for (var j = 0; j < 3; ++j) {
  	  if (number[i][j] == 0)
  	  	continue;
  	  if (number[i][j+1] == 0)
  	    return true;
  	  if (number[i][j+1] == number[i][j])
  	    return true;
  	}
  }
  return false;
}

function canMoveUp() {
  for (var i = 1; i < 4; ++i) {
  	for (var j = 0; j < 4; ++j) {
  	  if (number[i][j] == 0)
  	  	continue;
  	  if (number[i-1][j] == 0)
  	    return true;
  	  if (number[i-1][j] == number[i][j])
  	    return true;
  	}
  }
  return false;
}

function canMoveDown() {
  for (var i = 0; i < 3; ++i) {
  	for (var j = 0; j < 4; ++j) {
  	  if (number[i][j] == 0)
  	  	continue;
  	  if (number[i+1][j] == 0)
  	    return true;
  	  if (number[i+1][j] == number[i][j])
  	    return true;
  	}
  }
  return false;
}

function moveLeft() {
  for (var i = 0; i < 4; ++i) {
    var start = 0;
    for (var j = 1; j < 4; ++j) {
      if (number[i][j] == 0)
      	continue;
      if (number[i][start] == 0) {
      	number[i][start] = number[i][j];
        number[i][j] = 0;
        continue;
      }
      if (number[i][start] == number[i][j]) {
      	number[i][start] *= 2;
        number[i][j] = 0;
      } else {
      	if (start+1 != j) {
      	  number[i][start+1] = number[i][j];
          number[i][j] = 0;  
        }   	
      }
      start++;
    }
  }
  generateNum();
  updateBoard();
}

function moveRight() {
  for (var i = 0; i < 4; ++i) {
    var start = 3;
    for (var j = 2; j >= 0; --j) {
      if (number[i][j] == 0)
      	continue;
      if (number[i][start] == 0) {
      	number[i][start] = number[i][j];
        number[i][j] = 0;
        continue;
      }
      if (number[i][start] == number[i][j]) {
      	number[i][start] *= 2;
        number[i][j] = 0;
      } else {
      	if (start-1 != j) {
      	  number[i][start-1] = number[i][j];
          number[i][j] = 0;  
        }   	
      }
      start--;
    }
  }
  generateNum();
  updateBoard();
}

function moveUp() {
  for (var j = 0; j < 4; ++j) {
  	var start = 0;
  	for (var i = 1; i < 4; ++i) {
  	  if (number[i][j] == 0)
  	    continue;
  	  if (number[start][j] == 0) {
  	    number[start][j] = number[i][j];
  	    number[i][j] = 0;
  	    continue;
  	  }
  	  if (number[start][j] == number[i][j]) {
  	  	number[start][j] *= 2;
  	  	number[i][j] = 0;
  	  } else {
  	  	if (start+1 != i) {
  	  	  number[start+1][j] = number[i][j];
  	  	  number[i][j] = 0;
  	  	}
  	  }
  	  ++start;
  	}
  }
  generateNum();
  updateBoard();
}

function moveDown() {
  for (var j = 0; j < 4; ++j) {
  	var start = 3;
  	for (var i = 2; i >= 0; --i) {
  	  if (number[i][j] == 0)
  	    continue;
  	  if (number[start][j] == 0) {
  	    number[start][j] = number[i][j];
  	    number[i][j] = 0;
  	    continue;
  	  }
  	  if (number[start][j] == number[i][j]) {
  	  	number[start][j] *= 2;
  	  	number[i][j] = 0;
  	  } else {
  	  	if (start-1 != i) {
  	  	  number[start-1][j] = number[i][j];
  	  	  number[i][j] = 0;
  	  	}
  	  }
  	  --start;
  	}
  }
  generateNum();
  updateBoard();
}

function checkBall() {
  var temp = [];
  for (var i = 0; i < count; ++i) {
    if (balls[i].x < radius)
      continue;
    if (balls[i].x > canvas.width-radius)
      continue;
    if (balls[i].y > canvas.height - radius) {
      balls[i].y = canvas.height-radius;
      balls[i].vy *= -balls[i].para;
      balls[i].para -= 0.1;
    }
    temp.push(balls[i]);
  }
  count = temp.length;
  balls = temp;
  console.log(count)
}


function updateBall() {
  for (var i = 0; i < count; ++i) {
    balls[i].x += balls[i].vx;
    balls[i].y += balls[i].vy;
    balls[i].vy += balls[i].g;
  }
  checkBall();
}