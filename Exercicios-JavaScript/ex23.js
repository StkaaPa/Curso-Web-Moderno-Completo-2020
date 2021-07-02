function contarPalavras(frase) {
    //* dividir cada palavra da frase inserida
    //* a frase "Olá bom dia", ao ser dividida atraves do split vai ficar "Olá""bom""dia"
  const palavras = frase.split(" ");
  //* depois ao fazer palavras.length, como elas tão dividas, vao ser contadas uma a uma, e por isso o resultado é 3
  return `Existem ${palavras.length} palavras na frase inserida!`;
}

console.log(contarPalavras("Olá bom dia"))
// -> Existem 3 palavras na frase inserida!