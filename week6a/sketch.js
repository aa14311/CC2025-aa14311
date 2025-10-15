let y1 = 0
let y2 = 0
let lastDropTime = 0 //when the last drop started
let lastDropTime2 = 0
let delay = 1000 //a one second delay in milliseconds
let raidus = 50


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  let m = millis();
  let min = minute();

  background('#dda8a8ff');

  circle(width/3,y1,40);
  y1 += 3;
  if(m-lastDropTime > delay){ //if the circle reaches bottom, or 1 second has passed
    y1 = 0; //resets position
    lastDropTime = m; //resets timer
  }

  circle(width/2,y2,40+sin(m/200)*10);
  y2 += 3 + sin(min/2)*1;
  if(m-lastDropTime2 > delay){ //if the circle reaches bottom, or 1 second has passed
    y2 = 0; //resets position
    lastDropTime2 = m; //resets timer
  } 
}