//global variables added with you during our 1:1 to update
//the seconds block to stop the ticking every second.
let prevMs = 0;
let prevS = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);  
}

function draw() {
  //updated colors back to your color pallette resources in week 3.
  background("#EEE3CB");
  if(second() != prevS){
    //added variables created with you during 1:1, to fix the ticking
    //movement of the seconds block. 
    prevS = second(); // resets the timer 
    prevMs = millis();
  }

  //defined the variables that will represent the abstract clock
  //of floating blocks below
  let h = hour();
  let m = minute();
  let s = second();
  //updated with global variable to get smooth transition of floating block. 
  let ms = millis() - prevMs;

  //millisecondsBlock. Also created with you to represent each second
  //elapsed for the seconds block. I chose the 8 stroke size due to the
  //simplicity of the abstract clock and thought it provided more emphasis
  //and cohesive separation on the moving blocks.
  stroke(8);
  fill("#9BABB8");
  //updated parameters to show each time variable aligning with the page height
  //so they all reset from bottom to top. 
  let msBlock = map((ms), 0, 1000, height, 0);
  //time blocks created with x and y parameters to align with dynamic window
  //size changes. I liked the rectangle height of 80 to represent the proportions
  //to the entire page/canvas size. 
  rect(width * 0, msBlock, width/4, 80);

  //seconds block
  fill("#D7C0AE");
  stroke(8);
  //smooth variable created to avoid the rectangles moving in a ticking manner. Adding
  //both time variables needed for smooth transitions.
  let sSmooth = s + ms / 1000;
  //the youtube video that helped me better understand the map function: https://www.youtube.com/watch?v=nicMAoW6u1g
  let sBlock = map(sSmooth, 0, 60, height, 0);
  rect(width * 0.25, sBlock, width/4, 80);

  //minutes block
  fill("#967E76");
  let mBlock = map(m + s / 60, 0, 60, height, 0);
  rect(width * 0.5, mBlock, width/4, 80);

  //hours block
  fill("#da9f72ff");
  let hBlock = map(h % 12 + m / 60, 0, 12, height, 0);
  rect(width * 0.75, hBlock, width/4, 80);

  //lanes created to distinguish each time block using the same stroke
  //weight and width/height parameters for dynamic window size changes.
  stroke(0);
  strokeWeight(8);
  line(width * 0.25, 0, width * 0.25, height);
  line(width * 0.5, 0, width * 0.5, height);
  line(width * 0.75, 0, width * 0.75, height);

  //text for added display and to show more clearly how the abstract clock
  //functions.
  fill("#000000");
  noStroke();
  textSize(15);
  text('hour: ' + hour(),5,20)
  text('minute: ' + minute(),5,50);
  text('second: ' + second(),5,80);
}