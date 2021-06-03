let w = 600;
let n = 19;
let m = w/n
let h = 180;
let g = 0;
let gn = n;

function setup() {
  createCanvas(w, w);
  colorMode(HSB); //  -> H 0-360  S 0-100, B 0-100
  angleMode(DEGREES);
}

function draw() {
  background(100); 
  noStroke();
  fill(h, 80, 80, 1);
  h = (h + 0.5) % 360; // modulo 360


 for(let x = 0; x<n; x++) {
   for(let y=0;y<n;y++){
   
    if(g <= n){
      square (x*m,y*m, g);
    }else if(g > n){
      square (x*m,y*m, gn);

    }
    
  } 
  if(g < n){
    g+=0.01;
  }else{
    gn-=0.01;
  }
  
  if(g>= n){
    if(gn <=0){
      g = 0;
      gn = n;
    }

  }

  }
}
