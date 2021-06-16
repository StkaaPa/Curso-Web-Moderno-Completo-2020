let num1 = 1;
let num2 = 2;

//incrementar 1 ao num1 ou seja num1 = 2
num1++;
console.log(num1);
// -> 2

//desincrementar 1 ao num1 ou seja vai voltar a ser 1
--num1;
console.log(num1);
// -> 1

//dá verdadeiro porque o num2 = 2, e só depois da comparacao é que desincrementa 1 valor
console.log(++num1 === num2--);
//aqui da falso porque em cima o num1 vai ser 2 porque ++num1 = 2, e o num2 vai ser 1 porque num2-- = 1
console.log(num1 === num2);
