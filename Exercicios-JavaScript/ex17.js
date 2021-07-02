function somarNumeros(numeros) {
  const soma = numeros.reduce(
    (acumulador, numeroAtual) => acumulador + numeroAtual,
    0
  );
  return soma;
}
console.log(somarNumeros([10, 10, 10]));
// -> 30
console.log(somarNumeros([1, 2, 3, 4, 5]));
// -> 15

//TODO: fazer o mesmo exercicio mas com o forEach

function somaNumeros(valores) {
  let soma = 0;
  valores.forEach((e) => (soma += e));
  return soma;
}

console.log(somaNumeros([10, 10, 10]));
// -> 30
console.log(somaNumeros([1, 2, 3, 4, 5]));
// -> 15