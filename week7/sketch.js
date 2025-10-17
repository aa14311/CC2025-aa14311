let bug; // this will store a bug object

let x = 200;
let y = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
background(255);

  // move the bug
x = x+(random(-4,4));
y = y+(random(-4,4));

  // display the bug
  push();
  translate(x,y);
  line(0,3,10,3);
  line(0,-3,15,-3);
  line(0,0,10,0);
  line(0,-3,15,-3);
  circle(0,0,15);
  pop();
}
