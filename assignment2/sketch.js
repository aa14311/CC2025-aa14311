

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
}

function draw() {
  background("#f4f3c9ff");
  strokeWeight(5);
  stroke("#8f8edeff");

  let hue = 0; 
  let sat = 0;
  translate(-100,-80);
    for(let y = 0; y<height; y+=150){
      for(let x = 0; x<width; x+=180){
        hue = map(x,0,width,0,255);
			  sat = map(y,0,height,0,255);
        fill(hue,sat,90);
    push();
    translate(x,y);
    //let rotation = map(x,0,width,0,.3);
		//rotate(rotation);
    //let circleSize;
    //circleSize = map(y,50,height-50,100,10);
    //circle(x,y,circleSize);
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
