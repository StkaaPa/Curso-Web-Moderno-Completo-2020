const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Pedro", nota: 9.8, bolsista: false },
  { nome: "Ana", nota: 8.7, bolsista: true },
];

//TODO: Desafio 1: Todos os alunos são balsistas?

const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map((a) => a.bolsista).reduce(todosBolsistas));
// -> false --- os alunos não são todos bolsistas

//TODO: Desafio 2: Algum aluno bolsista?
//* se pelo menos um dos bolsistas for true 
const algumBolsista = (resultado, bolsista) => resultado || bolsista;
console.log(alunos.map((b) => b.bolsista).reduce(algumBolsista));
// -> true --- algum aluno é bolsista