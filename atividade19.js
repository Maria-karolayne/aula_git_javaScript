const prompt = require('prompt-sync')();

let contador = 0;
let maior = null;

while (contador < 10) {
  let numero = Number(prompt(`Digite o ${contador + 1}º número: `));

  if (!Number.isNaN(numero)) {
    if (maior === null || numero > maior) {
      maior = numero;
    }
    contador++;
  } else {
    console.log("Valor inválido. Por favor, digite um número.");
  }
}

console.log(`\nO maior número digitado foi: ${maior}`);