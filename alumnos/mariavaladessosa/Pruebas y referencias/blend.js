function setup() {
  createCanvas(400, 400);
}

function draw() {
  blendMode (BLEND); //por defecto
  background(225);
  
  blendMode (MULTIPLY);
  stroke(200,0,0); // color linea
  strokeWeight(48); // grososr de la linea
  line(0,0,400,400);
  
  stroke (0,0,200);
  line (400,0,0,400);
}