const resultado = (nota) => (nota >= 7 ? "Aprovado" : "Reprovado");
//o objetivo do operador ternario é retornar um dos valores, neste caso Aprovado ou Reprovado

console.log(resultado(7.1));
// -> Aprovado

console.log(resultado(6.7));
// -> Reprovado
