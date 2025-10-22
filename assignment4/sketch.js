let myFlowers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#f3c5c5ff');
  for(let i = 0; i < myFlowers.length; i++){
    myFlowers[i].display();
  }
}

function mousePressed(){
  let flowerSize = random([.5, 1, 1.5]);
  let tempFlower = new Flower(mouseX, mouseY,200,2,random(8,16),flowerSize);
  myFlowers.push(tempFlower);
}

class Flower {
  constructor(x,y,width,height,numberOfPetals,flowerSize){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.numberOfPetals = numberOfPetals;
    this.petalPosition = [];
    this.petalRotation = [];
    this.petalColor = [];
    this.petalColor = color(random(25, 255), random(25, 255), random(25, 255));
    this.flowerSize = flowerSize;

    for(let i = 0; i<this.numberOfPetals; i++){
      let spacing = 360/this.numberOfPetals;
      let petalX = cos(radians(i*spacing))*((this.width/4) * (this.height/4)) * this.flowerSize;
      let petalY = sin(radians(i*spacing))*((this.width/4) * (this.height/4)) * this.flowerSize;
      let newVector = createVector(petalX, petalY);
      this.petalRotation.push(radians(i*spacing));
      this.petalPosition.push(newVector);
    }
  }

display(){

  //stem
  push();
  translate(this.x,this.y);
  stroke('#167a1aff');
  strokeWeight(4);
  line(0,this.height*6,0,100);

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

  //flower petals 
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