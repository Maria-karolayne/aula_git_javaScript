const prompt = require('prompt-sync')();

let data = prompt("Digite uma data (formato DD/MM/AAAA): ");
let separar = data.split("/");

let meses = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
];

let mes = separar[1]; // exemplo: "06"
let NomeMes = meses[Number(mes) - 1]; // meses[5] = "junho"

switch (mes) {
  case '01':
    break;
  case '02':
    break;
  case '03':
    break;
  case '04':
    break;
  case '05':
    break;
  case '06':
    break;
  case '07':
    break;
  case '08':
    break;
  case '09':
    break;
  case '10':
    break;
  case '11':
    break;
  case '12':
    break;
  default:
    console.log("Mês inválido.");
    break;
}

console.log(`${separar[0]} de ${NomeMes} de ${separar[2]}`);