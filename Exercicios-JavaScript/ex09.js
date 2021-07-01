function repetir(valor, repetidor) {
  let resultado = [];
  for (let i = 0; i < repetidor; i++) {
    resultado.push(valor);
  }
  return resultado;
}

console.log(repetir(2, 3));
// -> [ 2, 2, 2 ]
console.log(repetir("olá", 3));
// -> [ 'olá', 'olá', 'olá' ]
