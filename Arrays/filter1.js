const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "iPad Pro", preco: 4199, fragil: true },
  { nome: "Copo de Vidro", preco: 12.49, fragil: true },
  { nome: "Copo de Plástico", preco: 18.99, fragil: false },
];

//! NORMAMELMENTE O ARRAY DO FILTER OU É DO MESMO TAMANHO QUE O ORIGINAL OU É MENOR
console.log(
  produtos.filter(function (p) {
    /*
    ! se retornar false, o resultado é um array vazio
    ! se retornar true, vai retornar todos os elementos do array
    ! o resultado do filter tem que ser sempre TRUE ou FALSE
     */
    return false;
    // -> []
  })
);

//TODO: fazer duas funçoes e utlizar o filter() para apenas passar os elementos com preco >=500 e os que são frágeis

const fragil = (produto) => produto.fragil == true;
const apenasPreco = (produto) => produto.preco >= 500;

const resultado = produtos.filter(fragil).filter(apenasPreco);

console.log(resultado);
/*
[
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'iPad Pro', preco: 4199, fragil: true }
]
*/
