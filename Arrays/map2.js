const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Kit de Lapis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}',
];

//TODO: desafio retornar um array atraves de map() apenas com os precos

//* esta função vai transformar a const carrinho de json para objeto
const jsonParaObjeto = (json) => JSON.parse(json);
//* depois temos que criar uma função para só passar o preco de cada elemento do obejto
const apenasPreco = (produto) => produto.preco;

//*  é necessario fazer dois maps() para podermos chamar as duas funções
/*
 * Aqui o que vai fazer é pegar na variavel carrinho e
 * transformar num objeto (está em formato json)
 * e dpois o segundo map é para apenas passar o atributo preco
 * de cada elemento do objeto
 */
const resultado = carrinho.map(jsonParaObjeto).map(apenasPreco);
console.log(resultado);
// -> [ 3.45, 13.9, 41.22, 7.5 ]
