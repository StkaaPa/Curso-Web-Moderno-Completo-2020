function strings(palavra1, palavra2){
    let caracteresContidos = true;
    for(let i = 0; i < palavra1.length; i++){
        let caracteresPalavra1 = palavra1.charAt(i).toLowerCase()
        for(let j = 0; j < palavra2.length; j++){
            let caracteresPalavra2 = palavra2.charAt(j).toLowerCase()
            if(caracteresPalavra1 == caracteresPalavra2){
                caracteresContidos = true
                break;
            } else {
                caracteresContidos = false
            }
        }
        if(!caracteresContidos){
            return caracteresContidos
        }
    }
    return caracteresContidos;
}

console.log(strings('OLA', 'ola'))
// -> true --- dá porque ele nao faz a distinção entre maiuscula e minuscula porque através da função
// toLowerCase() as palavras independetemente de estarem escritos com maiusculas ou nao vão ser sempre
// transformadas em palavras com letras minusculas

console.log(strings('Boas', 'Ola'))
// -> faslse