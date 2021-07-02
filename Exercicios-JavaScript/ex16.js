function tipoAno(ano) {
  const divisivelQuatro = ano % 4 == 0;
  const divisivelCem = ano % 100 == 0;
  const divisivelQuatrocentos = ano % 400 == 0;

  return (divisivelQuatro && !divisivelCem) || divisivelQuatrocentos;
}

console.log(tipoAno(2020));
// -> true
console.log(tipoAno(1900));
// -> false
console.log(tipoAno(2100));
// -> false
console.log(tipoAno(2400));
// -> true
