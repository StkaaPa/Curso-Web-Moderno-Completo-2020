function calculadora(valor, sinal, valor2) {
  switch (sinal) {
    case "+":
      return valor + valor2;
      break;
    case "-":
      return valor - valor2;
      break;
    case "*":
      return valor * valor2;
      break;
    case "/":
      return valor / valor2;
      break;
    default:
      console.log("Operacao inválida! Introduza um operador válido!!");
      break;
  }
}

console.log(calculadora(2, "+", 3));
console.log(calculadora(2, "-", 3));
console.log(calculadora(2, "*", 3));
console.log(calculadora(2, "/", 3).toFixed(2)); // toFixed(2) - apresentar o resultado com 2 casas decimais
console.log(calculadora(2, "a", 3));
