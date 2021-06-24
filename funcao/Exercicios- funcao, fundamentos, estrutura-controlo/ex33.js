let vetorNumerico = [1, 2, 3, 4];
let vetorString = ["a", "b", "c", "d"];
let vetorDouble = [1.1, 2.1, 3.1, 4.1];

function concatenar(args) {
  //criar um array vazio
  let resultado = [];
  //ciclo for para percorer todos os elementos dos vetores que queremos concatenar
  for (let i = 0; i < arguments.length; i++) {
    resultado = resultado.concat(arguments[i]);
  }
  return resultado;
}

console.log(concatenar(vetorNumerico, vetorString));
// -> [1, 2, 3, 4, 'a', 'b', 'c', 'd']
console.log(concatenar(vetorDouble, vetorString));
// -> [ 1.1, 2.1, 3.1, 4.1, 'a', 'b', 'c', 'd' ]
