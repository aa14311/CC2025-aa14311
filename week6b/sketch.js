let circles=[]
let delay = 5000


function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 1; i <= 5; i++){
    circles.push({
    x: (i*100),
    y: 0,
    lastDropTime: 0,
    speed: i+2,
    radius: 40
  });
  }
  /*
  circles.push({
    x: width/3,
    y: 0,
    lastDropTime: 0,
    speed: 3,
    radius: 40
  });
  circles.push({
    x: width/2,
    y: 0,
    lastDropTime: 0,
    speed: 2,
    radius: 40
  }); */
} 

function draw() {
  background('#dda8a8ff');
  let m = millis();
  let min = minute();

  for(let i = 0; i < circles.length; i++){
    let circleData = circles[i];
    circleData.y += circleData.speed;
    if(m-circleData.lastDropTime > delay){
      circleData.y = 0;
      circleData.lastDropTime = m;
    }
    let drawy = circleData.y;
    let radius = circleData.radius;
    radius += sin(m/200)*10;
    circle(circleData.x, drawy, radius);

  }


}
