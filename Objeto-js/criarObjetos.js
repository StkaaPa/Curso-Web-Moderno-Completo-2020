// usando a notação literal
const obj1 = {};
console.log(obj1);

//Object em js
// console.log(typeof Object, typeof new Object) --- // -> Function Object
const obj2 = new Object();
console.log(obj2);

//funções construtoras
function Produto(nome, preco, valor) {
  // nome passa a ser global atraves do this
  this.nome = nome;
  this.getPrecoComDesconto = () => {
    return preco * (1 - valor);
  };
}

const p1 = new Produto("Caneta", 7.99, 0.15);
const p2 = new Produto("Notebook", 7.99, 0.15);
//é possível alterar p1.nome mas não é possivel alterar o p1.preco e p1.valor porque só podem ser acessados dentro da função
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

//função factory -- é uma função que fabrica qualquer coisa
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas);
    },
  };
}

const f1 = criarFuncionario("joão", 1050.0, 4);
const f2 = criarFuncionario("Maria", 1150.0, 6);
console.log(f1.getSalario(), f2.getSalario());
// -> 910 920

//Object.create
const filha = Object.create(null);
filha.nome = "Ana";
console.log(filha);

//função famosa que retorna Objeto..
const fromJSON = JSON.parse('{"info":"Sou um JSON"}');
console.log(fromJSON.info);
