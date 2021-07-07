console.log(this === global);
// -> false
console.log(this === module);
// -> false
console.log(this === module.exports);
// -> true
console.log(this === exports);
// -> true

function logThis() {
  console.log("Dentro de uma função...");
  //! dentro de uma funcao o this nao aponta para module.exports
  //! mas fora de uma função já aponta para module.exports
  console.log(this === exports);
  // -> false
  console.log(this === module.exports);
  //* tambem dá false porque module.exports tem a mesma referencia que exports
  console.log(this === global);
  // -> true //! dentro de uma função o this aponta para global

  // this.perigo = "..."; //! isto está a ser colocado no scoop global
}

// this.perigo = '...' --- ao colocar está a apontar para module.exports
logThis();
