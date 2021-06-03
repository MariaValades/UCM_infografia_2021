let w = 600;
let n = 19;
let m = w/n
let numberC = n/2;

function setup() {
  createCanvas(w, w);
  colorMode(HSB); //  -> H 0-360  S 0-100, B 0-100
  angleMode(DEGREES);
}

function draw() {
  background(0,0,100); 

// for(let i = 0; i<n; i++) { 

// line (0, i*m, w, i*m);
// line (i*m, 0, i*m, w);

//  }
  
  
  for(let counter=0;counter<numberC;counter++){
    drawC(counter);
    drawReverseC(counter+1);
    counter++;

  }
  
 }


function drawReverseC(num){
  let endPoint = n - (num + 1);
    //Palo vertical
           for(let fila = num; fila<endPoint; fila++) {
            fill (0, 0, 0);
            square (endPoint*m,fila*m, m);
    }
 //Palo horizontal superior
          for(let col=endPoint; col>numberC;col--){
             fill (0, 0, 0);
            square (col*m,num*m, m);
  }
 //Palo horizontal inferior
          for(let col=endPoint; col >numberC;col--){
             fill (0, 0, 0);
            square (col*m,endPoint*m, m);
  }
}

function drawC(num){
  let endPoint = n -(num + 1);
//Palo vertical
           for(let fila = num; fila<endPoint; fila++) {
            fill (0, 0, 0);
            square (num*m,fila*m, m);
    }
//Palo horizontal superior
          for(let col=num; col <numberC;col++){
             fill (0, 0, 0);
            square (col*m,num*m, m);
  }
//Palo horizontal inferior
          for(let col=num; col <numberC;col++){
             fill (0, 0, 0);
            square (col*m,endPoint*m, m);
  }
}