var W = window.innerWidth*0.6;
var H = window.innerHeight*0.4;

var number = int(random(1,100000));
var variable_possible = random(1,5);

void setup()
{
  size(W , H);
  background(#efefef);
  fill(255);
  
  PFont fontA = loadFont("courier");
  textFont(fontA, random(H*0.2,H*0.3));

  noStroke();
  frameRate(30);
 
}
 void draw(){

  fill(#efefef);  
  text(number,W/variable_possible,H/variable_possible); 


}
void mouseDragged(){
	  stroke(random(0,255),random(0,255),random(0,255));
	  strokeWeight(5);
	  line(mouseX,mouseY,0,H/2);
}

void touchMove(TouchEvent touchEvent) {
  // empty the canvas
  noStroke();
  fill(255);
  rect(0, 0, 400, 300);
 
  // draw circles at where fingers touch
  fill(180, 180, 100);
  for (int i = 0; i < touchEvent.touches.length; i++) {
    int x = touchEvent.touches[i].offsetX;
    int y = touchEvent.touches[i].offsetY;
    ellipse(x, y, 50, 50);
  }
}

var getNumber(){
	return number;
}
