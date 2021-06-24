let vetorPilha = [1, 2, 3, 4];
let vetorAdiciona = [5, 6, 7, 8];

function vetores(args) {
  let vetorFinal = [];
  for (let i = 0; i < arguments.length; i++) {
    vetorFinal = vetorFinal.concat(arguments[i]);
  }
  return vetorFinal;
}

console.log(vetores(vetorPilha, vetorAdiciona));


