const vetor = [1, 2, 3, 4, 5];

function vetores(vet1, numeroInteiro) {
  //inciar um vetor vazio
  let vetorResultado = [];
  //temos aqui uma função de callback
  //aqui vai percorrer cada elemento da constante vetor incializada em cima através do forEach()
  vetor.forEach( e => {
    //vai fazer push para o array vazio, do resultado da multiplicacao de cada elemento pelo multiplicador
    //isto é se o numeroInteiro for 3 e utilizando o vetor definido em cima, o que vai fazer é
    /*
    vetorResultado.push(1 * 3) = 3
    vetorResultado.push(2 * 3) = 6
    vetorResultado.push(3 * 3) = 9
    vetorResultado.push(4 * 3) = 12
    vetorResultado.push(5 * 3) = 15
    */
    vetorResultado.push(e * numeroInteiro);
  });
  //aqui vai retornar o array preenchido com os resultados ->>> [3, 6, 9, 12, 15]
  return vetorResultado;
}

//o console.log é para imprimir esse mesmo return vetorResultado
console.log(vetores(vetor, 3));
// -> [3, 6, 9, 12, 15]


