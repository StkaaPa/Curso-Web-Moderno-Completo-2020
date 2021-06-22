function bhaskara(ax2, bx, c) {
  let resultados = [];
  let delta = bx ** 2 - 4 * ax2 * c;
  if (delta < 0) {
    console.log(`O delta é negativo: ${delta}.`);
  }

  let vet1 = ((-bx + Math.sqrt(delta)) / (2 * ax2)).toFixed(2);
  let vet2 = ((-bx - Math.sqrt(delta)) / (2 * ax2)).toFixed(2);

  resultados.push(vet1);
  resultados.push(vet2);

  return resultados;
}

console.log(bhaskara(3, -5, 12))
// -> Delta neagtivo: -119  [NaN, NaN]

console.log(bhaskara(1,2,1))
// -> [-1.00, -1.00]

console.log(bhaskara(4, -6, 2))
// -> [1.00, 0.5]

console.log(bhaskara(1, 2, -15))
// -> [3.00, -5.00]