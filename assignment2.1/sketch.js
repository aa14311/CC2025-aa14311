//global color variables created used for dynamic changes
let bgColor = '#ecd3b6ff';
let baseHUE = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB); 
}
function draw() {
  background(bgColor);
  strokeWeight(3);

  //local variables created for star colors taken from your notes
  let hue = 0;
  let sat = 0;
  
  //nested for loop to create the grid of stars and set the spacing
  //so they don't overlap or spread too far from each other
  for(let x = 0; x < width; x +=180){ 
    for(let y =0; y < height; y+=180){
      hue = map(x,0,width,0,255);
      sat = map(y,0,height,0,255);
      //used your notes for the fill color and added the baseHUE
      //in the parameters to allow random colors of stars. I also added
      //the 255 settings so the stars are no longer white at start
      fill(hue + baseHUE,sat + 255,255)
      push();
  //added the x and y parameters and settings so the stars
  //are closer to the 0,0 point.
  translate(x - 100,y - 80);
  //used to balance the rotation of stars to stay closer in place with the original
  //vertex points defined in the shape. Otherwise, the stars will stack
  //and rotate out of position shown in the original submission and keeping
  //a cleaner look closer to the 0,0 as the star shape was created first.
  translate(200,180);
  //adding the dynamic function so the stars spin as the mouse moves across
  //the x axis, and the stars grow larger in scale as you move down the y axis
  let angle = map(mouseX, 0, width, 0, TWO_PI);
  rotate(angle);
  //changed the parameters of the original star size to 1 so they are not
  //small and oddly spaced shown in the original submission. The 2 setting
  //updated so they don't scale too largely to recognize the shape.
  let s = map(mouseY, 0, height,1,2);
  scale(s);
  translate(-200,-180);
  //star shape created
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
//settings to randomize each color every time the mouse is clicked.
function mousePressed(){
  bgColor = color(random(255), random(255), random(255)); 
  baseHUE = random(255);
}
