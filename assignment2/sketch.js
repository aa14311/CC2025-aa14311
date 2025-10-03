//global variables created for background color and base HUE of stars
//baseHUE was used rather than RGB as I defined Colormode HSB in the
//function setup
let bgColor = "#f4f3c9ff";
let baseHUE = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //used HSB colormode (Hue, Saturation, Brightness)
  colorMode(HSB);
}
function draw() {
  //set background color 
  background(bgColor);
  //setting stroke properties for outlines of star
  strokeWeight(4);
  //setting the color of that outline/stoke
  stroke("#000000ff");

  //variables created for dynamic color of each star 
  let hue = 0; 
  let sat = 0;
  //translating canvas origin slightly to top left for better positioning
  translate(-100,-80);
  //followed this example taken from your notes. The outer loop iterates 
  //over the rows and columns adjusting the spaces between each star
    for(let y = 0; y<height; y+=150){
      for(let x = 0; x<width; x+=180){
        //mapping x and y position to a hue value for horizontal
        //and vertical color gradient effect
        hue = map(x,0,width,0,255);
			  sat = map(y,0,height,0,255);
        //set fill colors using hue, saturation, and brightness. Used baseHUE
        //to allow random colors set in mousePressed function at the bottom of code.
        //Used the modular division by 255 to ensure the resulting number from the
        //sum of hue + basehue will never exceed 255, being the max value.
        fill((hue + baseHUE) % 255, sat,90);
    //used push to save the colors above and current transformation state.
    push();
    //translate to move origin of current star position with mouse
    translate(x,y);
    //rotates the star based on horiziontal mouse position
    //TWO_PI setting rotating the star full 360 degrees.
    let angle = map(mouseX, 0, width, 0, TWO_PI);
    rotate(angle);
    //scaling star size based on vertical mouse position. Used 0.1 and 3 for
    //the min and max resizing values. 
    let s = map(mouseY, 0, height,0.1,3);
    scale(s);
    //created the star shape using beginShape function. I took these
    //points from chatGPT as I originally began started to create the
    //star using the line function but was taking too long. 
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
//changing effects when mouse is clicked
function mousePressed(){
  //changed background to a random HSB color for each click and randomly
  //shifts baseHUE of stars for dynamic color effect
  bgColor = color(random(255), random(255), random(255)); 
  baseHUE = random(255);
}