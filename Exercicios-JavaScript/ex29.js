function segundoMaior(valores){
    const maiorNumero = Math.max(...valores)
    valores = valores.filter(numero => numero != maiorNumero)
    const segundoMaior = Math.max(...valores)

    return segundoMaior
}

console.log(segundoMaior([10, 4, 8, 20, 12]))