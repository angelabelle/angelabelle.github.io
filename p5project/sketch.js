

function setup() {
createCanvas(windowWidth,windowHeight);

}

function draw() {
	background (random(0,255),10,30,50);
	fill (random(200,255),255,255,50);
	stroke (0);
	triangle( mouseX,mouseY,random((windowWidth-mouseX),(windowHeight-mouseY)),random(0,255),random(0,255),random(0,255),);

}


// write functions here


//this will log the mouse coordinate
//console.log(mouseX);

//this will create random triangles, will use this for project
//triangle( mouseX,mouseY,random((windowWidth-mouseX),(windowHeight-mouseY)),random(0,255),random(0,255),random(0,255),);
