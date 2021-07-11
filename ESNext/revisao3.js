//* ES8: Object.values (pega os valores de um objeto) / Object.entries (matriz de arrays com os pares chave/valor)
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj));
// -> [1, 2, 3]
console.log(Object.entries(obj));
// -> [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

//* Melhorias Na Notação Literal
const nome = "Carla";
const pessoa = {
  nome, //! não é necessário escrever nome = nome
  ola() {
    //! não é necessario fazer ola: function()
    return "Oi gente!!!";
  },
};
console.log(pessoa.nome, pessoa.ola());
// -> Carla Oi gente!!!

//* CLASS
class Animal {}
class Cachorro extends Animal {
  falar() {
    return "Au Au!";
  }
}
console.log(new Cachorro().falar());
// -> Au Au!
