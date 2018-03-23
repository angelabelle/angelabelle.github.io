var nums= [100,24,46,72];

function setup() {
createCanvas(500,400);
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  for (i=0; i < 4; i++)
  ellipse (i*100+100,200,nums[i],nums[i]);

}
