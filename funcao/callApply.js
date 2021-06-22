// a diferença entre call e apply é a forma como se invoca os parametros da função
function getPreco(imposto = 0, moeda = "R$") {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
  nome: "Notebook",
  preco: 3100,
  desc: 0.15,
  getPreco,
};

global.preco = 20;
global.desc = 0.1;
console.log(getPreco());
// -> R$ 18
console.log(produto.getPreco());
// -> R$ 2635

const carro = { preco: 4099, desc: 0.2 };
console.log(getPreco.call(carro));
// -> R$ 3279.20

//forma de passar os parametros
//call
//carro é o contexto, e os outros dois parametros referem-se à funcao getPreco
console.log(getPreco.call(carro, 0.17, "€"));
// -> € 3836.664

// Apply
// os parametros têm de ser passados dentro de um array
console.log(getPreco.apply(carro, [0.17, "€"]));
// -> € 3836.664
