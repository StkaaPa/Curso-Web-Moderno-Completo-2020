function objetoParaArray(objeto) {
  return Object.entries(objeto);
}

console.log(objetoParaArray({ a: 2, b: 3 }));
// -> [ [ 'a', 2 ], [ 'b', 3 ] ]