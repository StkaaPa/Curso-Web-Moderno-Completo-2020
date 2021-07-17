let p = new Promise(function (cumprirPromessa) {
  cumprirPromessa(["Ana", "Rafael", "Carlos"]);
});
console.log(typeof p);
// -> object

//* estas funções podem ser todas arrow functions
const primeiroElemento = (array) => array[0];
const primeiraLetra = (string) => string[0];
const letraMinuscula = (letra) => letra.toLowerCase();

//* como definimos as funçoes acima, outr forma de fazer o then é
p.then(primeiroElemento)
  .then(primeiraLetra)
  .then(letraMinuscula)
  //! aqui podemos colocar diretamente o console.log até porque o valor vem do then anteriro e a função then só aceita um parametro
  .then(console.log);
// -> a

//* acessar a promise
p.then((valor) => valor[0])
  // selecionar o primero valor do array
  .then((primeiro) => primeiro[0])
  // retornar a primerira letra do primerio valor do array
  .then((letra) => letra.toLowerCase())
  // retornar a mesma letra mas em minuscula
  .then((letraMinuscula) => console.log(letraMinuscula));
// imprimir a letra anterior em minuscula
// -> a

//* para não estar a criar uma variavel p, o que se pode fazer é:
//!normalmente o parametro da funçao do promise é resolve
// new Promise(function (resolve) {
//   resolve(["Ana", "Rafael", "Carlos"]);
// })
//   .then((valor) => valor[0])
//   .then((primeiro) => primeiro[0])
//   .then((letra) => letra.toLowerCase())
//   .then((letraMinuscula) => console.log(letraMinuscula));
