/*
 * p5.mapper
 * https://github.com/jdeboi/p5.mapper
 *
 * Jenna deBoisblanc
 * jdeboi.com
 *
 */

let pMapper;
let quadLeft, quadRight; // my quad surfaces

//andrew
let aaX = 200;
let aaY = 200;
let aaThetaX = 0; 
let aaThetaY = 0;
let aaRadius = 200;
let aaSpeedX = 0.2; 
let aaSpeedY = 0.01;

let andrewQuadOne;


//yanrong
let tianQuadOne;

let tianSizeCenter;
let tianD;
let tianDCurrent;
let tianDOffset = 1;
let tianCircles = [];
let tianRects = []; // save rects that arrived
let tianXYStartX = 0;
let tianXYStartY = 400;
let tianX = tianXYStartX;
let tianY = tianXYStartY;
let tianTargetX, tianTargetY;
let tianPrevS = -1;
let tianSpeed = 0.04;
let tianMoveSpeed = 0.04;
let tianSizeLerpSpeed = 0.04;
let tianNoiseSpeed = 0.02;

let tianQuadTwo;

let tianTwoSizeCenter;
let tianTwoD;
let tianTwoDCurrent;
let tianTwoDOffset = 1;
let tianTwoCircles = [];
let tianTwoRects = []; // save rects that arrived
let tianTwoXZStartX = 400;
let tianTwoXZStartY = 0;
let tianTwoX = tianTwoXZStartX;
let tianTwoY = tianTwoXZStartY;
let tianTwoTargetX, tianTwoTargetY;
let tianTwoPrevS = -1;
let tianTwoSpeed = 0.04;
let tianTwoMoveSpeed = 0.04;
let tianTwoSizeLerpSpeed = 0.04;
let tianTwoNoiseSpeed = 0.02;

let tianQuadThree;
let tianThreeSizeCenter;
let tianThreeD;
let tianThreeDCurrent;
let tianThreeDOffset = 1;
let tianThreeCircles = [];
let tianThreeRects = []; // save rects that arrived
let tianThreeYZStartX = 0;
let tianThreeYZStartY = 0;
let tianThreeX = tianThreeYZStartX;
let tianThreeY = tianThreeYZStartY;
let tianThreeTargetX, tianThreeTargetY;
let tianThreePrevS = -1;
let tianThreeSpeed = 0.04;
let tianThreeMoveSpeed = 0.04;
let tianThreeSizeLerpSpeed = 0.04;
let tianThreeNoiseSpeed = 0.02;

//zoe
let zoeQuadOne;
 let circleX, circleY;
let circleDiameter = 10;
let thetaX = 0;
let thetaY = 0;
let radiusX = 90;
let radiusY = 20;
// the above variables are made around the size of the cauldron
let speedX = 3;
let speedY = 3;



function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // create mapper object
  pMapper = createProjectionMapper(this);
  pMapper.load("map.json");

  // create "quads" for each surface of your projection
  // quadLeft = pMapper.createQuadMap(400, 400);
  // quadRight = pMapper.createQuadMap(400, 400);

  zoeQuadOne = pMapper.createQuadMap(400, 400);
  tianQuadOne = pMapper.createQuadMap(400,400);
  background(0);
  andrewQuadOne = pMapper.createQuadMap(400,400);
  tianQuadTwo = pMapper.createQuadMap(400,400);
  tianQuadThree = pMapper.createQuadMap(400,400);
}

function draw() {
  // background(0);


  // display each of the projection surfaces in draw
  // quadLeft.displaySketch(mySketch);
  // quadRight.displaySketch(myOtherSketch);

  zoeQuadOne.displaySketch(zoeQuadOneSketch);
  tianQuadOne.displaySketch(tianQuadOneSketch);
  andrewQuadOne.displaySketch(andrewQuadOneSketch);
  tianQuadTwo.displaySketch(tianQuadTwoSketch);
  tianQuadThree.displaySketch(tianQuadThreeSketch);
}

// function mySketch(pg){ // "pg" refers to each canvas "instance"
//   pg.clear();
//   pg.push();
//   // your sketch goes between push and pop. remember to use the 'pg.' prefix for all p5 functions
//   pg.background(0,255,0);
//   pg.textAlign(CENTER,CENTER);
//   pg.textSize(70);
//   pg.fill(color('black'));
//   pg.text('hello world',200,175);
//   // ends here
//   pg.pop();
// }

function andrewQuadOneSketch(pg){
  pg.push();
  pg.colorMode(HSB);
  pg.noFill();
  aaX = (cos(aaThetaX)*aaRadius)+200;
  aaY = (sin(aaThetaY)*aaRadius)+200;
  let aaBgHue = map(aaY,0,400,0,360);
  pg.background(aaBgHue,60,20,0.5); 
  
  // circle diameter adjusted for a smaller size for
  // this variation and strokeWeight dependent on the
  // x axis with the division to maintain the size preferred.
 
  pg.strokeWeight(aaX / 10);
  let aaHue = map(aaX,0,width,0,360);
  pg.stroke(aaHue,100,50);
  pg.circle(aaX,aaY,10); 

  aaThetaX = aaThetaX+aaSpeedX;
  aaThetaY = aaThetaY+aaSpeedY;
  pg.pop();
}

// function myOtherSketch(pg){
//   pg.clear();
//   pg.push();
//   // your mini sketch goes here!
  
