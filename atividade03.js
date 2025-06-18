prompt= require ("prompt-sync") ();

horasTrabalhadas= Number(prompt("Digite a quantidade de horas trabalhada:"))
valorHora= Number(prompt("Digite quanto ganha a hora :" ))

salario = (horasTrabalhadas * valorHora) - (horasTrabalhadas * valorHora * 0.06)

console.log('salario com desconto:' , salario)
