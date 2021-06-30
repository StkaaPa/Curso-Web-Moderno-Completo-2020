const alunos = [
  { nome: "João", nota: 7.9 },
  { nome: "Maria", nota: 9.2 },
];

//TODO: CALCULAR A MEDIA DAS NOTAS

//* Forma Imperativa
/*
* é uma forma mais detalhada
* o foco desta forma é como é feito e não o que vai fazer
*/
let total1 = 0;
for (var i = 0; i < alunos.length; i++) {
  total1 += alunos[i].nota;
}
console.log(total1 / alunos.length);
// -> 8.55 media


//* FORMA DECLARATIVA
/*
*  simplesmente diz o que tem que ser feito, e as coisas são feitas internamente
* dá para reusar as funções noutra parte do código
*/
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)
// -> 8.55

