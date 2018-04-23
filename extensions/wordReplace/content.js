var s = function(sketch) {
  sketch.setup = function() {

    sketch.createCanvas(document.body.clientWidth, document.body.clientHeight);

    // document.getElementById("button").onclick = function() {
    //   window.location.href = "https://www.dailydot.com/debug/what-is-sesta-fosta-bill/";
    // };

  }
}



var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
  var element = elements[i];

  for (var j = 0; j < element.childNodes.length; j++) {
    var node = element.childNodes[j];

    if (node.nodeType === 3) {
      var text = node.nodeValue;
      var replacedText = text.replace(/s/gi, '$');

      if (replacedText !== text) {
        element.replaceChild(document.createTextNode(replacedText), node);
      }
    }
  }
}
