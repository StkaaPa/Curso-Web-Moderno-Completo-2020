const filhas = ["Ualeskah", "Cibalena"];
const filhos = ["Uoxiton", "Uesclei"];
//! se adicionar valores aseguir a filhos, esse valores também são concatenados ao array "todos"
const todos = filhas.concat(filhos);
console.log(todos, filhas, filhos);
/*
-> [ 'Ualeskah', 'Cibalena', 'Uoxiton', 'Uesclei' ] --- todos
-> [ 'Ualeskah', 'Cibalena' ] --- filhas
-> [ 'Uoxiton', 'Uesclei' ] --- filhos
*/

//! a função concat() também não altera o array original, mas sim cria um novo array
console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]));
//! o 6º elemento é o array [6, 7]
// -> [ 1, 2, 3, 4, 5, [ 6, 7 ] ]
