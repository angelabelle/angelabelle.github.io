let saveButton;
let wordInput;
let definitonInput;

function setup () {
  createCanvas(500,500);
  frameRate(2);

  wordInput = select("#word");
  definitonInput = select("#definition");

  saveButton = createButton ("SAVE")
  saveButton.mousePressed(saveDefinition)


}

function saveDefinition(){
  console.log("saving definition");
  createP(wordInput.value() + " is surf for " + definitonInput.value());
}

function draw () {
  textSize (30);
  text(wordInput.value(), random(width), random(height));

}
