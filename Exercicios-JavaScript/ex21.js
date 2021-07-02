function menorNumero(numeros) {
  let menor = numeros[0];
  for (let i in numeros) {
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }
  return menor;
}

console.log(menorNumero([10, 12, 6, 30, 2, 25, 1]));
// -> 1

//TODO: através do metodo reduce

function numeroMenor(valores) {
  return valores.reduce((anterior, atual) =>
    anterior < atual ? anterior : atual
  );
}
console.log(numeroMenor([10, 12, 6, 30, 2, 25]));
// -> 2
