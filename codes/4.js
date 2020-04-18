function setup() {
  createCanvas(400, 400);
}

function draw() {
  if(frameCount % 15 == 0){
    background(220);
    randomGhosts();
  }
}
function randomGhosts(){
  var x = random(width-100);
  var y = random(50,height-100-10);
  var r = random(255);
  var g = random(255);
  var b = random(255);
  noStroke();
  fill(r,g,b);
  rect(x,y,100,100);  
  circle(x+50,y,100);
  for(var i = 0; i < 5; i++){
    circle(x+10+20*i,y+100,20);
  }
  fill(255);
  for(var j = 0; j < 2; j++){
    circle(x+25+50*j,y,20);
  }
}

function mappedGhosts(){
  var x = random(width-100);
  var y = random(50,height-100-10);
  var r = map(x,0,width,0,255);
  var g = map(y,0,height,0,255);
  var b = map(x,0,width,255,0);
  noStroke();
  fill(r,g,b);
  rect(x,y,100,100);  
  circle(x+50,y,100);
  for(var i = 0; i < 5; i++){
    circle(x+10+20*i,y+100,20);
  }
  fill(255);
  for(var j = 0; j < 2; j++){
    circle(x+25+50*j,y,20);
  }
}
