function setup() {
  createCanvas(windowWidth = 510, windowHeight = 630);
  background ('#efe3caff');
}

function draw() {
  
  noStroke();
  fill('#d2a679');
  beginShape(); // large triangle in the center position
  vertex(windowWidth - 350, windowHeight - 130); //leftmost coordinate
  vertex(windowWidth - 350, windowHeight - 530); //topright coordinate
  vertex(windowWidth - 80, windowHeight - 230); //bottom-most coordinate
  endShape(CLOSE);

  fill('#52796f');
  circle(windowWidth - 150, windowHeight - 150, 150); // circle position below triangle

  fill('#6a899aff')
  beginShape();
  vertex(windowWidth - 360, windowHeight - 480); //top blue diamond
  vertex(windowWidth - 330, windowHeight - 440); //right blue diamond 
  vertex(windowWidth - 370, windowHeight - 410); // bottom blue diamond
  vertex(windowWidth - 400, windowHeight - 450); // left blue diamond
  endShape(CLOSE);

  fill('#354f52');
  beginShape();
  vertex(windowWidth - 435, windowHeight - 385); //top left green rectangle
  vertex(windowWidth - 250, windowHeight - 456); //top right green rectangle
  vertex(windowWidth - 225, windowHeight - 395); //bottom right green rectangle
  vertex(windowWidth - 414, windowHeight - 325); //bottom left green rectangle
  endShape(CLOSE);

  fill('#bc4b51');
  beginShape();
  vertex(windowWidth - 315, windowHeight - 380); // top left red square
  vertex(windowWidth - 290, windowHeight - 390); // top right red square
  vertex(windowWidth - 278, windowHeight - 360); // bottom right red square
  vertex(windowWidth - 305, windowHeight - 350); // bottom left red square
  endShape(CLOSE);

  fill('#7f5539');
  beginShape();
  vertex(windowWidth - 229, windowHeight - 402); // top left of light blue rectangle
  vertex(windowWidth - 188, windowHeight - 420); // top right of light blue rectangle
  vertex(windowWidth - 185, windowHeight - 412); // bottom right of light blue rectangle
  vertex(windowWidth - 226, windowHeight - 394); // bottom left of light blue rectangle
  endShape(CLOSE);

  fill('#b5838d');
  beginShape();
  vertex(windowWidth - 243, windowHeight - 389); // top left of dark blue rectangle
  vertex(windowWidth - 102, windowHeight - 450); // top right of dark blue rectangle
  vertex(windowWidth- 97, windowHeight - 439); // bottom right of dark blue rectangle
  vertex(windowWidth - 239, windowHeight - 377); // bottom left of dark blue rectangle
  endShape(CLOSE);

  fill('#8d99ae');
  beginShape();
  vertex(windowWidth - 210, windowHeight - 295); // top left of brownish rectangle
  vertex(windowWidth - 50, windowHeight - 456); // top right of brownish rectangle
  vertex(windowWidth - 35, windowHeight - 440); // bottom right of brownish rectangle
  vertex(windowWidth - 195, windowHeight - 277); // bottom left of brownish rectangle
  endShape(CLOSE);

  fill('#e9c46a');
  beginShape();
  vertex(windowWidth - 120, windowHeight - 371); // top left of yellow rectangle
  vertex(windowWidth - 80, windowHeight - 412); // top right of yellow rectangle
  vertex(windowWidth - 55, windowHeight - 389); // bottom right of yellow rectangle
  vertex(windowWidth - 96, windowHeight - 347); // bottom left of yellow rectangle
  endShape(CLOSE);
  
  fill('#904532ff');
  beginShape();
  vertex(windowWidth - 216, windowHeight - 270); // top left of grey rectangle
  vertex(windowWidth - 115, windowHeight - 375); // top right of grey rectangle
  vertex(windowWidth - 105, windowHeight - 365); // bottom right of grey rectangle
  vertex(windowWidth - 207, windowHeight - 261); // bottom left of grey rectangle
  endShape(CLOSE);

  fill('#b5838d');
  beginShape();
  vertex(windowWidth - 400, windowHeight - 228); // top left of purple rectangle
  vertex(windowWidth - 312, windowHeight - 173); // top right of purple rectangle
  vertex(windowWidth - 317, windowHeight - 165); // bottom right of purple rectangle
  vertex(windowWidth - 405, windowHeight - 220); // bottom left of purple rectangle
  endShape(CLOSE);

  fill('#7f5539');
  beginShape();
  vertex(windowWidth - 390, windowHeight - 165); // top left of orange rectangle
  vertex(windowWidth - 325, windowHeight - 260); // top right of orange rectangle
  vertex(windowWidth - 315, windowHeight - 253); // bottom right of orange rectangle
  vertex(windowWidth - 382, windowHeight - 160); // bottom left or orange rectangle
  endShape(CLOSE);

  fill('#6a994e');
  beginShape();
  vertex(windowWidth - 380, windowHeight - 241); // top left of magenta rectangle
  vertex(windowWidth - 350, windowHeight - 222); // top right of magenta rectangle
  vertex(windowWidth - 363, windowHeight - 205); // bottom right of magenta rectangle
  vertex(windowWidth - 392, windowHeight - 223); // bottom left of magenta rectangle
  endShape(CLOSE);

  fill("rgba(135, 109, 18, 0.6)");
  beginShape();
  vertex(windowWidth - 455, windowHeight - 90); // top left of black square
  vertex(windowWidth - 425, windowHeight - 90); // top right of black square
  vertex(windowWidth - 425, windowHeight - 60); // bottom right of black square
  vertex(windowWidth - 455, windowHeight - 60); // bottom left of black square
  endShape(CLOSE);

  fill("#dda15e");
  beginShape();
  vertex(windowWidth - 256, windowHeight - 86); // top left of hotpink rectangle
  vertex(windowWidth - 207, windowHeight - 70); // top right of hotpink rectangle
  vertex(windowWidth - 210, windowHeight - 62); // bottom right of hotpink rectangle
  vertex(windowWidth - 260, windowHeight - 78); // bottom left of hotpink rectangle
  endShape(CLOSE);

  fill('#b5838d');
  beginShape();
  vertex(windowWidth - 233, windowHeight - 70); // top left of teal rectangle
  vertex(windowWidth - 77, windowHeight - 20); // top right of teal rectangle
  vertex(windowWidth - 80, windowHeight - 10); // bottom right of teal retangle
  vertex(windowWidth - 237, windowHeight - 61); // bottom left of teal rectangle
  endShape(CLOSE);

}
