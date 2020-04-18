let blockw = 40;
let blockh = 10;
let rows = 10;
let wid = 400;

ballX = 200;
ballY = 200;

paddleX = 0;
paddleY = 350;

paddleH = 6;
paddleW = 50;

dX = -4;
dY = -6;

class Block{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.hit = false;
  }
  
  draw(c){
    fill(c);
    rect(this.x+1, this.y+1, blockw-2, blockh-2);
  }
  
  doesCollide(){
    if(ballX >= this.x && ballX <= this.x+blockw){
      if(ballY >= this.y && ballY <= this.y+blockh){
        this.hit = true;
        return true;
      }
    }
    return false;
  }
}

class Ball {
 constructor(size){
   this.size = size;
 }
  getSize(){
    return this.size; 
  }
  update(){
    if(ballX >= width || ballX <= 0){
      dX = -dX;
    }
    if(ballY <= 0){
      dY = -dY;
    }
    if(ballY >= paddleY && ballY <= paddleY+paddleH){
      if(ballX >= paddleX && ballX <= paddleX + paddleW){
        // collision with paddle
        dY = -dY;     
      }    
    }
    
    ballX += dX;
    ballY += dY;
  }
  draw(){
    fill(0);
    circle(ballX, ballY, this.size);
  }
}

b = new Ball(6);

var blocks = [];

function setup() {
  createCanvas(400, 400);
  for(var i = 0; i < rows; i++){
    blocks.push([]);
    for(var j = 0; j < wid/blockw; j++){
      blocks[i].push(new Block(j*blockw, i*blockh));
    }
  }
}

function draw() {
  paddleX = mouseX;
  background(255);
  fill(0);
  rect(paddleX, paddleY, paddleW, paddleH);  

  b.update();
  b.draw();
  
  for(var i = 0; i < rows; i++){
    for(var j = 0; j < wid/blockw; j++){
      if(!blocks[i][j].hit&&blocks[i][j].doesCollide()){
         dY = - dY; 
      }
      if(!blocks[i][j].hit){
        blocks[i][j].draw([i*20, 255-i*40, 255-i*30]);
      }
    }
  }
}
