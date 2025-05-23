let x; // criando variavel X
let y; // criando  variavel Y

function setup() {
  createCanvas(400, 400);
  x = random(400); // sorteando número até 400
  x = int(x); // transformando numero para inteiro
  y = random(400);
  y = int(y);
}

function draw(){
  background ("rgb(255,255,255)")
  //circle(x, y, 10); // circulo com coordenadas aleatorias // e diametro 10
  x = x + random(-2,2);
  y = y + random(-2,2);
  x = constrain(x,0,400);
  y = constrain(y,0,400);
  let distanciaX;// cateto
    let distanciaY;//cateto
    let distancia;// hipotenusa
    distanciaX = mouseX - x;
    distanciaY = mouseY - y;
    distancia = sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
    //distancia = dist(mouseX,mouseY, x,y);
  fill ("")  
  circle(mouseX, mouseY, distancia); // circulo com coordenadas aleatorias // e diametro 10
    distancia = dist(mouseX, mouseY, x,y)

  
  if(distancia < 3) { // se posicaoX do mouse for igual a X
    text("Encontrei!", 200, 200); // entao mostrara o texto //"Encontrei!"
    fill(0)
    circle(mouseX,mouseY,distancia)
    
    noLoop()
  
  }
  
if(distancia <  150){
    fill("blue")
    circle(mouseX,mouseY,distancia)
} else if (distancia > 180){
  fill ("purple");
  circle (mouseX, mouseY,distancia);
} else if (distancia > 75){
  fill("orange");
  circle (mouseX, mouseY, distancia); 
} else if (distancia > 15){
  fill ("red")
  circle (mouseX, mouseY, distancia)
  
}
}