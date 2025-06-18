prompt= require ("prompt-sync") ();



cotacao= Number(prompt("Digite valor da cotação do dolar:"))
dolar= Number(prompt("Digite valor em dolar:" ))

real = cotacao * dolar

console.log('Valor em real:' , real)
