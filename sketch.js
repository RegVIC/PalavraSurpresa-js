let cor;
let palavra;

function setup() {
  createCanvas(600, 600);
  cor = color(random(0, 255), random(0, 255), random(0, 255));

  palavra = palavraAleatoria();
  
}

function palavraAleatoria(){
  
  let palavras = ["sono", "pijama", "sonho", "pesadelo"];
  return random(palavras);
  
}

function iniciarCores() {
  background("white");
  fill(cor);
  textSize(65);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo,maximo){
  
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
  
}

function draw() {
  iniciarCores();

  let maximo = width -= 1;
  let minimo = 0;
  
  let texto = palavraParcial(0,width);
  text(texto, 300, 200);
  
}
