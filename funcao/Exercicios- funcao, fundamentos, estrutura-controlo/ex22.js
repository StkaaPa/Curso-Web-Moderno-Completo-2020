function anuidade(mes, valor) {
  if (mes > 0 && mes < 13) {
    // de janeiro a janeiro são 13 meses
    atraso = mes - 1;
    return (valor * (1 + 0.05 ** atraso)).toFixed(2);
  } else {
    return "Mês inválido";
  }
}

console.log(anuidade(0));
// -> Mês inválido
console.log(anuidade(1, 100));
// -> 200.00
console.log(anuidade(2, 100));
// -> 105.00
console.log(anuidade(5, 100));
// -> 105.00
console.log(anuidade(10, 100));
// -> 100.00
console.log(anuidade(12, 100))
// -> 100.00