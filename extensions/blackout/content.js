console.log('blackoutttt');

var s = function(sketch) {
let rectangles =[];


  sketch.setup = function() {
    document.body.style['userSelect'] = 'none';
    let h = document.body.clientHeight;
    let c = sketch.createCanvas(document.body.clientWidth, document.body.clientHeight);
    c.position(0, 0);
    // noCursor();
    c.style('pointer-events: none');
    c.style.zIndex="100";
    sketch.clear();
  }

  sketch.mouseMoved = function() {
    console.log(rectangles);
    rectangles.push ({posX: sketch.random(document.body.clientWidth-50), posY: sketch.random(document.body.clientHeight-50), color: sketch.random(255), speed: sketch.random(1,5), size: sketch.random(50),  size2: sketch.random(50,300)})
    //this adds to the array with objects
  }

  sketch.draw = function() {

for (let i = rectangles.length - 1; i >= 0; i--) {
  sketch.fill(0);
  sketch.rect(rectangles[i].posX, rectangles[i].posY, rectangles[i].size2, rectangles[i].size);
    }
  }

  // sketch.mouseWheel = function() {
  //   //move the square according to the vertical scroll amount
  //   //uncomment to block page scrolling
  //   return false;
  // }

};

var myp5 = new p5(s);
