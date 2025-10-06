let plants = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < 5; i++){
    plants.push(makePlant());
  }
}

function draw() {
  background(0)
  for(let i = 0; i < plants.length; i++){
    drawPlant(plants[i]);
  }
}

function makePlant() {
  //this function returns a plant object. (x position, baseSize, leavesCount, species, born, phase)

  return {
    x: random(40,width-40),
    size: random(40,110),
    leaves: floor(map(minute(),0,59,2,8)),
    species: day() % 3,
    born: {h: hour(), m: minute()},
    phase: random(0,360),
  };

}

function drawPlant(p) {
  push();
  translate(p.x, height - 50); // base of plant

  // draw stem
  stroke('#3a5a40');
  strokeWeight(6);
  line(0, 0, 0, -p.size);

  // draw leaves with gentle motion
  for (let i = 0; i < p.leaves; i++) {
    let y = map(i, 0, p.leaves - 1, -p.size * 0.2, -p.size);
    let sway = sin(frameCount * 0.02 + p.phase + i) * 0.3; // natural motion
    let angle = (i % 2 == 0 ? -PI / 4 : PI / 4) + sway;
    drawLeaf(0, y, angle, p.size / 3);
  }

  pop();
}

// helper: draws a leaf
function drawLeaf(x, y, angle, leafSize) {
  push();
  translate(x, y);
  rotate(angle);
  noStroke();
  fill('#81c784');
  ellipse(0, 0, leafSize, leafSize / 2);
  pop();
}