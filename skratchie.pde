var number = int(random(1,100000));
var variable_possible = random(1,20);
void setup()
{
  size(400,200);
  background(#efefef);
  fill(255);

  PFont fontA = loadFont("courier");
  textFont(fontA, random(100,120));

  noStroke();
  frameRate(30);
 
}
 void draw(){
  
  fill(#efefef);  
  text(number,50-variable_possible,120-variable_possible); 
  if (mousePressed){
	  stroke(random(0,255),random(0,255),random(0,255));
	  strokeWeight(10);
	  line(mouseX,mouseY,0,100);
  }
}

var getNumber(){
	return number;
}