prompt= require ("prompt-sync") ();

salarioMensal= Number(prompt("Digite o salario mensal:"))
percentualReajuste= Number(prompt("Digite o percentual de reajuste:" ))

novoSalario = salarioMensal + (salarioMensal * percentualReajuste / 100)

console.log('Novo salario:' , novoSalario)