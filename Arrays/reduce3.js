Array.prototype.reduce2 = function (callback, valorInicial) {
  const indiceInicial = valorInicial ? 0 : 1;
  let acumulador = valorInicial || this[0];
  //* i começa em 1, porque o indice 0 é o acumulador
  for (let i = indiceInicial; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], i, this);
  }
  return acumulador;
};

const soma = (total, valor) => total + valor;
const nums = [1, 2, 3, 4, 5, 6];
console.log(nums.reduce2(soma, 21));
/*
21 + 1 = 22
22 + 2 = 24
24 + 3 = 27
27 + 4 = 31
31 + 5 = 36
36 + 6 = 42
resultado final imprimido no console.log() é 42
*/
