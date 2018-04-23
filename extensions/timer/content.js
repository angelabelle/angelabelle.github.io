console.log('sketch is working');
var counter = 0;
var timeleft= 10;

function convertSeconds(s) {
  var min = floor (s / 60);
  var sec = s % 60;
  return nf(min,2) + ':'+ nf(sec,2);
}


function setup () {
  noCanvas ();
var timer = select('title');
timer.html(convertSeconds (timeleft - counter));



function timeIt () {
  counter++;
  timer.html(convertSeconds (timeleft - counter));
  if (counter == timeleft) {
    clearInterval(interval);
    counter = 0;
    createCanvas(500, 500);
    background (0);
  }
}

var interval = setInterval (timeIt,1000);

}
