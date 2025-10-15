function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background("#c9b197ff");

  let h = hour();
  let m = minute();
  let s = second();
  let ms = millis() % 1000;

  // Seconds rectangle (bottom → top)
  fill("#ab6d2bff");
  noStroke();
  let sSmooth = s + ms / 1000;
  let sY = map(sSmooth, 0, 60, height, 0);
  rect(150, sY, 100, 20);

  stroke(0);
  strokeWeight(1);
  line(150,0,150,height);

  stroke(0);
  strokeWeight(1);
  line(250,0,250,height);

  let loopTime = 2000; 
  fill("#f19634ff");
  noStroke();
  let sY1 = map((millis() % loopTime) / 20, 0, 80, height, 0);
  rect(200, sY1, 100, 20);
 
  fill("#754511ff");
  noStroke();
  let sY2 = map((millis() % loopTime) / 15, 0, 80, height, 0);
  rect(400, sY2, 100, 20);
  
  // Minutes rectangle
  fill("#846442ff");
  let mY = map(m + s / 60, 0, 60, height, 0);
  rect(250, mY, 100, 20);

  // Hours rectangle
  fill("#5c3f20ff");
  let hY = map(h % 12 + m / 60, 0, 12, height, 0);
  rect(350, hY, 100, 20);

  

}