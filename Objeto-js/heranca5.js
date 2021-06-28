console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);
// -> fucntion fucntion fucntion
//* - Logo se todos são funções todos tem ".prototype"

//*reverter a string
String.prototype.reverse = function () {
  //*dividir a string por cada elemento, faz o reverse dos elementose volta a juntar todos os elementos numa nova string
  return this.split("").reverse().join("");
};
console.log("Escola Cod3r".reverse());
// -> r3doC alocsE

//Aceder ao primeiro elemento do array
Array.prototype.first = function () {
  return this[0];
};

console.log([1, 2, 3, 4, 5].first());
// -> 1
console.log(["a", "b", "c", "d"].first());
// -> a

//! - subscrever o comportamento de toString
//! - no próximo console.log em vez de imprimir Escola Cod3r vai imprimir Lascou tudo
String.prototype.toString = function () {
  return "Lascou tudo";
};
console.log("Escola Cod3r".reverse());
