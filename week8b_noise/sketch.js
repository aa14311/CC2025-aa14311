let noisePosition = 0;
let noiseSpeed = 0.01;
let startingPoint = 0;
let noiseTheta = 0;
let noiseRadius = 0;
let noisePositionAngle = 1000; // set different
// starting point for other number

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSB);
}

function draw() {
  //background("#c0ddb5ff");
  //background(noiseTheta,100,noiseRadius);
  translate(width/2, height/2);
  
  strokeWeight(5);

  noiseTheta = map(
    noise(noisePosition),0,1,-360,360);
  
  noiseRadius = map(
    noise(noisePosition),0,1,0,width/2);

  let x = cos(noiseTheta)*noiseRadius;
  let y = sin(noiseTheta)*noiseRadius;

  point(0,0);
  stroke(noiseTheta,100,noiseRadius);
  line(0,0,x,y);
  circle(x,y,10);

  noisePosition = noisePosition + noiseSpeed; 
  
  noisePositionAngle += noiseSpeed;
  
  /* circleD = noise(noisePosition)*width;
  circle(0,0,circleD);
  noisePosition = noisePosition + noiseSpeed;

 this draws the line graph over teh x axis up and down in a scale because nosie
  noisePosition = startingPoint;
  for(let i = 0; i<width; i++){
    let y = noise(noisePosition)*height;
    noisePosition = noisePosition + noiseSpeed;
    let d = map(i,0,width,0,25);
    circle(i,y,d);
  }
  startingPoint = startingPoint + noiseSpeed;
  */
}


function mousePressed(){
  
}
