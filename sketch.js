function somarNumeros(){
  let numero1 = 10;
  let numero2 = 60;
  let resultado = numero1+ numero2;
  console.log(resultado);
  texto = 'o resultado dessa soma é: ' + resultado;
  textSize(25);
  fill("salmon")
  text(texto,5,10,350,150);
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  somarNumeros();
}
