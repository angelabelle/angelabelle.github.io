var words =["cup","butter","hello","too"];
var index = 0;

function setup() {
createCanvas(400,400);
}

function draw() {
background (255);
fill (0);
textSize(32);
text (words[index], 40, 100);
}

function mousePressed () {
  index = index + 1;

  if (index == words.length) {
    index = 0 ;
  }
}
