//* tagged templates = processa o template dentro de uma função
function tag(partes, ...valores) {
  console.log(partes);
  // -> [ '', ' está ', '.' ]
  console.log(valores);
  // -> [ 'Gui', 'Aprovado' ]
  return "Outra String";
}

const aluno = "Gui";
const situacao = "Aprovado";
console.log(tag`${aluno} está ${situacao}.`);
//! se retirar a palavra tag o que é imprimido é 'Gui está Aprovado.'
//! se manter a palavra tag é imprimido 3 coisas
/*
[ '', ' está ', '.' ]
[ 'Gui', 'Aprovado' ]
Outra String
*/
