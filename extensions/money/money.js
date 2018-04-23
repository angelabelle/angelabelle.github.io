console.log('money money money');

let filenames = [
"bills.png",
"fallingmoney.png",
"hundreds.png",
"moneybag.png"
];

let imgs = document.getElementsByTagName('img');

for (imgElt of imgs) {
  let r = Math.floor(Math.random() * filenames.length);
  let file = 'images/' + filenames[r];
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  console.log(url);
}


// var s = function(sketch) {
//
//   sketch.setup = function() {
//     document.body.style['userSelect'] = 'none';
//     let h = document.body.clientHeight;
//     let c = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
//     c.position(0, 0);
//     c.style('pointer-events', 'none');
//     sketch.clear();
//   }
//
//   sketch.draw = function() {
//     sketch.stroke(0);
//     sketch.strokeWeight(4);
//     if (sketch.mouseIsPressed) {
//       sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
//     }
//   }
// };
//
// var myp5 = new p5(s);
