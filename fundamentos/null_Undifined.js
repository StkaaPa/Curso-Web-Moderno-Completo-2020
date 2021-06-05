let valor; //não incializada por isso retorna undifined
console.log(valor);

//não tem nenhum valor, nem tem nenhum endereço que aponta para um objeto na memoria
// ou seja significa ausencia de valor
//caso seja preciso resetar uma variavel usar sempre o null em vez de undifined
valor = null;
console.log(valor);
// console.log(valor.toString()) // ERRO!

const produto = {};
console.log(produto.preco); //retorna undifined porque preco nao esta definido
console.log(produto); // retorna vazio

produto.preco = 3.5;
console.log(produto); // vai retornar o objeto produto com a chave preco e o valor 3.50

produto.preco = undefined; // evitar atribuir o valor undifined
console.log(!!produto.preco);
// delete produto.preco //para retirar o atributo do objeto
console.log(produto);

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)
