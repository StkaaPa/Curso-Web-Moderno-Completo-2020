//vai imprimir undifined porque não foi atribuido nenhum valor à variavel a, mas ela existe
console.log("a =", a);
var a = 2;
//aqui já imprimi a = 2, porque foi atribuido um valor à variavel
console.log("a =", a);

/*
o que está acima demontrado é o mesmo que:

var a
console.log('a =', a)
a = 2
console.log('a =', a)

*/

//ao criar um função com estes passos dentro da função o resultado seria o mesmo ou seja:
function teste() {
  console.log("a =", a);
  var a = 2;
  console.log("a =", a);
}
teste();

//--------------------------------------------

//o let já nao funciona da mesma maneira que o var, porque têm scoop diferentes
//este vai dar erro, porque b não está definido para o primero console
console.log("b =", b);
let b = 1;
console.log("b =", b);
