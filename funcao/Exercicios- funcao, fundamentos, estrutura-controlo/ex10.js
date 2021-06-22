function verificarNumero(numInt) {
  if (numInt % 3 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(verificarNumero(30));
// -> true
console.log(verificarNumero(56));
// -> false
console.log(verificarNumero(23));
// -> false
console.log(verificarNumero(87));
// -> true
