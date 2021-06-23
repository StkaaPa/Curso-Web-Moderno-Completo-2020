function medidas(altura1, taxa1, altura2, taxa2) {
  if (altura1 == altura2) {
    if (taxa1 > taxa2) {
      return "A criança 1 ultrapassa a criança 2 num ano!";
    } else if (taxa1 < taxa2) {
      return "A criança 2 ultrapassa a criança 1 num ano!";
    } else {
      return "As alturas são iguais!!";
    }
  } else {
    if (altura1 > altura2) {
      if (taxa1 >= taxa2) {
        return "A criança menor nunca ultrapassa a maior!";
      } else {
        return calcularAnos(altura2, taxa2, altura1, taxa1);
      }
    } else {
      if (taxa2 >= taxa1) {
        return "A criança menor nunca ultrapassa a maior!";
      } else {
        return calcularAnos(altura1, taxa1, altura2, taxa2);
      }
    }
  }
}

function calcularAnos(alturaMenor, taxaMenor, alturaMaior, taxaMaior) {
  //forma possível de se fazer
  /*let anos = 0;
  while (alturaMenor < alturaMaior) {
    alturaMenor += taxaMenor;
    alturaMaior += taxaMaior;
    anos++;
  }*/
  let anos = -(alturaMaior - alturaMenor) / (taxaMaior - taxaMenor);
  console.log(anos);
  return anos;
}

console.log(medidas(150, 2, 130, 4));
