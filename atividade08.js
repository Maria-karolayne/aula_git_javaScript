prompt =require ('prompt-sync') ()

nome1Pessoa = prompt ('Digite o nome da primeira pessoa: ')
peso1Pessoa = Number (prompt ('Digite o peso da primeira pessoa: '))
idade1Pessoa = Number (prompt ('Digite a idade da primeira pessoa: '))

nome2pessoa = prompt ('Digite o nome da segunda pessoa: ')
peso2pessoa = Number (prompt ('Digite o peso da segunda pessoa: '))
idade2pessoa =Number(prompt ('Digite a idade da segunda pessoa: '))

nome3pessoa = prompt ('Digite o nome da terceira pessoa: ')
peso3pessoa = Number (prompt ('Digite o peso da terceira pessoa: '))
idade3pessoa = Number (prompt ('Digite a idade da terceira pessoa: '))

mediaIdade = (idade1Pessoa + idade2pessoa + idade3pessoa) / 3
mediaPeso= (peso1Pessoa + peso2pessoa + peso3pessoa) / 3

console.log  ('A media de idade é: ', mediaIdade.toFixed(2))
console.log  ('A media de peso é: ', mediaPeso.toFixed(2))