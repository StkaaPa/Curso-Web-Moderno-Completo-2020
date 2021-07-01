function simboloMais(valor) {
  let resultado = "";
  for (let i = 0; i < valor; i++) {
    resultado += "+";
  }
  return resultado;
}

console.log(simboloMais(1));
// -> +
console.log(simboloMais(3));
// -> +++
console.log(simboloMais(10));
// -> ++++++++++
