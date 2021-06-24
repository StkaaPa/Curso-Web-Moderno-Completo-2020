function maiorMenor(vetor) {
  let maior;
  let menor;
  for (let i = 0; i < vetor.length; i++) {
    //este if simplesmente é para o return do maior e menor não ser undefined
    if (maior === undefined && menor === undefined) {
      menor = vetor[i];
      maior = vetor[i];
    } else {
      if (vetor[i] > maior) {
        maior = vetor[i];
      } else if (vetor[i] < menor) {
        menor = vetor[i];
      }
    }
  }
  return [menor, maior];
}

vetor = [4, 2, 1, 5, 10, 9, 30];
console.log(maiorMenor(vetor));
// -> [1, 30]
