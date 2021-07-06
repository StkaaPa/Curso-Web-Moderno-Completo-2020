// console.log(module.exports === this)
// console.log(module.exports === exports)
//* TANTO O THIS COMO O EXPORTS TEM REFERENCIA A MODULE.EXPORTS

this.a = 1; //* o a será visivel fora do ficheiro
exports.b = 2;
module.exports.c = 3;

exports = null; //! mesmo mudando o exports para null
console.log(module.exports); //! este console.log vai imprimir o que está em cima definido
// -> { a: 1, b: 2, c: 3}

//! exports é uma outra variavel que aponta para o mesmo objeto
//! ou seja tanto faz adicionar apartir de module.exports como de exports bem como atraves do this

//* se fizer este padrão, não pode ser feito desta forma
exports = {
  nome: "teste",
};
//! este objeto não será retornado, porque a referencia de exports foi mudado para outro objeto
//! será retornado na mesma o objeto { a: 1, b: 2, c: 3}
console.log(module.exports);
// -> { a: 1, b: 2, c: 3 }

//* TEM QUE SER FEITO DESTA FORMA:
module.exports = { publico: true };
//! sempre que quiser exportar um novo objeto, obrigatoriamente tenho que utilizar module.exports
