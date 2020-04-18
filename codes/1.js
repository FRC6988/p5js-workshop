var cnt = 20;

var x = [];
var y = [];
var dx = [];
var dy = [];

var radius = 5;

function setup(){
  createCanvas(400, 400);
  
  for(var i = 0; i < cnt; i++) {
    x[i] = random(50);
    y[i] = random(50);
    dx[i] = random(15);
    dy[i] = random(15);
  }

}



function draw(){
  background(50);
  fill(255);
  
  for(var i = 0; i < cnt; i++){
    x[i] += dx[i];
    y[i] += dy[i];
  
    if(x[i] + radius > width || x[i] - radius < 0) {
      dx[i] = -dx[i];
    }
  
    if(y[i] + radius > height || y[i] - radius < 0){
      dy[i] = -dy[i];
    }
      circle(x[i], y[i], radius * 2);
  }
  
}
