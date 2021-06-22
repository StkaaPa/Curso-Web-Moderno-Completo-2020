function avaliacaoAluno(notas) {
  let nota = arredondar(notas);
  if (nota >= 40) {
    console.log(`Está Aprovodo com ${nota} valores.`);
  } else {
    console.log(`Está Reprovado com ${nota} valores.`);
  }
}

function arredondar(notas) {
  if (notas % 5 > 2) {
    return notas + (5 - (notas % 5));
  } else {
    return notas;
  }
}

avaliacaoAluno(100);
// -> Está Aprovodo com 100 valores.
avaliacaoAluno(84);
// -> Está Aprovodo com 85 valores.
avaliacaoAluno(38);
// -> Está Aprovodo com 40 valores.
avaliacaoAluno(37);
// -> Está Reprovado com 37 valores.
