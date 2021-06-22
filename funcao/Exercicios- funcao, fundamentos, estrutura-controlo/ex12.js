function fatorial(numero) {
  if (numero == 0) {
    return 1;
  } else {
    return numero * fatorial(numero - 1);
  }
}

console.log(fatorial(2));
// 1º - calcular fatorial(2 - 1) = fatorial (1)
/*
  fatorial(1) = 1 * fatorial(1-1)
  <=> fatorial(1) = 1 * fatorial(0)
  <=> fatorial(1) = 1 * 1 = 1
*/
//2º - ir à formula e substituir os valores
/*
formula ----- numero * fatorial(numero - 1)
2 * fatorial(2 - 1)
<=> 2 * 1 = 2
*/

console.log(fatorial(3));
//calcular como em cima
/*
fatorial(3 - 1) = fatorial(2) = 2
formula fica: 3 * fatorial(3 - 1)
<=>3 * fatorial(2)
<=>3 * 2 = 6
*/

console.log(fatorial(10));
//o mesmo procedimento é feito
// -> 3 628 800
