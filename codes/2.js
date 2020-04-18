var x = 100;
var y = 100;

var dx = 2;
var dy = 4;

var paddleWidth = 40;
var paddleHeight = 5;

var paddleY = 350;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  fill(0);
  
  x += dx;
  y += dy;
  if(x > width || x<0){
      dx = -dx;
  }
  
  if(y < 0){
    dy = -dy;
  }
  
  if(y > height){
    dy = 0;
    dx = 0;
    console.log('Game over');
  }
  
  if(y > paddleY){
    if(x < mouseX+paddleWidth/2 && x > mouseX-paddleWidth/2){
         dy=-dy;
      }
  }
  
  circle(x, y, 10);
  rect(mouseX-paddleWidth/2, paddleY-paddleHeight/2, paddleWidth, paddleHeight);
  
}

