

function setup() {
  createCanvas(400,400); // set a 400px by 400 px canvas
  
}

function draw() {
  // a grey scale color is denoted as a number 0-255
  // an rgb color is denoted as 3 numbers (red green blue)
  //background(127,54,200);
  // we can use the name of a color like "black" or "olive"
  //background("lightgreen")
  // we can also format rgb colors as strings
  background("rgba(134, 163, 194, 0.59)");

  // stroke and fill change the color of drawn shapes
  stroke("rgba(0, 0, 0, 1)");
  fill("rgba(175, 90, 144, 1)");
  
  strokeWeight(5);
  //nostroke(); gets rid of the stroke completely
  //nofill(); // gets rid of the fill completely

  // circle takes 3 parameters: x, y and d:
  circle(200,100,150);

  //setting a new fill for my rectangle
  fill("rgba(150, 83, 83, 1)");
  // recttakes 4 parameters
  // x coord of top left, y coord of top left, width and height
  rect(100,80,100,15,20);
  // ellipse takes 4 parameters:
  // x coord of center, y coord of center, width and height
  ellipse(250,80,10,20);

  // line connects two coords: x1,y1,x2,y2
  line(250,130,260,130);

  // to draw complex polygons (more than 2 coords):
  // create a beginShape(); function and an endShape function
  // any vertex(x,y) functions you place inbetween
  // beginShape and endShape will be rendered as points in
  // a complete polygon
  
  beginShape();
  vertex(100,200); //leftmost coordinate
  vertex(200,100); //topright coordinate
  vertex(200,150); //bottom=most coordinate
  endShape(CLOSE); // CLOSE parameter closes the polygon
  // example of no close = "U" shape with no close

  fill("rgba(105, 65, 152, 1)")
  circle(width/2,height*.75,width/2.75);

  ellipse(mouseX,mouseY,mouseY*.25,mouseX*.25)
}
