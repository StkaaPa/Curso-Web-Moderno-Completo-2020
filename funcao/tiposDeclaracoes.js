//fucntion declaration
// ao fazer desta forma, se colocar um console.log antes, vai funcionar porque 
//o interpretador de javaScript carrega primeiro a funcao e só depois executa o console.log
// logo o console.log pode estar antes desta funcao
console.log(soma(2,3))
function soma(x, y) {
  return x + y;
}

//function expression
// já aqui, nao vai funcionar porque o resultado dá: sub is not defined
const sub = function (x, y) {
  return x - y;
};
console.log(sub(2,3))

//named function expression
// (forma pouca usada)
//aqui também não resulta porque o valor de mult só é atribuido na linha 17
//o console.log tem de ficar depois da funcao
const mult = function mult(x, y) {
  return x * y;
};
console.log(mult(2,3))
