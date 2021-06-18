function area(largura, altura) {
  const area = largura * altura;
  if (area > 20) {
    console.log(`Valor acima do permitido: ${area}m2.`);
  } else {
    return area;
  }
}

console.log(area(2, 2));
// -> 4
console.log(area(2));
// -> NaN  --- dá NaN porque o valor da altura é undefined, logo 2 * undefined = NaN
console.log(area());
// -> NaN --- porque undefined * undefined = NaN
console.log(area(2, 3, 4, 5, 6, 7));
// -> 6 --- apenas vai utilizar o 2 e o 3, o resto dos numeros vao ser ignorados
console.log(area(5, 5))
// -> Valor acima do permitido: 25m2.
// -> undefined --- é o resultado do retorno da função area(5,5)