function inverso(valor) {
  if (typeof valor == "boolean") {
    return valor == true ? false : true;
  } else if (typeof valor == "number") {
    return valor == +valor ? -valor : +valor;
  } else {
      return "Boolean ou Number são esperados!"
  }
}

console.log(inverso(true));
// -> false
console.log(inverso(-1))
// -> 1
console.log(inverso(20))
// -> -20
console.log(inverso("a"))
// -> Boolean ou Number são esperados!