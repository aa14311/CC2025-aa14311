

function setup() { // runs once at the start
  createCanvas(500,620);
  // added dimensions to fit the size of the original image
  background ('rgba(81, 223, 81, 0.25)'); // added green color to background 
  // createCanvas is a function that creates a canvas for our p5.js
  // sketch to draw into. it takes two parameters,  width and height.
  // windowWidth and windowHeight are used to set the size to the full
  // size of our browser window. 
}

function draw() { // runs in a loop after setup 
  fill('rgba(98, 161, 188, 0.25)');
  triangle(100, 450, 430, 350, 140, 100);
  
  fill('rgba(222, 120, 86, 0.25)');
  circle(340,430,150);

  fill('rgba(190, 40, 40, 0.25)');
  translate(255,210);
  rotate(40);
  square(50,90,60); // parameters for square to align w/ original picture
  
  fill('rgba(17, 87, 9, 0.25)');
  rotate(9.9); 
  rect(-190,-30,200,50);
  
  fill('rgba(216, 223, 11, 0.25)');
  rotate(2.8); 
  rect(-90,-30,100,8);

  fill('rgba(157, 163, 32, 0.89)');
  rotate(3.15); 
  rect(7,15,26,5);

  fill('rgba(113, 12, 12, 0.6)');
  rotate(2.9); 
  rect(-140,-100,210,15);

  fill('rgba(0, 0, 0, 0.6)');
  rotate(3.14); 
  rect(-90,100,120,10);

  fill('rgba(119, 130, 88, 0.65)');
  rotate(3.14); 
  rect(-80,-130,60,40);

  fill('rgba(183, 127, 127, 0.6)');
  rotate(8.4); 
  rect(-30,-90,30,25);

  fill('rgba(210, 47, 212, 0.6)');
  rotate(8.8); 
  rect(-90,240,90,7);

  fill('rgba(103, 15, 105, 0.6)');
  rotate(1.64); 
  rect(170,20,120,7);

  fill('rgba(8, 212, 226, 0.6)');
  rotate(4.65); 
  rect(-66,221,25,20);

  fill('rgba(0, 0, 0, 0.6)');
  rotate(1.01);
  square(300,210,20);

  fill('rgba(64, 113, 110, 0.6)');
  rotate(5.2); 
  rect(100,260,50,7);

  fill('rgba(58, 17, 182, 0.82)');
  rotate(6.29); 
  rect(126,267,170,7);
}
