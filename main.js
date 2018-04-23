var myFont;
function preload() {
  myFont = loadFont('fonts/Press_Start_2P/PressStart2P-Regular.ttf');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  clear();
  zIndex="6";
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw () {

  createCanvas( (windowWidth), (windowHeight/2.9));
  fill(0,(128 + sin(frameCount*0.1) * 128),0);
  textAlign(CENTER);
  textSize(70);
  textFont(myFont);
  text('INSERT MORE TIME', (windowWidth/2), (windowHeight/3));

  // fill (0,0,0)
  // textSize(72);
  // text('INSERT MORE TIME', (windowWidth/4.5), (windowHeight/3));

}
