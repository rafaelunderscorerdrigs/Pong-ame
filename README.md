}

function mostrarRaquete(){
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura)}

function movimentaMinhaRaquete(){

if (keyIsDown(UP_ARROW)){
yRaquete -= 10;
}
if (keyIsDown(DOWN_ARROW)){
yRaquete += 10;

}
}

function verificaColisaoRaquete(){
if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura  && yBolinha + raio > yRaquete) {
velocidadexBolinha *=-1;
}
}

function colisaoMinhaRaqueteBiblioteca(){
  colidiu = 
collideRectCircle (xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
velocidadexBolinha *= -1;

}
}

