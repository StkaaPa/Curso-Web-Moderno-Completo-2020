function despesasTotais(array) {
  const somaDespesas = (acumulador, valorAtual) => acumulador + valorAtual;
  return array.map((e) => e.preco).reduce(somaDespesas);
}

console.log(
  despesasTotais([
    { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 150 },
  ])
);
// -> 239.99