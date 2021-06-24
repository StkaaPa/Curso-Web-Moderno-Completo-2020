function notas(vetorNotas) {
  for (let i = 0; i < vetorNotas.length; i++) {
    if (vetorNotas[i] >= 0 && vetorNotas[i] <= 4.9) {
      console.log("O seu conceito é D");
    } else if (vetorNotas[i] <= 6.9) {
      console.log("O seu conceito é C");
    } else if (vetorNotas[i] <= 8.9) {
      console.log("O seu conceito é B");
    } else if (vetorNotas[i] <= 10.0) {
      console.log("O seu conceito é A");
    } else {
      console.log("Nota inválida!");
    }
  }
  return vetorNotas;
}
let vetorNotas = [13.0, 1.2, 5.5, 7.7, 9.8, 11.0];
notas(vetorNotas);
// Nota inválida! - 13.0
// O seu conceito é D - 1.2
// O seu conceito é C - 5.5
// O seu conceito é B - 7.7
// O seu conceito é A - 9.8
// Nota inválida! - 11.0
