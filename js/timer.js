var radius = 7;
var padding = 20;
var TOP = 50;
var LEFT_1 = 100,
    LEFT_2 = LEFT_1 + radius*2*7 + padding,
    LEFT_3 = LEFT_2 + radius*2*7 + padding/2,
    LEFT_4 = LEFT_3 + radius*2*4 + padding/2,
    LEFT_5 = LEFT_4 + radius*2*7 + padding;

var m1 = -1, m2 = -1, s1 = -1, s2 = -1;
var currTime, startTime;

function updateTimer() {
  currTime = new Date().getTime();
  var cost = (currTime - startTime)/1000;
  var second = parseInt(cost % 60);
  var minute = parseInt((cost - second)/60 % 60);
  var cm1 = parseInt(minute/10),
      cm2 = parseInt(minute%10),
      cs1 = parseInt(second/10),
      cs2 = parseInt(second%10);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawDigit(cm1, TOP, LEFT_1);
  drawDigit(cm2, TOP, LEFT_2);
  drawDigit(10, TOP, LEFT_3)
  drawDigit(cs1, TOP, LEFT_4);
  drawDigit(cs2, TOP, LEFT_5);
}

function drawDigit(index, sx, sy) {
  var row = digit[index].length;
  var col = digit[index][0].length;
  for (var i = 0; i < row; ++i) {
  	var xx = sx + i*radius*2;
  	var yy = sy;
    for (var j = 0; j < col; ++j) {
      yy += radius*2;
      if (digit[index][i][j] == 0)
      	continue;
      ctx.beginPath();
      ctx.arc(yy, xx, radius, 0, Math.PI*2, false);
      ctx.fillStyle = "orange";
      ctx.fill();
      ctx.closePath();
    }
  }
}













function ball(xx, yy) {
  this.x = xx;
  this.y = yy;
  this.g = (Math.random()+1) * 2;
  this.vy = -Math.random()*10;
  this.vx = (Math.random()*2-1.5)*20;
  this.color = mycolor[parseInt(Math.random()*10)];
}
var balls = new Array();