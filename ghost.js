var ghost= {
    BODY_WIDTH : 100,
    BODY_HEIGHT : 100,
    HEAD_RADIUS : 50,
    LEG_RADIUS : 10,
    EYE_RADIUS : 50/4,
    PUPIL_RADIUS : 50/4/2,
    count : 1,
  };
  
  function setup() {
    createCanvas(500, 500);
    background(0);
    print('Ghost Count:' + ghost.count);
  }
  function draw() {  
      if(frameCount % 30 == 0){
        makeGhost(random(0+ghost.BODY_WIDTH/2,500-ghost.BODY_WIDTH),
        random(0+ghost.BODY_HEIGHT/2,
        500-ghost.BODY_HEIGHT-ghost.LEG_RADIUS));
        ghost.count++;  
        print('Ghost Count:' + ghost.count);
      }
  }
  function makeGhost(x,y){
    //body
    noStroke()
    randomColor();
    rect(x,y,ghost.BODY_WIDTH,ghost.BODY_HEIGHT);
    //head
    ellipse(x+ghost.HEAD_RADIUS,y,ghost.HEAD_RADIUS*2, ghost.HEAD_RADIUS*2);
    //legs
    for(var i=0; i<5; i++){
    ellipse(x+ghost.LEG_RADIUS+i*2*ghost.LEG_RADIUS,y+ghost.BODY_HEIGHT,
    ghost.LEG_RADIUS*2,ghost.LEG_RADIUS*2);
    }
    //eyes
    for(var i=0; i<2; i++){
    fill(255);
    ellipse(x+2*ghost.EYE_RADIUS+i*4*ghost.EYE_RADIUS,y,
    ghost.EYE_RADIUS*2,ghost.EYE_RADIUS*2);
    fill(0);
    ellipse(x+2*ghost.EYE_RADIUS+i*4*ghost.EYE_RADIUS,y,
    ghost.PUPIL_RADIUS*2,ghost.PUPIL_RADIUS*2);
    }
  }
  
  function randomColor(){
    fill(random(0,255),random(0,255),random(0,255));
  }
  
  