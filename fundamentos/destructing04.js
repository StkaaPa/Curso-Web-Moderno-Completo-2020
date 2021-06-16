function rand([min = 0, max = 1000]) {
    if ( min > max) [min,max] = [max,min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50,40]))
//vai imprimir um numero random entre 992 e 1000
console.log(rand([992]))

//vai imprimir um numero random entre 0 e 10
console.log(rand([, 10]))

//vai imprimir um numero entre 0 e 1000
console.log(rand([]))

//vai gerar um erro
console.log(rand())