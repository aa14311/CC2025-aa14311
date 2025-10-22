

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  // ANY transforamtions are reset at the beginning of draw
  background('#d0f7c3ff');
  circle(100,100,100);
  circle(85,90,5);
  circle(115,90,5);
  arc(100,100,60,60,0,PI);

  //translate is a TRANSFORMATION function
  // it moves the coordinate matrix according to a net set
  // of corrdinates, which become the "new" 0,0

  // pusha dn pop ISOLATE a transformation
  // anything enclosed within push and pop only applies within
  // that enclosure
  push(); // push indicates the beginning of an isolated block

  if(mouseX>width/2 && mouseY>height/2){ //if the test inside the () is met...
    fill("pink");//run this code
  } else if(mouseX<width/2 && mouseY<height/2){
    fill("orange");
  } else { // otherwise...    
    fill("yellow");// run this other code
  }

    if(mouseIsPressed == true){
      fill("red");
    }

    //mouseIsPressed is a system variable that switches
    // from false to true when the mouse is down

  translate(width/2,height/2);
  let angle; 
  // map is a function that scales numbers proportionately 
  // parameters:
  // 1: input variable to scale
  // 2: low end of input range
  // 3: HIGH END of input range
  // 4: low end of the output range
  // 5: HIGH END of output range
  angle = map(mouseX,0,width,0,360);

  rotate(radians(angle));

  let scaleFactor; // making a variable to hold scale amount
  scaleFactor = map(mouseY,0,height,0.1,3)

  // scale makes the coordinate system larger or smaller
  // it takes a "factor" as a parameter
  // if you supply two parameters, it scales differently
  // on x and y axes

  scale(scaleFactor);

  circle(0,0,100);
  circle(-15,-10, 5);
  circle(15,-10,5);
  arc(0,0,60,60,0,PI);

  pop(); // pop indicates teh end of an isolated block
  // text function: text, x, y of top left corner
  text(mouseX + "," + mouseY,5,15);

}
