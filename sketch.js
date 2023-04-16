//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//velocidae da Bolinha
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//dimensões da Bolinha
function setup() {
createCanvas(600, 400);
}

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let colidiu = false;

//desenho
function draw() {
background(0);
mostraBolinha();
  movimentoBolinha();
  verificaColisaoBorda();
  mostrarRaquete();
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  colisaoMinhaRaqueteBiblioteca();

}


function mostraBolinha(){
    circle(xBolinha,yBolinha,diametro);

}

function movimentoBolinha(){
  xBolinha = xBolinha + velocidadexBolinha;
  yBolinha += velocidadeyBolinha;

}

function verificaColisaoBorda(){
  if (xBolinha + raio > width ||
xBolinha - raio < 0) {
velocidadexBolinha *= -1;
}

  if (yBolinha + raio > height ||
yBolinha - raio < 0) {
velocidadeyBolinha *= -1;
}

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

