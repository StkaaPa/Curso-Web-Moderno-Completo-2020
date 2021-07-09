const sequence = {
  _id: 1,
  get id() {
    return this._id++;
  },
};

const produtos = {};

function salvarProduto(produto) {
  //* !produto.id - significa que o id do produto não tiver valor
  if (!produto.id) produto.id = sequence.id;
  produtos[produto.id] = produto;
  return produto;
}

//* procurar um produto pelo id
function getProduto(id) {
  return produtos[id] || {};
}

//* função para retornar todos os produtos
function getProdutos() {
  return Object.values(produtos);
}

//* excluir produto
function excluirProdutos(id) {
  const produto = produtos[id];
  delete produtos[id];
  return produto;
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProdutos };
