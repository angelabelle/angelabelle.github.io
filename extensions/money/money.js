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

function setup () {
createCanvas(document.body.clientWidth, document.body.clientHeight);
clear();
}
