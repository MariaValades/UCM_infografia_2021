let w = 600;
let n = 19;
let m = w/n
let h = 180;
let g = 0;
let gn = n;
let a= 0;
let t= 0;

function setup() {
  createCanvas(w, w);
  colorMode(HSB); //  -> H 0-360  S 0-100, B 0-100
  
}

function draw() {

  background(100); 
  noStroke();
  fill(h, 80, 80, 1);
  h = (h + 0.5) % 360; 

  // ratón
  rectMode(RADIUS);
  a = map(mouseX, 0, w, 0, m);

// crece y decrece + rotaciónNo sé
 for(let x = 0; x<n; x++) {
   for(let y=0;y<n;y++){
     let xc = x*m;
     let yc = y*m;
     push ();
     translate (xc, yc);
     rotate (a);
     let z = noise(t + x,y);
   
    if(g <= n){
      square (0,0, g*z);
    }else if(g > n){
      square (0,0, gn*z);
      

    }
    pop ();
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
  t+= 0.01;
}
