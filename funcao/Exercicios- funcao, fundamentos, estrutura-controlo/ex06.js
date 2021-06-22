function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
  console.log(`Montante: ${capitalInicial * taxaJuros * tempoAplicacao}€`);
}

function jurosCompostos(capitalInicial, taxaJuros, tempoAplicacao) {
  console.log(
    `Montante: ${(capitalInicial * (1 + taxaJuros) ** tempoAplicacao).toFixed(
      2
    )}€`
  );
}

jurosSimples(1000, 0.2, 12);
jurosCompostos(1000, 0.2, 12);
