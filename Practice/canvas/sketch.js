function setup() {
  createCanvas(500, 500);
  background(200);
}

function draw() {
  // check to see if a key is pressed AND then check for what key is pressed
  if (keyIsPressed === true) {
    // nested if statement checks to see what key is pressed
    if (key === 'a') {
      fill(0);
    } else if (key === 'b') {
      fill(255);
    }
  } else {
    fill(100);
  }

  // draw rectangle
  rect(25, 25, 50, 50);
}
