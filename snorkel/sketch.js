

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  // Eyes
  fill(30);
  stroke(255);
  strokeWeight(3);
  ellipse(170, 200, 50, 50);
  ellipse(230, 200, 50, 50);

  // Connector between eyes (mask bridge)
  rect(195, 195, 10, 10);

  // Snorkel tube
  fill(60);
  rect(255, 130, 12, 80);

  // Snorkel nozzle
  fill(255, 50, 50);
  rect(250, 115, 22, 15);
}
