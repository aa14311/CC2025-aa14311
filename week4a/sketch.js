

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // iteration operators;
  // i++m : adds 1 to i
  // i+=10 : adds 10 to i
  // i--  : subtracts 1 from i
  // i -=5 : subtracts 5 from i
  for(let i = 0; i<10; i++){
    console.log(i);
  }
}

function draw() {
  background('#cab385ff');

  //for(let y = 50; y < height-50; y+=100)
  
  for(let x = 50;x<width-50;x+=100){
    push();
    translate(x,50); // this is starting point, essentially moving 0,0 point
    // everything within this push/pop block
    // will be centered, with 0,0 as the center
    // point
    strokeWeight(3);
    fill('#d3df81ff')

    circle(0,0,100);
    circle(-15,-10,10)
    circle(15,-10,10)
    let happiness;
    happiness = map(x,0,width,-25,25);
    arc(0, 0, 60, 60, radians(0-happiness), radians(180+happiness));
    pop();
  }
}