function maiorOuIgual(valor1, valor2) {
  if (typeof valor1 != typeof valor2) {
    return false;
  }
  return valor1 >= valor2;
}

console.log(maiorOuIgual(5, 1));
// -> true
//! neste console.log(), é verdade que 2 é maior que 1, mas na condição if o typeof de 2 é diferente do typeof de 1 por isso dá false
console.log(maiorOuIgual("2", 1));
// -> false
