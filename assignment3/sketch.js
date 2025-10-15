

function setup() {
  createCanvas(windowWidth, windowHeight);  
}

function draw() {
  background("#c9b197ff");

  let h = hour();
  let m = minute();
  let s = second();
  let ms = millis() % 1000;

  //seconds block
  fill("#ab692bff");
  noStroke();
  stroke(3);
  let sSmooth = s + ms / 1000;
  let sBlock = map(sSmooth, 0, 60, height, 0);
  rect(700, sBlock, 200, 80);

  //minutes block
  fill("#846442ff");
  let mBlock = map(m + s / 60, 0, 60, height, 0);
  rect(900, mBlock, 200, 80);

  //hours block
  fill("#5c3f20ff");
  let hBlock = map(h % 12 + m / 60, 0, 12, height, 0);
  rect(1100, hBlock, 200, 80);

  //block1
  let loopTime = 2000; 
  stroke(3);
  fill("#cfa578ff");
  let block1 = map((millis() % loopTime) / 20, 0, 80, height, 0);
  rect(100, block1, 200, 80);

  //block2
  let loopTime2 = 4000;
  fill("#d08d46ff");
  let block2 = map((millis() % loopTime2) / 40, 0, 80, height, 0);
  rect(300, block2, 200, 80);

  //block3
  let loopTime3 = 6000;
  fill("#c98134ff");
  let block3 = map((millis() % loopTime3) / 60, 0, 80, height, 0);
  rect(500, block3, 200, 80);

  stroke(0);
  strokeWeight(5);
  line(100,0,100,height);

  stroke(0);
  strokeWeight(5);
  line(300,0,300,height);

  stroke(0);
  strokeWeight(5);
  line(500,0,500,height);

  stroke(0);
  strokeWeight(5);
  line(700,0,700,height);

  stroke(0);
  strokeWeight(5);
  line(900,0,900,height);

  stroke(0);
  strokeWeight(5);
  line(1100,0,1100,height);

  fill("#000000");
  noStroke();
  text('hour: ' + hour(),10,20);
  text('minute: ' + minute(),10,40);
  text('second: ' + second(),10,60);
  pop()
}
