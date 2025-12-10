/*
// this code expands on an example I found on youtube:
----- Coding Tutorial by Patt Vira ----- 
Name: Intro to matter.js (with p5.js)
Video Tutorial: https://youtu.be/cLXNxn5N-2Y

Connect with Patt: @pattvira
https://www.pattvira.com/
----------------------------------------
*/

let faceMesh;
let video;
let faces = [];
let options = { maxFaces: 1, refineLandmarks: false, flipHorizontal: true };
let pMouthIsOpen = false;

function preload() {
  faceMesh = ml5.faceMesh(options);
}
const { Engine, Body, Bodies, Composite } = Matter;

let engine;
let bubbles = [];
let ground;
let yOffset = 0;
let fishes = [];

function setup() {
  createCanvas(640, 480);

    video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  // Start detecting faces from the webcam video
  faceMesh.detectStart(video, gotFaces);

  engine = Engine.create();
  ground = new Ground(200, 5, 400, 10); // since gravity is backwards in this example, the ground is the ceiling!
  engine.gravity.x = 0;
  engine.gravity.y = -0.25;

  Matter.Events.on(engine, "collisionStart", handleCollisions);

  for(let i=0;i<5;i++){
    fishes.push({
      x: random(width),
      y: random(height/2),
      size: random(20,40),
      speed: random(1,3),
      direction: random([1,-1])
    })
  }  

}

function draw() {
  background(0,50,100);
  noStroke();
  fill(50,100,200,50);
  for(let y = 0; y<height; y+=20){
    for(let x = 0; x<width; x+=20){
      let wave = sin((x+yOffset)* 0.07)*10+cos((y+yOffset)*0.07)*10;
      ellipse(x,y+wave,15,15);
    } 
  }
  yOffset += 1
  

  for(let fish of fishes){
    drawFish(fish.x,fish.y,fish.size,fish.direction);
    fish.x += fish.speed*fish.direction;

    if (fish.direction == 1 && fish.x > width+fish.size){
      fish.x = -fish.size;
      fish.y = random(height);
    }
    else if (fish.direction == -1 && fish.x<-fish.size){
      fish.x=width+fish.size;
      fish.y=random(height);
    }
  }

  Engine.update(engine); // updating the physics world
  //for (let i = 0; i < bubbles.length; i++) {
  //  bubbles[i].display();
if (pMouthIsOpen && faces.length > 0) {
  let mouth = faces[0].lips.keypoints;
  // Use center of mouth as spawn position
  let centerX = ((mouth[10].x / video.width) * width);
  let centerY = ((mouth[10].y / video.height) * height);
  bubbles.push(new Bubble(centerX, centerY, 10));
  }
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  for (let i = bubbles.length - 1; i >= 0; i--) {
  
  if (bubbles[i].bubblePopped()) {
    Composite.remove(engine.world, bubbles[i].body);
    bubbles.splice(i, 1);}}
  }
  ground.display();

  if(faces.length>0){ // check if face detected...
    let leftEye = faces[0].leftEye.keypoints;
    let rightEye = faces[0].rightEye.keypoints;
    let mouth = faces[0].lips.keypoints;
    fill(0,255,0);
    let mouthOpenness = dist(mouth[15].x,mouth[15].y,mouth[5].x,mouth[5].y);
    let mouthWidth = dist(mouth[0].x,mouth[0].y,mouth[20].x,mouth[20].y);
    let normalizedOpenness = mouthOpenness/mouthWidth;
    if(normalizedOpenness>0.5){
      fill("green");
      let mouthIsOpen = true;
      if(pMouthIsOpen == false){
        pMouthIsOpen = true;
        console.log("bang");
      }
    } else {
      fill("red");
      let mouthIsOpen = false;
      pMouthIsOpen = false;
    }
    
    beginShape();
    for(let i = 0; i<10;i++){
      vertex(mouth[i].x,mouth[i].y);
    }
    for(let i = 20; i>9;i--){
      vertex(mouth[i].x,mouth[i].y);
    }
    endShape();
  }
}

function drawFish (x,y,s,direction){
  fill(255,100,50);
  noStroke();
  push();
  translate(x,y);
  scale(direction,1);
  ellipse(0,0,s,s/2);
  triangle(-s/2,0,-s,-s/4,-s,s/4);
  pop();
}

function mousePressed() {
  bubbles.push(new Bubble(mouseX, mouseY, 20));
}

function handleCollisions(event) {
  let pairs = event.pairs[0];
  let bodyA = pairs.bodyA;
  let bodyB = pairs.bodyB;
  if (bodyA.isStatic || bodyB.isStatic) {
    // since the ceiling is the only thing that is static
    console.log("hit!");
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
    this.bubbleTime = millis ();

    this.body = Bodies.circle(x, y, this.r);
    this.body.plugin.particle = this; // register this bubble object as a property of the matter.js bodies array
    Body.setAngularVelocity(this.body, 0.2);
    Composite.add(engine.world, this.body);
    this.hit = false;
  }
 bubblePopped() {
    return millis() - this.bubbleTime > 1000;
  }
  display() {
    push();
    rectMode(CENTER);
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
    stroke('#09ade3ff');
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
    //rect(0, 0, this.w, this.h); // uncomment to draw ceiling
    pop();
  }
}

// Callback function for when faceMesh outputs data
function gotFaces(results) {
  // Save the output to the faces variable
  faces = results;
}