// *arrow Function
const soma = (a, b) => a + b;
console.log(soma(1, 2));
// -> 3

//* arrow function (this)
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});
lexico1();
// -> true
lexico2();
// -> true

//* parametros default
function log(texto = "node") {
  console.log(texto);
}
log();
// -> node
log("Bom dia!");
// -> Bom dia!

//* operador rest ---- possui dois nomes rest(agrupar) e spread(espalhar)
function total(...numeros) {
  let total = 0;
  numeros.forEach((n) => (total += n));
  return total;
}
console.log(total(2, 3, 4, 5, 6));
// -> 20
