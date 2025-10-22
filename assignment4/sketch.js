//Assignment 4: Object Factory - I chose a flower as my object
//and it changes per click with # of petals, color, and size. The
//composition in the code closely follows to your Pizza recording.

//updated to an arry to account for multiple flowers.
let myFlowers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#e6cacaff');
  //for loop with .length and [i] to account for every element in the array to
  //display in conjunction with the myFlowers.push in mousePressed below.
  for(let i = 0; i < myFlowers.length; i++){
    myFlowers[i].display();
  }
}

function mousePressed(){
  //flowerSize was added as my 3rd dynamic change per click and set
  //the parameters to the following sizes so the range of # of petals
  //look aesthetic to each size (vice versa).
  let flowerSize = random([.5, .75, 1, 1.25, 1.5]);
  let tempFlower = new Flower(mouseX, mouseY,200,2,random(10,20),flowerSize);
  myFlowers.push(tempFlower);
}
//class Flower was added after moving my static drawing and variables originally
//from the draw and setup functions into an object oriented manner as they group
//variables and functions needed for the dynamic/addition of flowers per click.
//I followed your pizza recording to get the main composition of the code below
//including the constructor, variables, arrays, and for loop. 

//additional declaration of arrays were added to account for the dynamic changes
//with petalColor and flowerSize (in addition to # of petals). I originally set the
//colors with darker tones, but liked the overall composition of the bigger range in
//colors with the background set with the slight opacity setting. 
class Flower {
  constructor(x,y,width,height,numberOfPetals,flowerSize){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.numberOfPetals = numberOfPetals;
    this.petalPosition = [];
    this.petalRotation = [];
    this.petalColor = color(random(25, 255), random(25, 255), random(25, 255), 235);
    this.flowerSize = flowerSize;

    //Like in your recording, the "360/" in spacing to account for the circular shape
    //of the ellipses to represent a flower/petals. Since ellipses have
    ///width and height variables, I liked the size of the "/4" division
    //to my desired size in conjunction with # of petals.

    //"flowerSize" variable was added as a multiplier last to get my 3rd dynamic
    //change per click. petalRotation was also added to have the ellipses/petals
    //face outwards. 
    for(let i = 0; i<this.numberOfPetals; i++){
      let spacing = 360/this.numberOfPetals;
      let petalX = cos(radians(i*spacing))*((this.width/4) * (this.height/4)) * this.flowerSize;
      let petalY = sin(radians(i*spacing))*((this.width/4) * (this.height/4)) * this.flowerSize;
      let newVector = createVector(petalX, petalY);
      this.petalRotation.push(radians(i*spacing));
      this.petalPosition.push(newVector);
    }
  }

//moved the petals originally written in the draw function and added the static stem
//and leaves with the push and pop to anchor. 
display(){

  //stem - liked the different green color in contrast with the leaves. Also used
  //the translate for positioning and rotate for the slight upward facing of leaves.
  push();
  translate(this.x,this.y);
  stroke('#11a616ff');
  strokeWeight(5);
  line(0,this.height*10,0,100);

  //leaf
  push();
  fill('#167a1aff');
  translate(5,25);
  rotate(PI/8);
  noStroke();
  ellipse(11,this.height*30,20,8);
  pop(); 

  //leaf2
  push();
  fill('#167a1aff');
  translate(-25,15);
  rotate(-PI/8);
  noStroke();
  ellipse(11,this.height*30,20,8);
  pop();

  //leaf3
  push();
  fill('#167a1aff');
  translate(5,-10);
  rotate(PI/8);
  noStroke();
  ellipse(11,this.height*30,20,8);
  pop();

  //Again similar to your example, the for loop originally from the draw function to
  //the display function to add number of petals and pulling the x and y
  //coordinates and rotation stored in the for loop now in the class function.
  //Rotation was added so the ellipses face outwards from the center.
  for(let i = 0; i<this.numberOfPetals; i++){
    push();
    fill(this.petalColor);
    noStroke();
    translate(this.petalPosition[i].x, this.petalPosition[i].y);
    rotate(this.petalRotation[i]);
    ellipse(0,0,30,13);
    pop();
    }
    pop();
  }
}