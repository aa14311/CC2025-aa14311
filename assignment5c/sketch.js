// adjusted speed to have a slower motion for this variation.

let aaX = 200;
let aaY = 200;
let aaThetaX = 0; 
let aaThetaY = 0;
let aaRadius = 200;
let aaSpeedX = 0.01;
let aaSpeedY = 0.02;

function setup() {
  createCanvas(400,400);
  colorMode(HSB);
}

function draw() {

  noFill();
  aaX = (cos(aaThetaX)*aaRadius)+200;
  aaY = (sin(aaThetaY)*aaRadius)+200;
  let aaBgHue = map(aaY,0,400,0,360);
  background(aaBgHue,60,20,0.1);

  // adjusted diameter for a larger size for this variation with
  // the weight dependent on y so it becomes larger as it moves
  // toward the bottom.

  strokeWeight(aaY);
  let aaHue = map(aaX,0,width,0,360);
  stroke(aaHue,100,50);
  circle(aaX,aaY,300); 

  aaThetaX = aaThetaX+aaSpeedX;
  aaThetaY = aaThetaY+aaSpeedY;
}