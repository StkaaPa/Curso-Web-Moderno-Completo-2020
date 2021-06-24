function qtdNegativos(vetor) {
  let negativos = 0;
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] < 0) {
      negativos++;
    }
  }
  return negativos;
}

vetor = [5, 0, -2, -4, 10, 2, -10, -1, 1];
console.log(qtdNegativos(vetor))
// -< 4 --- existem 4 numeros negativos no vetor