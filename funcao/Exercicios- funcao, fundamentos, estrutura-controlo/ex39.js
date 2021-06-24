let vet1 = [1, 2, 3];
let vet2 = [4, 5, 6];

function trocaDeElementos(vet1, vet2) {
  if (vet1.length == vet2.length) {
    for (let i = 0; i < vet1.length; i++) {
      vet1[i] = vet1[i] + vet2[i];
      vet2[i] = vet1[i] - vet2[i];
      vet1[i] = vet1[i] - vet2[i];
    }
  } else {
    return "Os vetores nao são iguais!!";
  }
  console.log("Novo vet1: " + vet1);
  console.log("Novo vet2: " + vet2);
}

trocaDeElementos(vet1, vet2);
