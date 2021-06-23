function contadorNotas(notas) {
  let contador100 = 0;
  let contador50 = 0;
  let contador10 = 0;
  let contador5 = 0;
  let contador1 = 0;
  let valorDaNota = calcularValorNota(notas);
  while (notas >= valorDaNota) {
    switch (valorDaNota) {
      case 100:
        notas -= 100;
        contador100++;
        break;
      case 50:
        notas -= 50;
        contador50++;
        break;
      case 10:
        notas -= 10;
        contador10++;
        break;
      case 1:
        notas -= 1;
        contador1++;
        break;
      default:
        console.log("Não introduza numeros negativos!!");
    }
    valorDaNota = calcularValorNota(notas);
  }
  return imprimirResultado(
    contador100,
    contador50,
    contador10,
    contador5,
    contador1
  );
}

function calcularValorNota(notas) {
  if (notas >= 100) {
    return 100;
  } else if (notas >= 50) {
    return 50;
  } else if (notas >= 10) {
    return 10;
  } else if (notas >= 1) {
    return 1;
  }
}

function imprimirResultado(
  contador100,
  contador50,
  contador10,
  contador5,
  contador1
) {
  let resultado = "";

  if (contador100 > 0) {
    resultado += `${contador100} nota(s) de 100R$.`;
  }
  if (contador50 > 0) {
    resultado += `${contador50} nota(s) de 50R$.`;
  }
  if (contador10 > 0) {
    resultado += `${contador10} nota(s) de 10R$.`;
  }
  if (contador5 > 0) {
    resultado += `${contador5} nota(s) de 5R$.`;
  }
  if (contador1 > 0) {
    resultado += `${contador1} nota(s) de 1R$.`;
  }
  return resultado;
}

console.log(contadorNotas(200));
console.log(contadorNotas(100));
console.log(contadorNotas(24));
