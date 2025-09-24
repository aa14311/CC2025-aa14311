function setup() {
  createCanvas(windowWidth, windowHeight);
  background ('#efe3caff'); // used "earthy" colors
}

function draw() {
  
  noStroke();
  fill('#d2a679'); 
  beginShape(); // creating large center triangle 
  vertex(windowWidth - 350, windowHeight - 130); //leftmost coordinate
  vertex(windowWidth - 350, windowHeight - 530); //topright coordinate
  vertex(windowWidth - 80, windowHeight - 230); //bottommost coordinate
  endShape(CLOSE);

  fill('#52796f');
  circle(windowWidth - 150, windowHeight - 150, 150); // created circular shape below triangle

  fill('#6a899aff')
  beginShape(); //light blue square
  vertex(windowWidth - 360, windowHeight - 480); //top most rotated light blue square
  vertex(windowWidth - 330, windowHeight - 440); //rightmost of light blue square
  vertex(windowWidth - 370, windowHeight - 410); //bottommost of light blue square
  vertex(windowWidth - 400, windowHeight - 450); //leftmost of light blue square
  endShape(CLOSE);

  fill('#354f52');
  beginShape(); //dark teal rectangle
  vertex(windowWidth - 435, windowHeight - 385); //top left dark teal rectangle
  vertex(windowWidth - 250, windowHeight - 456); //top right dark teal rectangle
  vertex(windowWidth - 225, windowHeight - 395); //bottom right dark teal rectangle
  vertex(windowWidth - 414, windowHeight - 325); //bottom left dark teal rectangle
  endShape(CLOSE);

  fill('#bc4b51');
  beginShape(); //red square center of dark teal rectangle
  vertex(windowWidth - 315, windowHeight - 380); // top left small red square center of dark teal rectangle
  vertex(windowWidth - 290, windowHeight - 390); // top right small red square center of dark teal rectangle
  vertex(windowWidth - 278, windowHeight - 360); // bottom right small red square center of dark teal rectangle
  vertex(windowWidth - 305, windowHeight - 350); // bottom left small red square center of dark teal rectangle
  endShape(CLOSE);

  fill('#7f5539');
  beginShape(); // thin dark brown rectangle on top right triangle
  vertex(windowWidth - 229, windowHeight - 402); // top left of thin dark brown rectangle on top right triangle
  vertex(windowWidth - 188, windowHeight - 420); // top right of thin dark brown rectangle on top right triangle
  vertex(windowWidth - 185, windowHeight - 412); // bottom right of thin dark brown rectangle on top right triangle
  vertex(windowWidth - 226, windowHeight - 394); // bottom left of thin dark brown rectangle on top right triangle
  endShape(CLOSE);

  fill('#b5838d');
  beginShape(); // light magenta rectangle below brown 
  vertex(windowWidth - 243, windowHeight - 389); // top left of light magenta rectangle below brown 
  vertex(windowWidth - 102, windowHeight - 450); // top right of light magenta rectangle below brown 
  vertex(windowWidth- 97, windowHeight - 439); // bottom right of light magenta rectangle below brown 
  vertex(windowWidth - 239, windowHeight - 377); // bottom left of light magenta rectangle below brown 
  endShape(CLOSE);

  fill('#8d99ae');
  beginShape(); // long blue rectangle above brown rectnagle
  vertex(windowWidth - 210, windowHeight - 295); // top left of long blue rectangle above brown rectangle
  vertex(windowWidth - 50, windowHeight - 456); // top right of long blue rectangle above brown rectangle
  vertex(windowWidth - 35, windowHeight - 440); // bottom right of long blue rectangle above brown rectangle
  vertex(windowWidth - 195, windowHeight - 277); // bottom left of long blue rectangle above brown rectangle
  endShape(CLOSE);

  fill('#e9c46a');
  beginShape(); // yellow rectangle
  vertex(windowWidth - 120, windowHeight - 371); // top left of yellow rectangle
  vertex(windowWidth - 80, windowHeight - 412); // top right of yellow rectangle
  vertex(windowWidth - 55, windowHeight - 389); // bottom right of yellow rectangle
  vertex(windowWidth - 96, windowHeight - 347); // bottom left of yellow rectangle
  endShape(CLOSE);
  
  fill('#904532ff');
  beginShape(); //thin brown rectangle
  vertex(windowWidth - 216, windowHeight - 270); // top left of thin brown rectangle
  vertex(windowWidth - 115, windowHeight - 375); // top right of thin brown rectangle
  vertex(windowWidth - 105, windowHeight - 365); // bottom right of thin brown rectangle
  vertex(windowWidth - 207, windowHeight - 261); // bottom left of thin brown rectangle
  endShape(CLOSE);

  fill('#b5838d');
  beginShape(); // purple rectangle crossed with brown 'line'
  vertex(windowWidth - 400, windowHeight - 228); // top left of thin purple rectangle crossed with brown 'line'
  vertex(windowWidth - 312, windowHeight - 173); // top right of purple rectangle crossed with brown 'line'
  vertex(windowWidth - 317, windowHeight - 165); // bottom right of purple rectangle crossed with brown 'line'
  vertex(windowWidth - 405, windowHeight - 220); // bottom left of purple rectangle crossed with brown 'line'
  endShape(CLOSE);

  fill('#7f5539');
  beginShape(); // thin brown rectangle crossed with purple 'line'
  vertex(windowWidth - 390, windowHeight - 165); // top left of thin brown rectangle crossed with purple 'line'
  vertex(windowWidth - 325, windowHeight - 260); // top right of thin brown rectangle crossed with purple 'line'
  vertex(windowWidth - 315, windowHeight - 253); // bottom right of thin brown rectangle crossed with purple 'line'
  vertex(windowWidth - 382, windowHeight - 160); // bottom left of thin brown rectangle crossed with purple 'line'
  endShape(CLOSE);

  fill('#6a994e');
  beginShape(); //green rectangle floating on crossed 'lines'
  vertex(windowWidth - 380, windowHeight - 241); // top left of green rectangle floating on crossed 'lines'
  vertex(windowWidth - 350, windowHeight - 222); // top right of green rectangle floating on crossed 'lines'
  vertex(windowWidth - 363, windowHeight - 205); // bottom right of green rectangle floating on crossed 'lines'
  vertex(windowWidth - 392, windowHeight - 223); // bottom left of green rectangle floating on crossed 'lines'
  endShape(CLOSE);

  fill("rgba(135, 109, 18, 0.6)");
  beginShape(); // square positioned in bottom left
  vertex(windowWidth - 455, windowHeight - 90); // top left of square positioned in bottom left
  vertex(windowWidth - 425, windowHeight - 90); // top right square positioned in bottom left
  vertex(windowWidth - 425, windowHeight - 60); // bottom right square positioned in bottom left
  vertex(windowWidth - 455, windowHeight - 60); // bottom left square positioned in bottom left
  endShape(CLOSE);

  fill("#dda15e");
  beginShape(); //small orange 'line' below circle
  vertex(windowWidth - 256, windowHeight - 86); // top left of small orange 'line' below circle
  vertex(windowWidth - 207, windowHeight - 70); // top right of small orange 'line' below circle
  vertex(windowWidth - 210, windowHeight - 62); // bottom right of small orange 'line' below circle
  vertex(windowWidth - 260, windowHeight - 78); // bottom left of small orange 'line' below circle
  endShape(CLOSE);

  fill('#b5838d');
  beginShape(); //long pink line below circle
  vertex(windowWidth - 233, windowHeight - 70); // top left of long pink line below circle
  vertex(windowWidth - 77, windowHeight - 20); // top right of long pink line below circle
  vertex(windowWidth - 80, windowHeight - 10); // bottom right of long pink line below circle
  vertex(windowWidth - 237, windowHeight - 61); // bottom left of long pink line below circle
  endShape(CLOSE);
} 
// Reflection - 
  // 1. I should have chosen the line shape and adjusted
  // the stroke weight for the thin rectangles.

  // 2. Halfway through creating the shapes, I used the 
  // "windowWidth" and "windowHeight" calculations from the Canvas frame
  // which affected future calcluations. Thankfully, the arrangements weren't
  // too drastic where this could be done. For example the original canvas
  // "windowWidth" was 500. 

  // 3. I went through the color resources provided from your website and really as
  // I find colors very powerful. Through this assignment I took a screenshot of the
  // final picture, which included all the shapes, into ChatGPT and asked to provide
  // different themes for overall color cohesiveness. Although the response recognized
  // each shape/color, the output only provided a limited amount of hex colors, so manually
  // picked colors I thought still matched the overall vibe. 

  // 4. As I mostly filled in the shapes, I realize the canvasFrame was not to my liking
  // as you can notice the minimal 'white' space at the bottom. I was unsure
  // how to add more to just that, in addition to scaling the entire shapes/image collectively.
