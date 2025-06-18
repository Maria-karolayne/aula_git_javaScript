entrada= require ("prompt-sync") ();

console.log("Digite apenas números entre 0 e 10" )

let num1= Number(entrada ("Digite a primeira nota:"));
let num2= Number(entrada ("Digite a segunda nota:"));
let num3= Number(entrada ("Digite a terceira nota:"));


media = (num1 + num2 + num3) / 3

console.log("Media final:" ,media) ;