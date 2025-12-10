/*
// this code expands on an example I found on youtube:
----- Coding Tutorial by Patt Vira ----- 
Name: Intro to matter.js (with p5.js)
Video Tutorial: https://youtu.be/cLXNxn5N-2Y

Connect with Patt: @pattvira
https://www.pattvira.com/
----------------------------------------
*/

const { Engine, Body, Bodies, Composite } = Matter;

let engine;
let bubbles = [];
let ground;
let yOffset = 0;
let fishes = [];
let faceMesh;
let video;
let faces = [];
let options = { maxFaces: 1, refineLandmarks: false, flipHorizontal: true };
let pMouthIsOpen = false;

function preload() {
  faceMesh = ml5.faceMesh(options);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(windowWidth, windowHeight);
  video.hide();
  // Start detecting faces from the webcam video
  faceMesh.detectStart(video, gotFaces);
  engine = Engine.create();
  ground = new Ground(200, 5, 400, 10); // since gravity is backwards in this example, the ground is the ceiling!
  engine.gravity.x = 0;
  engine.gravity.y = -0.25;
  Matter.Events.on(engine, "collisionStart", handleCollisions);

  for (let i = 0; i < 15; i++) {
    fishes.push({
      x: random(width),
      y: random(height),
      size: random(20, 40),
      speed: random(1, 3),
      direction: random([1, -1]),
    });
  }
}

function draw() {
  yOffset += 1;
  background(0, 50, 100);
  noStroke();
  fill(50, 100, 200, 50);
  for (let y = 0; y < height; y += 20) {
    for (let x = 0; x < width; x += 20) {
      let wave =
        sin((x + yOffset) * 0.07) * 10 + cos((y + yOffset) * 0.07) * 10;
      ellipse(x, y + wave, 15, 15);
    }
  }


  for (let fish of fishes) {
    drawFish(fish.x, fish.y, fish.size, fish.direction);
    fish.x += fish.speed * fish.direction;
    if (fish.direction == 1 && fish.x > width + fish.size) {
      fish.x = -fish.size;
      fish.y = random(height);
    } else if (fish.direction == -1 && fish.x < -fish.size) {
      fish.x = width + fish.size;
      fish.y = random(height);
    }
  }

  Engine.update(engine); // updating the physics world
  //for (let i = 0; i < bubbles.length; i++) {
  //  bubbles[i].display();
  if (pMouthIsOpen && faces.length > 0) {
    let mouth = faces[0].lips.keypoints;
    // Use center of mouth as spawn position
    let centerX = (mouth[0].x + mouth[20].x) / 2;
    let centerY = (mouth[0].y + mouth[20].y) / 2;
    bubbles.push(new Bubble(centerX, centerY, 15));
  }
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    for (let i = bubbles.length - 1; i >= 0; i--) {
      if (bubbles[i].bubblePopped()) {
        Composite.remove(engine.world, bubbles[i].body);
        bubbles.splice(i, 1);
      }
    }
  }

  if (faces.length > 0) {
    // check if face detected...
let mouth = faces[0].lips.keypoints;
let mouthOpenness = dist(mouth[15].x, mouth[15].y, mouth[5].x, mouth[5].y);
let mouthWidth = dist(mouth[0].x, mouth[0].y, mouth[20].x, mouth[20].y);
let normalizedOpenness = mouthOpenness / mouthWidth;
// mouth center
let mouthCenterX = (mouth[0].x + mouth[20].x) / 2;
let mouthCenterY = (mouth[0].y + mouth[20].y) / 2;
// radius you can adjust
let radius = mouthWidth / 2;

if (normalizedOpenness > 0.7) {
  fill("green");
  pMouthIsOpen = true;
} else {
  fill("red");
  pMouthIsOpen = false;
}
noStroke();
circle(mouthCenterX, mouthCenterY, radius/2);
  }
  drawGoggles(mouthCenterX, mouthCenterY);
  //drawSnorkel();
}

function drawGoggles(mouthCenterX, mouthCenterY) {
  noFill();
  stroke(255);
  strokeWeight(8);
  ellipse(mouthCenterX-120, mouthCenterY, 180, 180);
  ellipse(mouthCenterX+120, mouthCenterY, 180, 180);
  line(mouthCenterX-30,mouthCenterY,mouthCenterX+30,mouthCenterY);
  noStroke();
  fill(0,100,160,50);
  ellipse(mouthCenterX-120,mouthCenterY,170,170);
  ellipse(mouthCenterX+120,mouthCenterY,170,170);
  noFill();
  stroke(0,50);
  strokeWeight(30);
  ellipse(mouthCenterX-120,mouthCenterY,220,220);
  ellipse(mouthCenterX+120,mouthCenterY,220,220);
}

/*function drawSnorkel() {
  stroke(255);
  strokeWeight(15);
  noFill();
  let x = width/2+180;
  let y = height/2-40;
  line(x,y,x,y-150);
  line(x,y-150,x+40,y-150);
}*/

function drawFish(x, y, s, direction) {
  fill(255, 100, 50);
  push();
  translate(x, y);
  scale(direction, 1);
  ellipse(0, 0, s, s / 2);
  triangle(-s / 2, 0, -s, -s / 4, -s, s / 4);
  pop();
}

function handleCollisions(event) {
  let pairs = event.pairs[0];
  let bodyA = pairs.bodyA;
  let bodyB = pairs.bodyB;
  if (bodyA.isStatic || bodyB.isStatic) {
    // since the ceiling is the only thing that is static
    if (!bodyA.isStatic) {
      bodyA.plugin.particle.hit = true;
    } else if (!bodyB.isStatic) {
      bodyB.plugin.particle.hit = true;
    }
  }
}

class Bubble {
  constructor(x, y, r) {
    this.r = r;
    this.bubbleTime = millis();
    this.body = Bodies.circle(x, y, this.r);
    this.body.plugin.particle = this; // register this bubble object as a property of the matter.js bodies array
    Body.setAngularVelocity(this.body, 0.2);
    Composite.add(engine.world, this.body);
    this.hit = false;
  }
  bubblePopped() {
    return millis() - this.bubbleTime > 1500;
  }
  display() {
    push();
    let x = this.body.position.x;
    let y = this.body.position.y;
    let angle = this.body.angle;
    translate(x, y);
    rotate(angle);
    if (this.hit) {
      fill(255, 100);
      this.hit = false;
    } else {
      fill(255, 50);
    }
    stroke("#09ade3ff");
    circle(0, 0, this.r * 2);
    pop();
  }
}

class Ground {
  constructor(x, y, w, h) {
    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(x, y, this.w, this.h, { isStatic: true });
    Composite.add(engine.world, this.body);
  }

  display() {
    push();
    rectMode(CENTER);
    let x = this.body.position.x;
    let y = this.body.position.y;
    translate(x, y);
    pop();
  }
}

// Callback function for when faceMesh outputs data
function gotFaces(results) {
  // Save the output to the faces variable
  faces = results;
}
