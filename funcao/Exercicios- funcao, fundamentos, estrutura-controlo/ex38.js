function listAImpares(min = 0, max = 100) {
  if (min > max) {
    //se o minimo for 20 e o max 10
    //nesta primeira expressao o min = 30 ou seja 20 + 10
    min = min + max;
    //nesta expressao o valor de min = 30, logo o max vai ser 30 - 10 = 20
    // ou seja o valor que antes era min passou para max
    max = min - max;
    //por ultimo temos que trocar o valor que antes era max para agora ser o min
    //para isso dizemos que o min = 30 - 20 = 10
    //logo o min passa a ser 10 e os valores estão assim trocados e corretos, independetemente se o utilizador
    //coloca o min maior que o max
    min = min - max;
  }

  for (let i = min; i <= max; i++) {
    //este if é para verificar se o modulo de cada numero dentro do intervalo referido é diferente de 0
    // se assim for quer dizer que esse numero é impar e é imprimido na consola
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}

listAImpares(21, 10);
