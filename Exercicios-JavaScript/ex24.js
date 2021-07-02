function contarCaractere(letra, frase) {
    //* como tem que se calcular o numero de caracteres, cria-se uma variavel chamada contador a iniciar no 0
  let contador = 0;
  //* depois percorre-se cada elemento da string
  for (let i = 0; i < frase.length; i++) {
      //* e depois cada elemento é comparado à letra escolhida
      //* se a letra escolhida estiver na palavra então o contador incrementa um valor
    if (frase.charAt(i) === letra) {
      contador++;
    }
  }
  //* aqui vai retornar o numero de vezes que a letra aparece na frase
  return contador
}

console.log(contarCaractere("a", "a a a dia"));
// -> 4 ---- a letra "a" aparece 4 vezes na frase
