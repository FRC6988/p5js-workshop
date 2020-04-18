function setup() {
  createCanvas(400, 400);
}

var c = 150;
var increase = true;
function draw() {
  if(c < 150){ 
    increase = true;
  }
  
  if(c > 200){
    increase = false;
  }
  
  if(increase) {
    c+=1;
  }else{
    c-=1;
  }
  fill(0,0,c);
  circle(mouseX, mouseY, 50);
}

