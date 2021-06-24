function qtdNumeros(vetor){
    let numeros = 0;
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] >= 10 && vetor[i] <= 20){
            numeros++
        }
    }
    console.log(`${numeros} numeros estão entre o intervalo [10, 20]`)
}

vetor = [1,40,20,11,4,10,50,23,17,5];
qtdNumeros(vetor)