let bgColor = "#f4f3c9ff";
let baseHUE = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
}

function draw() {
  background(bgColor);
  strokeWeight(5);
  stroke("#8f8edeff");

  let hue = 0; 
  let sat = 0;
  translate(-100,-80); 
    for(let y = 0; y<height; y+=150){
      for(let x = 0; x<width; x+=180){
        hue = map(x,0,width,0,255);
			  sat = map(y,0,height,0,255);
        fill((hue + baseHUE) % 255, sat,90 );
    push();
    translate(x,y);
    let angle = map(mouseX, 0, width, 0, TWO_PI);
    rotate(angle);
    let s = map(mouseY, 0, height,0.3,2);
    scale(s);
  beginShape();
  vertex(200, 100);
  vertex(220, 160);
  vertex(280, 160);
  vertex(235, 200);
  vertex(250, 260);
  vertex(200, 225);
  vertex(150, 260);
  vertex(165, 200);
  vertex(120, 160);
  vertex(180, 160);
  endShape(CLOSE);
  pop();
    }
  }
}
function mousePressed(){
  bgColor = color(random(255), random(200, 255), random(150,255)); 
  baseHUE = random(255);
}