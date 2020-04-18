var x = 200;
var y = 200;
var butw = 50;
var buth = 50;
var butx = x-butw/2;
var buty = y-buth/2;

var buttoncolor = [255,0,0]; // r g b

var backcolor = 0;

var gamewin = false;

function inButtonBorders(){
  if(mouseX >= butx && mouseX <= butx+butw){
     if(mouseY >= buty && mouseY <= buty+buth){
       return true;
     }
  }
  return false;
}

function onButtonPress(){
  // define some stuff
  backcolor += 15;
  console.log('increasing background color!');
}

function mousePressed(e){
  if(inButtonBorders()){
    buttoncolor = [0,255,0];
    onButtonPress();
  }
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  gamewin = backcolor >= 200;
  
  if(gamewin){
    console.log('You won!');   
  }
  
  backcolor --;
  if(backcolor<=0) backcolor = 0;
  background(backcolor,0,0);
  
  fill(buttoncolor[0], buttoncolor[1], buttoncolor[2]);
  
  rect(butx, buty, butw, buth);
  
  if(inButtonBorders()){
      buttoncolor = [0,0,255];
  }else{
      buttoncolor = [255, 0, 0];
  }
}
