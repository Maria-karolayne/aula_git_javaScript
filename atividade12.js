prompt = require ('prompt-sync') ();

while (true) {
   nome = Number(prompt('Digite um número de usuario: '));
   senha = Number(prompt('Digite a senha de número: '));
   if (nome != senha) {
      break; 
   } else {
      console.log('usuario e senha não podem ser iguais');
   }
} 
console.log(`usuario valido`);
