let butx = 200;
let buty = 200;
let butw = 50;
let buth = 50;
let buttoncolor = [255,0,0];
function setup() {
  createCanvas(400, 400);
}

function inButtonborders(){
  if(mouseX >= butx && mouseX <= butx+butw){
    if(mouseY >= buty && mouseY <= buty+buth){
      return true;
    }
  }
  return false;
}

function mousePressed(e){
  if(inButtonborders()){
    buttoncolor = [0,0,255];
  }
}

function drawButton(r,g,b){
  fill(r,g,b);
  rect(butx,buty,butw,buth);
}

function draw() {
  
  background(220);
  drawButton(buttoncolor[0], buttoncolor[1], buttoncolor[2]);
  if(inButtonborders()){
    buttoncolor= [0,255,0];
  }else{
    buttoncolor = [255,0,0];
  }
}
