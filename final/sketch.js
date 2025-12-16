// This code expands on an example found on youtube by Patt
// Vira (https://youtu.be/cLXNxn5N-2Y) and references from
// ml5 and matter for facemesh and physics calcuations. Thank you for
// also providing the composition for multiple functions displayed below.

// Global variables created for face detection, physics calculations,
// bubbles, and underwater environment. Classes created for bubble
// and fishes for multi object production. 

const { Engine, Body, Bodies, Composite } = Matter;

let engine;
let bubbles = [];
let ground;
let waveSpeed = 0;
let fishes = [];
let faceMesh;
let video;
let faces = [];
let options = { maxFaces: 1, refineLandmarks: false, flipHorizontal: true };
let mouthIsOpen = false;
// variables added for sound
let bubbleSound;
let bubbleEnvelope;
let lastBubbleTime = 0;

// Preload function for model to detect face
function preload() {
  faceMesh = ml5.faceMesh(options);
}

// Setup to detect webcam video and tracking. Negative gravity
// setting in order for the bubbles to rise while setting the ground
// at the top as a static rectangle with collision settings. A sine wave
// oscillator with ADSR settings for a bubble-like sound. "amp(0)"
// to start silent.
function setup() {
  createCanvas(windowWidth, windowHeight);
  userStartAudio();
  bubbleSound = new p5.Oscillator('sine');
  bubbleSound.start();
  bubbleSound.amp(0);
  bubbleEnvelope = new p5.Envelope();
  bubbleEnvelope.setADSR(0.01, 0.2, 0.0, 0.0); 
  bubbleEnvelope.setRange(0.5, 0);
  video = createCapture(VIDEO);
  video.size(windowWidth, windowHeight);
  video.hide();
  faceMesh.detectStart(video, gotFaces);
  engine = Engine.create();
  ground = new Ground(200, 5, 400, 10);
  engine.gravity.x = 0;
  engine.gravity.y = -0.25;
  Matter.Events.on(engine, "collisionStart", handleCollisions);

  // Creating 15 fishes as it does not overwhelm the screen size. Added
  // size, speed, and direction, for variety.
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

// Dark blue background color to represent the underwater setting. For
// loop that creates the wave effect in background with waveSpeed that changes
// the movement and set at 1 for a preferred motion.
function draw() {
  waveSpeed += 1;
  background(0, 50, 100);
  noStroke();
  fill(50, 100, 200, 50);
  for (let y = 0; y < height; y += 20) {
    for (let x = 0; x < width; x += 20) {
      let wave =
        sin((x + waveSpeed) * 0.07) * 10 + cos((y + waveSpeed) * 0.07) * 10;
      ellipse(x, y + wave, 15, 15);
    }
  }

  // Text to make interactive feature more obvious.
  fill(255);
  textSize(17);
  text("Open/close your mouth to create some bubbles! Turn on sound!", 15, 30);
  
  // For loop for fishes to move across the width of the screen so that they
  // wrap around from the other side.
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

  // Updating physics engine and creating logic that identifies the center
  // the mouth by using range of points on the lips from facemesh in order to 
  // create bubbles from the center mouth position. Adding logic for the
  // bubbles to dissapear after x amount of time.
  Engine.update(engine); 
  if (mouthIsOpen && faces.length > 0) {
    let mouth = faces[0].lips.keypoints;
    let centerX = (mouth[0].x + mouth[20].x) / 2;
    let centerY = (mouth[0].y + mouth[20].y) / 2;
    bubbles.push(new Bubble(centerX, centerY, 15));
    
    // Bubble sound settings to occur when the mouth for note to raise
    // higher after .1 seconds. bubbleSound.freq(startFreq) to instantly reset
    // the low note.
  if (millis() - lastBubbleTime > 100) {
      let startFreq = random(200, 400);
      bubbleSound.freq(startFreq); 
      bubbleSound.freq(startFreq + 300, 0.1); 
      bubbleEnvelope.play(bubbleSound);
      lastBubbleTime = millis();
    }
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

  // Checking if the face is detected by using the points on the mouth to 
  // calculate the mouth wideness set for the bubbles to produce. I prefer
  // the mouth openness set at .5 after multiple attempts at testing. Drawing
  // a small red circle that visualizes the position of the mouth centerpoint
  // that changes to blue when mouth reaches beyond the .5 setting. We were
  // able to create the if statement by using the width and points on the
  // mouth that measures the distance to identify where we establish activity.
  if (faces.length > 0) {
    let mouth = faces[0].lips.keypoints;
    let mouthOpenness = dist(mouth[15].x, mouth[15].y, mouth[5].x, mouth[5].y);
    let mouthWidth = dist(mouth[0].x, mouth[0].y, mouth[20].x, mouth[20].y);
    let normalizedOpenness = mouthOpenness / mouthWidth;
    let mouthCenterX = (mouth[0].x + mouth[20].x) / 2;
    let mouthCenterY = (mouth[0].y + mouth[20].y) / 2;
    let radius = mouthWidth / 2;

    if (normalizedOpenness > 0.5) {
      fill("#09ade3ff");
      mouthIsOpen = true;
    } else {
      fill("#ff0400ff");
      mouthIsOpen = false;
    }
    // Simple snorkel sketched to replace the previous red dot to signal bubbles
    // to produce, along with the text written for directions.
    push();
    translate(mouthCenterX, mouthCenterY);
    // eyes
    fill("#30ce72e5");
    stroke(0);
    strokeWeight(3);
    ellipse(-20, 0, 30, 30);
    ellipse(20, 0, 30, 30);
    // eye connector
    rect(-5, -5, 10, 10);
    // tube
    fill("#1f1e1ee5");
    rect(35, -40, 8, 50);
    // nozzle
    fill("#f70000e5");
    rect(32, -50, 14, 10);
    pop();
  }
}

// Simple fish drawing with ellipse and triangle. I picked the
// orange color as I feel this would contrast well with the blue background.
function drawFish(x, y, s, direction) {
  fill("#fb7100ff");
  push();
  translate(x, y);
  scale(direction, 1);
  ellipse(0, 0, s, s / 2);
  triangle(-s/2,0,-s*.8,-s/4,-s*.8,s/4);
  pop();
}

// Function that coordinates the collision of objects of the bubbles
// and the "ceiling/floor" of static rectangle that visualizes when
// objects come in contact.
function handleCollisions(event) {
  let pairs = event.pairs[0];
  let bodyA = pairs.bodyA;
  let bodyB = pairs.bodyB;
  if (bodyA.isStatic || bodyB.isStatic) {
    if (!bodyA.isStatic) {
      bodyA.plugin.particle.hit = true;
    } else if (!bodyB.isStatic) {
      bodyB.plugin.particle.hit = true;
    }
  }
}

// Bubble class with constructor that uses the physics engine for the
// calculations of movement and positioning. 1500 bubble time as I liked
// this timing of the bubbles disappearing in this sketch. Color to
// slightly change when a collision or hit event occurs. Angular velocity se
// to .2 as the preferred motion movement.
class Bubble {
  constructor(x, y, r) {
    this.r = r;
    this.bubbleTime = millis();
    this.body = Bodies.circle(x, y, this.r);
    this.body.plugin.particle = this; 
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

// static ground or "ceiling" of static rectangle that comes
// in contact with the bubbles as they float. 
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