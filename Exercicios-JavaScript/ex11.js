//! elemento é um array, mas o resultado da função origina um novo array, tanto a funçao pop como a shift nao alteram o original
function primeiroUltimo(elemento) {
  //* guardar o primeiro elemento do array numa constante
  const primeiro = elemento.shift();
  //* guardar o ultimo elemento do array numa constante
  const ultimo = elemento.pop();

  return [primeiro, ultimo];
}

console.log(primeiroUltimo([1, 2, 3, 4, 5, 6]));
// -< [1, 6]

console.log(primeiroUltimo(["a", "b", "c", "d"]));
// -> [ 'a', 'd' ]
