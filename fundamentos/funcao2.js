// armazenar uma funcao numa variavel
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

//armazenar uma funcao arrow numa variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//retorno implicito - forma de retirar o return para ficar o codigo mais curto
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))