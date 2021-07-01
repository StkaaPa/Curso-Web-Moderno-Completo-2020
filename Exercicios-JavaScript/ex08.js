function multiplicar(valor1, valor2) {
  if (valor1 == valor2) {
    return valor1 ** 2;
  } else if (valor1 == 0 || valor2 == 0) {
    return 0;
  } else {
    //* este return se o valor2 === 1 retorna o valor1 porque qualquer numero a multiplicar por 1 é igual ao proprio numero
    //* se o valor2 nao for === 1, a função multiplicar vai ser realizada recursivamente até o valor 2 ser 0
    /*
     * ou seja, por exmplo, multiplicar(5,2)
     * como o valor2 não é 1 nem 0, o que vai ser retornado é
     * valor1(5) + multiplicar(5, 2-1) //! como 2-1 = 1 e se o valor2 === 1 retorna o proprio numero, logo essa funcao multiplicar(5, 2-1) vai retornar 5
     * 5 + 5 = 10
     * logo o resultado do console.log(multiplicar(5,2)) vai ser 10
     ! FUNÇÃO RECURSIVA ---> valor1 + multiplicar(valor1, valor2 - 1);
     */
    return valor2 === 1 ? valor1 : valor1 + multiplicar(valor1, valor2 - 1);
  }
}

console.log(multiplicar(5, 2));
// -> 10
console.log(multiplicar(5, 5));
// -> 25
console.log(multiplicar(5, 0));
// -> 0
