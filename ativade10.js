prompt = require ('prompt-sync') ();

quantasHoras= Number (prompt ('Digite a quantidade de horas que permaneceu ligado: '));
quantoValeHora= Number (prompt ('Digite qual o valor do quilowatt (por hora): '));
taxaConsumo = Number(prompt('digite a taxa de consumo: '));

valorAPagar= quantasHoras * quantoValeHora;
energiaTotalGasta = taxaConsumo * quantasHoras;

console.log ('O valor a pagar é: ', valorAPagar.toFixed(2));
console.log ('A energia total gasta é: ', energiaTotalGasta.toFixed(2));