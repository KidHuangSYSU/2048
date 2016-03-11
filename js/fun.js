var side = 100;
var spacing = 20;

function initBoard() {
  for (var i = 0; i < 4; ++i) {
    for (var j = 0; j < 4; ++j) {
      var node = document.getElementById("row_"+i+"_col_"+j);
      node.r = i;
      node.c = j;
      node.style.top = (spacing + (spacing+side)*node.r) + "px";
      node.style.left = (spacing + (spacing+side)*node.c) + "px";
    }
  }
  generateNum();
  generateNum();
  updateBoard();
}

function updateBoard() {
  $(".cell_0").remove();

  var board = document.getElementById("board");
  for (var i = 0; i < 4; ++i) {
  	for (var j = 0; j < 4; ++j) {
  	  var node = document.createElement("div");
  	  node.r = i;
  	  node.c = j;
  	  node.id = "r_"+node.r+"_c_"+node.c;
  	  var val = number[node.r][node.c];
  	  if (val == 0) {
  	  	node.className = "cell_0";
  	  } else {
  	  	node.className = "cell_0 cell_" + val;
        node.appendChild(document.createTextNode(val));
  	  }
  	  node.style.top = (spacing + (spacing+side)*node.r) + "px";
  	  node.style.left = (spacing + (spacing+side)*node.c) + "px";
      board.appendChild(node);
  	}
  }
}

function generateNum() {
  var i, j;
  while (true) {
    i = parseInt((Math.random()*4));
    j = parseInt((Math.random()*4));
    if (number[i][j] == 0) {
      number[i][j] = Math.random() >= 0.5 ? 2 : 4;
      return;
    }   
  }
}