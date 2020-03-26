var paddleX = 200;
var paddleY = 200;

var paddleWidth = 50;
var paddleHeight = 10;

var ballX = 40;
var ballY = 40;
var ballRadius = 10;

var dx = 4;
var dy = 8;

function setup() {
  createCanvas(400, 400);
}

function drawPaddle(x, y, w, h){
  fill(0);
  rect(x-w/2,y-h/2,w,h);
}

function drawBall(x,y,r){
  fill(255,0,0);
  circle(x, y, r);
}

function checkCollision(){
  if(ballX>=width || ballX <=0){
    dx = -dx; 
  }

  if(ballY <=0){
    dy = -dy;
  }else if(ballY+dy>=paddleY-paddleHeight/2 && ballY+dy<=paddleY+paddleHeight/2 && ballX+dx <= paddleX+paddleWidth/2 && ballX+dx>=paddleX-paddleWidth/2){
          dy = -dy;
          }
  
}
var endGame = false;
function draw() {
  clear();
  
  if(ballY >= height){
    endGame = true;
    dx=0;
    dy=0;
  }
   
  if(endGame){
    console.log("game over");
  }
 
  checkCollision();
  ballX+=dx;
  ballY+=dy;

  background(255);
  paddleX = mouseX;
  paddleY = 350;
  drawPaddle(paddleX,paddleY,paddleWidth,paddleHeight);
  drawBall(ballX, ballY, ballRadius);
}