let w = 400;
let g = 35; 
let ea = 0;
let h = 180;

function setup() {
  createCanvas(w, w);
   colorMode(HSB); // 360 100 100
}

function draw() {
  background(0)
  strokeWeight(g);
  stroke (g);
  colorMode(HSB);
  stroke(h, 80, 80, 1);
  h = (h + 0.5) % 360; // modulo 360
  
// Letra M
  line(50,50,50,350);
  line(350,350,350,50);
  line (350, 50, w/2, w/2 + ea);
  line (50, 50, w/2, w/2 + ea);
  
// Letra V
  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(g);
  stroke (g)
  stroke(252, 252, 252, 1);
  line (50, 50, w/2, 350+ ea);
  line (350, 50, w/2, 350+ ea);
  

  stroke (g);
  strokeWeight(5);

// Linea interior
  line(50,50,50,350);
  line(350,350,350,50);
  line (350, 50, w/2, w/2 + ea);
  line (50, 50, w/2, w/2 + ea);
  line (50, 50, w/2, 350 + ea);
  line (350, 50, w/2, 350 + ea);
  
  }

function keyTyped(){
  g = random(10,64);
  d = random(w/4,w/2);
  ea = random(-w/4,30);
  //h = random(360);
}