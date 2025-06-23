const prompt = require('prompt-sync')();

let lado = Number(prompt("Digite o lado do retângulo (entre 1 e 20): "));
let altura = Number(prompt("Digite a altura do retângulo (entre 1 e 20): "));

function imprimirRetangulo(lado, altura) {
  if (lado < 1 || lado > 20 || altura < 1 || altura > 20) {
    console.log("O lado e a altura devem ser números entre 1 e 20.");
    return;
  }

  const linhaCheia = "*".repeat(lado);
  const linhaMeio = lado > 1 ? "*" + " ".repeat(lado - 2) + "*" : "*";

  console.log (" ")
  console.log(linhaCheia);


  for (let i = 0; i < altura - 2; i++) {
    console.log(linhaMeio);
  }


  if (altura > 1) {
    console.log(linhaCheia);
  }
}

imprimirRetangulo(lado, altura);