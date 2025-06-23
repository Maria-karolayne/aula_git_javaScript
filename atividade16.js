prompt = require('prompt-sync')();

let numero = prompt ("Digite um número entre 1 e 10:");


numero = parseInt(numero);

if (numero != Number(numero) || numero < 1 || numero > 10) {
  console.log("Número inválido. Digite um número inteiro entre 1 e 10.");
} else {
  console.log(`Tabuada de ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}