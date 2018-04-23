var speed = [1,40];
var index = 0;

function setup () {
  createCanvas(windowWidth,windowHeight);
  background (0,0,0);
  background (255,255,255);
  textSize(70);
  textAlign (CENTER);
  text('SESSION TIME OUT', (windowWidth/2), (windowHeight/2))
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw () {

  frameRate (speed[index]);
  index = index + 1;
  fill (0,0,0);
  textSize(random(40,200));

  text('SESSION TIME OUT', random(-100,windowWidth), random(-100,windowHeight));
}

setTimeout(function(){location.href="../index.html"} , 20000);