//   pg.background(255,0,0);
  
//   pg.rectMode(CORNERS);  
//   // and ends here!
//   pg.pop();
// }

function tianQuadThreeSketch(pg){
   fill(255, 255, 100);
  stroke(0);
  // rectangle size in the center
  rect(0, 0, tianThreeSizeCenter);
  tianThreeSizeCenter = map(noise(tianThreeDOffset), 0, 1, 180, 240);
  // lerp the position, to get the easy out animation
  tianThreeX = lerp(tianThreeX, tianThreeTargetX, tianThreeMoveSpeed);
  tianThreeY = lerp(tianThreeY, tianThreeTargetY, tianThreeMoveSpeed);
  tianThreeD = map(noise(tianThreeDOffset), 0, 1, 20, 120);
  tianThreeDCurrent = lerp(tianThreeD, 0, tianThreeSizeLerpSpeed);
  rectMode(CENTER);
  fill(255);
  rect(tianThreeX, tianThreeY, tianThreeDCurrent);
  // every second, refresh the new random position
  if (second() != tianThreePrevS) {
    tianThreePrevS = second();
    tianThreeX = tianThreeYZStartX; // reset the rect to original position
    tianThreeY = tianThreeYZStartY;
    tianThreeTargetX = random(0, 300);
    tianThreeTargetY = random(0, 300);
  }
  tianThreeDOffset += tianThreeNoiseSpeed;
}

function tianQuadOneSketch(pg){
    pg.clear();
pg.push();
  pg.fill(255, 255, 100);
  pg.rectMode(CENTER);
  pg.stroke(0);
  // rectangle size in the center
  tianSizeCenter = map(noise(tianDOffset), 0, 1, 180, 240);
  pg.rect(0, 400, tianSizeCenter);
  // lerp the position, to get the easy out animation
  tianX = lerp(tianX, tianTargetX, tianMoveSpeed);
  tianY = lerp(tianY, tianTargetY, tianMoveSpeed);
  tianD = map(noise(tianDOffset), 0, 1, 20, 120);
  tianDCurrent = lerp(tianD, 0, tianSizeLerpSpeed);
  pg.rectMode(CENTER);
  pg.fill(255);
  pg.rect(tianX, tianY, tianDCurrent);
  // every second, refresh the new random position
  if (pg.second() != tianPrevS) {
    tianPrevS = pg.second();
    tianX = tianXYStartX; // reset the rect to original position
    tianY = tianXYStartY;
    tianTargetX = random(0, 300);
    tianTargetY = random(100, 400);
  }
  tianDOffset += tianNoiseSpeed;
  pg.pop();
}

function zoeQuadOneSketch(pg){
 pg.clear();
pg.push();
  pg.background(255);
  // made a window thing so the black background goes...
  //... with the other sketches but this one is still visible because of the white box
// CAULDRON
  pg.stroke(0);
  pg.fill(100);
  pg.ellipse(200,300,180,150);
  pg.ellipse(200,255,200,50);
  pg.ellipse(200,250,200,50);
  pg.fill("rgba(12, 72, 35, 1)");
  pg.ellipse(200,250,190,45);
// BUBBLE
  pg.fill(100);
  circleX = 400/2 + pg.cos(pg.radians(thetaX))*radiusX;
  circleY = 250 + pg.sin(pg.radians(thetaY))*radiusY;
  pg.noStroke();
  pg.fill("rgba(122, 147, 110, 1)");
  pg.circle(circleX,circleY, circleDiameter);
  thetaX+=speedX;
  thetaY+=speedY;
  // STIRRING STICK
  pg.fill("rgba(78, 27, 27, 1)");
  // x position chnages but Y stays the same
  pg.rect(circleX,150,5,100);
pg.pop();
}

function tianQuadTwoSketch(pg){
  fill(255, 255, 100);
  stroke(0);
  // rectangle size in the center
  tianTwoSizeCenter = map(noise(tianTwoDOffset), 0, 1, 180, 240);
  rect(400, 0, tianTwoSizeCenter);
  // lerp the position, to get the easy out animation
  tianTwoX = lerp(tianTwoX, tianTwoTargetX, tianTwoMoveSpeed);
  tianTwoY = lerp(tianTwoY, tianTwoTargetY, tianTwoMoveSpeed);
  tianTwoD = map(noise(tianTwoDOffset), 0, 1, 20, 120);
  tianTwoDCurrent = lerp(tianTwoD, 0, tianTwoSizeLerpSpeed);
  rectMode(CENTER);
  fill(255);
  rect(tianTwoX, tianTwoY, tianTwoDCurrent);
  // every second, refresh the new random position
  if (second() != tianTwoPrevS) {
    tianTwoPrevS = second();
    tianTwoX = tianTwoXZStartX; // reset the rect to original position
    tianTwoY = tianTwoXZStartY;
    tianTwoTargetX = random(100, 400);
    tianTwoTargetY = random(0, 300);
  }
  tianTwoDOffset += tianTwoNoiseSpeed;
}

function keyPressed() { // keypressed toggles different modes
  switch (key) {
    case "c":
      pMapper.toggleCalibration();
      break;
    case "f":
      let fs = fullscreen();
 fullscreen(!fs);
      background(0);
     
      break;
    case "l":
      pMapper.load("map.json");
      break;
    case "s":
      pMapper.save("map.json");
      break;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
background(0);
}