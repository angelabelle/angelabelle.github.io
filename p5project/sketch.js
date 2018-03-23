
let mask;
let y = 0;
let x = 0;
let speed = 3;
var nums = [1,50,255,5,20,200,100];
var index = 0;

function setup() {
createCanvas(windowWidth,windowHeight);

}

function draw() {
	background (nums[index],random(50,100),random(200,250),50);
	fill (random(155,200),155,170,50);
	stroke (0);
	triangle( mouseX,mouseY,random((windowWidth-mouseX),(windowHeight-mouseY)),random(0,500),random(0,500),random(0,500),);

  rect(30,y, 24, 100);
	fill(170,170,170,10);

	rect(250,y, 10, 400);
	fill(170,170,170,20);

	rect(windowWidth-200,y, 50, 200);
	fill(170,170,170,40);

	rect(windowWidth-250,y, 2, 600);
	fill(170,170,170,10);

	y = y + speed;
	move();

}

function mousePressed () {
  index = index + 1;
  if (index == nums.length) {
    index = 0 ;
  }
}

function move() {
  if (y >= height+20) {
    // if x"position" is equal or greater than the width of the screen, or if position is is less than
    //the beginning of the screen(-200), then reverse the speed (speed = -speed)
    y=0;
  }
}

// write functions here


//this will log the mouse coordinate
//console.log(mouseX);

//this will create random triangles, will use this for project
//triangle( mouseX,mouseY,random((windowWidth-mouseX),(windowHeight-mouseY)),random(0,255),random(0,255),random(0,255),);
