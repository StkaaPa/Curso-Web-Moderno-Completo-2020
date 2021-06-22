function numero(value) {
  // toFixed() - quantidade de digitos que queremos que apareça depois do ponto decimal nos numeros
  // toSting() - transforma um objeto numa string para podermos manipualor os caracteres
  // replace() - definir o que queremos trocar, e pelo que queremos trocar
  numComVirgula = `R$ ${value.toFixed(2).toString().replace(".", ",")}`;
  console.log(numComVirgula);
}

numero(132.23123);
