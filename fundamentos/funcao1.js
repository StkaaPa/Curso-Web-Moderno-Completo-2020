//funçao sem retorno

function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2); //o resultado será NaN porque o segundo valor é undifined, logo 2 + undifined = NaN
imprimirSoma(); //retorna também NaN

// funçao com retorno
function soma(a, b = 1) {
  return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));
console.log(soma()); //retorna NaN
