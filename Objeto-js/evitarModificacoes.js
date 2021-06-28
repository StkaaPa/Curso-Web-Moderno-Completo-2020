//todo: Object.preventExtensions -- nao permite que se aumente o numero de atributos de um objeto sendo que excluir é possivel
const produto = Object.preventExtensions({
  nome: "Qualquer",
  preco: 1.99,
  tag: "promoção",
});
console.log("Extensivel:", Object.isExtensible(produto));
//* É falso porque defimos em cima que produto = Object.preventExtensions()

produto.nome = "borracha"; // alterar o nome é possivel
produto.descricao = "Borracha escolar branca";
//! esta linha vai ser excluida porque não é possivel atribuir novos atributos (descricao)
delete produto.tag;
console.log(produto);
// -> { nome: 'borracha', preco: 1.99 }

//todo: Object.seal - nao consegue adicionar novos atributos, nem excluir mas consegue modificar os valores
const pessoa = { noma: "Juliana", idade: 35 };
Object.seal(pessoa);
console.log("Selado:", Object.isSealed(pessoa));
// -> Selado: true //* É true porque definimos que pessoa = Object.seal()
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)
//-> { noma: 'Juliana', idade: 29 }

//todo: Object.freeze = seal + valores constantes
/*
* não consegue incluir novos valores nem excluir as chaves do objeto
* nem consegue modificar os dados de todas as variaveis do objeto
*/