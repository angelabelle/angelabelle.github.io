console.log('sketch is working');


var s = function(sketch) {
let piles =[];
let money;


 sketch.preload = function() {
  money = sketch.loadImage(chrome.extension.getURL("fallingmoney.png"));
}


  sketch.setup = function() {
    document.body.style['userSelect'] = 'none';
    let h = document.body.clientHeight;
    let c = sketch.createCanvas(document.body.clientWidth, document.body.clientHeight);
    c.position(0, 0);
    // noCursor();
    c.style('pointer-events: none;');
    sketch.clear();
  }



  sketch.draw = function() {

    sketch.mouseMoved = function() {
      for (i = 0; i < 100; i++)
    sketch.image(money, sketch.mousePosX, money.height/3, money.height/3);
    }


  }

  // sketch.mouseWheel = function() {
  //   //move the square according to the vertical scroll amount
  //   //uncomment to block page scrolling
  //   return false;
  // }

};

var myp5 = new p5(s);
