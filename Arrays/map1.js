//* função map - serve para fazer uma transformacao num array

const nums = [1, 2, 3, 4, 5];

//! map é um for com propósito, faz uma tranformação dos elementos de um array para outro array do mesmo tamanho
//* armazenar o array resultante numa constante e passar um função callback no map()

let resultado = nums.map(function (e) {
  return e * 2;
});
//! vai imprimir um array com o mesmo tamanho que nums mas com os elementos todos com o valor a dobrar
console.log(resultado);
// -> [ 2, 4, 6, 8, 10 ]
//! a função map() não altera o array original, a função cria um novo array
//! se fizermos console.log de resultado e nums, são imprimidos dois arrays
console.log(resultado, nums);
// -> [ 2, 4, 6, 8, 10 ] [ 1, 2, 3, 4, 5 ]

//! A FUNÇÃO MAP() TEM QUE TER SEMPRE O RETURN, CASO CONTRARIO NO CONSOLE.LOG O RESULTADO É UNDEFINED PARA CADA ELEMENTO
//* somar 10 aos elementos do array original
const soma10 = (e) => e + 10;
//* fazer o triplo dos elementos do array original
const triplo = (e) => e * 3;

const euros = (e) => `${parseFloat(e).toFixed(2).replace(".", ",")}€`;

/*
 * array original -> [1, 2, 3, 4, 5]
 * no primeiro foi feita a soma de cada elemento do array nums por 10 -> [ 11, 12, 13, 14, 15]
 * depois foram multiplicados por 3 cada um dos elementos -> [33, 36, 39, 42, 45]
 * no ultimo os valores foram convertidos para float numbers com duas casas decimais e substituindo o . por ,
 * o array final é imrprimdo como uma string devido à notação usada (` `)
 ! o array final tem o mesmo numero de elementos que o array original
 ! também é possivel trocar a ordem dos maps
 */
resultado = nums.map(soma10).map(triplo).map(euros);
console.log(resultado);
// -> [ '33,00€', '36,00€', '39,00€', '42,00€', '45,00€' ]