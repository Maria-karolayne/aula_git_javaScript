const entrada = require('prompt-sync')({sigint: true});

let salario = Number(entrada("Informe o seu salário R$ "));


if (salario <= 280){
  salario20 = ((salario * (20/100)) + salario);
  console.log(`O seu salário antigo era R$${salario}, o atual é R$${salario20}`);
} else if (salario > 280 && salario <= 700){
  salario15 = ((salario * (15/100)) + salario);

  console.log(`O seu salário antigo era R$${salario}, o atual é R$${salario15}`);
} else if (salario > 700 && salario <= 1500){
  salario10 = ((salario * (10/100)) + salario);

  console.log(`O seu salário antigo era R$${salario}, o atual é R$${salario10}`);
} else if (salario > 1500){
  salario5 = ((salario * (5/100)) + salario);

  console.log(`O seu salário antigo era R$${salario}, o atual é R$${salario5}`);
}