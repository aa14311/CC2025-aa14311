function setup() {
  createCanvas(windowWidth, windowHeight);
  // I originally defined this as 500 and 630 respectively,
  // making the image more static. In order to make this scalable,
  // I added the equations to the shapes to align with the existing
  // vertex points defined. 
  background ('#efe3caff'); // used "earthy" colors
}

function draw() {

  noStroke();
  fill('#d2a679'); 
  beginShape(); // creating large center triangle 
  vertex(windowWidth * (1 - 350/500), windowHeight * (1 - 130/630)); //bottom left most coordinate
  vertex(windowWidth * (1 - 350/500), windowHeight * (1 - 530/630)); //topright coordinate
  vertex(windowWidth * (1 - 80/500), windowHeight * (1 - 230/630)); //bottom rightcoordinate
  endShape(CLOSE);

  fill('#52796f');
  circle(windowWidth * (1 - 150/500), windowHeight * (1- 150/630), 150); // created circular shape below triangle

  fill('#6a899aff')
  beginShape(); //light blue square
  vertex(windowWidth * (1 - 360/500), windowHeight * (1 - 480/630)); //top most rotated light blue square
  vertex(windowWidth * (1 - 330/500), windowHeight * (1 - 440/630)); //rightmost of light blue square
  vertex(windowWidth * (1 - 370/500), windowHeight * (1 - 410/630)); //bottommost of light blue square
  vertex(windowWidth * (1 - 400/500), windowHeight * (1 - 450/630)); //leftmost of light blue square
  endShape(CLOSE);

  fill('#354f52');
  beginShape(); //dark teal rectangle
  vertex(windowWidth * (1 - 435/500), windowHeight * (1 - 385/630)); //top left dark teal rectangle
  vertex(windowWidth * (1 - 250/500), windowHeight * (1 - 456/630)); //top right dark teal rectangle
  vertex(windowWidth * (1 - 225/500), windowHeight * (1 - 395/630)); //bottom right dark teal rectangle
  vertex(windowWidth * (1 - 414/500), windowHeight * (1 - 325/630)); //bottom left dark teal rectangle
  endShape(CLOSE);

  fill('#bc4b51');
  beginShape(); //red square center of dark teal rectangle
  vertex(windowWidth * (1 - 315/500), windowHeight * (1 - 380/630)); // top left small red square center of dark teal rectangle
  vertex(windowWidth * (1 - 290/500), windowHeight * (1 - 390/630)); // top right small red square center of dark teal rectangle
  vertex(windowWidth * (1 - 278/500), windowHeight * (1 - 360/630)); // bottom right small red square center of dark teal rectangle
  vertex(windowWidth * (1 - 305/500), windowHeight * (1 - 350/630)); // bottom left small red square center of dark teal rectangle
  endShape(CLOSE);

  fill('#7f5539');
  beginShape(); // thin dark brown rectangle on top right triangle
  vertex(windowWidth * (1 - 229/500), windowHeight * (1 - 402/630)); // top left of thin dark brown rectangle on top right triangle
  vertex(windowWidth * (1 - 188/500), windowHeight * (1 - 420/630)); // top right of thin dark brown rectangle on top right triangle
  vertex(windowWidth * (1 - 185/500), windowHeight * (1 - 412/630)); // bottom right of thin dark brown rectangle on top right triangle
  vertex(windowWidth * (1 - 226/500), windowHeight * (1 - 394/630)); // bottom left of thin dark brown rectangle on top right triangle
  endShape(CLOSE);

  fill('#b5838d');
  beginShape(); // light magenta rectangle below brown 
  vertex(windowWidth * (1 - 243/500), windowHeight * (1 - 389/630)); // top left of light magenta rectangle below brown 
  vertex(windowWidth * (1 - 102/500), windowHeight * (1 - 450/630)); // top right of light magenta rectangle below brown 
  vertex(windowWidth * (1 - 97/500), windowHeight * (1 - 439/630)); // bottom right of light magenta rectangle below brown 
  vertex(windowWidth * (1 - 239/500), windowHeight * (1 - 377/630)); // bottom left of light magenta rectangle below brown 
  endShape(CLOSE);

  fill('#8d99ae');
  beginShape(); // long blue rectangle above brown rectnagle
  vertex(windowWidth * (1 - 210/500), windowHeight * (1 - 295/630)); // top left of long blue rectangle above brown rectangle
  vertex(windowWidth * (1 - 50/500), windowHeight * (1 - 456/630)); // top right of long blue rectangle above brown rectangle
  vertex(windowWidth * (1 - 35/500), windowHeight * (1 - 440/630)); // bottom right of long blue rectangle above brown rectangle
  vertex(windowWidth * (1 - 195/500), windowHeight * (1 - 277/630)); // bottom left of long blue rectangle above brown rectangle
  endShape(CLOSE);

  fill('#e9c46a');
  beginShape(); // yellow rectangle
  vertex(windowWidth * (1 - 120/500), windowHeight * (1 - 371/630)); // top left of yellow rectangle
  vertex(windowWidth * (1 - 80/500), windowHeight * (1 - 412/630)); // top right of yellow rectangle
  vertex(windowWidth * (1 - 55/500), windowHeight * (1 - 389/630)); // bottom right of yellow rectangle
  vertex(windowWidth * (1 - 96/500), windowHeight * (1 - 347/630)); // bottom left of yellow rectangle
  endShape(CLOSE);
  
  fill('#904532ff');
  beginShape(); //thin brown rectangle
  vertex(windowWidth * (1 - 216/500), windowHeight * (1 - 270/630)); // top left of thin brown rectangle
  vertex(windowWidth * (1 - 115/500), windowHeight * (1 - 375/630)); // top right of thin brown rectangle
  vertex(windowWidth * (1 - 105/500), windowHeight * (1 - 365/630)); // bottom right of thin brown rectangle
  vertex(windowWidth * (1 - 207/500), windowHeight * (1 - 261/630)); // bottom left of thin brown rectangle
  endShape(CLOSE);

  fill('#b5838d');
  beginShape(); // purple rectangle crossed with brown 'line'
  vertex(windowWidth * (1 - 400/500), windowHeight * (1 - 228/630)); // top left of thin purple rectangle crossed with brown 'line'
  vertex(windowWidth * (1 - 312/500), windowHeight * (1 - 173/630)); // top right of purple rectangle crossed with brown 'line'
  vertex(windowWidth * (1 - 317/500), windowHeight * (1 - 165/630)); // bottom right of purple rectangle crossed with brown 'line'
  vertex(windowWidth * (1 - 405/500), windowHeight * (1 - 220/630)); // bottom left of purple rectangle crossed with brown 'line'
  endShape(CLOSE);

  fill('#7f5539');
  beginShape(); // thin brown rectangle crossed with purple 'line'
  vertex(windowWidth * (1 - 390/500), windowHeight * (1 - 165/630)); // top left of thin brown rectangle crossed with purple 'line'
  vertex(windowWidth * (1 - 325/500), windowHeight * (1 - 260/630)); // top right of thin brown rectangle crossed with purple 'line'
  vertex(windowWidth * (1 - 315/500), windowHeight * (1 - 253/630)); // bottom right of thin brown rectangle crossed with purple 'line'
  vertex(windowWidth * (1 - 382/500), windowHeight * (1 - 160/630)); // bottom left of thin brown rectangle crossed with purple 'line'
  endShape(CLOSE);

  fill('#6a994e');
  beginShape(); //green rectangle floating on crossed 'lines'
  vertex(windowWidth * (1 - 380/500), windowHeight * (1 - 241/630)); // top left of green rectangle floating on crossed 'lines'
  vertex(windowWidth * (1 - 350/500), windowHeight * (1 - 222/630)); // top right of green rectangle floating on crossed 'lines'
  vertex(windowWidth * (1 - 363/500), windowHeight * (1 - 205/630)); // bottom right of green rectangle floating on crossed 'lines'
  vertex(windowWidth * (1 - 392/500), windowHeight * (1 - 223/630)); // bottom left of green rectangle floating on crossed 'lines'
  endShape(CLOSE);

  fill("rgba(135, 109, 18, 0.6)");
  beginShape(); // square positioned in bottom left
  vertex(windowWidth * (1 - 455/500), windowHeight * (1 - 90/630)); // top left of square positioned in bottom left
  vertex(windowWidth * (1 - 425/500), windowHeight * (1 - 90/630)); // top right square positioned in bottom left
  vertex(windowWidth * (1 - 425/500), windowHeight * (1 - 60/630)); // bottom right square positioned in bottom left
  vertex(windowWidth * (1 - 455/500), windowHeight * (1 - 60/630)); // bottom left square positioned in bottom left
  endShape(CLOSE);

  fill("#dda15e");
  beginShape(); //small orange 'line' below circle
  vertex(windowWidth * (1 - 256/500), windowHeight * (1 - 86/630)); // top left of small orange 'line' below circle
  vertex(windowWidth * (1 - 207/500), windowHeight * (1 - 70/630)); // top right of small orange 'line' below circle
  vertex(windowWidth * (1 - 210/500), windowHeight * (1 - 62/630)); // bottom right of small orange 'line' below circle
  vertex(windowWidth * (1 - 260/500), windowHeight * (1 - 78/630)); // bottom left of small orange 'line' below circle
  endShape(CLOSE);

  fill('#b5838d');
  beginShape(); //long pink line below circle
  vertex(windowWidth * (1 - 233/500), windowHeight * (1 - 70/630)); // top left of long pink line below circle
  vertex(windowWidth * (1 - 77/500), windowHeight * (1 - 20/630)); // top right of long pink line below circle
  vertex(windowWidth * (1 - 80/500), windowHeight * (1 - 10/630)); // bottom right of long pink line below circle
  vertex(windowWidth * (1 - 237/500), windowHeight * (1 - 61/630)); // bottom left of long pink line below circle
  endShape(CLOSE);
} 
// Reflection - 
  // 1. I would have not defined the Canvas dimensions and original
  // vertex points. I scaled this by the entire screen so the image
  // stretches when the window expands.

  // 2. I should have chosen the line shape and adjusted
  // the stroke weight for the thin rectangles.

  // 3. As I created the shapes, I realize the canvasFrame was not to my liking
  // as you can notice the minimal 'white' space at the bottom. I was unsure
  // how to add more to just that. UPDATE: reflection #1 to avoid this.