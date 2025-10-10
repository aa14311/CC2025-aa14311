let petalColor
let petalColor2
let growth = 0
let startTime

let petals = [];
let totalPetals = 10;
let fallingPetalsIndex = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  petalColor = color(random(0, 155), random(0, 155), random(0, 155), 200);
  startTime = millis();

  for(let i = 0; i < totalPetals; i++){
    petals.push({
      x:180,
      y:435,
      angle: map(i,0,totalPetals,-PI/3,PI/3),
      falling:false
    })
  }
}

function draw() {
  background("#c9b197ff");
  flower();
}

function flower() {
  let seconds = millis() / 1000;

  let elapsed = floor((millis() - startTime)/1000);

  if(elapsed % 3 ==0 && elapsed != 0){
  petalColor = color(random(0, 130), random(0, 130), random(0, 130), 200);
  }

  //flower code from p5js site
   for (var r31 = 0; r31 < 10; r31++) {
    stroke("#4b7533ff");
    strokeWeight(5);
    if (seconds <= 10) {
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
  for(let i=0;i<petals.length;i++){
    let p=petals[i];
    push();
    translate(p.x,p.y);
    rotate(p.angle);
    if(p.falling == true){
      p.y +=2;
    }
    ellipse(0,0,30,50);
    pop();
  }
  pop();

  if(elapsed > 60 && elapsed % 1 == 0){
    if(fallingPetalsIndex < petals.length){
      petals[fallingPetalsIndex].falling = true;
      fallingPetalsIndex ++;
    }
  }

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
  /*
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
  pop(); */
}