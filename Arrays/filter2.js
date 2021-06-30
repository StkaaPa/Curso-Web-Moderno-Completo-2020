//* primeiro temos que definir filter2()
Array.prototype.filter2 = function (callback) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "iPad Pro", preco: 4199, fragil: true },
  { nome: "Copo de Vidro", preco: 12.49, fragil: true },
  { nome: "Copo de Plástico", preco: 18.99, fragil: false },
];

console.log(
  produtos.filter(function (p) {
    return false;
  })
);

const fragil = (produto) => produto.fragil == true;
const apenasPreco = (produto) => produto.preco >= 500;

const resultado = produtos.filter2(fragil).filter2(apenasPreco);

console.log(resultado);
