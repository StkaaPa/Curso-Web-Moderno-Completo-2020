function estaEntre(numero, minimo, maximo, inclusivo = false) {
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
}

//* 1ª situação ter um numero maior que o minimo e menor que o maximo e o inclusivo ser false
console.log(estaEntre(10, 5, 20))
// -> true

//* 2ª situação - ter um numero maior que o maximo e o minimo, e o inclusivo ser false
console.log(estaEntre(150, 50, 100))
// -> false

//* 3ª situação - ter um numero igual ao minimo, menor que o maximo e o inclusivo ser false
console.log(estaEntre(5, 5, 10))
// -> false

//* 4ª situação - ter um numero igual ao minimo, menor que o maximo e o valor do inclusivo ser true
console.log(estaEntre(5, 5, 10, true))
// -> true