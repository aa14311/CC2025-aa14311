let petalColor
let growth = 0
let startTime

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  petalColor = color(random(100, 255), random(100, 255), random(100, 255), 220)
  startTime = millis();
}

function draw() {
  background(0);
  flower();
}


function flower() {
  //seconds defined using millis function for petal growth
  let seconds = millis() / 1000;

  //when minute changes, reset fade and changes color
  let elapsed = floor((millis() - startTime)/1000);

  //changes petal color every 3 seconds
  if(elapsed % 3 ==0 && elapsed != 0){
    petalColor = color(random(100, 255), random(100, 255), random(100, 255), 220);
  }

  //flower taken from p5js site
   for (var r31 = 0; r31 < 10; r31++) {
    stroke(85,107,47,20);
    strokeWeight(5);
    if (seconds <= 10) {
      line(180, 535, 180, 390 + frameCount / 10);
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