function receberNumerosParIndicePar(numeros) {
  return numeros.filter((numero, indice) => {
    const numerosPar = numero % 2 == 0;
    const indicePar = indice % 2 == 0;

    return numerosPar && indicePar;
  });
}

console.log(receberNumerosParIndicePar([10, 79, 22, 43]));
// -> [ 10, 22 ]

console.log(receberNumerosParIndicePar([1, 2, 3, 4, 5]));
// -> []
