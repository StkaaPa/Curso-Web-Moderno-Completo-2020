// pessoa -> 123 (endereço de memoria) -> {...} (nesse endereço é que tem lá o objeto)
const pessoa = {nome: "João"}
// quando se faz isto, o objeto é o mesmo, o endereço de memoria é o mesmo, mas os dados do objeto podem ser alterados
pessoa.nome = "Pedro"
console.log(pessoa)


// quando se faz isto
// (a constante fica igual) pessoa -> 456 (pessoa vai apontar para um novo endereço de memoria) -> {...}
// mas como pessoa é uma constante, vai sempre apontar para o endereço de memora anterior 123
// ou seja aqui vai surgir um erro
//pessoa = {nome: 'Ana'}

// "congelar" o objeto, ou seja não é possivel mexer mais no objeto
// não dá para fazer delete nem adicionar/alterar novos valor ou atributos
Object.freeze(pessoa)
pessoa.nome = 'Maria'
pessoa.idade = 10
delete pessoa.nome
// ou seja neste console.log como pessoa esta freeze o que ele vai imprimir é o nome pedro e nao maria
console.log(pessoa.nome)