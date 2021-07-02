function filtrarPorQuantidadeDigitos(numeros, quantidade) {
  return numeros.filter((numero) => {
    const quantidadeDigitos = String(numero).length;
    return quantidadeDigitos === quantidade;
  });
}

console.log(filtrarPorQuantidadeDigitos([10, 230, 1, 2, 213, 45, 21, 8], 2));
// -> [10, 45, 21]
console.log(
  filtrarPorQuantidadeDigitos(
    [1, 2, 3, 4, 123, 12, 3942, 402, 50, 0, 8, 437],
    3
  )
);
// -> [ 123, 402, 437 ]
