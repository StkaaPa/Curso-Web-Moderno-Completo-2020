function soma() {
  let soma = 0;
  //arguments é uma propriedade de js, é uma array
  //possui todos os argumentos de uma função
  for (i in arguments) {
    soma += arguments[i];
  }
  return soma;
}

console.log(soma());
// -> 0 --- porque não tem argumentos

console.log(soma(1));
// -> 1 --- porque só tem 1 argumento

console.log(soma(1.1, 2.2, 3.3));
// -> 6.6 --- é o resultado da soma dos 3 argumentos

console.log(soma(1.1, 2.2, "Teste"));
// -> 3.30000000000003Teste ---- faz a soma de 1.1 + 2.2 e depois faz a concatenação com a strind Teste

console.log(soma("a", "b", "c"));
// -> 0abc --- imprime o zero porque o zero já está presente na soma -> let soma = 0
