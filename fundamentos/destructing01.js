// novo recurso ES2015

const pessoa = {
  nome: "Ana",
  idade: 5,
  endereco: {
    lugar: "Rua ABC",
    numero: 1000,
  },
};

/*normalmente para acessar nome e idade
utiliza-se pessoa.nome e pessoa.idade
mas atraves do destructing é possivel fazer de outra forma, como está
mostrado abaixo*/

const { nome, idade } = pessoa;
console.log(nome, idade);
// -> Ana 5

//aqui simplesmente atribui-se a variavel n ao nome e a variavel i à idade
//o resultado será exatamente igual ao de cima
const { nome: n, idade: i } = pessoa;
console.log(n, i);
// -> Ana 5

//tentar acessar atributos que não existam no objeto o resultado será undefined
//mas podemos atribuir um valor ao atributo, por exemplo bemHumorada = true, o resultado será Undefined True
const { sobrenome, bemHumroda = true } = pessoa;
console.log(sobrenome, bemHumroda);
// -> Undefined Undefined
// -> Undefined true

//para acessar o atributo endereco faz-se da mesma forma
const {
  endereco: { lugar, numero, cep },
} = pessoa;
console.log(lugar, numero, cep);
// -> Rua ABC 1000 undefined

//mais um caso de tentar acessar um atributo que nao existe no objeto
const {
  conta: { ag, num },
} = pessoa;
console.log(ag, num);
//dá erro porque o atributo conta não existe, por isso muito menos existe ag e num e por isso dá erro
