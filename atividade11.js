prompt = require ('prompt-sync') ();

do {
  nota= Number (prompt ('Digite a nota, entre 0 a 10: '));
  if (nota < 0 || nota > 10) {
    console.log ('Nota inválida!');
  }
} while (nota < 0 || nota > 10) {
    console.log ('Nota válida!');
  }