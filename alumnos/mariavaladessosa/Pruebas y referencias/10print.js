let w = 600;
let datos = [];
let n = 5; // num de filas y columnas
let m = w / n;

function setup() {
  createCanvas(w, w);
  colorMode(HSB); //  -> H 0-360  S 0-100, B 0-100
  angleMode(DEGREES);
  
    datos.push(9); // añade un valor al contenedor
  datos.push(23);
  datos.push(45);
datos.push(random(100)); // un num al azar entre 0 y 100
  console.log(datos);
  
}

function draw() {
  background(0,0,90); 
  circle(w/2,w/2, datos[0]); 
  
  
  for(let fila= 0; fila< n; fila++){
        for(col = 0; col<n; col++){
            
         // cada cuadrado
            let x = col*m;
            let y = fila*m;
            // m es el tamaño del cuad
            let index = (fila*n) + col;
            let valor = datos[index];
            
            if(valor == 0){
                line(x,y)
           } else  (x+m, y+m);
                line(x+m, y, x, y+m);
            }
            
        }
    }
  
  

function keyTyped(){
    creaDatos();
  console.log(key);
}

 
function creaDatos(){
    // lanza 25 veces una moneda
    // crea 25 valores
    datos = []; // limpia los datos
    for(let i = 0; i<25; i++){
      datos.push(floor(random(2))); // entre 0 y 2 // floor() -> redondea por defecto

    }
    console.log(datos);
}