//! UM ARRAY É UM OBJETO, É UMA ESTRUTURA INDEXADA QUE INICIA NO INDICE 0

let aprovados = new Array("Bia", "Carlos", "Ana");
console.log(aprovados);

aprovados = ["Bia", "Carlos", "Ana"];
console.log(aprovados[0]);
// -> bia
console.log(aprovados[1]);
// -> carlos
console.log(aprovados[2]);
// -> ana
console.log(aprovados[3]);
// -> undefined

aprovados[3] = "Paulo";
aprovados.push("Abia");
console.log(aprovados);
// -> [ 'bia', 'carlos', 'ana', 'Paulo', 'Abia' ]
console.log(aprovados.length);
// -> 5 elementos  //! sendo que Abia tem indice 4 e Paulo tem indice 3

aprovados[9] = "Rafael"; //! é possivel fazer isto, mas todos os elementos desde o indice 5 ao 8 são undefined
console.log(aprovados.length);
// -> 10 elementos
console.log(aprovados[8] === undefined);
// -> true

console.log(aprovados);
// -> [ 'bia', 'carlos', 'ana', 'Paulo', 'Abia', <4 empty items>, 'Rafael' ]

//* ORDENAR POR ORDEM ALFABÉTICA
//! cuidado porque letras maiúsculas têm prioridade sob as minúsculas
aprovados.sort();
console.log(aprovados);
// -> [ 'Abia', 'Ana', 'Bia', 'Carlos', 'Paulo', 'Rafael', <4 empty items> ]

//* eliminar o valor de indice 1 e colocar no mesmo sitio o valor undefined
delete aprovados[1];
console.log(aprovados[1]);
// -> undefined

aprovados = ["Bia", "Carlos", "Ana"];
//! a função splice serve para adicionar elementos num determinado indice, serve para remover elementos de um array, bem como adicionar e remover ao mesmo tempo
//* primeiro indicamos o indice, neste caso o 1, e depois indica-se o numero de elementos a excluir, neste caso, só quero 1
/*
 * para adicionar elementos basta aseguir ao numero especifico de elementos que queremos eliminar
 * utilizar a seguinte notação por exemplo ....splice(1,1,'Elemento1','Elemento2')
 * o que faz é, apartir do indice 1(incluido) elimina um elemento e ddepois adiciona os dois elementos que escrevemos
 */
aprovados.splice(1, 1, "Elemento1", "Elemento2");
//! elimina o elemento carlos e de seguida insere Elemento1 e Elemento2
//!  se em cima colocar 0 (não quero eleminar nenhum elemento), ao adicionar novos elementos, estes são colocados atrás do indice referido
//! ou seja, Elemento1 e Elemento2 vêm primeiro que Carlos
console.log(aprovados);
// -> [ 'Bia', 'Elemento1', 'Elemento2', 'Ana' ]
