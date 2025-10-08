//time variables for (1) flower growth (2) petal color change, which will
//need adjusting. Have not defined a third time variable, but will add a regrowth
//time variable after x amount of time in addition to adding more flowers.
let petalColor
let petalColor2 // added to create different petal colors for additional flowers, not yet implemented.
let growth = 0
let startTime

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  //setting transparency and maximum color variables to avoid lighter flower petal tones
  //to the light background
  petalColor = color(random(0, 155), random(0, 155), random(0, 155), 200);
  startTime = millis();
}

function draw() {
  background("#c9b197ff");
  //calling the flower from the flower function below
  flower();
}

function flower() {
  //seconds defined using millis function for petal growth. 
  let seconds = millis() / 1000;

  //when minute changes, reset fade and changes color
  let elapsed = floor((millis() - startTime)/1000);

  //changes petal color every 3 seconds and avoid growth time at start
  if(elapsed % 3 ==0 && elapsed != 0){
  petalColor = color(random(0, 130), random(0, 130), random(0, 130), 200);
  }

  //flower code from p5js site
   for (var r31 = 0; r31 < 10; r31++) {
    stroke("#4b7533ff");
    strokeWeight(5);
    //will need to adjust
    if (seconds <= 10) {
      //adjusted parameters for the stem to decrease along with the petal growth
      line(180, 535, 180, 390 + frameCount / 13);
    }
    else {
      line(180, 535, 180, 435);
    }
    noStroke();
  }
  
  push();
  fill(petalColor);
  translate(180, 385);
  noStroke();
  for (var r3 = 0; r3 < 10; r3++) {
    //will adjust the timing and growth size in final version.
    if (frameCount <= 600) {
      ellipse(0, 10 + frameCount / 20, 10 + frameCount / 40, 20 + frameCount / 20);
    }
    if (frameCount > 600) {
      ellipse(0, 40, 25, 50)
    }
    rotate(PI / 5);
  }
  pop();


  //flower #2 copied code from above
  for (var r31 = 0; r31 < 10; r31++) {
    stroke("#4b7533ff");
    strokeWeight(5);
    if (seconds <= 10) {
      //adjusted parameters for the stem to decrease along with the petal growth
      line(380, 535, 380, 390 + frameCount / 13);}
      else { line(380, 535, 380, 435);
    }
    noStroke();
  }
  
  push();
  fill(petalColor);
  translate(380, 385);
  noStroke();
  for (var r3 = 0; r3 < 10; r3++) {
    //will adjust the timing and growth size in final version.
    if (frameCount <= 600) {
      ellipse(0, 10 + frameCount / 20, 10 + frameCount / 40, 20 + frameCount / 20);
    }
    if (frameCount > 600) {
      ellipse(0, 40, 25, 50)
    }
    rotate(PI / 5);
  }
  pop();
}