prompt = require('prompt-sync')()

temperaturaFahrenheit = Number(prompt('Digite a temperatura em Fahrenheit: '))

fahrenheitParaCelsius = (temperaturaFahrenheit - 32) * 5 / 9

console.log ('A temperatura em Celsius é: ', fahrenheitParaCelsius.toFixed(2))

console.log ('--------------------------------------------------------------') // Para separar os pedidos

quantidadeDeChuva = Number(prompt('Digite a quantidade de chuva em polegadas: '))

polegadasParaMilimetros = quantidadeDeChuva * 25.4

console.log ('A quantidade de chuva em milimetros é: ', polegadasParaMilimetros.toFixed(2))