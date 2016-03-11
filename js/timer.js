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
  if (cm1 != m1) {
    m1 = cm1;
    addBall(cm1, TOP, LEFT_1);
  }
  drawDigit(cm2, TOP, LEFT_2);
  if (cm2 != m2) {
    m2 = cm2;
    addBall(cm2, TOP, LEFT_2);
  }
  drawDigit(10, TOP, LEFT_3)
  drawDigit(cs1, TOP, LEFT_4);
  if (cs1 != s1) {
    s1 = cs1;
    addBall(cs1, TOP, LEFT_4);
  }
  drawDigit(cs2, TOP, LEFT_5);
  if (cs2 != s2) {
    s2 = cs2;
    addBall(cs2, TOP, LEFT_5);
  }
  drawBall();
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
  this.g = 9.8;
  this.para = 0.6;
  this.vy = -Math.random()*30;
  this.vx = Math.random() > 0.25 ? Math.random()*-20 : Math.random()*10;
  this.color = mycolor[parseInt(Math.random()*10)];
}
var balls = new Array();
var count = 0;

function addBall(index, sx, sy) {
  var row = digit[index].length;
  var col = digit[index][0].length;
  for (var i = 0; i < row; ++i) {
    var xx = sx + i*radius*2;
    var yy = sy;
    for (var j = 0; j < col; ++j) {
      yy += radius*2;
      if (digit[index][i][j] == 0)
        continue;
      balls[count] = new ball(yy, xx);
      count++;
    }
  }
}

function drawBall() {
  for (var i = 0; i < count; ++i) {
    ctx.beginPath();
    ctx.arc(balls[i].x, balls[i].y, radius, 0, Math.PI*2, false);
    ctx.fillStyle = balls[i].color;
    ctx.fill();
    ctx.closePath();
  }
}