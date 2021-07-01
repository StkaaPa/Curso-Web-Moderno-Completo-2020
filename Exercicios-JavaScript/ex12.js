function removerPropriedade(objeto, propriedade) {
  //* criar um novo objeto que vai receber os valores do objeto original
  const copia = Object.assign({}, objeto);
  delete copia[propriedade];

  return copia;
}

console.log(removerPropriedade({ a: 1, b: 2 }, "a"));
// -> { b: 2}
