// funcoes importantes dentro da funcao Object

const pessoa = {
  nome: "Rebeca",
  idade: 20,
  peso: 60,
};

// Object.keys(pessoa) - vai imprimir os atributos mas não os valores
// ou seja vai imprimir o atibuto nome mas nao imprime o valor 'Rebeca
console.log(Object.keys(pessoa));
// -> ['nome', 'idade', 'peso']

// aqui já imprimi os valores e nao os atributos
console.log(Object.values(pessoa));
// -> ['Rebeca', 20, 60]

// aqui imprime tanto os valores como os atributos
// cada atributo e o seu respetivo valor são imprimidos como arrays
// primeiro imprime o atributo e depois o valor
console.log(Object.entries(pessoa));
// -> [['nome', 'Rebeca'], ['idade', 2], ['peso', 3]]

Object.entries(pessoa).forEach((e) => {
  console.log(`${e[0]}: ${e[1]}`);
  // 0 é o atributo e 1 é o valor do atributo
});
// -> nome: Rebeca idade: 20 peso: 60

//pode-se fazer de outra maneira que é tirar e e colocar chave, valor
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});
// -> nome: Rebeca idade: 20 peso: 60

//definir a propriedade de um objeto
Object.defineProperty(pessoa, "dataNascimento", {
  //aqui vai passar todas as caracteristicas da propriedade dataNascimento
  // vai ser listada
  enumerable: true,
  //nao vai aceitar ser alterada
  writable: false,
  value: "01/01/2020",
});
pessoa.dataNascimento = "01/01/2021";
//como defini que a propriedade nao aceita ser alterada, ou seja, é como
// se tivesse freeze, o valor a ser imprimido é 01/01/2020 e nao 01/01/2021
console.log(pessoa.dataNascimento);
// -> 01/01/2020

//aqui vai imprimir a key dataNascimento porque ficou definido que a propriedade aceita ser lista
// se mudarmos essa caracteristica para false, o atributo dataNascimento não vai ser imprimido mais
console.log(Object.keys(pessoa));
// -> [ 'nome', 'idade', 'peso', 'dataNascimento' ]

// Object.assign (ECMAScript 2015)
const destino = { a: 1 };
const obj1 = { b: 2 };
const obj2 = { c: 3, a: 4 };
/*
o objeto destino vai receber todos os valores dos outros objetos
destino é o objeto que vai receber os valores
obj1 e obj2 são os parametros
ou seja
o atributo b: 2 vai ser concatenado no objeto destino
o atributo c: 3 vai ser concatenado no objeto destino
o atributo a: 4, como a já existia, o valor do a vai ser 
sobescrito
ou seja
vai deixar de ser 1 e passa a ser 4
*/
const obj = Object.assign(destino, obj1, obj2);
console.log(obj);
Object.freeze(obj);
obj.c = 1234;
console.log(obj);
// -> { a: 4, b: 2, c: 3 }