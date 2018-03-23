let mask;
let x = 0;
let speed = 3;
let nums = [0,1,2,3,4]

function preload() {
  mask = loadImage("images/mask.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(0);
  noCursor();


  if (mouseIsPressed === true) {
    background(0);
    image(mask, x, 100, mask.width / 1.5, mask.height / 1.5);
    x = x + speed;
    move();
  }

  for (i=0; i < 100; i++) {
    frameRate = 1;
  ellipse(mouseX+i*random(-1,1), mouseY+i+random(windowHeight), 15, 10);
  fill (255,223,0);
}

}
function move() {
  if (x >= width - 200 || x < 0) {
    // if x"position" is equal or greater than the width of the screen, or if position is is less than
    //the beginning of the screen(-200), then reverse the speed (speed = -speed)
    speed = -speed;
  }
}






//
// let mask;
// let x = 0;
// let speed = 3;
// var value = 0;
//
// function preload() {
//   mask = loadImage("images/mask.png");
// }
//
// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }
//
// function draw() {
//   background(0);
//
//     if (mouseIsPressed === true) {
//       image(mask, x, 100, mask.width / 1.5, mask.height / 1.5);
//       x = x + speed;
//       move();
//     } else if (mouseIsPressed === false) {
//
//     }
//
//
// }
