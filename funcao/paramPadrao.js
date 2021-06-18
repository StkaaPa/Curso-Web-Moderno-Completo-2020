//estrategia 1 para gerar valor padrao
function soma1(a, b, c) {
  a = a || 1;
  b = b || 1;
  c = c || 1;
  return a + b + c;
}

console.log(soma1());
// -> 3 --- porque não foi passado nenhum valor para a, b e c, logo ele vai assumir que a=b=c=1
console.log(soma1(3));
// -> 5 --- só foi passado o valor de a = 3, logo fica 3 + 1 + 1 = 5
console.log(soma1(1, 2, 3));
// -> 6 ---  foram passados os tres valores logo fica 1 + 2 + 3 = 6
console.log(soma1(0, 0, 0));
// -> 3 --- porque o 0 vai retornar falso e como retorna falso o valor do a, do b e do c vai ser igual a 3

// estrategia 2, 3 e 4 para gerar valor padrao
function soma2(a, b, c) {
  a = a !== undefined ? a : 1; //2ª estrategia
  b = 1 in arguments ? b : 1; //3ª estrategia
  c = isNaN(c) ? 1 : c; //4ªestrategia
  return a + b + c;
}

console.log(soma2());
// -> 3
console.log(soma2(3));
// -> 5
console.log(soma2(1, 2, 3));
// -> 6
console.log(soma2(0, 0, 0));
// -> 0

//valor padrao do ES2015
function soma3(a = 1, b = 1, c = 1) {
  return a + b + c;
}

console.log(soma3());
// -> 3
console.log(soma3(3));
// -> 5
console.log(soma3(1, 2, 3));
// -> 6
console.log(soma3(0, 0, 0));
// -> 0