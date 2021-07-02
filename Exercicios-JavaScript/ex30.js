const soma = (array) =>
  array.reduce((acumulador, atual) => (acumulador + atual, 0));
const media = (array) => soma(array) / array.length;

function melhorEstudante(estudantes) {
  const estudantesMedias = Object.entries(estudantes).map((estudante) => {
    const chave = 0,
      valor = 1;
    return { nome: estudante[chave], media: estudante[valor] };
  });

  const estudanteOrdenados = estudantesMedias.sort(
    (estundante1, estudante2) => estudante2.media - estundante1.media
  );
  const melhorNotaEstudante = estudanteOrdenados[0];
  return melhorNotaEstudante;
}

console.log(
  melhorEstudante({
    Joao: [9, 8, 7, 6],
    Ana: [8.7, 9.2, 7.6, 5.7],
  })
);
