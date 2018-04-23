
let rectangles =[];

function setup() {
createCanvas(400,400);

}

function mousePressed() {
  console.log(rectangles);
  rectangles.push ({posX: mouseX, posY: mouseY, color: random(255), speed: random(1,5), size: random(200)})
  //this adds to the array with objects
}


function draw() {
background (100,200,100);

for (let i = rectangles.length - 1; i >= 0; i--) {
//going backwards allows it not to skip an array.
  fill(rectangles[i].color);
  rect(rectangles[i].posX, rectangles[i].posY, rectangles[i].size, rectangles[i].size);


  rectangles[i].posY+= rectangles [i].speed;
  //this will allow the object to move

  if (rectangles[i].posY >= height + 200){
    rectangles.splice(i, 1);
    //this gets rid of the rectangles that go off the screen
  }

}
}
