// adjusted speed to have a faster motion for this
// second variation.

let aaX = 200;
let aaY = 200;
let aaThetaX = 0; 
let aaThetaY = 0;
let aaRadius = 200;
let aaSpeedX = 0.2; 
let aaSpeedY = 0.01;

function setup() {
  createCanvas(400,400);
  colorMode(HSB);
}

function draw() {

  // adjusted opacity to so the trail becomes less
  // visible on background.

  noFill();
  aaX = (cos(aaThetaX)*aaRadius)+200;
  aaY = (sin(aaThetaY)*aaRadius)+200;
  let aaBgHue = map(aaY,0,400,0,360);
  background(aaBgHue,60,20,0.5); 
  
  // circle diameter adjusted for a smaller size for
  // this variation and strokeWeight dependent on the
  // x axis with the division to maintain the size preferred.
 
  strokeWeight(aaX / 10);
  let aaHue = map(aaX,0,width,0,360);
  stroke(aaHue,100,50);
  circle(aaX,aaY,10); 

  aaThetaX = aaThetaX+aaSpeedX;
  aaThetaY = aaThetaY+aaSpeedY;
}