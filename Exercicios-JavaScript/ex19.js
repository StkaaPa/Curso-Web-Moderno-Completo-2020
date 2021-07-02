function calcularMedia(valores) {
  const numeroValores = valores.length;
  const somaTotal = valores.reduce((valor1, valor2) => valor1 + valor2);

  return somaTotal / numeroValores;
}

console.log(calcularMedia([10, 10]));
// -> 10
console.log(calcularMedia([1, 2, 3, 4, 5]));
// -> 3
console.log(calcularMedia([15, 30, 45, 50]));
// -> 22.5
