// Thank you for composing the main composition of this
// assignment. If the variations are too close to what you have
// provided, I am hoping I can redo this assignment completely for
// partial credit like how I did for assignment 2.

// Because of this, my commentary will most likely explain
// the functions of the code written with why I chose the
// adjustments to get desired outcome.

// Variables created. X and Y to position circle in center of
// the frame. ThetaX and Y to set the rotational angles. Radius
// to set the distance from center. Adjusted speed X and Y to
// control how fast the circle moves along the respective axis. 

let aaX = 200; 
let aaY = 200;
let aaThetaX = 0;
let aaThetaY = 0;
let aaRadius = 200;
let aaSpeedX = 0.06;
let aaSpeedY = 0.05;

// I added the pulseSpeed and NoisePosition to add the pulsating
// effect from your notes. 

let aaPulseSpeed = .01;
let aaNoisePosition = 0;

function setup() {
  createCanvas(400,400);
  colorMode(HSB);
}

function draw() {

  // Cos and sin used to create the rotating orbital effect with
  // +200 added so it animates around the center. aaBgHue so
  // the background color changes dependent on the Y axis. Adjusted
  // the .1 setting for opacity allowing the trail effect. 

  noFill();
  aaX = (cos(aaThetaX)*aaRadius)+200;
  aaY = (sin(aaThetaY)*aaRadius)+200;
  let aaBgHue = map(aaY,0,400,0,360);
  background(aaBgHue,60,20,.1);

  // Mentioned above, this was taken from your notes for the
  // pulsating effect. Perlin noise so the circle size changes
  // in a more seamless way from diameter size 50 to 400 (height).

  let aaDiam = noise(aaNoisePosition);
  aaDiam = map(aaDiam,0,1,50,height);
  aaNoisePosition = aaNoisePosition + aaPulseSpeed;

  // Creating the circle and circle color dependent on the x axis.
  // Adjusted stroke weight to 20 and added the dynamic diameter
  // to create a "middle" sized variation compared to the other
  // two sketches. 

  strokeWeight(20);
  let aaHue = map(aaX,0,width,0,360);
  stroke(aaHue,100,50);
  circle(aaX,aaY,aaDiam);

  // Incremental values of Theta and Speed to create the rotating
  // motion.

  aaThetaX = aaThetaX+aaSpeedX;
  aaThetaY = aaThetaY+aaSpeedY;
}